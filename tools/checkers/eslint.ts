/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-18 14:19:12
  description: 执行 eslint 检查
  example:
    npm run check:eslint button
    npm run check:eslint ./components/button
    npm run check:eslint button --fix
------------------------------------------------------------
*/
import { join } from 'path';
import { TARGETS, ARGV, execSync, getBin, registryTask } from '../utils';

function checkEslint() {
    const binPath = getBin('eslint');
    if (!binPath) {
        throw new Error('Not found eslint');
    }

    const args: string[] = ['--no-error-on-unmatched-pattern'];
    const { fix, quiet } = ARGV;
    if (fix) {
        args.push('--fix');
    }
    if (quiet) {
        args.push('--quiet');
    }
    const includes = TARGETS.map(dir => [join(dir, '**/*.ts'), join(dir, '**/*.tsx')]).flat();
    args.push(...includes);

    execSync(binPath, args);
}

export function registryCheckEslint(file = __filename) {
    return registryTask(file, 'eslint', checkEslint);
}

registryCheckEslint();
