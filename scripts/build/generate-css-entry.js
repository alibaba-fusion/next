const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');
const cssvarFallback = require('postcss-custom-properties');

const cwd = process.cwd();
const { logger } = require('../utils');
const lintCss = require('./lintcss');

module.exports = function() {
    // generate [other components] css variables
    const componentPaths = glob.sync(path.join(cwd, 'src', '*'));
    componentPaths.forEach(comPath => {
        const componentName = path.basename(comPath);
        if (!fs.existsSync(path.join(cwd, 'src', componentName, 'style.js'))) {
            return;
        }
        const libBasePath = path.join(cwd, 'lib', componentName);
        const esBasePath = path.join(cwd, 'es', componentName);
        const srcBasePath = path.join(cwd, 'src', componentName);

        const libStyleJSContent = fs.readFileSync(path.join(libBasePath, 'style.js'), 'utf8');
        const libJsContent = libStyleJSContent.replace('main.scss', 'index.css').replace('style.js', 'style2.js');
        const esStyleJSContent = fs.readFileSync(path.join(esBasePath, 'style.js'), 'utf8');
        const esJsContent = esStyleJSContent.replace('main.scss', 'index.css').replace('style.js', 'style2.js');

        // write style2.js
        fs.outputFileSync(path.join(libBasePath, 'style2.js'), libJsContent);
        fs.outputFileSync(path.join(libBasePath, 'style2.js'), esJsContent);

        // write varaible.css
        try {
            const libCssVarsContent = fs.readFileSync(
                path.resolve(libBasePath, 'scss/css-var-def-default.scss'),
                'utf8'
            );
            const esCssVarsContent = fs.readFileSync(path.resolve(esBasePath, 'scss/css-var-def-default.scss'), 'utf8');

            fs.outputFileSync(path.join(libBasePath, 'variable.css'), libCssVarsContent);
            fs.outputFileSync(path.join(esBasePath, 'variable.css'), esCssVarsContent);
            lintCss(path.join(libBasePath, 'variable.css'), libCssVarsContent);
        } catch (error) {
            logger.info(`It doesn't have variable.scss: ${componentName}`);
        }

        // compile index.css
        const mainScssContent = fs.readFileSync(path.join(srcBasePath, 'main.scss'), 'utf8');
        // 这里要把 main.scss 中，对core的引用换成core-temp、把对variable.scss的引用换成scss-var-to-css-var.scss
        const mainScss2 = mainScssContent
            .replace(/\@import ["']..\/core\/index-noreset(\.scss)?["'];/gi, '@import "src/core-temp/index-noreset.scss";')
            .replace(/scss\/variable(\.scss)?/gi, `scss/scss-var-to-css-var.scss`);

        if (!mainScss2) {
            fs.outputFileSync(path.join(libBasePath, 'index.css'), '');
            fs.outputFileSync(path.join(esBasePath, 'index.css'), '');
        } else {
            try {
                const result = sass.renderSync({
                    includePaths: [path.join(libBasePath)],
                    data: mainScss2,
                });

                const css = result.css.toString();
                const output = postcss()
                    .use(cssvarFallback())
                    .use(postcssCalc())
                    .process(css).css;

                const indexContent = output;

                fs.outputFileSync(path.join(libBasePath, 'index.css'), indexContent);
                fs.outputFileSync(path.join(esBasePath, 'index.css'), indexContent);
                lintCss(path.join(libBasePath, 'index.css'), indexContent);

            } catch (error) {
                logger.error(`[!!]Error in ${componentName}:`);
            }
        }
    });

    logger.success('Generate index.css / style2.js / variable.css successfully!');
};
