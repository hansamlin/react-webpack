const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  mode: isDevMode ? 'development' : 'production',
  output: {
    filename: 'static/js/main.[fullhash].js',
    hashDigestLength: 7,
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devServer: {
    port: 8000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
              encoding: false,
              name: '[name].[hash:base64:7].[ext]',
              outputPath: 'static/media',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8096,
              name: '[name].[hash:base64:7].[ext]',
              outputPath: 'static/media',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ].concat(
    isDevMode
      ? []
      : [
          new MiniCssExtractPlugin({
            runtime: false,
            filename: 'static/css/main.[contenthash].css',
          }),
        ]
  ),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
