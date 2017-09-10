const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
  entry: {
    main: [
      './foo.ts'
    ],
    styles: [
      './foo.scss'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
    contentBase: '.',
    host: '0.0.0.0',
    hot: true,
    open: true,
    port: 9090
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ]
};
