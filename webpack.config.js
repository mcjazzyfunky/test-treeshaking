const
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'production',

  output: {
    library: 'test',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.webpack.umd.js'
  },

  plugins: [new CompressionPlugin()],

  optimization: {
    minimize: true,
    
    minimizer: [
      new UglifyJsPlugin(),
   ]
  }
}
