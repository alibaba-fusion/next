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
import { CWD, querySync, registryTask, logger, ARGV, execSync, SRC_DIR_PATH } from './utils';
import { PLATFORM_DOCS_IGNORE } from './build/docs/configs/platform-docs-ignore';
import { registryCheck } from './checkers';
import { registryChangelog } from './changelog';
import { registryBuild } from './build';
import { registryCheckSass } from './checkers/sass';

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
    const srcPath = SRC_DIR_PATH;
    const esPath = path.join(cwd, 'es');
    const typesPath = path.join(cwd, 'types');
    const getChildDirLength = (dir: string) => {
        return fs
            .readdirSync(dir)
            .filter(child => fs.statSync(path.resolve(dir, child)).isDirectory()).length;
    };

    const libLen = getChildDirLength(libPath);
    const srcLen = getChildDirLength(srcPath);
    const esLen = getChildDirLength(esPath);
    const typesLen = getChildDirLength(typesPath);

    if (srcLen !== esLen || libLen !== srcLen + 1 || typesLen !== srcLen - 4) {
        // src : demo-helper / core / mixin-ui-state / validate
        // lib : core / core2/  mixin-ui-state / validate / _components
        // es : core / core2/ mixin-ui-state / validate
        // types:
        logger.error(
            `srcLen: ${srcLen}; libLen: ${libLen}; esLen: ${esLen}; typesLen: ${typesLen}`
        );
        throw new Error(`src, es, lib, types length is not right`);
    }
}

function getCurrentBranchName() {
    return querySync('git', ['branch', '--show-current']);
}

function getCurrentHead() {
    return querySync('git', ['rev-parse', getCurrentBranchName()]);
}
function getCurrentRemoteHead(cwd?: string) {
    return querySync('git', ['rev-parse', `${REMOTE_NAME}/${getCurrentBranchName()}`], cwd);
}

const pushOrigin = {
    effects: new Set<() => unknown>(),
    run() {
        const branchName = getCurrentBranchName();
        const currentRemoteHead = getCurrentRemoteHead();
        const { masterTag } = getVersion();
        execSync('git', ['push']);
        pushOrigin.effects.add(() => {
            execSync('git', ['push', REMOTE_NAME, `${currentRemoteHead}:${branchName}`, '--force']);
        });
        execSync('git', ['push', REMOTE_NAME, masterTag]);
        pushOrigin.effects.add(() => {
            execSync('git', ['push', REMOTE_NAME, `:${masterTag}`]);
        });
    },
    rollback() {
        pushOrigin.effects.forEach(f => f());
    },
};

const pushPlatformDocs = {
    _effects: new Set<() => unknown>(),
    run() {
        const { buildTag } = getVersion();
        const docs = PLATFORM_DOCS_PATH;
        fs.ensureDirSync(docs);
        pushPlatformDocs._effects.add(() => {
            fs.removeSync(docs);
        });

        execSync('git', ['worktree', 'add', PLATFORM_DOCS_BRANCH, '-B', PLATFORM_DOCS_BRANCH]);
        pushPlatformDocs._effects.add(() => {
            execSync('git', ['worktree', 'prune']);
        });
        const currentDir = fs.readdirSync(cwd);
        currentDir.forEach(file => {
            if (['node_modules', '.git', PLATFORM_DOCS_BRANCH].indexOf(file) > -1) {
                return false;
            }

            fs.copySync(path.join(cwd, file), path.join(docs, file));
        });

        const gitIgnore = path.join(docs, '.gitignore');
        fs.writeFileSync(gitIgnore, PLATFORM_DOCS_IGNORE);

        const remoteHead = getCurrentRemoteHead(docs);
        execSync('git', ['add', '.'], { cwd: docs });
        execSync('git', ['commit', '-m', `chore(*): Release-${buildTag}`], { cwd: docs });

        execSync('git', ['push', REMOTE_NAME, PLATFORM_DOCS_BRANCH, '-f'], { cwd: docs });
        pushPlatformDocs._effects.add(() => {
            execSync('git', [
                'push',
                REMOTE_NAME,
                `${remoteHead}:${PLATFORM_DOCS_BRANCH}`,
                '--force',
            ]);
        });
        execSync('git', ['tag', buildTag], { cwd: docs });
        execSync('git', ['push', REMOTE_NAME, buildTag], { cwd: docs });
        pushPlatformDocs._effects.add(() => {
            execSync('git', ['push', REMOTE_NAME, `:${buildTag}`]);
        });

        fs.removeSync(docs);
        execSync('git', ['worktree', 'prune']);
        logger.log(`******** add commit message Release-${buildTag} success! ********\n`);
    },
    rollback() {
        pushPlatformDocs._effects.forEach(f => f());
    },
};

async function publishNpm(distTag = 'latest') {
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

async function publishNpmForDocs(distTag = 'latest') {
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
    execSync('npm', ['publish', '--tag', distTag], { cwd: docs });
    execSync('tnpm', ['sync', NEXT_DOCS_NAME], { cwd: docs });
    fs.removeSync(docs);
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
    // 暂时手动生成 changelog
    // await registryChangelog(__filename);
    const { masterTag } = getVersion();

    // await registryBuild(__filename);

    // await registryCheck(__filename);

    // await registryTask(__filename, 'release check', async () => {
    //     await registryCheckSass(__filename);
    //     await registryTask(__filename, 'check git tag', checkTags);
    //     await registryTask(__filename, 'check build outputs', checkFiles);
    // });
    // await registryTask(__filename, 'publish to npm', async () => {
    //     const { version } = getVersion();
    //     const versionTag = version.match(/[a-z]+/)?.[0];
    //     const distTag: string =
    //         ARGV.tag ||
    //         versionTag ||
    //         (
    //             await inquirer.prompt({
    //                 name: 'tag',
    //                 type: 'list',
    //                 choices: ['latest', 'next', 'beta'],
    //                 default: 0,
    //                 message: 'publish dist-tags:',
    //             })
    //         ).tag;
    //     await registryTask(__filename, 'publish next to npm', publishNpm.bind(undefined, distTag));
    //     await registryTask(
    //         __filename,
    //         'publish next-docs to npm',
    //         publishNpmForDocs.bind(undefined, distTag),
    //         () => {
    //             fs.removeSync(NEXT_DOCS_PATH);
    //         }
    //     );
    // });

    const commitRollbackFns = new Set<() => unknown>();
    await registryTask(
        __filename,
        'commit & tag',
        async () => {
            execSync('git', ['add', '.']);
            commitRollbackFns.add(() => {
                execSync('git', ['restore', '--staged', '.']);
            });
            execSync('git', ['commit', '-m', `chore(*): Release-${masterTag}`]);
            commitRollbackFns.add(() => {
                execSync('git', ['reset', '--mixed', 'HEAD^']);
            });
            execSync('git', ['tag', masterTag]);
            commitRollbackFns.add(() => {
                execSync('git', ['tag', '-d', masterTag]);
            });
        },
        () => {
            commitRollbackFns.forEach(f => f());
        }
    );

    await registryTask(__filename, 'push code', async () => {
        execSync('git', ['fetch', REMOTE_NAME]);
        await registryTask(
            __filename,
            `push to ${REMOTE_NAME}`,
            pushOrigin.run,
            pushOrigin.rollback
        );

        await registryTask(
            __filename,
            `push to ${PLATFORM_DOCS_BRANCH}`,
            pushPlatformDocs.run,
            pushPlatformDocs.rollback
        );
    });

    // await registryTask(__filename, 'Github release', githubRelease);
    // await registryTask(__filename, 'Ding message', sendDingMessage);
});
