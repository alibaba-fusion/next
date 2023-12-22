const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const getConfig = require('../webpack/dev');
const loaders = require('../webpack/loaders');
const { parseMD } = require('../utils');
const _ = require('lodash');

const babelConfig = getWebpackPreset({ runtime: true });

babelConfig.babelrc = false;
const babelLoader = loaders.js(babelConfig);
const loadersPath = path.join(__dirname, 'loaders');
const cwd = process.cwd();

module.exports = function getWebpackConfig(options) {
    const config = getConfig();
    const { componentName, componentPath, disableAnimation, lang, dir, devA11y, mode } = options;

    const indexPath = path.join(componentPath, lang === 'zh' ? 'index.md' : 'index.en-us.md');
    const demoPaths = glob.sync(path.join(componentPath, 'demo', '*.md'));

    const entry = getEntry([indexPath], componentName, mode);
    config.entry = entry;

    config.output = {
        publicPath: '/',
        filename: '[name].js',
    };

    config.resolveLoader = {
        alias: {
            'index-loader': path.join(loadersPath, 'index/index.js'),
        },
    };

    const babelLoaderIndex = config.module.rules.findIndex(rule => {
        return rule.test.toString().indexOf('js') > -1;
    });
    config.module.rules[babelLoaderIndex] = babelLoader;

    let links = getLinks(demoPaths);
    links = [
        {
            href: componentName,
            title: '首页',
            filename: 'index',
        },
    ].concat(links);

    config.module.rules.push({
        test: /docs\/[^/]+\/index\.(en-us\.)?md$/,
        use: [
            {
                loader: 'index-loader',
                options: {
                    demoPaths,
                    comp: { name: _.startCase(componentName) },
                    links,
                    lang,
                    dir,
                },
            },
        ],
    });

    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: Object.keys(entry).filter(
                entryPath => !/docs\/[^/]+\/index\.((en-us)\.)?$/.test(entryPath)
            ),
        })
    );

    config.externals = {
        react: 'var window.React',
        'react-dom': 'var window.ReactDOM',
        moment: 'var window.moment',
    };

    return config;
};

function getEntry(entryPaths, componentName, mode) {
    const entry = entryPaths.reduce((ret, entryPath) => {
        const name = path.basename(entryPath, path.extname(entryPath));
        const pathWithoutExt = path.join(path.dirname(entryPath), name);
        const cssArr = [];
        // preview 不需要next样式默认值
        // 通过 mode 判断引入的样式文件
        // if (mode === 'css') {
        //     cssArr = [
        //         path.join(process.cwd(), 'lib', componentName, 'variable.css'),
        //         path.join(process.cwd(), 'lib', componentName, 'style2.js'),
        //         path.join(process.cwd(), 'lib', 'core2', 'index.css'),
        //     ];
        // } else cssArr = [path.join(process.cwd(), 'src', componentName, 'style.js')];
        ret[pathWithoutExt] = [
            'react-dev-utils/webpackHotDevClient',
            // css var should only be included once.
            // import it from 'src/core/index-noreset.scss'
            // will produce many duplicates,
            // making dev app slow
            // path.join(process.cwd(), 'src', 'core', 'css-var-def.scss'),
            ...cssArr,
            entryPath,
        ];
        return ret;
    }, {});

    return entry;
}

function getLinks(demoPaths) {
    const demoMetas = demoPaths.reduce((ret, demoPath) => {
        const content = fs.readFileSync(demoPath, 'utf8');
        const result = parseMD(content, demoPath);
        ret[demoPath] = result.meta;
        return ret;
    }, {});
    const demoOrders = demoPaths.reduce((ret, demoPath) => {
        const meta = demoMetas[demoPath];
        let order = 9999;
        if (meta) {
            const number = parseInt(meta.order, 10);
            if (!isNaN(number)) {
                order = number;
            }
        }
        ret[demoPath] = order;
        return ret;
    }, {});
    const orderedDemoPaths = demoPaths.sort((prev, next) => demoOrders[prev] - demoOrders[next]);
    return orderedDemoPaths.map(demoPath => {
        // TODO change to anchor
        const href = path.relative(path.join(cwd, 'docs'), demoPath).replace(/\.md$/, '.html');
        let title = (demoMetas[demoPath] || {}).title;
        if (!title) {
            title = path.basename(demoPath, '.md');
        }

        return { href, title, filename: path.basename(demoPath, '.md') };
    });
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
        preset.plugins.push([
            require('babel-plugin-add-module-exports'),
            { addDefaultProperty: true },
        ]);
    }

    return preset;
}
