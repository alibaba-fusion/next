const path = require('path');
const _ = require('lodash');
const ejs = require('ejs');
const { logger, replaceExt, getComPathName } = require('../../../utils');

const cwd = process.cwd();
const IMPORT_REG = /import {(.+)} from ['"]@alifd\/next['"];?/;
const IMPORT_LIB_REG = /import (.+) from ['"]@alifd\/next\/lib\/(.+)['"];?/;
const IMPORT_LIB_REG_G = /^import .+ from ['"]@alifd\/next\/lib\/(.+)['"];?/gm;

module.exports = function(content) {
    return fixImport.call(this, content, this.resourcePath);
};

function fixImport(code, resourcePath) {
    const matched = code.match(IMPORT_REG);
    const matchedLib = code.match(IMPORT_LIB_REG_G);

    if (matched) {
        const components = matched[1].replace(/\s/g, '').split(',');
        const importStrings = components
            .map(component => {
                const componentPath = path.join(cwd, 'src', getComPathName(component));
                const relativePath = path.relative(path.dirname(resourcePath), componentPath);

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
            const component = element.match(IMPORT_LIB_REG)[1].replace(/\s/g, '');
            const afterLib = element.match(IMPORT_LIB_REG)[2].replace(/\s/g, '');
            const libPath = path.join(cwd, 'src', afterLib);
            const newLibPath = path.relative(path.dirname(resourcePath), libPath);
            const newLibStr = `
import ${component} from'${newLibPath}'`;

            code = code.replace(IMPORT_LIB_REG, newLibStr);
        });
    }

    if (process.env.NODE_ENV === 'development') {
        const adaptorTplPath = path.resolve(__dirname, '../../tpls/adaptor.ejs');
        this.addDependency(adaptorTplPath);

        const scripts = ['/common.js', `/${replaceExt(path.relative(cwd, this.resourcePath), '.js')}`];

        ejs.renderFile(
            adaptorTplPath,
            {
                scripts,
            },
            (err, html) => {
                if (err) {
                    logger.error(`Render theme demo failed: ${err}`);
                } else {
                    const htmlPath = replaceExt(path.relative(path.join(cwd, 'docs'), this.resourcePath), '.html');
                    this.emitFile(htmlPath, html);
                }
            }
        );

        return `
        ${code.replace('export default', 'const Adaptor = ')};
        import AdaptorGenerate from '@alifd/adaptor-generate';
        AdaptorGenerate(Adaptor);
        if (module.hot) {
            module.hot.accept();
        }
        `;
    }

    return code;
}
