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
const getVariables = require('../middlewares/get-variables');
const rebuildScss = require('../middlewares/rebuild-scss');
const changeLang = require('../middlewares/change-lang');
const changeDir = require('../middlewares/change-dir');
const event = require('../event');
const { logger } = require('../../utils');

const cwd = process.cwd();
const argv = parseArgs(process.argv.slice(2), {
    default: {
        host: '127.0.0.1',
        port: 3000,
        silent: false,
        'disable-animation': false,
        lang: 'zh',
        dir: 'ltr',
        mode: 'scss',
    },
});

const { host, silent, lang, dir, mode } = argv;
const port = parseInt(argv.port, 10);

const componentName = argv._[0];

const componentPath = path.join(process.cwd(), 'components', componentName);

const disableAnimation = argv['disable-animation'];
const devA11y = argv.a11y;

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
    logger.success('disableAnimation:', disableAnimation);
    logger.success('lang:', lang);
    logger.success('dir:', dir);
    logger.success('a11y:', devA11y);
    logger.success('mode:', mode);
    logger.success('/*****************************/');

    const config = getWebpackConfig({
        componentName,
        componentPath,
        disableAnimation,
        lang,
        dir,
        devA11y,
        mode,
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

    const url = `http://${host}:${port}/${componentName}/theme/config.html`;
    logger.warn(`Start server, listen to ${url}`);

    const server = new WebpackDevServer(compiler, {
        disableHostCheck: true,
        hot: true,
        quiet: true,
        publicPath: config.publicPath,
        before: app => {
            app.use(getVariables({ cwd }));
            app.use(rebuildScss({ cwd }));
            app.use(changeLang());
            app.use(changeDir());
        },
    });

    if (host === '127.0.0.1') {
        server.listen(port);
    } else {
        server.listen(port, host);
    }

    if (!silent) {
        setTimeout(() => {
            openBrowser(url);

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
