const co = require('co');

const { logger } = require('../utils');
const checkSass = require('./check-sass');
const transform = require('../build/transform');
const generateScssEntry = require('../build/generate-scss-entry');

co(run).catch(err => {
    logger.error(err);
});

function* run() {
    logger.info('> transform es6 to es5...');
    transform();

    logger.info('> generate scss entry...');
    generateScssEntry();

    yield checkSass();
}
