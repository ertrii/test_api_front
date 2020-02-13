const dotenv = require('dotenv')
const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env)

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = (env, argv) => {
  return webpackMerge({
    devtool: 'source-map',
    mode: argv.mode,
    entry: {
      app: './src',
      vendor: ['react', 'react-dom', 'redity', 'styled-components', '@aventura_tech/advance-erp-web-components']
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: '[name].js',
      // sourceMapFilename: '[name].js.map',
      chunkFilename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        'styled-components': require.resolve('styled-components'),
        redity: require.resolve('redity'),
        assets: path.resolve(__dirname, 'src/Assets'),
        components: path.resolve(__dirname, 'src/Components'),
        pages: path.resolve(__dirname, 'src/Pages')
      }
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(jpg|png|svg|ico|otf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 500,
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: './assets'
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new WebpackPwaManifest({
        name: 'React Template With Redity',
        short_name: 'RTWR',
        description: 'This is a React Template with Redity and ERP Web Components!',
        background_color: '#ffffff',
        crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
        theme_color: '#000',
        orientation: 'landscape',
        display: 'standalone',
        prefer_related_applications: true,
        start_url: '.',
        icons: [
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          },
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            size: '1024x1024' // multiple sizes
          },
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            sizes: [120, 152, 167, 180, 1024],
            destination: path.join('icons', 'ios'),
            ios: true
          },
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            size: 1024,
            destination: path.join('icons', 'ios'),
            ios: 'startup'
          },
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            sizes: [36, 48, 72, 96, 144, 192, 512],
            destination: path.join('icons', 'android')
          }
        ],
        ios: {
          'apple-mobile-web-app-title': 'React Template',
          'apple-mobile-web-app-status-bar-style': 'black'
        }
      }),
      // eslint-disable-next-line no-useless-escape
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en|es)$/)
    ]
  }, modeConfig(argv))
}
