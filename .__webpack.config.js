const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/main.js',
  },
  output: {
    filename: './dist/build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['env', { modules: false }]],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourcemap: true,
    }),
  ],
};
