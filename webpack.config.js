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
    mode: argv.mode,
    entry: {
      app: './src',
      vendor: ['react', 'react-dom', 'redity', 'styled-components', '@aventura_tech/advance-erp-web-components']
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
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
        icons: [
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          },
          {
            src: path.resolve('src/Assets/img/logo.svg'),
            size: '1024x1024' // multiple sizes
          }
        ]
      }),
      // eslint-disable-next-line no-useless-escape
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en|es)$/)
    ]
  }, modeConfig(argv))
}
