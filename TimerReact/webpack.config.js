var webpack = require('webpack'); // in order to acces the utilities

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', // script! is needed before the files because they are not "modules" but regular scripts
    'script!foundation-sites/dist/js/foundation.min.js', // script! is needed before the files because they are not "modules" but regular scripts
    './app/app.jsx'
  ],
  externals: {
    // This allows "global variables" e.g. Foundation needs access to jQuery to run
    jquery: 'jQuery'
  },
  plugins: [
    // Scans js for variables ($, jQuery) and if not found, ports them to use the package jquery
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname, // allows us to say current directory
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // available in node.js ( no funny business )
    alias: {  // Allows us to just reference the name instead of the directory
      ApplicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
