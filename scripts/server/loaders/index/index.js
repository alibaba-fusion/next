const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const { marked, logger } = require('../../../utils');

const tplsPath = path.resolve(__dirname, '../../tpls');
const headerTplPath = path.resolve(tplsPath, 'partials/header.ejs');
const indexTplPath = path.resolve(tplsPath, 'index.ejs');

module.exports = function (content) {
    const options = loaderUtils.getOptions(this);
    const links = options.links;
    const lang = options.lang;
    const dir = options.dir;
    const componentName = options.componentName;
    const resourcePath = this.resourcePath;

    this.addDependency(headerTplPath);
    this.addDependency(indexTplPath);
    this.addDependency(resourcePath);

    const lines = content.split(/\n/g);
    // const startIndex = lines.findIndex(line => /^-/.test(line));
    const endIndex = lines.findIndex(line => /^-{3,}/.test(line));
    const newContent = lines.slice(endIndex + 1).join('\n');

    ejs.renderFile(
        indexTplPath,
        {
            links,
            lang,
            dir,
            name: 'index',
            readmeHTML: marked(newContent),
        },
        (err, html) => {
            if (err) {
                logger.error(`Render index.html failed: ${err}`);
            } else {
                const htmlPath = path.join(componentName, 'index.html');
                this.emitFile(htmlPath, html);
            }
        }
    );

    return '';
};
