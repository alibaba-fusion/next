const path = require('path');
const _ = require('lodash');

const cwd = process.cwd();
const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
const IMPORT_LIB_REG = /import (.+) from ['"]@alifd\/next\/lib\/(.+)['"];?/;
const IMPORT_LIB_REG_G = /^import .+ from ['"]@alifd\/next\/lib\/(.+)['"];?/gm;

module.exports = function(content) {
    return fixImport(content, this.resourcePath);
};

function fixImport(code, resourcePath) {
    const matched = code.match(IMPORT_REG);
    const matchedLib = code.match(IMPORT_LIB_REG_G);

    if (matched) {
        const components = matched[1].replace(/\s/g, '').split(',');

        const importStrings = components
            .map(component => {
                const componentPath = path.join(
                    cwd,
                    'src',
                    _.kebabCase(component)
                );
                const relativePath = path.relative(
                    path.dirname(resourcePath),
                    componentPath
                );

                return `
import ${component} from '${relativePath}';
import '${path.join(relativePath, 'style.js')}';
`;
            })
            .join('\n');

        code = code.replace(IMPORT_REG, importStrings);
    }

    if (matchedLib) {
        matchedLib.forEach(element => {
            const component = element
                .match(IMPORT_LIB_REG)[1]
                .replace(/\s/g, '');
            const afterLib = element
                .match(IMPORT_LIB_REG)[2]
                .replace(/\s/g, '');
            const libPath = path.join(cwd, 'src', afterLib);
            const newLibPath = path.relative(
                path.dirname(resourcePath),
                libPath
            );
            const newLibStr = `
import ${component} from'${newLibPath}'`;

            code = code.replace(IMPORT_LIB_REG, newLibStr);
        });
    }

    return code;
}
