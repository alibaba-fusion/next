const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const getWebpackConfig = require('./webpack/prod');
const { logger } = require('./utils');

const distPath = path.join(process.cwd(), 'dist');

const args = process.argv.slice(2);
const minimize = args.indexOf('minimize') > -1;

const config = getWebpackConfig({ minimize });
config.entry = {
    next: ['./index.scss', './index.js'],
    'next-with-locales': './index-with-locales.js',
    'next-noreset': './index-noreset.scss',
    'next-noreset.var': './index-noreset.css',
    'next.var': './index.css',
};
config.output = Object.assign({}, config.output, {
    path: distPath,
    publicPath: '/dist/',
    library: 'Next',
    libraryTarget: 'umd',
});
config.externals = [
    {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
    {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    {
        moment: {
            root: 'moment',
            commonjs2: 'moment',
            commonjs: 'moment',
            amd: 'moment',
        },
    },
];
config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

// eslint-disable-next-line handle-callback-err
webpack(config, (err, stats) => {
    logger.info(
        stats.toString({
            colors: true,
            chunks: false,
            modules: false,
            hash: false,
            usedExports: false,
            version: false,
        })
    );

    try {
        if (minimize) {
            fs.unlinkSync(path.join(distPath, 'next-noreset.min.js'));
        } else {
            fs.unlinkSync(path.join(distPath, 'next-noreset.js'));
        }
    } catch (e) {
        logger.warn(
            'remove next-noreset.js or next-noreset.min.js failed: ',
            e
        );
    }
});
