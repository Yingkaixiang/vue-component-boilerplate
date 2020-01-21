const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
          },
          {
            loader: 'css-loader',
          },
          "postcss-loader",
          {
            loader: 'sass-loader',
            options: {
              prependData: `$color: green;`
            }
          }
        ]
      }
    ]
  },
}