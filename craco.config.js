const HttpsProxyAgent = require('https-proxy-agent');
const webpack = require('webpack');


const path = require('path');
module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  
  webpack: {


devServer: {
  historyApiFallback: true,
  hot: true,
  host: '0.0.0.0',
  port: 3000,
  proxy: {
    '/api': {
      agent: new HttpsProxyAgent('http://localhost:3000/'),
      target: 'https://localhost:5000/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
},
    configure:{

      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes('node_modules') &&
            warning.details &&
            warning.details.includes('source-map-loader')
          )
        },
      ],
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
