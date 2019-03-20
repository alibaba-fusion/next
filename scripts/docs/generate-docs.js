const path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const createDocParser = require('@alifd/doc-parser');
const { logger, getComponentName } = require('../utils');

const SRC_FOLDER = 'docs';
const LANGDOC_FOLDER = 'docs-lang';
const COMPILED_FOLDER = 'compiled_docs';

const cwd = process.cwd();

module.exports = function*() {
    const srcDir = path.join(cwd, SRC_FOLDER);
    const targetDir = path.join(cwd, LANGDOC_FOLDER);
    fs.removeSync(targetDir);
    fs.copySync(srcDir, targetDir);

    try {
        // 编译文档
        yield buildCompiledDocs(cwd);
    } finally {
        fs.remove(targetDir);
    }
};

function* buildDemoMappingList(srcFolder, toFile) {
    const folders = yield fs.readdir(srcFolder);
    let content = 'module.exports = {';

    for (const folder of folders) {
        const folderPath = path.join(srcFolder, folder);
        const folderStat = yield fstat(folderPath);

        // check if the path is folder
        if (folderStat && folderStat.isDirectory()) {
            content += `\n  '${getComponentName(folder)}':  {
    demos: [`;

            const demoFolderPath = path.join(folderPath, 'demo');
            const demoFiles = yield fs.readdir(demoFolderPath);
            for (const demoFile of demoFiles) {
                if (demoFile.endsWith('.md')) {
                    const demoFilePath = `${COMPILED_FOLDER}/${folder}/demo/${demoFile}`;
                    content += `
      '/${demoFilePath}',`;
                }
            }
            content += `
    ],\n
    readme: [`;

            const readmePath = path.join(folderPath);
            const readmeFiles = yield fs.readdir(readmePath);

            for (const readmeFile of readmeFiles) {
                if (readmeFile.endsWith('.md')) {
                    const readmeFilePath = `${COMPILED_FOLDER}/${folder}/${readmeFile}`;
                    content += `
      '/${readmeFilePath}',`;
                }
            }
            content += `
    ],
  },`;
        }
    }
    content += '\n};\n';
    yield fs.writeFile(toFile, content);
}

function* fstat(file) {
    try {
        return yield fs.stat(file);
    } catch (err) {
        logger.warn(err);
        return false;
    }
}

function* buildCompiledDocs(cwd) {
    const from = path.join(cwd, LANGDOC_FOLDER);
    const to = path.join(cwd, COMPILED_FOLDER);
    const componentListPath = path.join(to, 'components.json');
    const demoMappingFilePath = path.join(to, 'mapping.js');
    const docParser = createDocParser({});

    // 1. clear cache
    yield fs.remove(to);

    // 2. compile demos (including /demo, index.md, history.md)
    const ignoreFolders = ['core'];
    const componentList = [];
    const folders = yield fs.readdir(from);
    for (const folder of folders) {
        if (/^\./.test(folder) || ignoreFolders.indexOf(folder) !== -1) {
            continue;
        }
        const apiFrom = path.join(from, folder, 'index.md');
        const enAPIFrom = path.join(from, folder, 'index.en-us.md');
        const demoBaseFrom = path.join(from, folder, 'demo');

        const apiTo = path.join(to, folder, 'index.md');
        const enAPITo = path.join(to, folder, 'index.en-us.md');
        const demoBaseTo = path.join(to, folder, 'demo');

        yield fs.mkdirp(demoBaseTo);

        // 2.1 compile apiFrom
        const apiFileExists = yield fs.exists(apiFrom);
        if (apiFileExists) {
            const { apiMdParsed, apiMdRendered } = yield compileApiFrom(
                apiFrom,
                docParser
            );

            componentList.push({
                english: apiMdParsed.meta.title,
                chinese: apiMdParsed.meta.chinese,
                family: apiMdParsed.meta.family,
            });
            yield fs.writeFile(apiTo, apiMdRendered, 'utf8');
        } else {
            logger.warn(`${folder} does not has index.md`);
        }

        const enAPIFileExists = yield fs.exists(enAPIFrom);
        if (enAPIFileExists) {
            const { apiMdRendered } = yield compileApiFrom(
                enAPIFrom,
                docParser
            );
            yield fs.writeFile(enAPITo, apiMdRendered, 'utf8');
        } else {
            logger.warn(`${folder} does not has index.en-us.md`);
        }
        // 2.2 compile historyFrom

        // 2.3 compile demos
        const demoFolderStat = yield fstat(demoBaseFrom);
        if (demoFolderStat) {
            const demoFiles = yield fs.readdir(demoBaseFrom);
            for (const demoFile of demoFiles) {
                const demoFilePath = path.join(demoBaseFrom, demoFile);
                const demoFileData = yield fs.readFile(demoFilePath, 'utf8');

                const mutliLanguageDocs = mutliLangHandler(demoFileData);

                const cnDoc = mutliLanguageDocs.cn;
                const cnDemoContent = docParser.parse(cnDoc);
                cnDemoContent.html = docParser.render(cnDemoContent.body);
                const cnDemoContentOutput = JSON.stringify(cnDemoContent);
                const cnDemoFileTo = path.join(demoBaseTo, demoFile);
                yield fs.writeFile(cnDemoFileTo, cnDemoContentOutput, 'utf8');

                if (mutliLanguageDocs.en) {
                    // 把原来带有多语言标识符的文档替换为纯中文文档
                    yield fs.writeFile(demoFilePath, cnDoc, 'utf8');
                    // yield fs.writeFile(path.join(demoLangFrom, demoFile), cnDoc, 'utf8');

                    // 增加一份英文文档
                    const enDoc = mutliLanguageDocs.en;
                    const filename = `${path.basename(
                        demoFile,
                        '.md'
                    )}.en-us.md`;
                    const enDemoFilePath = path.join(demoBaseFrom, filename);
                    yield fs.writeFile(enDemoFilePath, enDoc, 'utf8');

                    // 另外再编译一份英文文档
                    const enDemoContent = docParser.parse(enDoc);
                    enDemoContent.html = docParser.render(enDemoContent.body);
                    const enDemoContentOutput = JSON.stringify(enDemoContent);
                    const enDemoFileTo = path.join(demoBaseTo, filename);
                    yield fs.writeFile(
                        enDemoFileTo,
                        enDemoContentOutput,
                        'utf8'
                    );
                }
            }
        } else {
            logger.warn(`${folder} does not has demo folder`);
        }
    }

    // 3. generate component list
    yield fs.writeFile(
        componentListPath,
        JSON.stringify(componentList),
        'utf8'
    );

    // 4. generate demo mapping list
    yield buildDemoMappingList(to, demoMappingFilePath);
}

function mutliLangHandler(orginData = '') {
    const enDocReg = /:{3}lang(.|\n|\r)*:{3}/g;
    const jsxReg = /`{3,}(.|\n|\r)*`{3,}/g;
    const toDeleteReg = /import\s*('|")([^'"]+?)(?:\1);?\n?/g;

    let enDocs = orginData.match(enDocReg);
    enDocs = enDocs ? enDocs[0] : '';

    // 把 :::lang=xxx去掉
    enDocs = enDocs.replace(/:{3}(lang[=\w-]*)?/g, '');

    let jsxCode = orginData.match(jsxReg);
    jsxCode = jsxCode ? jsxCode[0] : '';
    jsxCode = jsxCode.replace(toDeleteReg, '');

    const cnDocs = orginData.replace(enDocReg, '').replace(jsxReg, '');

    const enVersrionText = enDocs ? `${enDocs}\n\n---\n\n${jsxCode}` : '';
    return {
        cn: cnDocs + jsxCode,
        en: enVersrionText,
    };
}

function* compileApiFrom(apiFrom, docParser) {
    const apiMdFile = yield fs.readFile(apiFrom, 'utf8');
    const apiMdParsed = docParser.parse(apiMdFile);
    const apiMdRendered = docParser.simpleRender(apiMdParsed.body);
    const $ = cheerio.load(`<div id="cheerio-load">${apiMdRendered}</div>`);
    $('#api').after('<split></split>');
    const html = $('#cheerio-load').html();
    const [meta, api] = html.split('<split></split>');
    return {
        apiMdParsed,
        apiMdRendered: JSON.stringify({ meta, api }),
    };
}
