const path = require('path');

const resolveConfig = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../src/'),
            'node_modules'
        ],
        alias: {
            App: path.resolve(__dirname, '../src/app/'),
            Services: path.resolve(__dirname, '../src/services/'),
            Common: path.resolve(__dirname, '../src/app/common/'),
            Components: path.resolve(__dirname, '../src/app/components'),
            Shared: path.resolve(__dirname, '../src/shared/')
        }
    }
};

module.exports = resolveConfig;