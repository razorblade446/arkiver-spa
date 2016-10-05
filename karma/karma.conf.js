'use strict';

module.exports = {
    webpack: require('../config/webpack-unit-tests'),
    webpackMiddleware: {
        stats: 'normal'
    },
    frameworks: ['jasmine']
};