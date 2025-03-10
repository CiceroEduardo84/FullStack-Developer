const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: "/node_modules",
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: "/node_modules",
        use:{
          loader:"babel-loader",
          options:{
            presets:[["@babel/preset-env",{targets:"defaults"}]]
          }
        }
      },
    ],
  },
};
