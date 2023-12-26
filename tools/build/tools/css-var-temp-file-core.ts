import fs = require('fs-extra');
import path = require('path');
import glob = require('glob');
import sass = require('sass');
import postcss = require('postcss');
import postcssCalc = require('postcss-calc');
import { logger, SRC_DIR_PATH, SRC_DIR, CWD } from '../../utils';
import { collectVarsInfo } from './utils/collect-vars-info';
import shouldBeCssVar from './utils/should-be-css-var';

// 保留原状
const cwd = CWD;

const fontScssVar = {
    'font-custom-path': '//i.alicdn.com/artascope-font/20160419204543/font/',
    'font-custom-name': 'Roboto',
    'font-name-thin': 'roboto-thin',
    'font-name-light': 'roboto-light',
    'font-name-regular': 'roboto-regular',
    'font-name-medium': 'roboto-medium',
    'font-name-bold': 'roboto-bold',
};

export default async function () {
    fs.removeSync(path.join(SRC_DIR_PATH, 'core-temp'));
    // generate temp files for [core/utility, core/style]
    const corePaths = glob.sync(`${SRC_DIR}/core/@(utility|style)/*.scss`, {cwd});
    const indexScssPath = path.join(SRC_DIR_PATH, 'core/index.scss');

    await Promise.all(
        corePaths.map(async cPath => {
            const varsInfo = await collectVarsInfo(cPath, indexScssPath);

            let scss2cssContent = '';
            Object.entries(varsInfo).forEach(([name, { value, resolvedValue }]) => {
                if (shouldBeCssVar(name, value)) {
                    scss2cssContent += `$${name}: var(--${name}, ${resolvedValue});\n`;
                    scss2cssContent += `$varMap: map-merge($varMap, (var(--${name}, ${resolvedValue}): ${resolvedValue}));\n`;
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

            Object.keys(fontScssVar).forEach((fontScssVarName: keyof typeof fontScssVar) => {
                if (varsInfo[fontScssVarName]) {
                    fontScssVar[fontScssVarName] = varsInfo[fontScssVarName].resolvedValue!;
                    if (fontScssVarName === 'font-custom-path') {
                        fontScssVar[fontScssVarName] = fontScssVar[fontScssVarName].replace(
                            /"/gi,
                            ''
                        );
                    }
                }
            });
            const newPath = cPath.replace('core', 'core-temp');
            fs.outputFileSync(newPath, scss2cssContent);
            fs.outputFileSync(newPath.replace('.scss', '-def-default.css'), cssvarDefaultContent);
        })
    );

    // generate [core-temp/index.scss, core-temp/index-noreset.scss, core-temp/reset.scss]
    const indexPaths = glob.sync(`${SRC_DIR}/core/@(index|index-noreset|reset).scss`, {cwd});
    indexPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');
        fs.outputFileSync(p.replace('core', 'core-temp'), indexScssContent);
    });

    // copy [core/util/**.scss] to [core-temp/util/**.scss]
    const utilPaths = glob.sync(`${SRC_DIR}/core/util/**.scss`, {cwd});
    utilPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');
        fs.outputFileSync(p.replace('core', 'core-temp'), indexScssContent);
    });

    // generate [base] style
    const coreBasePaths = glob.sync(`${SRC_DIR}/core/base/*.scss`, {cwd});
    coreBasePaths.forEach(cPath => {
        let mainScssContent = fs.readFileSync(cPath, 'utf8');
        fs.outputFileSync(cPath.replace('core', 'core-temp'), mainScssContent);
        if (path.basename(cPath) === '_typography.scss') {
            Object.keys(fontScssVar).forEach((key: keyof typeof fontScssVar) => {
                const reg = new RegExp(`#{\\$${key}}`, 'ig');
                mainScssContent = mainScssContent.replace(reg, fontScssVar[key]);
            });
        }
        const mainScss2 = `
@import "${SRC_DIR}/core-temp/util/_varMap.scss";
@import "${SRC_DIR}/core-temp/style/_global.scss";
@import "${SRC_DIR}/core-temp/style/_size.scss";
@import "${SRC_DIR}/core-temp/style/_color.scss";
@import "${SRC_DIR}/core-temp/style/_corner.scss";
@import "${SRC_DIR}/core-temp/style/_font.scss";
@import "${SRC_DIR}/core-temp/style/_line.scss";
@import "${SRC_DIR}/core-temp/style/_shadow.scss";
@import "${SRC_DIR}/core-temp/style/_motion.scss";
$css-prefix: 'next-';
${mainScssContent}`;

        const result = sass.renderSync({
            includePaths: [path.join(cwd, 'core-temp')],
            data: mainScss2,
        });
        const css = result.css.toString();
        const output = postcss().use(postcssCalc()).process(css).css;

        fs.outputFileSync(
            cPath.replace('.scss', '-def-default.css').replace('core', 'core-temp'),
            output
        );
    });

    logger.log(`> [Core] empty and generate ${SRC_DIR}/core-temp successfully!`);
};
