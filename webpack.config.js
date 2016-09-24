const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const Joi = require('webpack-validator').Joi;

const schemaExtension = Joi.object({
    sassLoader: Joi.any(),
});

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist'),
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
        path: PATHS.dist,
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.json'],
        root: PATHS.nodeModules
    }
};

const parts = require('./libs/parts');

var config = merge(
    common,
    parts.setupAliases(),
    parts.htmlWebpackPlugin(PATHS),
    parts.loadFonts(),
    parts.loadJson(),
    parts.loadTSX(PATHS.app),
    parts.lintTSX(PATHS.app),
    parts.loadHTML(),
    parts.setupCommonFiles(),
    parts.chunkPlugin('vendors')
);

switch (process.env.npm_lifecycle_event) {
    case 'build':
    case 'prod':
        config = merge(
            config,
            parts.setupCSS(PATHS.nodeModules, true),
            parts.uglifyJs(),
            parts.enableProdMode(true)
        );
        break;
    case 'dev':
    default:
        config = merge(
            config,
            parts.setupCSS(PATHS.nodeModules, false),
            parts.enableProdMode(false),
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config, {schemaExtension: schemaExtension});