const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  //這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: {
    index: "./index.js",
  },
  mode: process.env.NODE_ENV || "development",
  output: {
    //這裡是打包後的檔案名稱
    filename: "static/main.[fullhash].js",
    //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
    path: path.resolve(__dirname, "build"),
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
      inject: "body",
      favicon: "./public/favicon.ico",
    }),
  ],
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
