const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, './src/app.tsx'),
  mode:'development',
   // 启用 source-map
   devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' 作为可解析的扩展名
    extensions: ['.ts', '.tsx', '.js',]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader',exclude: /node_modules/, }
    ]
  },
}