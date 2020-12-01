// const fs = require('fs-extra');
const { join } = require('path');
const { Server } = require('karma');
const Mocha = require('mocha');
const co = require('co');
const inquirer = require('inquirer');
const { logger, checkComponentName } = require('../utils');

let server = null;
let failedNum = 0,
    successNum = 0;

const componentName = checkComponentName(true);
const config = {
    configFile: join(__dirname, 'karma.js'),
    component: componentName,
    runAll: false,
    // a11y: process.argv
};

const coreTest = cb => {
    const mocha = new Mocha();
    mocha.addFile(join('test', 'core'));

    mocha.run(failures => {
        failedNum += failures;
        typeof cb === 'function' && cb();
    });
};

const runRest = components => {
    if (components && components.length > 0) {
        const com = components.splice(0, 10);
        if (com === 'core') {
            coreTest(() => {
                runRest(components);
            });
            return;
        }
        config.componentArray = com;
        config.runAll = true;

        server = new Server(config, () => {
            server = null;
        });
        server.start();

        server.on('run_complete', (brower, result) => {
            const { error, failed, success, exitCode } = result;
            failedNum += failed;
            successNum += success;
            if (error) {
                process.exit(exitCode);
            } else {
                runRest(components);
            }
        });
    } else if (failedNum) {
        logger.error(`TOTAL: ${failedNum} FAILED, ${successNum} SUCCESS`);
        process.exit(1);
    } else {
        logger.success('Run all successfully!');
        process.exit(0);
    }
};

const runAllTest = (a11y = false) => {
    // const components = fs.readdirSync(join(process.cwd(), 'test'));
    // runRest(components);

    config.runAll = true;
    config.a11y = a11y;
    server = new Server(config);
    server.start();
};

switch (componentName) {
    case 'core':
        coreTest();
        break;
    case 'all':
        co(function*() {
            if (process.env.CI) {
                runAllTest();
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
                    runAllTest();
                }
            }
        });
        break;
    default:
        server = new Server(config);
        server.start();
        break;
}
