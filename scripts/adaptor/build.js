const path = require('path');
const webpack = require('webpack');
const getWebpackConfig = require('../webpack/prod');
const { logger } = require('../utils');

const distPath = path.join(process.cwd(), 'dist');

const minimize = true;

const config = getWebpackConfig({ minimize });
config.entry = {
    adaptor: './docs/adaptor.js',
};
config.output = Object.assign({}, config.output, {
    path: distPath,
    publicPath: '/dist/',
    library: 'Adaptors',
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
    {
        '@alifd/next': {
            root: 'Next',
            commonjs2: '@alifd/next',
            commonjs: '@alifd/next',
            amd: '@alifd/next',
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
});
