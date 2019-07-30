const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { config } = require("dotenv");

const { parsed } = config();
const env = {
  "process.env": Object.keys(parsed).reduce((env, key) => {
    env[key] = JSON.stringify(parsed[key]);
    return env;
  }, {})
};

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new DefinePlugin(env)
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { rootMode: "upward" }
          },
          "ts-loader",
          "eslint-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};
