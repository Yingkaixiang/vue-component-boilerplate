const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { getEntries } = require('./utils/entry');

const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  entry: getEntries(),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
    }),
  ],
});
