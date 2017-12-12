var path = require('path');

var DIST_DIR = path.resolve(__dirname,"dist"); // Distribution Directory; All transpiled and bundled files will be copied to this directory; These files will serve the app
var SRC_DIR = path.resolve(__dirname,"src"); // Untranspiled will be stored in this directory

var config = {
  entry: SRC_DIR + "/js/index.js",// The entry point
  output: {
    path: DIST_DIR + "/js",
    filename: "bundle.js",
    publicPath: "/js/"
  },
  module: {
    loaders: [
        {
          test: /\.js?/, // regular expression to include all js files for testing
          include: SRC_DIR,
          loader: "babel-loader",
          query: {
            presets: ["react","es2015","stage-2"]
            }
        }
      ]
    }
};

module.exports = config;
