const path = require('path');
const fs = require('fs-extra');
const co = require('co');
const ejs = require('ejs');
const pify = require('pify');
const { logger } = require('../../../utils');

const renderFile = pify(ejs.renderFile);
const cofigTplPath = path.resolve(__dirname, '../../tpls/config.ejs');

module.exports = function(context, componentName) {
    co(function*() {
        const locals = {
            componentName,
        };

        try {
            Object.assign(
                locals,
                yield {
                    varEnums: getVariableEnums(),
                    trackerJS: getTrackerJS(),
                }
            );
            locals.error = false;
        } catch (e) {
            locals.error = e.stack;
        }

        const html = yield renderFile(cofigTplPath, locals);
        context.emitFile(
            path.join(componentName, 'theme', 'config.html'),
            html
        );
    }).catch(e => {
        logger.error(e.stack);
    });
};

function* getVariableEnums() {
    const content = yield fs.readFile(
        path.join(__dirname, 'var-enums.json'),
        'utf8'
    );
    return content.replace(/\n/g, '');
}

function* getTrackerJS() {
    const trackerJSPath = require.resolve('@alifd/sass-tracker');

    return yield fs.readFile(trackerJSPath, 'utf8');
}
