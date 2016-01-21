var path = require('path');
var webpack = require('webpack');
var url = require('url');
require('es6-promise').polyfill();

module.exports = {
    context: __dirname + "/js",
    entry: {
        js: "./main.js"
    },
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ]
            }
        ]
    }
};
