const path = require('path');
const _ = require('lodash');
const { exec } = require('child_process');

exports.logger = require('./logger');
exports.marked = require('./marked');
exports.parseMD = require('./parse-md');
exports.ip = require('./ip');
exports.checkComponentName = require('./check-name');

exports.getComponentName = function(component) {
    const camelCaseName = _.camelCase(component);
    return camelCaseName[0].toUpperCase() + camelCaseName.slice(1);
};

exports.replaceExt = function(filePath, ext) {
    return path.join(
        path.dirname(filePath),
        `${path.basename(filePath, path.extname(filePath))}${ext}`
    );
};

/**
 * 运行命令
 *
 * @param {string} command 命令
 * @param {object} options 参数，默认值 { stdio: 'inherit' }
 */
exports.runCmd = function(command, options = { stdio: 'inherit' }) {
    return new Promise(function(resolve, reject) {
        exec(command, options, function(error, stdout, stderr) {
            if (error) {
                reject(error);
            }

            resolve(stdout || stderr);
        });
    });
};
