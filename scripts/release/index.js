const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');
const co = require('co');
const Github = require('@octokit/rest')();
const inquirer = require('inquirer');
const { logger, runCmd } = require('../utils');
const { execSync } = require('child_process');

const cwd = process.cwd();
const packagePath = path.resolve('package.json');
const packageInfo = require(packagePath);

const masterTag = packageInfo.version;
const buildTag = `build/${packageInfo.version}`;

const runCommond = function(cmd) {
    return runCmd(cmd).then(msg => {
        logger.success(`[command] ${cmd}`, '\n');
        logger.info(msg);
    });
};

co(function* () {
    checkTags();

    yield pushMaster();
    yield pushPlatformDocsBranch();
    yield publishToNpm();
}).catch(err => {
    logger.error('Release failed', err.stack);
});

function checkTags() {
    const stdout = execSync('git tag').toString();
    let repeatTag = '';

    if (stdout.match(masterTag)) {
        repeatTag += `[${masterTag}]`;
    }
    if (stdout.match(`${buildTag}`)) {
        repeatTag += `  [${buildTag}]`;
    }

    if (repeatTag !== '') {
        logger.error(`You have duplicate tags: ${repeatTag}`);
        process.exit(0);
    } else {
        logger.success(`There is no [${masterTag}] or [${buildTag}] exits`, '\n');
    }
}

function* pushMaster() {
    yield runCommond('git checkout master');
    yield runCommond('git add .');
    yield runCommond(`git commit -m 'chore(*): Release-${masterTag}'`);
    yield runCommond('git pull');
    yield runCommond('git push origin master');

    logger.success('******** push to branch master success! ********\n');
}

function* pushPlatformDocsBranch() {
    const docs = path.join(cwd, 'platform-docs');

    try {
        yield fs.ensureDir(docs);

        yield runCommond('git worktree add platform-docs -B platform-docs');
        const currentDir = fs.readdirSync(cwd);

        currentDir.forEach(file => {
            if (['node_modules', '.git', 'platform-docs'].indexOf(file) > -1) {
                return false;
            }

            fs.copySync(path.join(cwd, file), path.join(docs, file));
        });

        const gitIgnore = path.join(docs, '.gitignore');
        const buildIgnore = path.join(__dirname, 'build.gitignore');
        const content = fs.readFileSync(buildIgnore, 'utf8');
        fs.writeFileSync(gitIgnore, content);

        yield runCommond('cd platform-docs;git add .');

        logger.success(`[command] cd platform-docs;git commit -m 'chore(*): Release-${buildTag}' || true`);
        cp.execSync(`cd platform-docs;git commit -m 'chore(*): Release-${buildTag}' || true`);

        yield runCommond('cd platform-docs;git push origin platform-docs -f');
        yield runCommond(`cd platform-docs;git tag ${buildTag}`);
        yield runCommond(`cd platform-docs;git push origin ${buildTag}`);

        logger.success('******** push to branch platform-docs success! ********\n');
    } finally {
        yield fs.remove(docs);
        yield runCommond('git worktree prune');
    }
}

function* publishToNpm() {
    yield runCommond('git checkout master');
    yield runCommond('git pull');
    yield runCommond(`git tag ${masterTag}`);
    yield runCommond(`git push origin ${masterTag}`);

    yield runCommond('npm publish');
    yield triggerRelease();
}

function* getGithubInfo() {
    return yield inquirer.prompt([{
        name: 'uname',
        type: 'input',
        message: '请输入github用户名:'
    }, {
        name: 'pwd',
        type: 'password',
        message: '请输入github密码:'
    }]);
}

function* triggerRelease() {
    logger.success(`正在准备发布Github release: ${buildTag}`);
    const hubInfo = yield getGithubInfo();

    const latestLog = fs.readFileSync(path.join(cwd, 'LATESTLOG.md'), 'utf8')
        .replace(/\n+/g, '\n')
        .split('\n').slice(1).join('\n');

    return new Promise(function(resolve, reject) {
        Github.hook.before('request', () => {
            Github.authenticate({
                type: 'basic',
                username: hubInfo.uname,
                password: hubInfo.pwd
            });
        });

        Github.repos.createRelease({
            owner: 'alibaba-fusion',
            repo: 'next',
            /* eslint-disable */
            tag_name: buildTag,
            target_commitish: 'platform-docs',
            /* eslint-enable */
            name: buildTag,
            body: latestLog,
            draft: false,
            prerelease: false,
        }).then(result => {
            logger.success('Create release success');
            resolve();
        }).catch(err => {
            logger.error(`Failed to release: ${err}`);
            reject();
        });
    });
}
