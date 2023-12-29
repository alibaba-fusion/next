/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-20 17:30:58
  description: transform component source code to es,lib,types
    use tsc to transform instead babel
------------------------------------------------------------
*/

import { join, relative, resolve } from 'path';
import {
    writeFileSync,
    writeJSONSync,
    removeSync,
    readFileSync,
    copySync,
    readdirSync,
    existsSync,
} from 'fs-extra';
import * as glob from 'glob';
import { CWD, SRC_DIR_PATH, TARGETS, execSync, getBin, registryTask } from '../../utils';
import transformJs = require('./transformJs');

const tscBin = getBin('tsc');
const SRC_PATH = SRC_DIR_PATH;
const DEST_TYPES = resolve(CWD, 'types');
const DEST_ES = resolve(CWD, 'es');
const DEST_LIB = resolve(CWD, 'lib');
const CONFIG_ES_PATH = resolve(__dirname, 'es.json');
const CONFIG_LIB_PATH = resolve(__dirname, 'lib.json');
const CONFIG_TYPES_PATH = resolve(__dirname, 'types.json');
const targets = TARGETS;
const COMMON_INCLUDE = [relative(__dirname, resolve(CWD, 'global.d.ts'))];
const rollbacks: Array<() => unknown> = [];
const rollback = () => {
    rollbacks.forEach(f => f());
};

function copyDTS(to: string) {
    if (!existsSync(DEST_TYPES) || !readdirSync(DEST_TYPES).length) {
        throw new Error('Types is not found');
    }
    const files = glob.sync('**/*.d.ts', {
        cwd: DEST_TYPES,
        absolute: true,
    });
    for (const file of files) {
        copySync(file, file.replace(DEST_TYPES, to));
    }
}

function compile(dirs: string[], out: string, configPath: string, includeJs?: boolean) {
    const configText = readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configText);
    const include = [...COMMON_INCLUDE];
    const exclude: string[] = config.exclude || [];
    config.compilerOptions.outDir = out;
    for (const dir of dirs) {
        const matches = ['**/*.ts', '**/*.tsx'];
        if (includeJs) {
            matches.push('**/*.js', '**/*.jsx');
        }
        include.push(...matches.map(t => join(relative(__dirname, dir), t)));
        exclude.push(
            ...['**/__tests__/**/*', '**/__docs__/**/*'].map(t => join(relative(__dirname, dir), t))
        );
    }
    config.include = include;
    config.exclude = exclude;
    const rollback = () => {
        writeFileSync(configPath, configText, 'utf-8');
    };
    rollbacks.push(rollback);
    writeJSONSync(configPath, config, { spaces: 4 });

    execSync(tscBin!, ['-p', configPath]);
    rollback();
}

function compileTypes() {
    targets.forEach(dir => {
        // copy legacy index.d.ts
        const dtsList = glob.sync('**/index.d.ts', { cwd: dir, absolute: true });
        for (const file of dtsList) {
            copySync(file, file.replace(SRC_PATH, DEST_TYPES));
        }
    });

    // filter legacy component dir
    let filterTargets = [...targets];
    if (filterTargets.length !== 1 || filterTargets[0] !== SRC_PATH) {
        filterTargets = filterTargets.filter(dir => {
            return !existsSync(resolve(dir, 'index.d.ts'));
        });
    }

    // compile /.tsx?$/
    if (filterTargets.length) {
        compile(filterTargets, DEST_TYPES, CONFIG_TYPES_PATH);
    }
}

function compileEs() {
    // compile /.tsx?$/
    compile(targets, DEST_ES, CONFIG_ES_PATH);
}

function compileLib() {
    // compile /.tsx?$/
    compile(targets, DEST_LIB, CONFIG_LIB_PATH);

    // copy /.d.ts$/
    copyDTS(DEST_LIB);
}

export function registryTransform(file = __filename) {
    return registryTask(
        file,
        'transform to es|lib|types',
        async () => {
            await registryTask(file, 'clean', async () => {
                removeSync(DEST_LIB);
                removeSync(DEST_ES);
                removeSync(DEST_TYPES);
            });
            await registryTask(file, 'copy non .[jt]sx? files', async () => {
                targets.forEach(dir => {
                    const otherFiles = glob.sync('**/*.!(js|jsx|ts|tsx|d.ts)', {
                        cwd: dir,
                        absolute: true,
                        ignore: '**/@(__tests__|__docs__)/**/*',
                    });
                    for (const file of otherFiles) {
                        copySync(file, file.replace(SRC_PATH, DEST_LIB));
                        copySync(file, file.replace(SRC_PATH, DEST_ES));
                    }
                });
            });
            await registryTask(
                file,
                'compile ts',
                async () => {
                    await registryTask(file, 'transform to types', compileTypes);
                    await registryTask(file, 'transform to es', compileEs);
                    await registryTask(file, 'transform to lib', compileLib);
                    rollback();
                },
                rollback
            );

            await registryTask(file, 'compile js', transformJs);
        },
        rollback
    );
}

registryTransform();
