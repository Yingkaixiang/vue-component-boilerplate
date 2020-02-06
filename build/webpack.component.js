const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve, getEntries } = require('./util');

const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  entry: getEntries(),
  output: {
    path: resolve('../lib'),
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
