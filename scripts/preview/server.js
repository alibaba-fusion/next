#! /usr/bin/env node

const path = require('path');
const parseArgs = require('minimist');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const choosePort = require('react-dev-utils/WebpackDevServerUtils').choosePort;
const chokidar = require('chokidar');
const getWebpackConfig = require('./webpack');
const event = require('./event');
const { logger } = require('../utils');

const cwd = process.cwd();

const argv = parseArgs(process.argv.slice(2), {
    default: {
        host: '127.0.0.1',
        port: 3001,
        silent: false,
        lang: 'zh-cn',
    },
});

const { host, silent, lang } = argv;
const port = parseInt(argv.port, 10);

const componentName = argv._[0];
const componentPath = path.join(process.cwd(), 'docs', componentName);

choosePort(host, port).then(tryToRun);

function tryToRun(port) {
    if (port) {
        try {
            run(port);
        } catch (e) {
            logger.error(`Start server failed: ${e.stack}`);
        }
    }
}

function run(port) {
    logger.success('/******************************/');
    logger.success('componentName:', componentName);
    logger.success('lang:', lang);
    logger.success('/*****************************/');

    const config = getWebpackConfig({
        componentName,
        componentPath,
        lang,
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

    const url = `http://${host}:${port}/${componentName}`;
    logger.warn(`Start server, listen to ${url}`);

    const server = new WebpackDevServer(compiler, {
        disableHostCheck: true,
        hot: true,
        quiet: true,
        publicPath: config.publicPath,
    });

    if (host === '127.0.0.1') {
        server.listen(port);
    } else {
        server.listen(port, host);
    }

    if (!silent) {
        setTimeout(() => {
            openBrowser(url);
            const watcher = chokidar.watch(
                [
                    path.join(cwd, 'docs', componentName, 'demo', '*.md'),
                    path.join(cwd, 'docs', componentName, 'index.md'),
                ],
                {
                    ignoreInitial: true,
                }
            );
            const handler = () => {
                logger.warn('Demo md added or removed, try to restart server');
                server.close();
                watcher.close();
                process.send('RESTART');
            };

            watcher.on('all', handler);

            event.on('CHANGE_LANG', lang => {
                logger.warn('Change language, try to restart server');
                process.send(`CHANGE_LANG=${lang}`);
            });

            event.on('CHANGE_DIR', dir => {
                logger.warn('Change direction, try to restart server');
                process.send(`CHANGE_DIR=${dir}`);
            });
        }, 1000);
    }
}
