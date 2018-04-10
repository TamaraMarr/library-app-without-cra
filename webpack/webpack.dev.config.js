const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {
    mode: 'development',

    entry: {
        src: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '../src'),
        publicPath: '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;