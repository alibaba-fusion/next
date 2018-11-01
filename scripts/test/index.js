const cp = require('child_process');
const { join } = require('path');
const { Server } = require('karma');
const { logger, checkComponentName } = require('../utils');

const componentName = checkComponentName(true);
let server = null;

const config = {
    configFile: join(__dirname, 'karma.js'),
    component: componentName,
    runAll: false
};

if(componentName === 'all') {
    logger.info('Now run all components tests. (You can test one compoent by: npm run test -- number-picker');
}

const coreTest = (cb) => {
    const worker = cp.spawn('mocha', [ join('test', 'core'), '--inline-diffs' ]);
    worker.stdout.on('data', data => {
        logger.info(data.toString());
    });

    worker.stderr.on('data', data => {
        logger.warn(data.toString());
    });

    worker.on('close', code => {
        typeof cb === 'function' && cb(code);
    });
};

switch (componentName) {
    case 'core':
        coreTest();
        break;
    case 'all':
        config.runAll = true;
        server = new Server(config);

        coreTest(() => {
            server.start();
        });

        break;
    default:
        server = new Server(config);
        server.start();
        break;
}

