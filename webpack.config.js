'use strict';
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'assets'),
    publicPath: 'assets/',
    filename: 'main.js',
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js'
  },
  recordsOutputPath: path.join(__dirname, 'records.json'),
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      { test: /\.jade$/, loader: "jade-loader?self"},
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  resolve: {
    fallback: path.join(__dirname, 'jam')
  },

  amd: {jQuery: true},
  fakeUpdateVersion: 0
};
