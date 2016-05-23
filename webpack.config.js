var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./app/app.js"],
  output: {
    path: './build/',
    filename: "bundle.js"
  },
  devtool: "sourcemap",
  debug: true,
  plugins: [new HtmlWebpackPlugin({
    title: 'Space Ace',
    template: './app/static/index.html',
    hash: true
  })],

  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1"},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|mp3)$/, loader: 'url-loader?limit=100000' },
      {test: /\.svg/, loader: 'svg-url-loader?noquotes'}
    ]
  },

  resolve: {
    extensions:["",".js"]
  },
  devServer: {
    contentBase: './build',
    port: 9999
  }
}
