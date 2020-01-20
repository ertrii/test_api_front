const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const path = require('path')

module.exports = () => ({
  performance: {
    hints: 'warning',
    maxEntrypointSize: 1512000,
    maxAssetSize: 512000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  },
  optimization: {
    splitChunks: {
      minSize: 50000,
      maxSize: 100000,
      name: 'vendor',
      minChunks: Infinity
    },
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      template: 'index.html',
      favicon: 'favicon.ico',
      meta: {
        description: 'This is a React Template with Redity and ERP Web Components',
        viewport: 'width=device-width, initial-scale=1',
        'background-color': '#fff',
        'theme-color': '#000'
      }
    }),
    new CopyPlugin([
      { from: './.htaccess', to: './' }
    ]),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js')
    })
  ]
})
