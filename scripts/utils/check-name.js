const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

module.exports = function (allowAll = false) {
  const argv = require('minimist')(process.argv.slice(2));

  let componentName = argv._[0];
  if (componentName) {
    // compatible with npm run dev -- Menu
    componentName = _.kebabCase(componentName);
    const componentPath = path.join(process.cwd(), 'docs', componentName);

    if (!fs.existsSync(componentPath)) {
      logger.error(`The input component name (${componentName}) is invalid, try again like: npm run [command] -- number-picker`);
      process.exit(0);
      return false;
    }
    return componentName;

  } else if (allowAll) {
    return 'all';
  } else {
    logger.error('Please input the component name, like: npm run [command] -- number-picker');
    process.exit(0);
    return false;
  }

};
