// const path = require('path');
const HtmlWebpackPlugi = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src',
  // devServer:{
  //     hot: true,
  // },
  module: {

    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

    ],
  },
  plugins: [

    new HtmlWebpackPlugi({
      template: './src/index.html',
      title: 'HW_2',
    }),
    new MiniCssExtractPlugin(),

  ],

};
