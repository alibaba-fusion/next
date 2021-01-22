// const fs = require('fs-extra');
const { join } = require('path');
const { Server } = require('karma');
const co = require('co');
const inquirer = require('inquirer');
const { logger } = require('../utils');

let server = null;

const config = {
    configFile: join(__dirname, 'karma.js'),
    component: 'all',
    runAll: true,
    a11y: true,
};

const runAllTestA11y = () => {
    config.runAll = true;
    config.a11y = true;
    server = new Server(config);
    server.start();
};

co(function*() {
    if (process.env.CI) {
        runAllTestA11y();
    } else {
        const allTest = yield inquirer.prompt([
            {
                name: 'runAllTest',
                type: 'list',
                choices: ['yes', 'no'],
                default: 1,
                message: logger.success('This will run ALL components test cases, are you sure to run all?'),
            },
        ]);

        if (allTest.runAllTest === 'no') {
            logger.success('quit');
            return;
        } else {
            runAllTestA11y();
        }
    }
});
