/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-19 16:33:40
  description: 生成 changelog 信息
------------------------------------------------------------
*/
import path from 'path';
import fs from 'fs-extra';
import semver from 'semver';
import inquirer from 'inquirer';
import conventionalChangelog from 'conventional-changelog';
import createPreset from 'conventional-changelog-conventionalcommits';
import { CWD, log, querySync, warn, registryTask } from './utils';

const CHANGELOG_NAME = 'CHANGELOG.md';
const LATEST_LOG_NAME = 'LATESTLOG.md';
const changelogPath = path.resolve(CWD, CHANGELOG_NAME);
const latestedLogPath = path.resolve(CWD, LATEST_LOG_NAME);
const DEFAULT_COMMIT_TYPES = Object.freeze(
    [
        { type: 'feat', section: 'Features' },
        { type: 'feature', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'perf', section: 'Performance Improvements' },
        { type: 'revert', section: 'Reverts' },
        { type: 'docs', section: 'Documentation' },
        { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
        { type: 'style', section: 'Styles', hidden: true },
        { type: 'refactor', section: 'Code Refactoring' },
        { type: 'test', section: 'Tests', hidden: true },
        { type: 'build', section: 'Build System', hidden: true },
        { type: 'ci', section: 'Continuous Integration', hidden: true },
    ].map(Object.freeze)
);

function updateVersion(version: string, type = 'z', addend = 1) {
    if (!semver.valid(version)) {
        return version;
    }

    const versionArr: Array<string | number> = version.split('.');

    switch (type) {
        case 'x':
            versionArr[2] = 0;
            versionArr[1] = 0;
            versionArr[0] = parseInt(versionArr[0] as string) + 1;
            break;
        case 'y':
            versionArr[2] = 0;
            versionArr[1] = parseInt(versionArr[1] as string) + 1;
            break;
        default:
            versionArr[2] = parseInt(versionArr[2] as string) + addend;
    }

    return versionArr.join('.');
}
const rollbackFns = new Set<() => void>();
const rollback = () => {
    rollbackFns.forEach(f => f());
};

function updateVersionInCode(version: string) {
    const entryPath = path.join(CWD, 'index.js');
    const text = fs.readFileSync(entryPath, 'utf8');
    const newText = text.replace(/(next\.version = ')[^']+(';)/, (all, s1, s2) => {
        return `${s1}${version}${s2}`;
    });
    fs.writeFileSync(entryPath, newText);
    rollbackFns.add(() => {
        fs.writeFileSync(entryPath, text);
    });

    log(`Update version in [${entryPath}] success`);
}

async function changelog() {
    const packagePath = path.resolve(CWD, 'package.json');
    const pkgText = fs.readFileSync(packagePath, 'utf-8');
    const packageInfo = JSON.parse(pkgText);

    // const npmInfo = yield getRemotePkgInfo();

    const npmVersion = querySync('npm', ['show', packageInfo.name, 'version']);
    log(`[提示] [local:${packageInfo.version}] [npm:${npmVersion}] 请为本次提交指定新的版本号:`);

    const current = await inquirer.prompt([
        {
            name: 'version',
            type: 'input',
            default: updateVersion(packageInfo.version, 'z'),
            message: '请输入待发布的版本号：',
            validate: function (value) {
                if (!semver.valid(value) || semver.lte(value, npmVersion)) {
                    warn('请输入正确的版本号，并且大于基线版本号！');
                    return false;
                }
                return true;
            },
        },
    ]);

    packageInfo.version = current.version;

    rollbackFns.add(() => {
        fs.writeFileSync(packagePath, pkgText, 'utf-8');
    });
    await fs.writeJson(packagePath, packageInfo, { spaces: 2 });
    log(`[提示] 回写版本号 ${packageInfo.version} 到 package.json success`);

    log(`正在生成 ${CHANGELOG_NAME} 文件，请稍等几秒钟...`);

    const changelogText = fs.readFileSync(changelogPath, 'utf8');
    const latestLogText = fs.readFileSync(latestedLogPath, 'utf8');
    rollbackFns.add(() => {
        fs.writeFileSync(changelogPath, changelogText, 'utf-8');
        fs.writeFileSync(latestedLogPath, latestLogText, 'utf-8');
    });
    updateVersionInCode(current.version);

    return new Promise<void>((resolve, reject) => {
        const readable = conventionalChangelog({
            config: createPreset({ types: DEFAULT_COMMIT_TYPES }),
        });
        readable.on('error', reject);
        readable.on('end', () => {
            log(`成功将 ${CHANGELOG_NAME} 文件生成到 ${CWD} 目录下`);
            resolve();
        });
        readable.on('data', (chunk: Buffer) => {
            const log = chunk
                .toString()
                .replace(/(\n## [.\d\w]+ )\(([\d-]+)\)\n/g, (all, s1, s2) => {
                    return `${s1}/ ${s2}\n`;
                });

            let changelogContent = fs.readFileSync(changelogPath, 'utf8');
            changelogContent = changelogContent.split('\n').slice(1).join('\n');
            fs.writeFileSync(changelogPath, `# Change Log \n\n${log}${changelogContent}`);
            fs.writeFileSync(latestedLogPath, `# Latest Log \n\n${log}`);
        });
    });
}

export function registryChangelog(file = __filename) {
    return registryTask(file, 'generate changelog', changelog, rollback);
}

registryChangelog();
