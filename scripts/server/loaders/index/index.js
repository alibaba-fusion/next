const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const { marked, logger } = require('../../../utils');

const tplsPath = path.resolve(__dirname, '../../tpls');
const headerTplPath = path.resolve(tplsPath, 'partials/header.ejs');
const indexTplPath = path.resolve(tplsPath, 'index.ejs');

module.exports = function(content) {
    const options = loaderUtils.getOptions(this);
    const links = options.links;
    const lang = options.lang;
    const resourcePath = this.resourcePath;

    this.addDependency(headerTplPath);
    this.addDependency(indexTplPath);
    this.addDependency(resourcePath);

    ejs.renderFile(indexTplPath, {
        links,
        lang,
        name: 'index',
        readmeHTML: marked(content)
    }, (err, html) => {
        if (err) {
            logger.error(`Render index.html failed: ${err}`);
        } else {
            const htmlPath = path.relative(path.join(process.cwd(), 'docs'), this.resourcePath.replace(/\.(en-us\.)?md$/, '.html'));
            this.emitFile(htmlPath, html);
        }
    });

    return '';
};
