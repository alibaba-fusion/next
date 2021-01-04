const chalk = require('chalk');

const level2Color = {
    info: false,
    debug: 'cyanBright',
    success: 'greenBright',
    warn: 'yellowBright',
    error: 'redBright',
};

module.exports = Object.keys(level2Color).reduce((ret, level) => {
    const color = level2Color[level];
    /* eslint-disable */
    ret[level] = color ? (...args) => console.log(args, '\n\n\n\n\n', chalk[color](...args)) : console.log;
    /* eslint-enable */
    return ret;
}, {});
