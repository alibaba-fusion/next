/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-19 15:19:10
  description: css 样式检查
  example: 
    npm run check:stylelint button
    npm run check:stylelint button --fix
    npm run check:stylelint ./components/button table
------------------------------------------------------------
*/

import { execSync, TARGETS, ARGV, getBin, registryTask } from '../utils';

function checkStylelint() {
    const binPath = getBin('stylelint');

    if (!binPath) {
        throw new Error('Not found stylelint');
    }

    const args: string[] = ['--ip="__tests__/"', '--ip="__docs__/"'];

    if (ARGV.fix) {
        args.push('--fix');
    }
    args.push(...TARGETS);
    execSync(binPath, args);
}

export function registryCheckStylelint(file = __filename) {
    return registryTask(file, 'stylelint', checkStylelint);
}

registryCheckStylelint();
