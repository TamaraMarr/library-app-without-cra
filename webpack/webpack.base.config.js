const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolveConfig = require('./resolve.config.js');
const ExtractTextPlugin =
    require("extract-text-webpack-plugin");

const baseConfig = merge(resolveConfig, {
    context: path.resolve(__dirname, '../src'),

    output: {
        path: path.resolve(__dirname, '../public'),
        filename: "bundle.js",
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            }]
    },

    plugins: [
        // new ExtractTextPlugin('styles.css')
    ]
});

module.exports = baseConfig;