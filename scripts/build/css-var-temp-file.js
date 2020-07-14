const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const cwd = process.cwd();
const { logger } = require('../utils');

module.exports = function() {
    const variablesPaths = glob.sync(path.join(cwd, 'src', '*', 'scss/variable.scss'));
    variablesPaths.forEach(varsPath => {
        const varsContent = fs.readFileSync(varsPath, 'utf8');
        let scss2cssContent = '';
        let cssvarDefaultContent = '';

        varsContent.replace(/\n(\$[\d\s\S-]*?): ([\s\S\d-]*?);/g, (all, s1, s2) => {
            // all: $breadcrumb-text-ellipsis-color: $color-text1-3 !default;
            // s1: $breadcrumb-text-ellipsis-color
            // s2: $color-text1-3
            s2 = s2.replace('!default', '').trim();
            const cssvar = s2.match(/^\$/) ? `var(${s2.replace('$', '--')})` : s2.replace('#{$css-prefix}', 'next-');

            scss2cssContent += `${s1}: var(${s1.replace('$', '--')});\n`;
            cssvarDefaultContent += `    ${s1.replace('$', '--')}: ${cssvar};\n`;
        });

        cssvarDefaultContent = `:root {\n${cssvarDefaultContent}}`;
        const componentName = path.basename(path.dirname(path.dirname(varsPath)));

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


    logger.success('Generate scss-var-to-css-var.scss & css-var-def-default.scss for lib/ es/ successfully!');
};
