const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Your webpack configuration options
  // ...

  resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    },
  },

  plugins: [
    new Dotenv()
  ]
};