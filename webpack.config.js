const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');


const config = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
            },
          })
    ]
};

module.exports = config;


