const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]',
              publicPath: "/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    })
  ]
};
