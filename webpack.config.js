const path = require('path');

module.exports = {
  context: __dirname,
  entry: './game.js',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      }
    ]
  },
  devtool: 'source-map'
};
