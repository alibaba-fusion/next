const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');
// 保留原状
const cwd = process.cwd();
const { logger } = require('../utils');
const { collectVarsInfo } = require('./utils/collect-vars-info');
const shouldBeCssVar = require('./utils/should-be-css-var');

const fontScssVar = {
    'font-custom-path': '//i.alicdn.com/artascope-font/20160419204543/font/',
    'font-custom-name': 'Roboto',
    'font-name-thin': 'roboto-thin',
    'font-name-light': 'roboto-light',
    'font-name-regular': 'roboto-regular',
    'font-name-medium': 'roboto-medium',
    'font-name-bold': 'roboto-bold',
};

module.exports = async function() {
    // generate temp files for [core/utility, core/style]
    const corePaths = glob.sync('src/core/@(utility|style)/*.scss');
    const indexScssPath = path.join(cwd, 'src/core/index.scss');

    await Promise.all(
        corePaths.map(async cPath => {
            const varsInfo = await collectVarsInfo(cPath, indexScssPath);

            let scss2cssContent = '';
            Object.entries(varsInfo).forEach(([name, { value, resolvedValue }]) => {
                if (shouldBeCssVar(name, value)) {
                    scss2cssContent += `$${name}: var(--${name}, ${resolvedValue});\n`;
                } else {
                    scss2cssContent += `$${name}: ${resolvedValue};\n`;
                }
            });

            let cssvarDefaultContent = '';
            Object.entries(varsInfo).forEach(([name, { value, resolvedValue }]) => {
                if (shouldBeCssVar(name, value)) {
                    cssvarDefaultContent += `--${name}: ${resolvedValue};\n`;
                }
            });
            cssvarDefaultContent = `:root {\n${cssvarDefaultContent}}\n`;

            Object.keys(fontScssVar).forEach(fontScssVarName => {
                if (varsInfo[fontScssVarName]) {
                    fontScssVar[fontScssVarName] = varsInfo[fontScssVarName].resolvedValue;
                    if (fontScssVarName === 'font-custom-path') {
                        fontScssVar[fontScssVarName] = fontScssVar[fontScssVarName].replace(/"/gi, '');
                    }
                }
            });
            const newPath = cPath.replace('core', 'core-temp');
            fs.outputFileSync(newPath, scss2cssContent);
            fs.outputFileSync(newPath.replace('.scss', '-def-default.css'), cssvarDefaultContent);
        })
    );

    // generate [core-temp/index.scss, core-temp/index-noreset.scss, core-temp/reset.scss]
    const indexPaths = glob.sync('src/core/@(index|index-noreset|reset).scss');
    indexPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');
        fs.outputFileSync(p.replace('core', 'core-temp'), indexScssContent);
    });

    // copy [core/util/**.scss] to [core-temp/util/**.scss]
    const utilPaths = glob.sync('src/core/util/**.scss');
    utilPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');
        fs.outputFileSync(p.replace('core', 'core-temp'), indexScssContent);
    });

    // generate [base] style
    const coreBasePaths = glob.sync('src/core/base/*.scss');
    coreBasePaths.forEach(cPath => {
        let mainScssContent = fs.readFileSync(cPath, 'utf8');
        fs.outputFileSync(cPath.replace('core', 'core-temp'), mainScssContent);
        if (path.basename(cPath) === '_typography.scss') {
            Object.keys(fontScssVar).forEach(key => {
                const reg = new RegExp(`#{\\$${key}}`, 'ig');
                mainScssContent = mainScssContent.replace(reg, fontScssVar[key]);
            });
        }
        const mainScss2 = `@import "src/core-temp/style/_global.scss";
@import "src/core-temp/style/_size.scss";
@import "src/core-temp/style/_color.scss";
@import "src/core-temp/style/_corner.scss";
@import "src/core-temp/style/_font.scss";
@import "src/core-temp/style/_line.scss";
@import "src/core-temp/style/_shadow.scss";
@import "src/core-temp/style/_motion.scss";
$css-prefix: 'next-';
${mainScssContent}`;

        const result = sass.renderSync({
            includePaths: [path.join(cwd, 'core-temp')],
            data: mainScss2,
        });
        const css = result.css.toString();
        const output = postcss()
            .use(postcssCalc())
            .process(css).css;

        fs.outputFileSync(cPath.replace('.scss', '-def-default.css').replace('core', 'core-temp'), output);
    });

    logger.success('> [Core] empty and generate src/core-temp successfully!');
};
