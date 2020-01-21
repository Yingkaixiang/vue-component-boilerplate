// 全量导出
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve } = require('./util');

const webpackBaseConfig = require('./webpack.base');
const packageJSON = require('../package.json');

module.exports = merge(webpackBaseConfig, {
  mode: 'none',
  entry: resolve('../src/index.js'),
  output: {
    path: resolve('../cjs'),
    filename: `${packageJSON.name}.js`,
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {
      '@': resolve('../components'),
    },
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
        include: resolve('../components')
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: `${packageJSON.name}.css`,
    }),
  ],
});
