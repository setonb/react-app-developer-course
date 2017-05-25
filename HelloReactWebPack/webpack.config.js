module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname, // allows us to say current directory
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // available in node.js ( no funny business )
    alias: {  // Allows us to just reference the name instead of the directory
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
