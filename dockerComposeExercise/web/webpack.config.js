const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'dist/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },

    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    port: 1025,
    compress: true,
    disableHostCheck: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        "target": 'http://127.0.0.1:8000/',
        "pathRewrite": { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      }
    }
  },
  devtool: 'source-map'
};