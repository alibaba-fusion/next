/* eslint-disable */
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const babel = require('babel-core');
const babelConfigCreator = require('../webpack/babelConfig');
const { CWD, SRC_DIR_PATH, logger } = require('../../utils');

module.exports = function transform() {
    const cwd = CWD;
    const srcPath = SRC_DIR_PATH;
    const libPath = path.join(cwd, 'lib');
    const esPath = path.join(cwd, 'es');
    const libConfig = babelConfigCreator({}, { runtime: true });
    const esConfig = babelConfigCreator({}, { runtime: true, modules: false });

    const relativePaths = glob.sync('**/*.@(js|jsx)', {
        cwd: srcPath,
        ignore: ['**/__tests__/**', '**/__docs__/**'],
    });
    relativePaths.forEach(relaticePath => {
        const content = fs.readFileSync(path.join(srcPath, relaticePath), 'utf8');
        let libContent, esContent;
        libContent = esContent = content;
        relaticePath = relaticePath.replace(/\.jsx$/, '.js');
        libContent = babel.transform(content, libConfig).code;
        esContent = babel.transform(content, esConfig).code;
        const libDestFile = path.join(libPath, relaticePath);
        if (fs.existsSync(libDestFile)) {
            logger.warn(`js 文件已存在，执行覆盖`, libDestFile);
        }
        const esDestFile = path.join(esPath, relaticePath);
        if (fs.existsSync(esDestFile)) {
            logger.warn(`js 文件已存在，执行覆盖`, esDestFile);
        }
        fs.outputFileSync(libDestFile, libContent);
        fs.outputFileSync(esDestFile, esContent);
    });
};
