const path = require('path');
const chalk = require('chalk');
const sass = require('node-sass');
const postcss = require('postcss');
const discardComments = require('postcss-discard-comments');
const { logger } = require('../utils');

const cwd = process.cwd();

const sassRender = (...args) => new Promise((resolve, reject) => {
    sass.render(...args, (e, result) => {
        e ? reject(e) : resolve(result);
    });
});

module.exports = function* () {
    let results;
    try {
        results = yield ['variables.scss', 'index.scss'].map(name => {
            const entryPath = path.join(cwd, name);
            return sassRender({
                file: entryPath
            });
        });
    } catch (e) {
        logger.error(chalk.red(`Try to build entry scss failed: ${e.message} line: ${e.line}, column: ${e.column} in ${e.file}`));
        throw e;
    }

    const varCss = results[0].css.toString();
    const withoutComments = postcss([
        discardComments({
            removeAll: true
        }),
        postcss.plugin('discard-charset', function() {
            return function(css) {
                css.walkAtRules('charset', function(rule) {
                    rule.remove();
                });
            };
        })
    ]).process(varCss).css.trim();
    if (withoutComments.length > 0) {
        throw new Error(chalk.red(`There is some css code in variables.scss building result:
${withoutComments}`));
    }
};
