const { Server } = require('karma');
const { join } = require('path');

const config = {
    configFile: join(__dirname, 'karma.js'),
    component: 'all',
    runAll: true,
    v2: true,
    a11y: false,
};

const server = new Server(config);
server.start();
