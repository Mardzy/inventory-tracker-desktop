const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: resolve(__dirname, "src", "index.tsx"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "build.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [resolve(__dirname, "src"), "node_modules"],
    alias: {
      Assets: resolve(__dirname, "src/assets"),
      Components: resolve(__dirname, "src/components"),
      Pages: resolve(__dirname, "src/pages"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            negate_iife: false,
          },
          output: {
            wrap_iife: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};
