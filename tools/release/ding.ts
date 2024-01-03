/*
------------------------------------------------------------
  author: 珵之
  create: 2024-01-03 11:58:30
  description: 向钉群发布 release 消息
------------------------------------------------------------
*/

import path = require('path');
import fs = require('fs-extra');
import inquirer = require('inquirer');
import urllib = require('urllib');
import { registryTask, ARGV, querySync, CWD } from '../utils';
import { getVersion } from './utils';

async function sendDingMessage() {
    const group = process.env.FUSION_SERVICE_DINGTALK_GROUPS;
    const { masterTag } = getVersion();
    const dingtalks = (group && group.split(', ')) || [];
    if (!dingtalks.length) {
        return;
    }
    const shouldDing =
        ARGV.ding ||
        (
            (await inquirer.prompt({
                name: 'sync',
                type: 'confirm',
                default: true,
                message: '是否同步发布信息到钉钉群',
            })) as { sync: boolean }
        ).sync;
    if (!shouldDing) {
        return;
    }

    const username = querySync('git', ['config', '--get', 'user.name']);
    const latestLog = fs
        .readFileSync(path.join(CWD, 'LATESTLOG.md'), 'utf8')
        .replace(/# Latest Log/g, '')
        .replace(/\n+/g, '\n')
        .replace(/\(\[[\d\w]+\]\(https:\/\/[^)]+\)\)/g, '');
    const dingContent = `> [公告] @alifd/next@${masterTag} 版本发布！by: ${username}
${latestLog}
> 历史发布记录请查看 [CHANGELOG](https://github.com/alibaba-fusion/next/blob/master/CHANGELOG.md);`;

    for (let i = 0; i < dingtalks.length; i++) {
        const url = dingtalks[i];
        await urllib.request(url, {
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

export function registryDingMessage(file = __filename) {
    return registryTask(file, 'dingtalk message', sendDingMessage);
}

registryDingMessage();
