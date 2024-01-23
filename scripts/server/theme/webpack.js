const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const getConfig = require('../../webpack/dev');
const loaders = require('../../webpack/loaders');

const babelConfig = require('@alifd/babel-preset-next')({ runtime: true });

function findFile(filename, extnames = ['.tsx', '.ts', '.jsx', '.js', '.scss', '.sass', '.css']) {
    if (!path.isAbsolute(filename)) {
        throw new Error(`Could not find relative filename: ${filename}`);
    }
    if (fs.existsSync(filename)) {
        return filename;
    }
    const noExtName = filename.replace(/\.[^/]+$/, '');
    for (const ext of extnames) {
        const fullName = noExtName + ext;
        if (fs.existsSync(fullName)) {
            return fullName;
        }
    }
    return null;
}

babelConfig.babelrc = false;
const babelLoader = loaders.js(babelConfig);
const loadersPath = path.join(__dirname, '../loaders');

module.exports = function getWebpackConfig(options) {
    const config = getConfig();
    const { componentName, componentPath, disableAnimation, lang, dir, devA11y, mode } = options;

    const indexPath = path.join(
        componentPath,
        '__docs__',
        lang === 'zh' ? 'index.md' : 'index.en-us.md'
    );
    const themePaths = glob.sync(path.resolve(componentPath, '__docs__/theme/**/*.{jsx,tsx}'));
    const adaptorPaths = glob.sync(path.resolve(componentPath, '__docs__/adaptor/*.{jsx,tsx}'));
    const entry = getEntry([indexPath, ...themePaths, ...adaptorPaths], componentName, mode);
    config.entry = entry;

    config.output = {
        publicPath: '/',
        filename: '[name].js',
    };

    config.resolveLoader = {
        alias: {
            'index-loader': path.join(loadersPath, 'index/index.js'),
            'theme-loader': path.join(loadersPath, 'theme/index.js'),
            'adaptor-loader': path.join(loadersPath, 'adaptor/index.js'),
        },
    };

    const babelLoaderIndex = config.module.rules.findIndex(rule => {
        return rule.test.toString().indexOf('js') > -1;
    });
    config.module.rules[babelLoaderIndex] = babelLoader;

    let links = [
        {
            href: null,
            title: '主题配置',
            filename: 'Usage of theme',
        },
    ];

    if (themePaths.length) {
        const docsPath = path.join(componentPath, '__docs__');
        if (componentName === 'core') {
            themePaths.forEach(themePath => {
                links.push({
                    href: path.join(
                        componentName,
                        path.relative(docsPath, themePath).replace(/\.[jt]sx?$/, '.html')
                    ),
                    title: path.basename(themePath, '.jsx'),
                });
            });
        } else {
            links.push({
                href: path.join(componentName, 'theme/index.html'),
                title: 'Theme Demo',
            });
            links.push({
                href: path.join(componentName, 'theme/config.html'),
                title: 'Config Theme Demo',
            });
        }
    }

    if (adaptorPaths.length) {
        const docsPath = path.join(componentPath, '__docs__');
        links.push({
            href: path.relative(docsPath, adaptorPaths[0]).replace(/\.[jt]sx?$/, '.html'),
            title: 'Adaptor Demo',
        });
    }
    config.module.rules.push({
        test: /__docs__\/index\.(en-us\.)?md$/,
        use: [
            {
                loader: 'index-loader',
                options: {
                    links,
                    lang,
                    dir,
                    componentName,
                },
            },
        ],
    });
    config.module.rules.push({
        test: /theme\/.+\.[jt]sx?$/,
        use: [
            babelLoader,
            {
                loader: 'theme-loader',
                options: {
                    disableAnimation,
                    componentName,
                },
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: require.resolve('../../webpack/ts.json'),
                },
            },
        ],
    });
    config.module.rules.push({
        test: /adaptor\/.+\.[jt]sx?$/,
        use: [
            babelLoader,
            {
                loader: 'adaptor-loader',
                options: {
                    componentName,
                },
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: require.resolve('../../webpack/ts.json'),
                },
            },
        ],
    });

    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: Object.keys(entry),
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
        let cssArr = [];
        // 通过 mode 判断引入的样式文件
        if (mode === 'css') {
            cssArr = [
                path.join(process.cwd(), 'lib', componentName, 'variable.css'),
                path.join(process.cwd(), 'lib', componentName, 'style2.js'),
                path.join(process.cwd(), 'lib', 'core2', 'index.css'),
            ];
        } else if (componentName !== 'core') {
            cssArr = [findFile(path.join(process.cwd(), 'components', componentName, 'style'))];
        }
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
