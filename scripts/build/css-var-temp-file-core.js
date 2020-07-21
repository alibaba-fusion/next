const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');

const cwd = process.cwd();
const { logger } = require('../utils');
const { scss2css, compileScss } = require('./scss2css');

const fontScssVar = {
    '$font-custom-path': '//i.alicdn.com/artascope-font/20160419204543/font/',
    '$font-custom-name': 'Roboto',
    '$font-name-thin': 'roboto-thin',
    '$font-name-light': 'roboto-light',
    '$font-name-regular': 'roboto-regular',
    '$font-name-medium': 'roboto-medium',
    '$font-name-bold': 'roboto-bold'
};
module.exports = function() {
    // generate temp files for [core/utility, core/style]
    const corePaths = glob.sync('src/core/@(utility|style)/*.scss');
    corePaths.forEach(cPath => {
        const cContent = fs.readFileSync(cPath, 'utf8');
        let scss2cssContent = '';
        let cssvarDefaultContent = '';

        cContent.replace(/\n(\$[\d\s\S-]*?): ([\s\S\d-]*?);/g, (all, s1, s2) => {
            console.log(all,'=======')
            if (s1.match(/\$css-prefix/)) {
                // 保留原状
                const result = compileScss(all, s1, path.join(cwd, 'src/core/'), 'index.scss');
                scss2cssContent += `${s1}: ${result};\n`
            } else {
                scss2cssContent += `${s1}: var(${s1.replace('$', '--')});\n`;
            }

            const val = scss2css(all, s1, s2, path.join(cwd, 'src/core/'), 'index.scss');
            const i = Object.keys(fontScssVar).indexOf(s1);
            if (i > -1) {
                fontScssVar[s1] = compileScss(all, s1, path.join(cwd, 'src/core/'), 'index.scss');
                if (s1 === '$font-custom-path') {
                    fontScssVar[s1] = fontScssVar[s1].replace(/"/ig, '');
                }
            }
            cssvarDefaultContent += val;
        });


        cssvarDefaultContent = `:root {\n${cssvarDefaultContent}}\n`;
        const newPath = cPath.replace('core', 'core-temp');

        fs.outputFileSync(
            newPath,
            scss2cssContent
        );

        fs.outputFileSync(
            newPath.replace('.scss', '-def-default.css'),
            cssvarDefaultContent
        );
    });

    // generate [core-temp/index.scss, core-temp/index-noreset.scss, core-temp/reset.scss]
    const indexPaths = glob.sync('src/core/@(index|index-noreset|reset).scss');
    indexPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');
        fs.outputFileSync(
            p.replace('core', 'core-temp'),
            indexScssContent
        );
    });

    // copy [core/util/**.scss] to [core-temp/util/**.scss]
    const utilPaths = glob.sync('src/core/util/**.scss');
    utilPaths.forEach(p => {
        const indexScssContent = fs.readFileSync(p, 'utf8');

        fs.outputFileSync(
            p.replace('core', 'core-temp'),
            indexScssContent
        );
    });

    // generate [base] style
    const coreBasePaths = glob.sync('src/core/base/*.scss');
    coreBasePaths.forEach(cPath => {
        let mainScssContent = fs.readFileSync(cPath, 'utf8');

        fs.outputFileSync(
            cPath.replace('core', 'core-temp'),
            mainScssContent
        );

        if (path.basename(cPath) === '_typography.scss') {
            Object.keys(fontScssVar).forEach(key => {
                const reg = new RegExp(`#{${key.replace('$', '\\$')}}`, 'ig');
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
            .process(css)
            .css

        fs.outputFileSync(
            cPath.replace('.scss', '-def-default.css').replace('core', 'core-temp'),
            output
        );
    });

    logger.success('[Core] Generate scss-var-to-css-var.scss & css-var-def-default.scss for lib/ es/ successfully!');
};
