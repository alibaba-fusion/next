const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const loaders = require('../webpack/loaders');
const _ = require('lodash');

const babelConfig = getWebpackPreset({ runtime: true });

babelConfig.babelrc = false;
const babelLoader = loaders.js(babelConfig);
const loadersPath = path.join(__dirname, 'loader.js');
const cwd = process.cwd();

module.exports = function getWebpackConfig(options) {
    const config = {
        output: {
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    use: loaders.js(babelConfig),
                    exclude: /node_modules/,
                },
            ],
        },
        devtool: 'inline-source-map',
        plugins: [new webpack.ProgressPlugin(), new webpack.NamedModulesPlugin()],
    };
    const { componentName, componentPath, lang } = options;

    const indexPath = path.join(componentPath, lang === 'zh-cn' ? 'index.md' : 'index.en-us.md');
    const demoPaths = glob.sync(path.join(componentPath, 'demo', '*.md'));

    const entry = getEntry([indexPath], componentName);
    config.entry = entry;

    config.output = {
        publicPath: '/',
        filename: '[name].js',
    };

    config.resolveLoader = {
        alias: {
            'index-loader': loadersPath,
        },
    };

    const babelLoaderIndex = config.module.rules.findIndex(rule => {
        return rule.test.toString().indexOf('js') > -1;
    });
    config.module.rules[babelLoaderIndex] = babelLoader;

    config.module.rules.push({
        test: /docs\/[^/]+\/index\.(en-us\.)?md$/,
        use: [
            {
                loader: 'index-loader',
                options: {
                    demoPaths,
                    comp: { name: _.startCase(componentName) },
                    lang,
                },
            },
        ],
    });

    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: Object.keys(entry).filter(entryPath => !/docs\/[^/]+\/index\.((en-us)\.)?$/.test(entryPath)),
        })
    );

    return config;
};

function getEntry(entryPaths) {
    const entry = entryPaths.reduce((ret, entryPath) => {
        const name = path.basename(entryPath, path.extname(entryPath));
        const pathWithoutExt = path.join(path.dirname(entryPath), name);
        ret[pathWithoutExt] = ['react-dev-utils/webpackHotDevClient', entryPath];
        return ret;
    }, {});

    return entry;
}

function getWebpackPreset(context, options) {
    options = options || {};

    const preset = {
        presets: [
            require('babel-preset-react'),
            [require('babel-preset-env'), { modules: options.modules, loose: true }],
            require('babel-preset-stage-0'),
        ],
        plugins: [
            require('babel-plugin-transform-react-es6-displayname'),
            require('babel-plugin-transform-decorators-legacy').default,
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
        preset.plugins.push(require('babel-plugin-add-module-exports'));
    }

    return preset;
}
