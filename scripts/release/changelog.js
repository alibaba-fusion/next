const path = require('path');
const fs = require('fs-extra');
const semver = require('semver');
const request = require('request');
const inquirer = require('inquirer');
const conventionalChangelog = require('conventional-changelog');
const { logger } = require('../utils');

const changelogPath = 'CHANGELOG.md';
const latestedLogPath = 'LATESTLOG.md';
const cwd = process.cwd();

module.exports = function* changelog() {
    const packagePath = path.resolve('package.json');

    const packageInfo = require(packagePath);

    const npmInfo = yield getRemotePkgInfo();

    const npmVersion = npmInfo['dist-tags'].latest;

    logger.success(`[提示] [local:${packageInfo.version}] [npm:${npmVersion}] 请为本次提交指定新的版本号:`);

    const current = yield inquirer.prompt([{
        name: 'version',
        type: 'input',
        default: updateVersion(packageInfo.version, 'z'),
        message: '请输入待发布的版本号：',
        validate: function(value) {
            if (!semver.valid(value)) {
                return logger.warn('请输入正确的版本号，并且大于基线版本号！');
            }
            return true;
        }
    }]);

    packageInfo.version = current.version;

    yield fs.writeJson(packagePath, packageInfo, {spaces: 2});

    logger.success(`[提示] 回写版本号 ${packageInfo.version} 到 package.json success`);


    logger.info(`正在生成 ${changelogPath} 文件,请稍等几秒钟...`);

    conventionalChangelog({
        preset: 'angular'
    })
        .on('data', (chunk) => {
            const log = chunk.toString().replace(/(\n## [.\d\w]+ )\(([\d-]+)\)\n/g, (all, s1, s2) => {
                return `${s1}/ ${s2}\n`;
            });

            let changelogContent = fs.readFileSync(changelogPath, 'utf8');
            changelogContent = changelogContent.split('\n').slice(1).join('\n');
            fs.writeFileSync(changelogPath, `# Change Log \n\n${log}${changelogContent}`);

            const lines = log.split(/\n/g);
            let firstIndex = -1, secondIndex = -1;
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (/^##[^#]/.test(line)) {
                    if (firstIndex === -1) {
                        firstIndex = i;
                    } else if (secondIndex === -1) {
                        secondIndex = i;
                    } else {
                        break;
                    }
                }
            }

            if (firstIndex > -1) {
                secondIndex = secondIndex === -1 ? lines.length : secondIndex;
                const latestedLog = lines.slice(firstIndex, secondIndex - 1).join('\n');
                fs.writeFileSync(latestedLogPath, `# Latest Log \n\n${latestedLog}`);
            }
        });

    logger.success(`成功将 ${changelogPath} 文件生成到 ${cwd} 目录下`);
};


function getRemotePkgInfo() {
    return new Promise(function(resolve) {
        const requestUrl = 'https://registry.npmjs.org/@alifd/next';

        try {
            request({
                url: requestUrl,
                timeout: 5000,
                json: true
            }, function(error, response, body) {
                resolve(body);
            });
        } catch (err) {
            logger.error('Failed to reach: https://registry.npmjs.org/@alifd/next');
            resolve();
        }
    });
}

/**
 * 升级版本号，如果是非语义化版本号，则不做处理，直接返回原值
 *
 * @param {string} version 待升级的版本号
 * @param {string} type 升级类型，可选值：'x', 'y', 'z'，默认值 'z'
 * @param {string|number} addend z 位升级量，默认值 1
 */
function updateVersion(version, type = 'z', addend = 1) {
    if (!semver.valid(version)) {
        return version;
    }

    const versionArr = version.split('.');

    switch (type) {
        case 'x':
            versionArr[2] = 0;
            versionArr[1] = 0;
            versionArr[0] = parseInt(versionArr[0]) + 1;
            break;
        case 'y':
            versionArr[2] = 0;
            versionArr[1] = parseInt(versionArr[1]) + 1;
            break;
        default:
            versionArr[2] = parseInt(versionArr[2]) + addend;
    }

    return versionArr.join('.');
}
