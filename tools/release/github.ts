/*
------------------------------------------------------------
  author: 珵之
  create: 2024-01-03 11:58:56
  description: 触发 github release
------------------------------------------------------------
*/
import fs = require('fs-extra');
import path = require('path');
import { Octokit } from '@octokit/rest';
import { registryTask, CWD } from '../utils';
import { getVersion } from './utils';

export function registryGithubRelease(file = __filename) {
    if (!process.env.GITHUB_RELEASE_TOKEN) {
        throw new Error(`Not found GITHUB_RELEASE_TOKEN, check "echo $GITHUB_RELEASE_TOKEN"`);
    }
    const octokit = new Octokit({
        auth: process.env.GITHUB_RELEASE_TOKEN,
    });
    return registryTask(file, 'github release', () => {
        const { buildTag, version } = getVersion();
        const isPrerelease = !/\d+\.\d+\.\d+/.test(version);
        const latestLog = fs
            .readFileSync(path.join(CWD, 'LATESTLOG.md'), 'utf8')
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
    });
}

registryGithubRelease();
