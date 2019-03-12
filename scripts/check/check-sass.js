const sass = require('sass');
const path = require('path');
const fs = require('fs-extra');

const { logger, runCmd } = require('../utils');

const cwd = process.cwd();
const runCommond = cmd => {
    return runCmd(cmd).then(msg => {
        logger.success(`[command] ${cmd}`, '\n');
        logger.info(msg);
    });
};

module.exports = function*() {
    try {
        logger.warn(
            '> 使用 node-sass@4.6.0 进行检查: 请保证本地node-sass版本为4.6.0  npm install -g node-sass@4.6.0'
        );
        yield runCommond('node-sass --version');
        yield runCommond('node-sass index.scss > precss.css');

        logger.warn('> 使用 ruby-sass 进行检查:  sudo gem install sass');
        yield runCommond('sass index.scss > precss.css');

        logger.warn('> 使用 dartsass 进行检查: ');
        sass.renderSync({ file: path.join(cwd, 'index.scss') });
    } catch (error) {
        throw error;
    } finally {
        fs.removeSync(path.join(cwd, 'precss.css'));
    }
};
