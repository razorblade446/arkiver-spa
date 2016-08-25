const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const validate = require('webpack-validator');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    test: path.join(__dirname, 'test'),
    style: [
        path.join(__dirname, 'app', 'main.css')
    ]
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.jsx', '.tsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Arkiver SPA'
        })
    ]
};

const parts = require('./libs/parts');

var config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            common,
            parts.setupCSS(PATHS.app),
            parts.loadTSX(PATHS.app),
            parts.lintTSX(PATHS.app)
        );
        break;
    default:
        config = merge(
            common,
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            }),
            parts.setupCSS(PATHS.app)
        );
}

module.exports = validate(config);