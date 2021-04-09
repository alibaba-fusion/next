const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const { logger, getComPathName } = require('./index');

const cwd = process.cwd();

module.exports = function(runtest = false, withOtherArgs = false) {
    const argv = minimist(process.argv.slice(2));
    const arr = argv._;
    const comIndex = arr.findIndex(a => a.indexOf('=') === -1);

    let componentName = arr[comIndex];

    if (componentName) {
        // compatible with npm run dev -- Menu
        componentName = getComPathName(componentName);
        const file = runtest ? 'test' : 'docs';
        const components = fs.readdirSync(path.join(cwd, file));
        let name = componentName;
        const valid = components.some(com => {
            if (componentName.replace('-', '') === com.replace('-', '')) {
                name = com;
                return true;
            } else {
                return false;
            }
        });

        if (!valid) {
            logger.error(
                `The input component name (${componentName}) is invalid, try again like: npm run [command] number-picker`
            );
            process.exit(0);
            return false;
        }

        if (withOtherArgs) {
            const newArgs = argv._;
            newArgs.splice(comIndex, 1);
            newArgs.unshift(componentName);
            return newArgs;
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
