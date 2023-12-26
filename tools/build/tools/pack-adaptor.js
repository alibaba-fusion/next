/* eslint-disable */
const webpack = require('webpack');
const getWebpackConfig = require('../webpack/prod');
const { logger, DIST_PATH, SRC_DIR_PATH } = require('../../utils');
const { resolve, relative } = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');

const ENTRY_NAME = 'adaptor-entry.js';
const entryPath = resolve(__dirname, ENTRY_NAME);

function generateEntry() {
    const adaptors = glob.sync('*/__docs__/adaptor', { cwd: SRC_DIR_PATH, absolute: true });
    const imports = adaptors.map(file => {
        const varName = _.camelCase(relative(SRC_DIR_PATH, file).split('/')[0]).replace(
            /^[a-z]/,
            str => str.toUpperCase()
        );
        return {
            varName,
            source: relative(__dirname, file),
        };
    });
    const importStr = imports
        .map(({ varName, source }) => {
            return `import ${varName} from '${source}';`;
        })
        .join('\n');
    const exportStr = `module.exports = {\n  ${imports.map(({ varName }) => varName).join(',\n  ')}\n}`;
    fs.outputFileSync(entryPath, `${importStr}\n\n${exportStr}`, 'utf-8');
}
function rollback() {
    fs.removeSync(entryPath);
}
module.exports = {
    run: function () {
        generateEntry();
        const config = getWebpackConfig({ minimize: true });
        config.entry = {
            adaptor: entryPath,
        };
        config.output = Object.assign({}, config.output, {
            path: DIST_PATH,
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

        return new Promise((resolve, reject) => {
            webpack(config, (err, stats) => {
                logger.log(
                    stats.toString({
                        colors: true,
                        chunks: false,
                        modules: false,
                        hash: false,
                        usedExports: false,
                        version: false,
                    })
                );
                rollback();
                stats.hasErrors() || err ? reject() : resolve();
            });
        });
    },
    rollback,
};
