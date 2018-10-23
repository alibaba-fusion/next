const co = require('co');
const initOptions = require('../init-options');
const transform = require('./transform');
const generateScssEntry = require('./generate-scss-entry');
const exportApiSchema = require('./export-api-schema');
const generateApi = require('./generate-api');

const { logger } = require('../utils');

function run() {
    const options = initOptions();

    logger.info('> transform es6 to es5...');
    transform();

    logger.info('> generate scss entry...');
    generateScssEntry();

    logger.info('> generate api...');
    generateApi();

    logger.info('> export-api-schema...');
    exportApiSchema(options);

    logger.success('Run build successfully!');
}

co(run).catch(err => {
    logger.error(err);
});
