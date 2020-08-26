const path = require('path');
const fs = require('fs-extra');
const { components } = require('./config');
const { logger, getComponentName } = require('./utils');

const cwd = process.cwd();
const hasEntry = component =>
    ['core', 'locale', 'mixin-ui-state', 'util', 'validate'].indexOf(
        component
    ) === -1;

const indexJSPath = path.join(cwd, 'src', 'index.js');
const indexJSContent = components
    .map(component => {
        if (!hasEntry(component)) {
            return '';
        }

        const name = getComponentName(component);
        return `export { default as ${name} } from './${component}';\n`;
    })
    .join('');
fs.writeFileSync(indexJSPath, indexJSContent);

const indexNoResetScssPath = path.join(cwd, 'index-noreset.scss');
const indexNoResetScssContent = components
    .map(component => {
        if (!hasEntry(component)) {
            return '';
        }

        return `@import "lib/${component}/main.scss";\n`;
    })
    .join('');
fs.writeFileSync(indexNoResetScssPath, indexNoResetScssContent);

logger.success('Init project successfully!');
