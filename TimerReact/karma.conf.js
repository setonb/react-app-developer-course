// Need to require Webpack config in order to use webpack with karma
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'], // Array of browsers
    singleRun: true,
    frameworks: ['mocha'], // Array of frameworks used
    files: ['app/tests/**/*.test.jsx'], // where the files are located
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'], // visually what does it look like
    client: {
      mocha: {
        timeout: '5000' // in case things go awry
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true // needed since we're not using webpack server right now
    }
  });
}
