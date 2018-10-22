const co = require('co');
const initOptions = require('../init-options');

const generateDocs = require('./generate-docs');
const buildDemos = require('./build-demos');
const exportVariables = require('./export-variables');

const { logger } = require('../utils');

function* run() {
    const options = initOptions();

    logger.info('> generate docs...');
    yield* generateDocs();

    logger.info('> build theme demos...');
    yield* buildDemos(options);

    logger.info('> export variables...');
    yield* exportVariables(options);

    logger.success('Run docs successfully!');
}

co(run).catch(err => {
    logger.error(err);
});
