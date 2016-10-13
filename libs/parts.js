const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

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
            port: options.port || '3030'
        },
        plugins: [
            new NpmInstallPlugin(),
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };
};

exports.enableProdMode = function (isProduction) {
    return {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'WEBPACK_PRODUCTION': isProduction
                }
            })
        ]
    }
};

exports.setupCSS = function (include, isProduction) {
    var cssLoader = 'css-loader';

    if (isProduction) {
        cssLoader += '?minimize&safe'
    } else {
        cssLoader += '?sourcemap'
    }

    return {
        module: {
            loaders: [{
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style', cssLoader +'!postcss!sass')
            }]
        },
        plugins: [
            new ExtractTextPlugin("[name].css")
        ],
        sassLoader: {
            includePaths: [path.join(include, 'angular2-mdl/src/scss-mdl')]
        },
        postcss: [autoprefixer]
    };
};

exports.loadFonts = function () {
    return {
        module: {
            loaders: [{
                test: /(\.woff(2)?|\.eot|\.ttf|\.svg)$/,
                loader: 'url?limit=100000'
            }]
        }
    }
};

exports.loadJson = function () {
    return {
        module: {
            loaders: [{
                test: /\.json$/,
                loader: 'json-loader'
            }]
        }
    }
};

exports.loadTSX = function (include) {
    return {
        module: {
            loaders: [{
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader'],
                exclude: 'node_modules'
            }]
        }
    };
};

exports.lintTSX = function (include) {
    return {
        module: {
            preLoaders: [{
                test: /\.ts$/,
                loaders: [
                    'source-map',
                    'tslint'
                ],
                include: include
            }]
        }
    };
};

exports.uglifyJs = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    }
};

exports.loadHTML = function () {
    return {
        module: {
            loaders: [{
                test: /\.html$/,
                loader: 'html'
            }]
        }
    };
};

exports.npmInstallPlugin = function () {
    return {
        plugins: [
            new NpmInstallPlugin({
                dev: function (module, path) {
                    return [
                            "babel-preset-react-hmre",
                            "webpack-dev-middleware",
                            "webpack-hot-middleware",
                        ].indexOf(module) !== -1;
                },
                peerDependencies: true
            })
        ]
    };
};

exports.htmlWebpackPlugin = function (PATHS) {
    return {
        plugins: [
            new HtmlWebPackPlugin({
                title: 'Arkiver SPA',
                template: path.join(PATHS.app, 'index.html'),
                filename: 'index.html',
                inject: 'body'
            })
        ]
    };
};

exports.providePlugin = function () {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery"
            })
        ]
    }
};

exports.chunkPlugin = function (entry) {
    return {
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendors', 'polyfills']
            })
        ]
    }
};

exports.setupAliases = function () {
    return {
        resolve: {
            alias: {
                'underscore': 'lodash'
            }
        }
    }
};

exports.setupCommonFiles = function () {
    return {
        module: {
            loaders: [{
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }]
        }
    }
};