const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');

const cwd = process.cwd();
const { logger } = require('../utils');

module.exports = function() {
    // generate [other components] css variables
    const styleJsPaths = glob.sync(path.join(cwd, 'src', '*', 'style.js'));
    // const styleJsPaths = glob.sync(path.join(cwd, 'src', 'button', 'style.js'));
    styleJsPaths.forEach(styleJsPath => {
        const componentName = path.basename(path.dirname(styleJsPath));
        const libBasePath = path.join(cwd, 'lib', componentName);
        const esBasePath = path.join(cwd, 'es', componentName);
        const srcBasePath = path.dirname(styleJsPath);

        const styleJSContent = fs.readFileSync(styleJsPath, 'utf8');
        const libJsContent = styleJSContent.replace('main.scss', 'index.css').replace('style.js', 'style2.js');

        // write style2.js
        fs.outputFileSync(
            path.join(libBasePath, 'style2.js'),
            libJsContent
        );

        // write varaible.css
        try {
            const cssVarsContent = fs.readFileSync(path.resolve(libBasePath, 'scss/css-var-def-default.scss'), 'utf8');

            fs.outputFileSync(
                path.join(libBasePath, 'variable.css'),
                cssVarsContent
            );
        } catch (error) {
            logger.info(`It doesn't have variable.scss: ${componentName}`)
        }

        // compile index.css
        const mainScssContent = fs.readFileSync(path.join(libBasePath, 'main.scss'), 'utf8');
        const mainScss2 = mainScssContent.replace(/\/core\/index-noreset(\.scss)?/, '/../src/core-temp/index-noreset.scss').replace(/scss\/variable(\.scss)?/, `lib/${componentName}/scss/scss-var-to-css-var.scss`);

        try {
            const result = sass.renderSync({
                includePaths: [srcBasePath],
                data: mainScss2,
            });

            const css = result.css.toString();
            const output = postcss()
                .use(postcssCalc())
                .process(css)
                .css

            const indexContent = output;

            fs.outputFileSync(
                path.join(libBasePath, 'index.css'),
                indexContent
            );
        } catch (error) {
            logger.error(`[!!]Error in ${componentName}:`, error)
        }
    });

    logger.success('Generate index.css / style2.js / variable.css successfully!');
};
