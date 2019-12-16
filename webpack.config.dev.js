/* eslint-disable global-require */
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;
const distPath = 'docs';

const config = {
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: ['@babel/polyfill', path.resolve(basePath, 'src/js/main.js')],
  },
  output: {
    path: path.resolve(basePath, distPath),
    publicPath: './',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/svg',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(basePath, distPath),
    liveReload: true,
    inline: false,
    open: true,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(basePath, 'src/index.html'),
    }),
  ],
};

module.exports = config;
