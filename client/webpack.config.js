const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          rootMode: "upward"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};
