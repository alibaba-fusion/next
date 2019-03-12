const path = require('path');
const _ = require('lodash');
const getWebpackConfig = require('./webpack');

module.exports = function(config) {
    const { runAll } = config;
    const componentName = config.component
        ? _.kebabCase(config.component)
        : config.component;
    const singleRun = runAll;
    const coveragePath = resolveCwd('coverage');
    // const componentArray = config.componentArray;
    // 'table' or 'table|tree|tree-select'
    // const componentList = componentArray ? componentArray.join('|') : componentName;

    const specPath = runAll
        ? resolveCwd('scripts/test/allinone.js')
        : resolveCwd('test', `@(${componentName})/*-spec.js`);

    const options = {
        frameworks: ['mocha'],
        browsers: ['Chrome'],
        customLaunchers: {
            ChromeTravis: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox'],
            },
        },
        reporters: ['spec', 'coverage'],
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
        coverageReporter: {
            dir: coveragePath,
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'json', subdir: '.' },
                { type: 'text-summary', subdir: '.', file: 'coverage.txt' },
            ],
        },
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
            'karma-coverage',
        ],
    };

    if (process.env.TRAVIS) {
        options.browsers = ['ChromeTravis'];
    }
    config.set(options);
};

function resolveCwd(...args) {
    args.unshift(process.cwd());
    return path.resolve(...args);
}
