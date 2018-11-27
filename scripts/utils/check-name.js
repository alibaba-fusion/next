const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

const cwd = process.cwd();

module.exports = function (runtest = false) {
    const argv = require('minimist')(process.argv.slice(2));

    let componentName = argv._[0];
    if (componentName) {
        // compatible with npm run dev -- Menu
        componentName = _.kebabCase(componentName);
        const file = runtest ? 'test' : 'docs';
        // const componentPath = path.join(cwd, file, componentName);
        const components = fs.readdirSync(path.join(cwd, file));
        let name = componentName;
        const valid = components.some((com) => {
            if (componentName.replace('-', '') === com.replace('-', '')) {
                name = com;
                return true;
            } else {
                return false;
            }
        });

        if (!valid) {
            logger.error(`The input component name (${componentName}) is invalid, try again like: npm run [command] number-picker`);
            process.exit(0);
            return false;
        }
        return name;

    } else if (runtest) {
        return 'all';
    } else {
        logger.error('Please input the component name, like: npm run [command] number-picker');
        process.exit(0);
        return false;
    }

};
