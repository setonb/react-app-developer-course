module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname, // allows us to say current directory
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // available in node.js ( no funny business )
    alias: {  // Allows us to just reference the name instead of the directory
      OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
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
