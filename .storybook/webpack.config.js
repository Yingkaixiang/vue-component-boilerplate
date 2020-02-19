const tsLoader = require('../build/loaders/ts-loader');
const sassLoader = require('../build/loaders/sass-loader');

module.exports = {
  module: {
    rules: [tsLoader, sassLoader],
  },
};
