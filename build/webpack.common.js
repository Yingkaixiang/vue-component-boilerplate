// 全量导出
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBaseConfig = require('./webpack.base');
const packageJSON = require('../package.json');

module.exports = merge(webpackBaseConfig, {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../cjs'),
    filename: `${packageJSON.name}.js`,
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${packageJSON.name}.css`,
    }),
  ],
});
