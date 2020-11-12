const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const { marked, logger } = require('../../../utils');
const { replaceExt } = require('../../../utils');
const { getDemos } = require('./demo-parser');

const cwd = process.cwd();

const tplsPath = path.resolve(__dirname, '../../tpls');
const headerTplPath = path.resolve(tplsPath, 'partials/header.ejs');
const indexTplPath = path.resolve(tplsPath, 'index.ejs');
const liveRelativePath = path.resolve(__dirname, './react-live.js');

module.exports = function(content) {
    const options = loaderUtils.getOptions(this);
    const { demoPaths, links, comp, lang, dir } = options;
    const resourcePath = this.resourcePath;

    this.addDependency(headerTplPath);
    this.addDependency(indexTplPath);
    this.addDependency(resourcePath);

    const importSet = [];
    let [demoInsertScript, demoMetas] = getDemos(demoPaths, lang, dir, this.context, resourcePath);
    demoInsertScript = demoInsertScript
        .split('\n')
        /* eslint-disable array-callback-return */
        .filter(line => {
            // TODO 引入/变量 去重
            if (importSet.includes(line)) return;
            if (line.startsWith('import')) importSet.push(line);
            return line;
        })
        .join('\n');
    /* eslint-enable */

    const lines = content.split(/\n/g);
    const endIndex = lines.findIndex(line => /^-{3,}/.test(line));
    const newContent = lines.slice(endIndex + 1).join('\n');
    let [readmeFormer, readmeLatter] = newContent.split('## API');
    readmeFormer = marked(readmeFormer);
    readmeLatter = marked(`## API${readmeLatter}`);

    const scripts = ['/common.js', `/${replaceExt(path.relative(cwd, this.resourcePath), '.js')}`];

    ejs.renderFile(
        indexTplPath,
        {
            scripts,
            links,
            comp,
            lang,
            dir,
            name: 'index',
            readmeHTML: marked(newContent),
            readmeFormer,
            readmeLatter,
            demosDoc: demoMetas,
        },
        (err, html) => {
            if (err) {
                logger.error(`Render index.html failed: ${err}`);
            } else {
                const htmlPath = path.relative(
                    path.join(process.cwd(), 'docs'),
                    this.resourcePath.replace(/\.(en-us\.)?md$/, '.html')
                );
                this.emitFile(htmlPath, html);
            }
        }
    );

    const script = `
        import {LiveProvider, LiveEditor, LiveError, LivePreview} from '${liveRelativePath}';
        window.demoNames = [];
        window.renderFuncs = [];
        ${demoInsertScript}
    `;

    return script;
};
