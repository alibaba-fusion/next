/* eslint-disable */
'use strict';

module.exports = function (context, options) {
    options = options || {};

    const preset = {
        presets: [
            require('babel-preset-react'),
            [require('babel-preset-env'), { modules: options.modules, loose: true, debug: true }],
            require('babel-preset-stage-0'),
        ],
        plugins: [
            require('babel-plugin-transform-react-es6-displayname'),
            require('babel-plugin-transform-decorators-legacy').default,
            require('babel-plugin-transform-object-assign'),
            require('babel-plugin-transform-proto-to-assign'),
        ],
    };
    if (options.runtime) {
        preset.plugins.unshift([
            require('babel-plugin-transform-runtime'),
            {
                polyfill: false,
                regenerator: false,
            },
        ]);
    }
    if (typeof options.modules === 'undefined' || options.modules) {
        preset.plugins.push([
            require('babel-plugin-add-module-exports'),
            { addDefaultProperty: true },
        ]);
    }

    return preset;
};
