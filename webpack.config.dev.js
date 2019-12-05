const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const basePath = __dirname;
const distPath = 'dist';

const pathResolve = (pathComplete) => path.resolve(basePath, pathComplete);

const config = {
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: ['@babel/polyfill', pathResolve('./src/js/main.js')],
  },
  output: {
    path: pathResolve(distPath),
    publicPath: './',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: pathResolve('node_modules'),
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: pathResolve('node_modules'),
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  autoprefixer: { grid: true },
                }),
              ],
            },
          },
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
    contentBase: pathResolve(distPath),
    liveReload: true,
    inline: false,
    open: true,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: pathResolve('src/index.html'),
    }),
  ],
};

module.exports = config;
