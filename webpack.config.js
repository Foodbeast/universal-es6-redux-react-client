var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    bundle: "./client/bundle.js",
    vendor: "./client/vendor.js"
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel' ,
        exclude: /node_modules/,
        include: __dirname,
        query: {
         presets: ['react']
        }
      }
    ]
  }
}
