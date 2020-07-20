const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssCalc = require('postcss-calc');

const { scss2css } = require('./scss2css');
const cwd = process.cwd();
const { logger } = require('../utils');

module.exports = function() {
    debugger
    // generate core2
    const corePaths = glob.sync('lib/core/@(utility|style)/*.scss');
    corePaths.forEach(cPath => {
        const cContent = fs.readFileSync(cPath, 'utf8');
        let newcContent = '';

        cContent.replace(/\n(\$[\d\s\S-]*?): ([\s\S\d-]*?);/g, (all, s1, s2) => {
            newcContent += scss2css(all, s1, s2, path.join(cwd, 'lib/core/'), 'index.scss');
        });

        newcContent = newcContent ? `:root {\n${newcContent}}` : cContent.replace(/\.scss/ig, '.css');

        newcContent.replace(/\/\/[ ](.*)\n/ig, '/* "$1" */')
        fs.outputFileSync(
            cPath.replace('.scss', '.css').replace('core', 'core2'),
            newcContent
        );
    });

    // generate [other components] css variables
    // const styleJsPaths = glob.sync(path.join(cwd, 'lib', '*', 'style.js'));
    // const styleJsPaths = glob.sync(path.join(cwd, 'lib', 'badge', 'style.js'));
    // styleJsPaths.forEach(styleJsPath => {
    //     const styleJSContent = fs.readFileSync(styleJsPath, 'utf8');
    //     const libJsContent = styleJSContent.replace('main.scss', 'index.css');
    //     const componentName = path.basename(path.dirname(styleJsPath));
    //     const basePath = path.dirname(styleJsPath);

    //     // write style2.js
    //     fs.writeFileSync(
    //         path.join(cwd, 'lib', componentName, 'style2.js'),
    //         libJsContent
    //     );

    //     // write varaible.css
    //     try {
    //         const cssVarsContent = fs.readFileSync(path.resolve(basePath, 'scss/css-var-def-default.scss'), 'utf8');

    //         fs.writeFileSync(
    //             path.join(cwd, 'lib', componentName, 'variable.css'),
    //             cssVarsContent
    //         );
    //     } catch (error) {
    //         logger.info(`It doesn't have variable.scss: ${componentName}`)
    //     }

    //     // compile index.css
    //     const mainScssContent = fs.readFileSync(path.join(basePath, 'main.scss'), 'utf8');
    //     const mainScss2 = mainScssContent.replace(/\/core\/index-noreset(\.scss)?/, '/core2/index-noreset.css').replace(/scss\/variable(\.scss)?/, 'scss/scss-var-to-css-var.scss');

    //     console.log(mainScss2)
    //     const result = sass.renderSync({
    //         data: mainScss2,
    //         includePaths: [basePath],
    //     });
    //     const css = result.css.toString();
    //     const output = postcss()
    //         .use(postcssCalc())
    //         .process(css)
    //         .css

    //     console.log('============', css, '============')

    //     const indexContent = output;

    //     fs.writeFileSync(
    //         path.join(cwd, 'lib', componentName, 'index.css'),
    //         indexContent
    //     );

    // });

    logger.success('Generate index.css / style2.js / variable.css successfully!');
};
