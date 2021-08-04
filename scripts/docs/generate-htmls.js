const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const babel = require('babel-core');
const _ = require('lodash');
const createDocParser = require('@alifd/doc-parser');
const { logger, getComponentName, marked } = require('../utils');
const { globalControls } = require('./render-creator');
const { getOnlineDemos } = require('./gen-demo-insert-scripts');
const nunjucks = require('nunjucks');

const SRC_FOLDER = 'docs';
const LANGDOC_FOLDER = 'docs-lang';
const COMPILED_FOLDER = 'build';

const cwd = process.cwd();
const tplPath = path.resolve(__dirname, './tpl/demo.html');
const pkgPath = path.join(cwd, 'package.json');

module.exports = async function() {
    const srcDir = path.join(cwd, SRC_FOLDER);
    const targetDir = path.join(cwd, LANGDOC_FOLDER);
    fs.removeSync(targetDir);
    fs.copySync(srcDir, targetDir);

    try {
        // 编译demo
        await buildCompiledDocs(cwd);
    } finally {
        await fs.remove(targetDir);
    }
};

async function fstat(file) {
    try {
        return await fs.stat(file);
    } catch (err) {
        logger.error(err);
        return false;
    }
}

async function buildCompiledDocs(cwd) {
    const pkgInfo = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
    const { name: pName, version: pVersion } = pkgInfo;
    const from = path.join(cwd, LANGDOC_FOLDER);
    const to = path.join(cwd, COMPILED_FOLDER);
    const docParser = createDocParser({});

    // 1. clear cache
    await fs.remove(to);

    await fs.mkdirp(to);

    // 2. compile demos (index.md && demo/*.md) into html
    const ignoreFolders = ['core'];
    const ComponentList = [];
    const folders = await fs.readdir(from);

    for (const folder of folders) {
        const stats = fs.statSync(path.join(from, folder));
        if (!stats.isDirectory() || ignoreFolders.indexOf(folder) > -1) continue;

        const apiFrom = path.join(from, folder, 'index.md');
        const enAPIFrom = path.join(from, folder, 'index.en-us.md');
        const demoBaseFrom = path.join(from, folder, 'demo');
        let readmeDoc, enReadmeDoc;
        let demosDoc = [];
        let enDemosDoc = [];

        // 2.1 compile apiFrom
        const apiFileExists = await fs.exists(apiFrom);
        if (apiFileExists) {
            readmeDoc = await getReadmeDoc(apiFrom, docParser);
        } else {
            logger.warn(`${folder} does not has index.md`);
        }

        const enAPIFileExists = await fs.exists(enAPIFrom);
        if (enAPIFileExists) {
            enReadmeDoc = await getReadmeDoc(enAPIFrom, docParser);
        } else {
            logger.warn(`${folder} does not has index.en-us.md`);
        }

        // 2.2 compile demos
        const demoFolderStat = await fstat(demoBaseFrom);
        if (demoFolderStat) {
            const demoFiles = await fs.readdir(demoBaseFrom);
            for (const demoFile of demoFiles) {
                const name = _.camelCase(demoFile.replace('.md', ''));
                const demoFilePath = path.join(demoBaseFrom, demoFile);
                const demoFileData = await fs.readFile(demoFilePath, 'utf8');

                const mutliLanguageDocs = mutliLangHandler(demoFileData);
                demosDoc.push(await getDemosDoc(mutliLanguageDocs.cn, docParser, name, demoFilePath, folder));
                if (mutliLanguageDocs.en) {
                    // 增加一份英文文档
                    enDemosDoc.push(await getDemosDoc(mutliLanguageDocs.en, docParser, name, demoFilePath, folder));
                }
            }
        } else {
            logger.error(`${folder} does not has demo folder`);
            process.exitCode = 1;
        }

        await fs.mkdirp(path.join(to, folder));

        nunjuckRender(pName, folder, pVersion, readmeDoc, demosDoc, to, 'index.html');

        if (enReadmeDoc && enDemosDoc.length) {
            nunjuckRender(pName, folder, pVersion, enReadmeDoc, enDemosDoc, to, 'index.en-us.html');
        }
    }
}

function nunjuckRender(pName, folder, pVersion, readmeDoc, demosDoc, to, post) {
    nunjucks.render(
        tplPath,
        {
            comp: {
                groupName: pName,
                name: _.startCase(folder),
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
                const htmlPath = path.join(to, folder, post);
                fs.writeFile(htmlPath, html);
            }
        }
    );
}

async function getReadmeDoc(apiFrom, docParser) {
    const { apiMdRendered } = await compileApiFrom(apiFrom, docParser);
    apiMdRendered.renderHtml = transformHTML(globalControls);
    return apiMdRendered;
}

async function getDemosDoc(doc, docParser, name, demoFilePath, folder) {
    const demoContent = docParser.parse(doc);
    demoContent.name = name;
    demoContent.html = docParser.render(demoContent.body);
    demoContent.renderScript = transformHTML(getOnlineDemos([demoFilePath], getComponentName(folder)));
    return demoContent;
}

async function compileApiFrom(apiFrom, docParser) {
    const apiMdFile = await fs.readFile(apiFrom, 'utf8');

    const apiMdParsed = docParser.parse(apiMdFile);
    // const apiMdRendered = docParser.simpleRender(apiMdParsed.body);
    // TODO 统一所有的mdRender
    const apiMdRendered = marked(apiMdParsed.body);
    const $ = cheerio.load(`<div id="cheerio-load">${apiMdRendered}</div>`);
    $('#API').before('<split></split>');
    const html = $('#cheerio-load').html();
    const [meta, api] = html.split('<split></split>');
    return {
        apiMdParsed,
        apiMdRendered: { meta, api },
    };
}

function transformHTML(code, separate = true) {
    if (separate)
        return `<script>(function(){${
            babel.transform(code, {
                sourceMaps: false,
                babelrc: false,
                presets: [
                    require.resolve('babel-preset-react'),
                    require.resolve('babel-preset-env'),
                    require.resolve('babel-preset-stage-0'),
                ],
            }).code
        }})()</script>`;

    return `<script>${
        babel.transform(code, {
            sourceMaps: false,
            babelrc: false,
            presets: [
                require.resolve('babel-preset-react'),
                require.resolve('babel-preset-env'),
                require.resolve('babel-preset-stage-0'),
            ],
        }).code
    }</script>`;
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

module.exports.transformHTML = transformHTML;
module.exports.mutliLangHandler = mutliLangHandler;
module.exports.compileApiFrom = compileApiFrom;
module.exports.getReadmeDoc = getReadmeDoc;
module.exports.getDemosDoc = getDemosDoc;
