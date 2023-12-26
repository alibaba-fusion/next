import fs = require('fs-extra');
import path = require('path');
import glob = require('glob');
import sass = require('sass');
import postcss = require('postcss');
import postcssCalc = require('postcss-calc');
import cssvarFallback = require('postcss-custom-properties');
import { CWD, SRC_DIR, logger } from '../../utils';
import lintCss from './lintcss';
import hideFile from './utils/hideFile';

const cwd = CWD;
/**
 * 要把 main.scss 中，对 core 的引用换成 core-temp、
 * 把对 variable.scss 的引用换成 scss-var-to-css-var.scss
 */
function replaceScssImport(scssCode: string) {
    return scssCode
        .replace(
            /@import ["']..\/core\/index-noreset(\.scss)?["'];/gi,
            `@import "${SRC_DIR}/core-temp/index-noreset.scss";`
        )
        .replace(/scss\/variable(\.scss)?/gi, `scss/scss-var-to-css-var.scss`);
}

export default async function () {
    // generate [other components] css variables
    const componentPaths = glob.sync(path.join(cwd, SRC_DIR, '*'), { cwd });
    await Promise.all(
        componentPaths.map(async comPath => {
            const componentName = path.basename(comPath);
            if (
                ['demo-helper'].indexOf(componentName) > -1 ||
                (!fs.existsSync(path.join(cwd, SRC_DIR, componentName, 'style.js')) &&
                    !fs.existsSync(path.join(cwd, SRC_DIR, componentName, 'style.ts')))
            ) {
                return;
            }
            const libBasePath = path.join(cwd, 'lib', componentName);
            const esBasePath = path.join(cwd, 'es', componentName);
            const srcBasePath = path.join(cwd, SRC_DIR, componentName);

            const libStyleJSContent = fs.readFileSync(path.join(libBasePath, 'style.js'), 'utf8');
            const libJsContent = libStyleJSContent
                .replace('main.scss', 'index.css')
                .replace(/style(\.js)?/gi, 'style2');
            const esStyleJSContent = fs.readFileSync(path.join(esBasePath, 'style.js'), 'utf8');
            const esJsContent = esStyleJSContent
                .replace('main.scss', 'index.css')
                .replace(/style(\.js)?/gi, 'style2');

            // write style2.js
            fs.outputFileSync(path.join(libBasePath, 'style2.js'), libJsContent);
            fs.outputFileSync(path.join(esBasePath, 'style2.js'), esJsContent);

            // write varaible.css
            try {
                const libCssVarsContent = fs.readFileSync(
                    path.resolve(libBasePath, 'scss/css-var-def-default.scss'),
                    'utf8'
                );
                const esCssVarsContent = fs.readFileSync(
                    path.resolve(esBasePath, 'scss/css-var-def-default.scss'),
                    'utf8'
                );

                fs.outputFileSync(path.join(libBasePath, 'variable.css'), libCssVarsContent);
                fs.outputFileSync(path.join(esBasePath, 'variable.css'), esCssVarsContent);
                await lintCss(path.join(libBasePath, 'variable.css'), libCssVarsContent);
            } catch (error) {
                logger.log(`It doesn't have variable.scss: ${componentName}`);
            }

            // compile index.css
            const mainScssContent = fs.readFileSync(path.join(srcBasePath, 'main.scss'), 'utf8');
            // 这里要把 main.scss 中，对 core 的引用换成 core-temp、把对 variable.scss 的引用换成 scss-var-to-css-var.scss
            const mainScss2 = replaceScssImport(mainScssContent);

            if (!mainScss2) {
                fs.outputFileSync(path.join(libBasePath, 'index.css'), '');
                fs.outputFileSync(path.join(esBasePath, 'index.css'), '');
            } else {
                try {
                    // 在 replaceScssImport 中，已经把对 variable.scss 的 import 换成了 scss-var-to-css-var.scss
                    // 但是可能有一些 scss 不小心 import 了 variable.scss
                    // 比如 https://github.com/alibaba-fusion/next/blob/1fff65e126575774f4c53c2b7211ad8ea3c958b1/src/tag/scss/placeholder.scss#L3
                    // 这会造成难以追踪的 bug
                    // 为了发现这种错误，并避免未来犯下同样错误
                    // 我们在编译 mainScss2 之前，
                    // 先隐藏掉 lib/[component]/scss/variable.scss
                    // 从而任何对 variable.scss 的 import（且未被替换的）都会报错
                    const restoreFile = await hideFile(
                        path.join(libBasePath, 'scss/variable.scss')
                    );
                    const result = sass.renderSync({
                        includePaths: [path.join(libBasePath)],
                        data: mainScss2,
                    });
                    await restoreFile();

                    const css = result.css.toString();
                    const output = postcss()
                        .use(cssvarFallback())
                        .use(postcssCalc())
                        .process(css).css;

                    // 去除 @charset，避免合并的时候重复
                    const indexContent = output.replace('@charset "UTF-8";', '');

                    fs.outputFileSync(path.join(libBasePath, 'index.css'), indexContent);
                    fs.outputFileSync(path.join(esBasePath, 'index.css'), indexContent);
                    await lintCss(path.join(libBasePath, 'index.css'), indexContent);
                } catch (error) {
                    logger.error(`[!!]Error in ${componentName}:`, error);
                }
            }
        })
    );

    logger.log('Generate index.css / style2.js / variable.css successfully!');
}
