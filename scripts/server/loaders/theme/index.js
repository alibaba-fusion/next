process.env.NODE_ENV = 'development';
const path = require('path');
const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const { logger, replaceExt } = require('../../../utils');
const emitConfigHTML = require('./config');

const themeTplPath = path.resolve(__dirname, '../../tpls/theme.ejs');
const cwd = process.cwd();

module.exports = function (content) {
    const options = loaderUtils.getOptions(this);
    const disableAnimation = options.disableAnimation;
    const componentName = options.componentName;

    this.addDependency(themeTplPath);

    const scripts = ['/common.js', `/${replaceExt(path.relative(cwd, this.resourcePath), '.js')}`];

    ejs.renderFile(
        themeTplPath,
        {
            scripts,
            disableAnimation,
        },
        (err, html) => {
            if (err) {
                logger.error(`Render theme demo failed: ${err}`);
            } else {
                const htmlPath = path.join(componentName, 'theme/index.html');
                this.emitFile(htmlPath, html);
            }
        }
    );

    emitConfigHTML(this, componentName);

    content += `
if (module.hot) {
  module.hot.accept();
}`;

    return content;
};
