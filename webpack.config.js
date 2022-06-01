const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const PREFIX =
  NODE_ENV === 'production' ? '/spa-deploy--js-basic.12.2022' : '/';

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    publicPath: PREFIX,
  },
  mode: NODE_ENV,
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: '404.html'
    }),
    new webpack.DefinePlugin({
      DEPLOY_TO_GITHUB: NODE_ENV === 'production' ? true : false,
      GITHUB_PREFIX: JSON.stringify(PREFIX)
    })
  ],
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['public/index.html'],
    historyApiFallback: true,
  },
};
