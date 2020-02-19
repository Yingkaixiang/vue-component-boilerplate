const path = require('path');

module.exports = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: path.resolve(__dirname, '../components'),
};
