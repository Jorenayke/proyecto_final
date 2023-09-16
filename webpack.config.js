const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src', 'index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          // 'style-loader',
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: [/node_modules/, /test/]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src', 'index.html')
    }),
    new MiniCSSExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public', to: ''}
      ]
    })
  ],
  target: 'web',
  devServer: {
    compress: true,
    port: 3000,
    // static: './public',
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  }
}