/*
------------------------------------------------------------
  author: 珵之
  create: 2023-12-21 21:23:05
  description: 检查项目所有 scss 是否编译通过 & 检查 variables.scss 内是否是纯变量文件
------------------------------------------------------------
*/
import path from 'path';
import sass from 'sass';
import postcss from 'postcss';
import discardComments from 'postcss-discard-comments';
import { CWD, error, registryTask } from '../utils';

function hasCssCode(code: string) {
    const withoutComments = postcss([
        discardComments({
            removeAll: true,
        }),
        postcss.plugin('discard-charset', function () {
            return function (css) {
                css.walkAtRules('charset', function (rule) {
                    rule.remove();
                });
            };
        }),
    ])
        .process(code)
        .css.trim();
    return withoutComments.length > 0;
}

function checkScss() {
    let variablesCss = '';
    try {
        const results = ['variables.scss', 'index.scss'].map(name => {
            const entryPath = path.join(CWD, name);
            return sass.renderSync({
                file: entryPath,
            });
        });
        variablesCss = results[0].css.toString();
    } catch (e) {
        error(
            `Try to build entry scss failed: ${e.message} line: ${e.line}, column: ${e.column} in ${e.file}`
        );
        throw e;
    }

    if (hasCssCode(variablesCss)) {
        const error = new Error('There is some css code in variables.scss');
        error.message = variablesCss;
        throw error;
    }
}

export function registryCheckSass(file = __filename) {
    return registryTask(file, 'sass syntax', checkScss);
}

registryCheckSass();
