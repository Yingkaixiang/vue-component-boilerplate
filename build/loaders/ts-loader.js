module.exports = {
  test: /\.ts$/,
  loader: 'ts-loader',
  options: { appendTsSuffixTo: [/\.vue$/] },
};
