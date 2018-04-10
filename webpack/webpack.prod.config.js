const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {
    mode: 'production',

    entry: {
        src: [
            './index.js'
        ]
    },

    devtool: 'source-map'
});

module.exports = config;