const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    index: "./index.js",
  },
  mode: process.env.NODE_ENV || "development",
  output: {
    filename: "static/js/main.[fullhash].js",
    hashDigestLength: 7,
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /\.module\.(sc|sa|c)ss$/i,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "static/css",
                },
              },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/i,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "static/css",
                },
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: devMode
                  ? "[path][name]__[local]--[hash:base64:5]"
                  : "[name]__[local]--[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
              encoding: false,
              name: "[name].[hash:base64:7].[ext]",
              outputPath: "static/media",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8096,
              name: "[name].[hash:base64:7].[ext]",
              outputPath: "static/media",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ].concat(
    devMode
      ? []
      : [
          new MiniCssExtractPlugin({
            runtime: false,
            filename: "static/css/main.[contenthash].css",
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
  devServer: {
    port: 8000,
  },
};
