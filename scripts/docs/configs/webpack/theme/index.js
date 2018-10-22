const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const getConfig = require('../../../../webpack/prod');
const DemoPlugin = require('./demo-plugin');

module.exports = function(options) {
    options = options || {};

    const target = options.target;
    const entry = options.entry;
    const config = getConfig({
        minimize: true,
        extractTextName: '[name]/build/index.css'
    });

    config.entry = _.extend({
        commons: path.join(__dirname, 'next-commons.js')
    }, entry);
    config.output = {
        path: target,
        filename: '[name]/build/index.js'
    };

    config.externals = {
        react: 'var window.React',
        'react-dom': 'var window.ReactDOM',
        moment: 'var window.moment'
    };
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        chunks: Object.keys(entry)
    }));
    config.plugins.push(new DemoPlugin({
        commonName: 'commons',
        filename: '[name]/index.html',
        depsname: '[name]/deps.json',
        deps: options.deps,
        layout: require('./layout')
    }));

    return config;
};
