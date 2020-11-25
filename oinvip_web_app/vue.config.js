const prod = process.env.NODE_ENV === "production";
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    // publicPath: prod ? "/" : "./",
    // productionSourceMap: !prod,
    // outputDir: 'app/www',

    assetsDir: '',
    publicPath: '',
    // publicPath: './',
    outputDir: 'app/www',
    productionSourceMap: false,

    // configureWebpack:{
    //     performance: {
    //         hints: 'error',
    //         maxEntrypointSize: 500000,
    //         maxAssetSize: 300000
    //     }
    // }

    // devServer: {
    //     https: {
    //         key: fs.readFileSync('./certs/example.com+6-key.pem'),
    //         cert: fs.readFileSync('./certs/example.com+6.pem'),
    //     },
    //     public: 'https://192.168.50.37:8080/'
    // }

};

// module.exports = {
//     publicPath: './',
//     outputDir: 'app/www',
//     productionSourceMap: false,
// };
