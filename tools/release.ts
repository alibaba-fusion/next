/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-19 17:13:32
  description: 发布组件库
------------------------------------------------------------
*/
import path = require('path');
import fs = require('fs-extra');
import * as inquirer from 'inquirer';
import { Octokit } from '@octokit/rest';
import urllib = require('urllib');
import { CWD, querySync, registryTask, logger, ARGV, execSync } from './utils';
import { registryCheck } from './checkers';
import { registryChangelog } from './changelog';
import { registryBuild } from './build';

const cwd = CWD;
const PKG_PATH = path.resolve(cwd, 'package.json');
const NEXT_DOCS_PATH = path.resolve(cwd, 'next-docs');
const NEXT_DOCS_NAME = '@alifd/next-docs';
const REMOTE_NAME = (ARGV.remote as string) || 'origin';
const PLATFORM_DOCS_BRANCH = 'platform-docs';
const PLATFORM_DOCS_PATH = path.join(cwd, 'platform-docs');
if (!process.env.GITHUB_RELEASE_TOKEN) {
    throw new Error(`Not found GITHUB_RELEASE_TOKEN, check "echo $GITHUB_RELEASE_TOKEN"`);
}
const octokit = new Octokit({
    auth: process.env.GITHUB_RELEASE_TOKEN,
});

function getVersion() {
    const version = fs.readJSONSync(PKG_PATH).version as string;
    return {
        version,
        masterTag: version,
        buildTag: `build/${version}`,
    };
}

function checkTags() {
    let repeatTag = '';
    const { masterTag, buildTag } = getVersion();
    repeatTag += querySync('git', ['tag', '-l', masterTag]);
    repeatTag += ` ${querySync('git', ['tag', '-l', buildTag])}`;

    if (repeatTag.trim() !== '') {
        throw new Error(`You have duplicate tags: \n ${repeatTag}`);
    }
}

function checkFiles() {
    const paths = [
        'dist/adaptor.min.js',
        'dist/next.min.js',
        'dist/next.min.css',
        'dist/next.js',
        'dist/next.css',
        'dist/next-noreset.css',
        'dist/next-noreset.min.css',
        'dist/next.min-1.css',
        'dist/next.min-2.css',
        'dist/next.var.css',
        'dist/next.var.min.css',
        'dist/next-with-locales.js',
        'dist/next-with-locales.min.js',
        'es/index.js',
        'lib/index.d.ts',
        'lib/index.js',
        'lib/core2/',
        'es/core2/',
        'types/index.d.ts',
        'index-noreset.scss',
        'index-with-locales.js',
        'index.js',
        'index.scss',
        'reset.scss',
        'components.scss',
        'variables.scss',
        '.fusion',
    ];
    paths.forEach(p => {
        if (!fs.existsSync(p)) {
            throw new Error(`Missing: ${p}`);
        }
    });
    const libPath = path.join(cwd, 'lib');
    const srcPath = path.join(cwd, 'src');
    const esPath = path.join(cwd, 'es');
    const typesPath = path.join(cwd, 'types');

    const libLen = fs.readdirSync(libPath).length;
    const srcLen = fs.readdirSync(srcPath).length;
    const esLen = fs.readdirSync(esPath).length;
    const typesLen = fs.readdirSync(typesPath).length;

    if (!(typesLen === srcLen - 7 && typesLen === libLen - 6 && typesLen === esLen - 4)) {
        // src : demo-helper / core / mixin-ui-state / validate / .editorconfig / .eslintrc / .stylelintrc
        // lib : core / core2/  mixin-ui-state / validate / _components / index.d.ts
        // es : core / core2/ mixin-ui-state / validate
        // types: util.d.ts
        throw new Error(
            `srcLen, libLen, esLen, typesLen: ${srcLen} ${libLen} ${esLen} ${typesLen}`
        );
    }
}

function pushOrigin() {
    const { masterTag } = getVersion();
    execSync('git', ['push']);
    execSync('git', ['push', REMOTE_NAME, masterTag]);
}

function pushPlatformDocs() {
    const { buildTag } = getVersion();
    const docs = PLATFORM_DOCS_PATH;
    try {
        fs.ensureDirSync(docs);

        execSync('git', ['worktree', 'add', PLATFORM_DOCS_BRANCH, '-B', PLATFORM_DOCS_BRANCH]);
        const currentDir = fs.readdirSync(cwd);

        currentDir.forEach(file => {
            if (['node_modules', '.git', PLATFORM_DOCS_BRANCH].indexOf(file) > -1) {
                return false;
            }

            fs.copySync(path.join(cwd, file), path.join(docs, file));
        });

        const gitIgnore = path.join(docs, '.gitignore');
        const buildIgnore = path.resolve(cwd, './tools/docs/configs/build.gitignore');
        const content = fs.readFileSync(buildIgnore, 'utf8');
        fs.writeFileSync(gitIgnore, content);

        execSync('git', ['add', '.'], { cwd: docs });
        execSync('git', ['commit', '-m', `'chore(*): Release-${buildTag}'`], { cwd: docs });

        execSync('git', ['push', REMOTE_NAME, PLATFORM_DOCS_BRANCH, '-f'], { cwd: docs });
        execSync('git', ['tag', buildTag], { cwd: docs });
        execSync('git', ['push', REMOTE_NAME, buildTag], { cwd: docs });

        logger.log(`******** add commit message Release-${buildTag} success! ********\n`);
    } finally {
        fs.removeSync(docs);
        execSync('git', ['worktree', 'prune']);
    }
}

async function publishNpm() {
    const { version } = getVersion();
    const versionTag = version.match(/[a-z]+/)?.[0];
    const distTag: string =
        ARGV.tag ||
        versionTag ||
        (
            await inquirer.prompt({
                name: 'tag',
                type: 'list',
                choices: ['latest', 'next', 'beta'],
                default: 0,
                message: 'publish dist-tags:',
            })
        ).tag;
    execSync('npm', ['publish', '--tag', distTag]);
    execSync('tnpm', ['sync', '@alifd/next']);
}

async function githubRelease() {
    const { buildTag, version } = getVersion();
    const isPrerelease = !/\d+\.\d+\.\d+/.test(version);
    const latestLog = fs
        .readFileSync(path.join(cwd, 'LATESTLOG.md'), 'utf8')
        .replace(/\n+/g, '\n')
        .split('\n')
        .slice(1)
        .join('\n');

    return octokit.repos
        .createRelease({
            owner: 'alibaba-fusion',
            repo: 'next',
            /* eslint-disable */
            tag_name: buildTag,
            target_commitish: 'platform-docs',
            /* eslint-enable */
            name: buildTag,
            body: latestLog,
            draft: false,
            prerelease: isPrerelease,
        })
        .then(() => {});
}

async function publishNpmForDocs() {
    const { version } = getVersion();
    const docs = NEXT_DOCS_PATH;

    const pkgPath = path.join(NEXT_DOCS_PATH, 'package.json');
    await fs.ensureDir(docs);
    const currentDir = fs.readdirSync(cwd);
    const pkgContent = `{
"name": "${NEXT_DOCS_NAME}",
"version": "${version}",
"description": "fusion next doc pages for material center and setting platform",
"originNpm": "@alifd/next",
"repository": "https://github.com/alibaba-fusion/next.git",
"publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
}
}`;
    currentDir.forEach(file => {
        if (['compiled_docs', '.fusion', 'demos', 'dist', 'lib'].indexOf(file) > -1) {
            fs.copySync(path.join(cwd, file), path.join(docs, file));
        }
    });
    fs.writeFileSync(pkgPath, pkgContent);
    logger.log('Generate @alifd/next-docs successfully!');
    execSync('npm', ['publish'], { cwd: docs });
    execSync('tnpm', ['sync', NEXT_DOCS_NAME], { cwd: docs });
}

async function* sendDingMessage() {
    const group = process.env.FUSION_SERVICE_DINGTALK_GROUPS;
    const { masterTag } = getVersion();
    const dingtalks = (group && group.split(', ')) || [];
    if (!dingtalks.length) {
        return;
    }
    const shouldDing =
        ARGV.ding ||
        (
            await inquirer.prompt({
                name: 'sync',
                type: 'confirm',
                default: true,
                message: '是否同步发布信息到钉钉群',
            })
        ).sync;
    if (!shouldDing) {
        return;
    }

    const username = querySync('git', ['config', '--get', 'user.name']);
    const latestLog = fs
        .readFileSync(path.join(cwd, 'LATESTLOG.md'), 'utf8')
        .replace(/# Latest Log/g, '')
        .replace(/\n+/g, '\n')
        .replace(/\(\[[\d\w]+\]\(https:\/\/[^)]+\)\)/g, '');
    const dingContent = `> [公告] @alifd/next@${masterTag} 版本发布！by: ${username}
${latestLog}
> 历史发布记录请查看 [CHANGELOG](https://github.com/alibaba-fusion/next/blob/master/CHANGELOG.md);`;

    for (let i = 0; i < dingtalks.length; i++) {
        const url = dingtalks[i];
        yield urllib.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            content: JSON.stringify({
                msgtype: 'markdown',
                markdown: {
                    title: 'Fusion Next 组件发布',
                    text: dingContent,
                },
            }),
        });
    }
}

registryTask(__filename, 'release', async () => {
    await registryCheck(__filename);

    await registryChangelog(__filename);
    const { masterTag } = getVersion();

    await registryBuild(__filename);

    await registryTask(__filename, 'release check', async () => {
        await registryTask(__filename, 'check git tag', checkTags);
        await registryTask(__filename, 'check build outputs', checkFiles);
    });

    await registryTask(__filename, 'publish next to npm', publishNpm);
    await registryTask(__filename, 'publish next-docs to npm', publishNpmForDocs, () => {
        fs.removeSync(NEXT_DOCS_PATH);
    });

    await registryTask(
        __filename,
        'commit & tag',
        async () => {
            execSync('git', ['add', '.']);
            execSync('git', ['commit', '-m', `'chore(*): Release-${masterTag}'`]);
            execSync('git', ['tag', masterTag]);
        },
        () => {
            execSync('git', ['tag', '-d', masterTag]);
            execSync('git', ['reset', '--mixed', 'HEAD^']);
        }
    );

    await registryTask(__filename, 'push code', async () => {
        execSync('git', ['fetch', REMOTE_NAME]);
        const { masterTag } = getVersion();
        const branchName = querySync('git', ['branch', '--show-current']);
        const originHead = querySync('git', ['rev-parse', `${REMOTE_NAME}/${branchName}`]);
        await registryTask(__filename, `push to ${REMOTE_NAME}`, pushOrigin, () => {
            execSync('git', ['push', REMOTE_NAME, `:${masterTag}`]);
            execSync('git', ['push', REMOTE_NAME, `${originHead}:${branchName}`, '--force']);
        });

        const originPlatformDocsHead = querySync('git', [
            'rev-parse',
            `${REMOTE_NAME}/${PLATFORM_DOCS_BRANCH}`,
        ]);
        await registryTask(__filename, `push to ${PLATFORM_DOCS_BRANCH}`, pushPlatformDocs, () => {
            fs.removeSync(PLATFORM_DOCS_PATH);
            execSync('git', ['worktree', 'prune']);
            execSync('git', [
                'push',
                REMOTE_NAME,
                `${originPlatformDocsHead}:${PLATFORM_DOCS_BRANCH}`,
                '--force',
            ]);
        });
    });

    await registryTask(__filename, 'Github release', githubRelease);
    await registryTask(__filename, 'Ding message', sendDingMessage);
});
