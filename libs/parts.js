const webpack = require('webpack');

exports.devServer = function (options) {
    return {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: options.host || 'localhost',
            port: options.port || '8080'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };
};

exports.setupCSS = function (paths) {
    return {
        module: {
            loaders: [{
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: paths
            }]
        }
    };
};

exports.loadTSX = function (include) {
    return {
        module: {
            loaders: [{
                test: '/\.tsx?$',
                loaders: ['awesome-typescript-loader'],
                include: include
            }]
        }
    };
};

exports.lintTSX = function (include) {
    return {
        module: {
            preloaders: [{
                test: /\.tsx?$/,
                loaders: ['tslint'],
                include: include
            }]
        }
    };
};