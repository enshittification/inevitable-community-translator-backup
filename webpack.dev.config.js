const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/index.js',
  output: {
	library: 'communityTranslator',
	libraryTarget: 'umd',
	path: path.resolve( __dirname ),
    filename: 'community-translator.js'
  },
};
