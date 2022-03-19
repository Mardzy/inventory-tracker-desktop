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
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@containers": resolve(__dirname, "./src/containers"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@router": resolve(__dirname, "./src/router"),
      "@services": resolve(__dirname, "./src/services"),
      "@slices": resolve(__dirname, "./src/slices"),
      "@store": resolve(__dirname, "./src/store"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@theme": resolve(__dirname, "./src/theme"),
      "@types": resolve(__dirname, "./src/types"),
    },
    modules: [resolve(__dirname, "src"), "node_modules"],
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
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
