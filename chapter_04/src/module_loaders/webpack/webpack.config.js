module.exports = {
  output : {
      filename: "bundle.js",
      // export itself to a global var
      libraryTarget: "var",
      // name of the global var: "Foo"
      library: "ndrscr"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
