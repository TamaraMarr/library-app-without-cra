const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var DashboardPlugin = require('webpack-dashboard/plugin');

const config = merge(baseConfig, {
    mode: 'development',

    entry: {
        src: [
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        hot: true,
        port: 3000,
        contentBase: path.resolve(__dirname, '../public'),
        publicPath: '/',
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin(),
        // new DashboardPlugin()
    ]
});

module.exports = config;
