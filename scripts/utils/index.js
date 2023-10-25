const path = require('path');
const _ = require('lodash');
const { exec, spawn } = require('child_process');

/**
 *
 * @param {String} component date-picker
 * @return {String} DatePicker
 */
exports.getComponentName = function(component) {
    const camelCaseName = _.camelCase(component);
    return camelCaseName[0].toUpperCase() + camelCaseName.slice(1);
};

exports.replaceExt = function(filePath, ext) {
    return path.join(path.dirname(filePath), `${path.basename(filePath, path.extname(filePath))}${ext}`);
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

/**
 * 运行命令with spawn
 *
 * @param {string} command 命令
 * @param {object} options 参数，默认值 { stdio: 'inherit' }
 */
exports.runCmdSpawn = function(command, options = { stdio: 'inherit' }) {
    const { stdio = 'inherit', ...rest } = options;
    return new Promise(function(resolve, reject) {
        const tokens = command.split(/\s+/);
        const cmd = tokens[0],
            args = tokens.slice(1);
        const child = spawn(cmd, args, {
            stdio,
            ...rest,
        });
        let errMsg = '';
        let output = '';
        child.on('exit', code => {
            if (code !== null) {
                if (code === 0) {
                    resolve(output);
                } else {
                    reject(errMsg);
                }
            }
        });
        child.stdout?.on('data', data => {
            output += String(data);
        });
        child.stderr?.on('data', data => {
            errMsg += String(data);
        });
    });
};

/**
 *
 * @param {String} component date-picker2
 * @return {String} date-picker2
 * 输入 date-picker2 输出 date-picker2
 * 输入 datePicker2 输出 date-picker2
 */
exports.getComPathName = function(component) {
    let babName = _.kebabCase(component);
    let componentName = babName;
    babName.replace(/(-*\d-*)/gi, s => {
        componentName = babName.replace(s, s.replace('-', ''));
    });
    return componentName;
};

exports.logger = require('./logger');
exports.marked = require('./marked');
exports.parseMD = require('./parse-md');
exports.ip = require('./ip');
exports.checkComponentName = require('./check-name');
