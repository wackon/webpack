const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPluging = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    clean: true,
    filename: "main.[contenthash].js",
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
      {
        test: /\.png/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPluging()],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      title: "Mi webpack App",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
  ],
};
