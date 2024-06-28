const path = require('path');

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: build
  },
  devServer: {
    static: build,
  },
}