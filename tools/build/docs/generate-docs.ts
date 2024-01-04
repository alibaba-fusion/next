/* eslint-disable @typescript-eslint/no-explicit-any */
import path = require('path');
import fs = require('fs-extra');
import cheerio = require('cheerio');
import _ = require('lodash');
import glob = require('glob');
import createDocParser = require('@alifd/doc-parser');
import { getComponentName, marked, parse, transform } from './utils';
import { getOnlineDemos } from './gen-demo-insert-scripts';
import { getGlobalControl } from './render-creator';
import { CWD, logger, SRC_DIR_PATH, warn } from '../../utils';

const LANGDOC_FOLDER = 'docs-lang';
const COMPILED_FOLDER = 'compiled_docs';
const SUPPORT_LANGS = ['zh-CN', 'en-US'];
const cwd = CWD;

function* fstat(file: string) {
    try {
        return (yield fs.stat(file)) as fs.Stats;
    } catch (err) {
        logger.warn(err);
        return false;
    }
}

function* compileApiFrom(apiFrom: string, docParser: any) {
    const apiMdFile: string = yield fs.readFile(apiFrom, 'utf8');
    const apiMdParsed = docParser.parse(apiMdFile);
    // const apiMdRendered = docParser.simpleRender(apiMdParsed.body);
    // TODO 统一所有的mdRender
    const apiMdRendered = marked(apiMdParsed.body);
    const $ = cheerio.load(`<div id="cheerio-load">${apiMdRendered}</div>`);
    $('#API').before('<split></split>');
    const html = $('#cheerio-load').html();
    const [meta, api] = html!.split('<split></split>');
    return {
        apiMdParsed,
        apiMdRendered: JSON.stringify({ meta, api }),
    };
}

async function transformHTML(code: string, separate = true) {
    if (separate) return `<script>(function(){${await transform(code)}})()</script>`;

    return `<script>${await transform(code)}</script>`;
}

function mutliLangHandler(orginData = '') {
    const enDocReg = /:{3}lang(.|\n|\r)*:{3}/g;
    const jsxReg = /`{3,}(.|\n|\r)*`{3,}/g;
    const toDeleteReg = /import\s*('|")([^'"]+?)(?:\1);?\n?/g;

    const enDocsMatch = orginData.match(enDocReg);
    let enDocs = enDocsMatch ? enDocsMatch[0] : '';

    // 把 :::lang=xxx去掉
    enDocs = enDocs.replace(/:{3}(lang[=\w-]*)?/g, '');

    const jsxCodeMatch = orginData.match(jsxReg);
    let jsxCode = jsxCodeMatch ? jsxCodeMatch[0] : '';
    jsxCode = jsxCode.replace(toDeleteReg, '');

    const cnDocs = orginData.replace(enDocReg, '').replace(jsxReg, '');

    const enVersrionText = enDocs ? `${enDocs}\n\n---\n\n${jsxCode}` : '';
    return {
        cn: cnDocs + jsxCode,
        en: enVersrionText,
    };
}

function* buildDemoMappingList(srcFolder: string, toFile: string) {
    const folders: string[] = yield fs.readdir(srcFolder);
    let content = 'module.exports = {';

    for (const folder of folders) {
        const folderPath = path.join(srcFolder, folder);
        const folderStat: fs.Stats = yield fstat(folderPath);

        // check if the path is folder
        if (folderStat && folderStat.isDirectory()) {
            content += `\n  '${getComponentName(folder)}':  {
    demos: [`;

            const demoFolderPath = path.join(folderPath, 'demo');
            const demoFiles: string[] = yield fs.readdir(demoFolderPath);
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
            const readmeFiles: string[] = yield fs.readdir(readmePath);

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

function parseLangTitle(text: string) {
    const [_, lang, query] = text.match(/^\s*(zh-CN|en-US)\s*(.*)/) || [];
    if (!_) {
        return null;
    }

    return {
        lang,
        params: Object.fromEntries(new URLSearchParams(query).entries()),
    };
}

function* buildCompiledDocs(cwd: string) {
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
    const folders: string[] = yield fs.readdir(from);
    const globalControls = `
    import { Balloon } from '@alifd/next';
    import { Loading } from '@alifd/next';
    import { Message } from '@alifd/next';
    window.loadingRenderScript = function(loading, showMessage=true){
        try{
            if(loading){
                ReactDOM.render(<Loading visible={true} fullScreen/>, document.getElementById('demo-loading-state'));
                return;
            }
            ReactDOM.unmountComponentAtNode(document.getElementById('demo-loading-state'));
            showMessage && Message.success(window.localStorage.liveDemo === "true" ? "切换到在线编辑模式成功，点击代码区域即可编辑预览。" : "切换到预览模式成功，代码展示为只读模式。");
        }catch(e){
            Message.error(window.localStorage.liveDemo === "true" ? "切换到在线编辑模式失败，请联系管理员。" : "切换到预览模式失败，请联系管理员。")
        }
    }

    window.demoNames = [];
    window.renderFuncs = [];
    ${getGlobalControl()}`;

    for (const folder of folders) {
        const stats = fs.statSync(path.join(from, folder));
        if (!stats.isDirectory() || ignoreFolders.indexOf(folder) > -1) {
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
        const apiFileExists = fs.existsSync(apiFrom);
        if (apiFileExists) {
            const { apiMdParsed, apiMdRendered } = yield compileApiFrom(apiFrom, docParser);

            componentList.push({
                english: apiMdParsed.meta.title,
                chinese: apiMdParsed.meta.chinese,
                family: apiMdParsed.meta.family,
            });

            const apiMdRenderedObj = JSON.parse(apiMdRendered);
            apiMdRenderedObj.renderHtml = (yield transformHTML(globalControls)) as string;
            yield fs.writeFile(apiTo, `${JSON.stringify(apiMdRenderedObj)}`, 'utf8');
        } else {
            logger.warn(`${folder} does not has index.md`);
        }

        const enAPIFileExists = fs.existsSync(enAPIFrom);
        if (enAPIFileExists) {
            const { apiMdRendered } = yield compileApiFrom(enAPIFrom, docParser);
            yield fs.writeFile(enAPITo, apiMdRendered, 'utf8');
        } else {
            logger.warn(`${folder} does not has index.en-us.md`);
        }
        // 2.2 compile historyFrom

        // 2.3 compile demos
        const demoFolderStat: fs.Stats = yield fstat(demoBaseFrom);
        if (demoFolderStat) {
            const demoFiles: string[] = yield fs.readdir(demoBaseFrom);
            for (const demoFile of demoFiles) {
                const name = _.camelCase(demoFile.replace('.md', ''));
                const demoFilePath = path.join(demoBaseFrom, demoFile);
                const demoFileData: string = yield fs.readFile(demoFilePath, 'utf8');

                const mutliLanguageDocs = mutliLangHandler(demoFileData);

                const cnDoc = mutliLanguageDocs.cn;
                const cnDemoContent = docParser.parse(cnDoc);
                cnDemoContent.name = name;
                cnDemoContent.html = docParser.render(cnDemoContent.body);
                cnDemoContent.renderScript = (yield transformHTML(
                    yield getOnlineDemos([demoFilePath], getComponentName(folder))
                )) as string;
                const cnDemoContentOutput = JSON.stringify(cnDemoContent);
                const cnDemoFileTo = path.join(demoBaseTo, demoFile);
                yield fs.writeFile(cnDemoFileTo, cnDemoContentOutput, 'utf8');

                if (mutliLanguageDocs.en) {
                    // 把原来带有多语言标识符的文档替换为纯中文文档
                    yield fs.writeFile(demoFilePath, cnDoc, 'utf8');
                    // yield fs.writeFile(path.join(demoLangFrom, demoFile), cnDoc, 'utf8');

                    // 增加一份英文文档
                    const enDoc = mutliLanguageDocs.en;
                    const filename = `${path.basename(demoFile, '.md')}.en-us.md`;
                    const enDemoFilePath = path.join(demoBaseFrom, filename);
                    yield fs.writeFile(enDemoFilePath, enDoc, 'utf8');

                    // 另外再编译一份英文文档
                    const enDemoContent = docParser.parse(enDoc);
                    enDemoContent.name = name;
                    enDemoContent.html = docParser.render(enDemoContent.body);
                    enDemoContent.renderScript = (yield transformHTML(
                        yield getOnlineDemos([enDemoFilePath], getComponentName(folder))
                    )) as string;
                    const enDemoContentOutput = JSON.stringify(enDemoContent);
                    const enDemoFileTo = path.join(demoBaseTo, filename);
                    yield fs.writeFile(enDemoFileTo, enDemoContentOutput, 'utf8');
                }
            }
        } else {
            logger.warn(`${folder} does not has demo folder`);
        }
    }

    // 3. generate component list
    yield fs.writeFile(componentListPath, JSON.stringify(componentList), 'utf8');

    // 4. generate demo mapping list
    yield buildDemoMappingList(to, demoMappingFilePath);
}

function generateDocsLangFolder() {
    const components = fs.readdirSync(SRC_DIR_PATH);
    const outputMap = new Map<string, string>();
    fs.removeSync(path.resolve(CWD, LANGDOC_FOLDER));
    for (const componentDirName of components) {
        const basePath = path.resolve(SRC_DIR_PATH, componentDirName);
        const docBasePath = path.resolve(basePath, '__docs__');
        const destBasePath = path.resolve(CWD, LANGDOC_FOLDER, componentDirName);

        if (!fs.existsSync(docBasePath)) {
            continue;
        }
        const addCopy = (file: string, text?: string) => {
            if (text || fs.existsSync(file)) {
                outputMap.set(
                    file.replace(docBasePath, destBasePath),
                    text || fs.readFileSync(file, 'utf-8')
                );
            }
        };
        // copy index.md
        const indexMdPath = path.resolve(docBasePath, 'index.md');
        const indexEnMdPath = path.resolve(docBasePath, 'index.en-us.md');
        addCopy(indexMdPath);
        addCopy(indexEnMdPath);

        // copy demo

        const demoBase = path.resolve(docBasePath, 'demo');
        if (!fs.existsSync(demoBase)) {
            warn('no demo', demoBase);
            continue;
        }
        const demos = fs.readdirSync(demoBase);
        for (const name of demos) {
            const demoPath = path.resolve(demoBase, name);
            if (!fs.statSync(demoPath).isDirectory()) {
                warn('Detect unknown demo', demoPath);
                continue;
            }
            const jsPath = path.resolve(demoPath, 'index.tsx');
            const cssPath = path.resolve(demoPath, 'index.css');
            const mdPath = path.resolve(demoPath, 'index.md');
            if (!fs.existsSync(mdPath)) {
                warn('Detect demo index.md failed', mdPath);
                continue;
            }
            const mdText = fs.readFileSync(mdPath, 'utf-8');
            const mdParsed: any = parse(mdText);
            const langTitleNodes: any[] = mdParsed.children.filter(
                (child: any) =>
                    child.type === 'heading' &&
                    child.depth === 1 &&
                    child.children?.[0]?.type === 'text' &&
                    child.children?.[0]?.value &&
                    /^\s*(zh-CN|en-US)/.test(child.children?.[0]?.value)
            );
            const mdTextLines = mdText.split('\n');
            const langMetaMap = new Map<
                string,
                { lang: string; params: Record<string, string>; title: string; body: string }
            >();
            langTitleNodes.forEach((node, i) => {
                const line = node.position.start.line;
                const { lang, params } = parseLangTitle(node.children[0].value)!;
                const nextLine =
                    langTitleNodes[i + 1]?.position.start.line || mdTextLines.length + 1;
                const selfLines = mdTextLines.slice(line, nextLine - 1);
                const selfParsed = parse(selfLines.join('\n'));
                const titleNodes = selfParsed.children.filter((child: any) => {
                    return child.type === 'heading' && child.depth === 1;
                });
                if (titleNodes.length !== 1) {
                    throw new Error(`Demo 没有标题：${demoPath}`);
                }
                const titleLineIndex = titleNodes[0].position.start.line - 1;
                langMetaMap.set(lang, {
                    lang,
                    params,
                    title: selfLines.slice(titleLineIndex, titleLineIndex + 1).join(''),
                    body: selfLines.slice(titleLineIndex + 1).join('\n'),
                });
            });
            const jsCode = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, 'utf-8') : '';
            const cssCode = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf-8') : '';
            for (const lang of SUPPORT_LANGS) {
                const meta = langMetaMap.get(lang);
                if (!meta) {
                    continue;
                }
                const mergedMdText = `${meta.title}\n\n${Object.keys(meta.params)
                    .map(key => {
                        return `- ${key}: ${meta.params[key]}`;
                    })
                    .join('\n')}\n${meta.body}\n---\n\n${
                    jsCode && `\`\`\`\`jsx\n${jsCode}\n\`\`\`\``
                }\n${cssCode && `\`\`\`\`css\n${cssCode}\n\`\`\`\``}`;
                const fileSuffix = lang === 'zh-CN' ? '' : lang.toLowerCase();
                const langMdPath = path.resolve(
                    demoBase,
                    `${name}${fileSuffix ? `.${fileSuffix}` : ''}.md`
                );
                addCopy(langMdPath, mergedMdText);
            }
        }
    }
    outputMap.forEach((text, file) => {
        fs.outputFileSync(file, text);
    });
    const docLangFolder = path.resolve(cwd, LANGDOC_FOLDER);
    return docLangFolder;
}

export default function* () {
    const targetDir = generateDocsLangFolder();
    try {
        // 编译文档
        yield buildCompiledDocs(cwd);
    } finally {
        fs.remove(targetDir);
    }
}
