const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');

const cwd = process.cwd();
const { logger } = require('../utils');
const { scss2css, compileScss } = require('./scss2css');

module.exports = function() {
    // generate temp files for [other component]
    const variablesPaths = glob.sync(path.join(cwd, 'src', '*', 'scss/variable.scss'));
    variablesPaths.forEach(varsPath => {
        const varsContent = fs.readFileSync(varsPath, 'utf8');
        let scss2cssContent = '';
        let cssvarDefaultContent = '';
        const componentName = path.basename(path.dirname(path.dirname(varsPath)));

        varsContent.replace(/\n(\$[\d\s\S-]*?): ([\s\S\d-]*?);/g, (all, s1, s2) => {
            if (componentName === 'grid' && s1 === '$breakpoints') {
                return;
            }

            const buildtimeResolvedValue = compileScss(all, s1, path.resolve(varsPath, '../../'), 'main.scss');
            if (s2.match(/\$css-prefix/)) {
                const result = buildtimeResolvedValue;
                scss2cssContent += `${s1}: ${result};\n`
            } else {
                scss2cssContent += `${s1}: var(${s1.replace('$', '--')}, ${buildtimeResolvedValue});\n`;
            }

            cssvarDefaultContent += scss2css(all, s1, s2, path.resolve(varsPath, '../../'), 'main.scss');
        });

        cssvarDefaultContent = `:root {\n${cssvarDefaultContent}}\n`;

        fs.writeFileSync(
            path.join(cwd, 'lib', componentName, 'scss/scss-var-to-css-var.scss'),
            scss2cssContent
        );
        fs.writeFileSync(
            path.join(cwd, 'es', componentName, 'scss/scss-var-to-css-var.scss'),
            scss2cssContent
        );

        fs.writeFileSync(
            path.join(cwd, 'lib', componentName, 'scss/css-var-def-default.scss'),
            cssvarDefaultContent
        );
        fs.writeFileSync(
            path.join(cwd, 'es', componentName, 'scss/css-var-def-default.scss'),
            cssvarDefaultContent
        );
    });

    logger.success('[Component] Generate scss-var-to-css-var.scss & css-var-def-default.scss for lib/ es/ successfully!');
};
