'use strict';
const path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: 'https://horseplay.herokuapp.com',
  // },
};
