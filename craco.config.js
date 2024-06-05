const path = require('path-browserify');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "path": require.resolve('path-browserify'),
        "zlib": false,
        "querystring": false,
        "crypto": false,
        "stream": false,
        // "http": false,
        "fs": false,
        "net":false
      };
      return webpackConfig;
    }
  }
};
