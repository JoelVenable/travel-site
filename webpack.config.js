module.exports = {
  entry: __dirname + "/app/assets/scripts/app.js",
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "App.js"
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }

}