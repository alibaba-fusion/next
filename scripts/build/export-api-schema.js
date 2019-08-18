const path = require('path');
const fs = require('fs-extra');
const apiExtractor = require('@alifd/api-extractor');
// const tsgen = require('@alifd/dts-generator');
const { logger } = require('../utils');
const config = require('../config');

const cwd = process.cwd();
const parentMap = config.child2parent;
const parentPathMap = {};

Object.keys(parentMap).forEach(child => {
    const parent = parentMap[child];
    const component = parent.split('.')[0].toLowerCase();

    parentPathMap[child] = {
        name: parent,
        path: path.join(cwd, 'src', component),
    };
});

module.exports = function(options) {
    const libPath = path.join(cwd, 'lib');
    const entriesPath = path.join(libPath, 'index.d.ts');
    const entries = [];

    options.entries.forEach(entry => {
        const shortName = entry.name;

        if (
            [
                'core',
                'field',
                'locale',
                'mixin-ui-state',
                'util',
                'validate',
            ].indexOf(shortName) > -1
        ) {
            return false;
        }

        const srcComponentPath = path.join(cwd, 'src', shortName);
        const libComponentPath = path.join(cwd, 'lib', shortName);
        const apiInfo = apiExtractor.extract(
            srcComponentPath,
            {},
            parentPathMap
        );

        const apiPath = path.join(libComponentPath, 'api-schema.json');
        const exportDTSPath = path.join(libComponentPath, 'index.d.ts');

        if (apiInfo) {
            const apiString = JSON.stringify(apiInfo, null, 2);

            entries.push(
                `export { default as ${apiInfo.name} } from './${shortName}';\n`
            );

            fs.writeFileSync(apiPath, apiString);
            fs.writeFileSync(
                exportDTSPath,
                `import ${apiInfo.name} from '../../types/${shortName}';
export * from '../../types/${shortName}';
export default ${apiInfo.name};
`
            );
            // tsgen(apiInfo).then(apiData => {
            //     fs.writeFileSync(exportDTSPath, apiData.message);
            // });
        } else {
            logger.warn(`Can not generate ${apiPath}`);
        }
    });

    // generate d.ts for locale
    ['zh-cn', 'en-us', 'ja-jp', 'zh-tw'].forEach(file => {
        const localePath = path.join(cwd, 'lib', 'locale', `${file}.d.ts`);
        fs.writeFileSync(
            localePath,
            `export * from '../../types/locale/${file}';`
        );
    });

    // hack Field
    entries.push('export const Field: any;');

    fs.writeFileSync(entriesPath, entries.join(''));
};
