// 全量导出
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const { resolve } = require('./util');

const packageJSON = require('../package.json');

module.exports = {
  mode: 'none',
  entry: resolve('../packages/index.js'),
  output: {
    path: resolve('../cjs'),
    filename: `${packageJSON.name}.js`,
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    // 不添加 .js 会导致 node_module 里的库无法被解析
    // babel 报错 can't resolve ... in src/ ....
    extensions: ['.vue', '.js', '.ts'],
    modules: ['node_modules']
  },
  externals: ['vue', nodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
  ],
}