const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
      minChunks: Infinity
    }
  },
  devServer: {
    // host: '0.0.0.0',
    port: 8080,
    inline: true,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      meta: {
        description: 'This is a React Template with Redity and ERP Web Components',
        viewport: 'width=device-width, initial-scale=1',
        'background-color': '#fff',
        'theme-color': '#000'
      }
    })
  ]
})
