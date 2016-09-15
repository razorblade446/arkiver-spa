const path = require('path');
const merge = require('webpack-merge');

const validate = require('webpack-validator');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    test: path.join(__dirname, 'test'),
    style: [
        path.join(__dirname, 'app', 'main.css')
    ],
    nodeModules: path.join(__dirname, 'node_modules')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        polyfills: path.join(PATHS.app, 'polyfills.ts'),
        vendors: path.join(PATHS.app, 'vendors.ts'),
        app: path.join(PATHS.app, 'app.ts'),
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts'],
        root: PATHS.nodeModules
    }
};

const parts = require('./libs/parts');

var config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            common,
            parts.setupAliases(),
            parts.htmlWebpackPlugin(PATHS),
            parts.loadTSX(PATHS.app),
            parts.lintTSX(PATHS.app),
            parts.loadHTML(),
            parts.setupCSS(),
            parts.setupCommonFiles(),
            parts.chunkPlugin('vendors')
        );
        break;
    default:
        config = merge(
            common,
            parts.setupAliases(),
            parts.htmlWebpackPlugin(PATHS),
            parts.loadTSX(PATHS.app),
            parts.lintTSX(PATHS.app),
            parts.loadHTML(),
            parts.setupCSS(),
            parts.setupCommonFiles(),
            parts.chunkPlugin('vendors'),
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config);