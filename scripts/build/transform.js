const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const babel = require('babel-core');
const babelConfigCreator = require('@alifd/babel-preset-next');
const { logger } = require('../utils');

module.exports = function transform() {
    const PATTERN_ES6 = /\.jsx?$/;
    const PATTERN_JSX = /\.jsx$/;
    const cwd = process.cwd();
    const srcPath = path.join(cwd, 'src');
    const libPath = path.join(cwd, 'lib');
    const esPath = path.join(cwd, 'es');
    const libConfig = babelConfigCreator({}, { runtime: true });
    const esConfig = babelConfigCreator({}, { runtime: true, modules: false });

    fs.emptyDirSync(libPath);
    fs.emptyDirSync(esPath);

    const relativePaths = glob.sync('**/*.*', { cwd: srcPath });
    relativePaths.forEach(relaticePath => {
        const content = fs.readFileSync(
            path.join(srcPath, relaticePath),
            'utf8'
        );
        let libContent, esContent;
        libContent = esContent = content;
        if (PATTERN_ES6.test(relaticePath)) {
            relaticePath = relaticePath.replace(PATTERN_JSX, '.js');
            libContent = babel.transform(content, libConfig).code;
            esContent = babel.transform(content, esConfig).code;
        }
        fs.outputFileSync(path.join(libPath, relaticePath), libContent);
        fs.outputFileSync(path.join(esPath, relaticePath), esContent);
    });

    logger.success('Transform es6 code to es5 successfully!');
};
