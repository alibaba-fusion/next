const loaderUtils = require('loader-utils');
const createDocParser = require('@alifd/doc-parser');
const { mutliLangHandler, getReadmeDoc, getDemosDoc } = require('../docs/generate-htmls');
const fs = require('fs-extra');
const nunjucks = require('nunjucks');
const _ = require('lodash');
const path = require('path');
const { logger } = require('../utils');

const tplPath = path.resolve(__dirname, '../docs/tpl/demo.html');
const pkgPath = path.join(process.cwd(), 'package.json');

module.exports = async function() {
    const pkgInfo = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
    const { name: pName, version: pVersion } = pkgInfo;
    const options = loaderUtils.getOptions(this);
    const {
        demoPaths,
        comp: { name },
        lang,
    } = options;
    const [demosDoc, readmeDoc] = await serverCompiledDocs(this.resourcePath, demoPaths, lang);
    nunjucks.render(
        tplPath,
        {
            comp: {
                groupName: pName,
                name: name,
                version: pVersion,
            },
            readmeDoc,
            demosDoc: demosDoc.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)),
        },
        (err, html) => {
            if (err) {
                logger.error(`Render index.html failed: ${err}`);
                process.exitCode = 1;
            } else {
                const htmlPath = path.relative(
                    path.join(process.cwd(), 'docs'),
                    this.resourcePath.replace(/\.(en-us\.)?md$/, '.html')
                );
                this.emitFile(htmlPath, html);
            }
        }
    );
};

async function serverCompiledDocs(apiFrom, demoFiles, lang) {
    const docParser = createDocParser({});

    let readmeDoc;
    let demosDoc = [];

    // 2.1 compile apiFrom
    const apiFileExists = await fs.exists(apiFrom);
    if (apiFileExists) {
        readmeDoc = await getReadmeDoc(apiFrom, docParser);
    } else {
        logger.warn(`does not has apiFrom`);
    }
    // 2.2 compile demos
    const folder = path.basename(apiFrom).replace('.md', '');
    for (const demoFilePath of demoFiles) {
        const name = _.camelCase(path.basename(demoFilePath).replace('.md', ''));
        const demoFileData = await fs.readFile(demoFilePath, 'utf8');

        const mutliLanguageDocs = mutliLangHandler(demoFileData);

        if (lang === 'en-us') {
            // 增加一份英文文档
            demosDoc.push(await getDemosDoc(mutliLanguageDocs.en, docParser, name, demoFilePath, folder));
        } else {
            demosDoc.push(await getDemosDoc(mutliLanguageDocs.cn, docParser, name, demoFilePath, folder));
        }
    }

    return [demosDoc, readmeDoc];
}
