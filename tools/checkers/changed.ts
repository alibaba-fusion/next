/*
------------------------------------------------------------
    author: 珵之
    create: 2024-03-25 14:32:36
    description: 检查当前分支发生变更的组件（根据 commits 内容检测变更）(CI Only)
------------------------------------------------------------
*/

import fs from 'fs-extra';
import { escapeRegExp, camelCase, kebabCase } from 'lodash';
import { getComponentName, querySync, execSync, registryTask, SRC_DIR_PATH, log } from '../utils';

registryTask(__filename, 'check:changed', () => {
    const commits = querySync('git', ['log', '--format=%s']);
    log('Commits', commits.split('\n'));
    const children = fs.readdirSync(SRC_DIR_PATH);
    const namesMap = new Map(
        children
            .map(name => {
                return [
                    [name, name],
                    [camelCase(name), name],
                    [getComponentName(name), name],
                    [kebabCase(name), name],
                ] as Array<[string, string]>;
            })
            .flat()
    );
    const reg = new RegExp(
        `${children
            .map(name => {
                return [name, camelCase(name), getComponentName(name), kebabCase(name)]
                    .map(t => escapeRegExp(t))
                    .join('|');
            })
            .join('|')}`,
        'g'
    );
    const matched = commits.match(reg);
    if (!matched) {
        log('Commits 中未检测到组件变更');
        return;
    }
    const names = Array.from(new Set(matched))
        .map(name => namesMap.get(name))
        .filter(Boolean) as string[];
    log('发生变更的组件', names);
    execSync('npm', ['run', 'check', ...names]);
});
