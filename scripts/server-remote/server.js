#! /usr/bin/env node

const path = require('path');
const parseArgs = require('minimist');
const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const getWebpackConfig = require('./webpack');
const { logger } = require('../utils');

const argv = parseArgs(process.argv.slice(2), {
    default: {
        host: '127.0.0.1',
        port: 3000,
        silent: false,
        'disable-animation': false,
        lang: 'zh',
        dir: 'rtl'
    }
});

const { lang, dir, name } = argv;

const componentName = name;
const componentPath = path.join(process.cwd(), 'docs', componentName);
const disableAnimation = argv['disable-animation'];

run();
function run() {
    const config = getWebpackConfig({
        componentName,
        componentPath,
        disableAnimation,
        lang,
        dir
    });
    const compiler = webpack(config);

    compiler.plugin('done', stats => {
        const rawMessages = stats.toJson({}, true);
        const messages = formatWebpackMessages(rawMessages);
        if (!messages.errors.length && !messages.warnings.length) {
            logger.success('Compiled successfully!');
        }
        if (messages.errors.length) {
            logger.error('Failed to compile.');
            messages.errors.forEach(e => logger.error(e));
            return;
        }
        if (messages.warnings.length) {
            logger.warn('Compiled with warnings.');
            messages.warnings.forEach(w => logger.warn(w));
        }
    });

    compiler.run(() => {});
}
