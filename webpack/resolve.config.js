const path = require('path');

const resolveConfig = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../'),
            'node_modules'
        ],
        alias: {
            App: path.resolve(__dirname, '../src/'),
            Components: path.resolve(__dirname, '../src/components/'),
            Config:  path.resolve(__dirname, '../src/config/'),
            Data:  path.resolve(__dirname, '../src/data/'),
            Pages: path.resolve(__dirname, '../src/pages/'),
            Models: path.resolve(__dirname, '../src/data/models/'),
            Reducers: path.resolve(__dirname, '../src/data/reducers/'),
            Routes: path.resolve(__dirname, '../src/routes/'),
            Services: path.resolve(__dirname, '../src/services/'),
            Wrappers: path.resolve(__dirname, '../src/wrappers/')
        }
    }
};

module.exports = resolveConfig;
