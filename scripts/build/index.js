const co = require('co');
const fs = require('fs-extra');
const path = require('path');
const initOptions = require('../init-options');
const transform = require('./transform');
const cssVarTempFile = require('./css-var-temp-file');
const cssVarTempFileCore = require('./css-var-temp-file-core');
const generateScssEntry = require('./generate-scss-entry');
const generateCssEntry = require('./generate-css-entry');
const generateCssEntryCore = require('./generate-css-entry-core');
const exportApiSchema = require('./export-api-schema');
const generateApi = require('./generate-api');

const cwd = process.cwd();
const { logger } = require('../utils');

function run() {
    const options = initOptions();

    logger.info('> transform es6 to es5...');
    transform();

    logger.info('> generate scss entry...');
    generateScssEntry();

    logger.info('> [Core] empty and generate src/core-temp...');
    fs.emptyDirSync(path.join(cwd, 'src/core-temp'));
    cssVarTempFileCore();

    logger.info('> [Component] add scss-var-to-css-var.scss & css-var-def-default.scss...');
    cssVarTempFile();

    logger.info('> [Core]generate core2 files...');
    generateCssEntryCore();

    logger.info('> [Component]generate css-var files (style2.js / varaible.css / index.css )...');
    generateCssEntry();

    fs.emptyDirSync(path.join(cwd, 'src/core-temp'));

    // logger.info('> generate api...');
    // generateApi();

    // logger.info('> export-api-schema...');
    // exportApiSchema(options);

    // const cwd = process.cwd();
    // const libPath = path.join(cwd, 'lib');
    // const esPath = path.join(cwd, 'es');

    // fs.removeSync(path.join(libPath, 'demo-helper'));
    // fs.removeSync(path.join(esPath, 'demo-helper'));
    // fs.emptyDirSync(path.join(cwd, 'src/core-temp'));

    logger.success('Run build successfully!');
}

co(run).catch(err => {
    logger.error(err);
});
