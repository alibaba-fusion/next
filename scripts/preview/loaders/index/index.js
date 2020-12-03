const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const { marked, logger } = require('../../../utils');
const { replaceExt } = require('../../../utils');
const { getDemos } = require('./demo-parser');
const { getGlobalControl } = require('./render-creator');

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

    let [demoInsertScript, demoMetas] = getDemos(demoPaths, lang, dir, this.context, resourcePath);

    const lines = content.split(/\n/g);
    const endIndex = lines.findIndex(line => /^-{3,}/.test(line));
    const newContent = lines.slice(endIndex + 1).join('\n');
    let [readmeFormer, readmeLatter] = newContent.split('## API');
    readmeFormer = marked(readmeFormer);
    readmeLatter = marked(`## API\n${readmeLatter}`);

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
        import Loading from '${path.relative(path.dirname(resourcePath), path.join(cwd, 'src', 'loading'))}';
        import Message from '${path.relative(path.dirname(resourcePath), path.join(cwd, 'src', 'message'))}';
        import Balloon from '${path.relative(path.dirname(resourcePath), path.join(cwd, 'src', 'balloon'))}';
        const Tooltip = Balloon.Tooltip;
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
        ${getGlobalControl()}
        ${demoInsertScript}
    `;

    return script;
};
