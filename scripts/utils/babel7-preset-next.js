'use strict';

module.exports = function(context, options) {
    options = options || {};

    const preset = {
        presets: [
            require('@babel/preset-react'),
            [require('@babel/preset-env'), { modules: options.modules, loose: true }],
        ],
        plugins: [
            require('@babel/plugin-syntax-class-properties'),
            require('@babel/plugin-proposal-class-properties'),
            require('@babel/plugin-transform-react-display-name'),
            [require('@babel/plugin-proposal-decorators'), { legacy: true }],
            ['@babel/plugin-proposal-private-methods', { loose: false }],
            require('@babel/plugin-transform-object-assign'),
            require('@babel/plugin-transform-proto-to-assign'),
        ],
    };
    if (options.runtime) {
        preset.plugins.unshift([
            require('@babel/plugin-transform-runtime'),
            {
                regenerator: false,
            },
        ]);
    }
    if (typeof options.modules === 'undefined' || options.modules) {
        preset.plugins.push(require('babel-plugin-add-module-exports'));
    }

    return preset;
};
