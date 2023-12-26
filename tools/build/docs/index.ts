/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-22 11:07:04
  description: 编译文档
------------------------------------------------------------
*/
import { resolve } from 'path';
import glob = require('glob');
import fs = require('fs-extra');
import { CWD, logger, registryTask } from '../../utils';
import generateDocs from './generate-docs';
import initOptions = require('./configs/init-options');
import buildDemos = require('./build-demos');
import exportVariables = require('./export-variables');

function copyApiSchema() {
    const apiBase = resolve(__dirname, './configs/apis');
    const destBase = resolve(CWD, 'lib');
    const apis = glob.sync('*/api-schema.json', { cwd: apiBase, absolute: true });
    apis.forEach(api => {
        const text = fs.readFileSync(api, 'utf-8');
        fs.outputFileSync(api.replace(apiBase, destBase), text, 'utf-8');
    });
}

function* buildDocs() {
    const options = initOptions();
    const level = logger.getLevel();
    // TODO api schema & update component index.md
    logger.log('> export api schema...');
    copyApiSchema();
    logger.log('> export api schema done.');
    // logger.levelUp();
    // exportApiSchema(options);
    // logger.levelDown();
    logger.log();

    logger.log('> generate docs...');
    logger.levelUp();
    yield* generateDocs();
    logger.levelDown();
    logger.log();

    logger.log('> build theme demos...');
    logger.levelUp();
    yield* buildDemos(options);
    logger.levelDown();
    logger.log();

    logger.log('> export variables...');
    logger.levelUp();
    yield* exportVariables(options);
    logger.levelDown();
    logger.log();

    logger.setLevel(level);
}
export function registryBuildDocs(file = __filename) {
    return registryTask(file, 'docs', buildDocs);
}

registryBuildDocs();
