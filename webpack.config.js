const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: { sources: false },
      },
      {
        test: /\.css$/i,
        exclude: /main.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /main.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      title: "Mi webpack App",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
