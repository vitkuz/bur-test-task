const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false
  },
  mode: 'development',
  entry: './src/server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['ignore-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread','@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};
