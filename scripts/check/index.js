const co = require('co');

const buildSass = require('./build-sass');
const { logger } = require('../utils');

function* run() {
  logger.info('> build sass...');
  yield* buildSass();

  logger.success('Run check successfully!');
}

co(run).catch(err => {
  logger.error(err);
});
