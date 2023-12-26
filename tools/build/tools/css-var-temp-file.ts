import fs = require('fs-extra');
import path = require('path');
import glob = require('glob');
import { CWD, SRC_DIR_PATH, logger } from '../../utils';
import { collectVarsInfo } from './utils/collect-vars-info';
import shouldBeCssVar from './utils/should-be-css-var';

const cwd = CWD;

export default async function () {
    // generate temp files for [other component]
    const variablesPaths = glob.sync(path.join(SRC_DIR_PATH, '*', 'scss/variable.scss'));

    await Promise.all(
        variablesPaths.map(async varsPath => {
            const componentName = path.basename(path.dirname(path.dirname(varsPath)));
            const mainScssPath = path.resolve(path.dirname(varsPath), '../main.scss');

            const varsInfo = await collectVarsInfo(varsPath, mainScssPath);

            let scss2cssContent = '';
            Object.entries(varsInfo).forEach(([name, { value, resolvedValue }]) => {
                if (componentName === 'grid' && name === 'breakpoints') {
                    scss2cssContent += `$${name}: ${value};`;
                } else if (shouldBeCssVar(name, value)) {
                    scss2cssContent += `$${name}: var(--${name}, ${resolvedValue});\n`;
                    if (componentName !== 'animate')
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
            cssvarDefaultContent = cssvarDefaultContent
                ? `:root {\n${cssvarDefaultContent}}\n`
                : '';

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
        })
    );

    logger.log('[Component] add scss-var-to-css-var.scss & css-var-def-default.scss successfully!');
};
