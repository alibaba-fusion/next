const co = require('co');

const buildSass = require('./build-sass');
// const checkSass = require('./check-sass');
const { logger } = require('../utils');

function* run() {
    logger.info('> build sass...');
    yield* buildSass();

    // logger.info('> check sass...');
    // yield* checkSass();

    logger.success('Run check successfully!');
}

co(run).catch(err => {
    logger.error(err);
});
