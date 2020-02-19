const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const vueLoader = require('./loaders/vue-loader');
const babelLoader = require('./loaders/babel-loader');
const tsLoader = require('./loaders/ts-loader');
const urlLoader = require('./loaders/url-loader');
const sassLoader = require('./loaders/sass-loader');

module.exports = {
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../components'),
    },
    // 不添加 .js 会导致 node_module 里的库无法被解析
    // babel 报错 can't resolve ... in src/ ....
    extensions: ['.vue', '.js', '.ts'],
    modules: ['node_modules'],
  },
  externals: ['vue', nodeExternals()],
  module: {
    rules: [vueLoader, babelLoader, tsLoader, urlLoader, sassLoader],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: false,
  },
};
