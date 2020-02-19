module.exports = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 1024,
      },
    },
  ],
};
