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
import { CWD, TARGETS, beforeExit, execSync, getBin, log } from '../../utils';

const tscBin = getBin('tsc');

if (!tscBin) {
    throw new Error('Not found tsc');
}

const SRC_DIR = 'components';
const SRC_PATH = resolve(CWD, SRC_DIR);
const DEST_TYPES = resolve(CWD, 'types');
const DEST_ES = resolve(CWD, 'es');
const DEST_LIB = resolve(CWD, 'lib');
const CONFIG_ES_PATH = resolve(__dirname, 'es.json');
const CONFIG_LIB_PATH = resolve(__dirname, 'lib.json');
const CONFIG_TYPES_PATH = resolve(__dirname, 'types.json');
const targets = TARGETS.length ? TARGETS : [SRC_PATH];
const COMMON_INCLUDE = [relative(__dirname, resolve(CWD, 'global.d.ts'))];
const rollbacks: Array<() => unknown> = [];

beforeExit(() => {
    rollbacks.forEach(f => f());
});

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
    // delete types
    removeSync(DEST_TYPES);
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

    // compile .tsx?
    if (filterTargets.length) {
        compile(filterTargets, DEST_TYPES, CONFIG_TYPES_PATH);
    }

    log('Compile to types done.');
}

function compileEs() {
    // delete es
    removeSync(DEST_ES);

    // copy !.js .jsx .ts .tsx
    targets.forEach(dir => {
        const otherFiles = glob.sync('**/*.!(js|jsx|ts|tsx|d.ts)', {
            cwd: dir,
            absolute: true,
            ignore: '**/@(__tests__|__docs__)/**/*',
        });
        for (const file of otherFiles) {
            copySync(file, file.replace(SRC_PATH, DEST_ES));
        }
    });

    // compile .tsx? and .jsx?
    compile(targets, DEST_ES, CONFIG_ES_PATH, true);

    log('Compile to es done');
}

function compileLib() {
    // delete es
    removeSync(DEST_LIB);

    // copy !.js .jsx .ts .tsx
    targets.forEach(dir => {
        const otherFiles = glob.sync('**/*.!(js|jsx|ts|tsx|d.ts)', {
            cwd: dir,
            absolute: true,
            ignore: '**/@(__tests__|__docs__)/**/*',
        });
        for (const file of otherFiles) {
            copySync(file, file.replace(SRC_PATH, DEST_LIB));
        }
    });

    // compile .tsx? and .jsx?
    compile(targets, DEST_LIB, CONFIG_LIB_PATH, true);

    // copy .d.ts
    copyDTS(DEST_LIB);

    log('Compile to lib done');
}

compileTypes();
compileEs();
compileLib();
