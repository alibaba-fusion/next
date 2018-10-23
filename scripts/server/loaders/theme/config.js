const path = require('path');
const cp = require('child_process');
const fs = require('fs-extra');
const co = require('co');
const ejs = require('ejs');
const pify = require('pify');
const { logger } = require('../../../utils');

const renderFile = pify(ejs.renderFile);
const cofigTplPath = path.resolve(__dirname, '../../tpls/config.ejs');

module.exports = function(context, componentName) {
    co(function* () {
        const locals = {
            componentName,
            hasRubySass: true
        };

        try {
            cp.execSync('sass -v');
        }
        catch(e) {
            locals.hasRubySass = false;
            locals.error = false;
            logger.warn('如果想调试配置平台Demo，请执行 `sudo gem install sass` 命令安装 ruby-sass.');
        }

        try {
            Object.assign(locals, yield {
                varEnums: getVariableEnums(),
                trackerJS: getTrackerJS()
            });
            locals.error = false;
        } catch (e) {
            locals.error = e.stack;
        }

        const html = yield renderFile(cofigTplPath, locals);
        context.emitFile(path.join(componentName, 'theme', 'config.html'), html);
    }).catch(e => {
        logger.error(e.stack);
    });
};

function* getVariableEnums() {
    const content = yield fs.readFile(path.join(__dirname, 'var-enums.json'), 'utf8');
    return content.replace(/\n/g, '');
}

function* getTrackerJS() {
    const trackerJSPath = require.resolve('@no-repeat/sass-tracker');

    return yield fs.readFile(trackerJSPath, 'utf8');
}
