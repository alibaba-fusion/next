const path = require('path');
const _ = require('lodash');
const getWebpackConfig = require('./webpack');
const { getComPathName } = require('../utils');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    const { runAll, a11y, v2 } = config;
    const componentName = config.component ? getComPathName(config.component) : config.component;
    const singleRun = runAll;
    // const componentArray = config.componentArray;
    // 'table' or 'table|tree|tree-select'
    // const componentList = componentArray ? componentArray.join('|') : componentName;

    let specPath;

    if (runAll && a11y) {
        specPath = resolveCwd('scripts/test/a11y-allinone.js');
    } else if (v2) {
        specPath = resolveCwd('scripts/test/v2-allinone.js');
    } else if (runAll) {
        specPath = resolveCwd('scripts/test/allinone.js');
    } else {
        specPath = resolveCwd('components', `@(${componentName})/**/*-spec.js`);
    }

    const options = {
        frameworks: ['mocha'],
        browsers: ['Chrome'],
        customLaunchers: {
            ChromeTravis: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox'],
            },
        },
        reporters: ['spec'],
        preprocessors: {
            [specPath]: ['webpack', 'sourcemap'],
        },
        files: [
            path.join(__dirname, 'animation-polyfill.js'),
            require.resolve('babel-polyfill/dist/polyfill.js'),
            require.resolve('console-polyfill/index.js'),
            require.resolve('es5-shim/es5-shim.js'),
            require.resolve('es5-shim/es5-sham.js'),
            require.resolve('html5shiv/dist/html5shiv.js'),
            specPath,
        ],
        client: {
            mocha: {
                timeout: 10000,
                reporter: 'html',
                ui: 'bdd',
            },
        },
        hostname: 'localhost',
        browserNoActivityTimeout: 100000,
        port: 9877,
        colors: true,
        autoWatch: !singleRun,
        singleRun: singleRun,
        concurrency: Infinity,
        webpack: getWebpackConfig(componentName, runAll),
        webpackMiddleware: {
            stats: 'errors-only',
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-webpack',
            'karma-spec-reporter',
            'karma-sourcemap-loader',
        ],
    };

    if (process.env.CI) {
        options.browsers = ['ChromeTravis'];
    }
    config.set(options);
};

function resolveCwd(...args) {
    args.unshift(process.cwd());
    return path.resolve(...args);
}
