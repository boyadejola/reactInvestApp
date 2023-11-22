const webpack = require('webpack');


const path = require('path');
module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure:{

      resolve: {
        fallback: {
          'fs': false,
          'tls': false,
          'net': false,
          'https': false,
          // 'stream': false,
          // 'crypto': false,
          'http': require.resolve('stream-http'),
          'zlib': require.resolve('browserify-zlib') ,
          'path': require.resolve('path-browserify'),
          buffer : require.resolve('buffer/'),
          'util': require.resolve('util/'),
          stream : require.resolve('stream-browserify'),
          crypto : require.resolve('crypto-browserify'),
      } 
  },
    },
        
  
  
  },
  eslint: {
    enable: true
  },
    
};
