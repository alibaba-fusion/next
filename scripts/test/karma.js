const path = require('path');
const _ = require('lodash');
const getWebpackConfig = require('./webpack');

module.exports = function(config) {

  const componentName = config.component ? _.kebabCase(config.component): config.component;
  const testDir = `test/${componentName}`;
  const runAll = config.runAll;
  const singleRun = runAll;
  const coveragePath = runAll ? resolveCwd('coverage') : resolveCwd(testDir, 'coverage') ;
  const specPath = runAll ? resolveCwd('test', '**/*-spec.js') : resolveCwd(testDir, '**/*-spec.js') ;

  const options = {
    frameworks: ['mocha'],
    browsers: ['Chrome'],
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
        { type: 'text-summary', subdir: '.', file: 'coverage.txt' }
      ]
    },
    client: {
      mocha: {
        timeout: 0,
        reporter: 'html',
        ui: 'bdd'
      }
    },
    hostname: 'localhost',
    browserNoActivityTimeout: 300000,
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: singleRun,
    concurrency: Infinity,
    webpack: getWebpackConfig(componentName, runAll),
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        modules: false,
        hash: false,
        timings: false,
        usedExports: false,
        version: false
      }
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-coverage'
    ]
  };

  config.set(options);
};

function resolveCwd(...args) {
  args.unshift(process.cwd());
  return path.resolve.apply(path, args);
}
