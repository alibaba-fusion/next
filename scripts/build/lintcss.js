const stylelint = require('stylelint');
const logger = require('../utils/logger');

function lintCss(filename, css) {
    stylelint
        .lint({
            code: css,
            codeFilename: filename,
            config: {
                extends: 'stylelint-config-recommended',
                rules: {
                    'no-descending-specificity': null,
                    'no-duplicate-selectors': null,
                    'font-family-no-missing-generic-family-keyword': null,
                    'function-calc-no-unspaced-operator': null,
                },
            },
        })
        .then(function(resultObject) {
            let output = JSON.parse(resultObject.output);
            if (output.length !== 1) {
                throw new Error('unexpected');
            }
            output = output[0];
            if (output.parseErrors.length > 0) {
                logger.error(`[parseErrors] file: ${output.source} ${JSON.stringify(output.parseErrors)}`);
            }
            for (const warning of output.warnings) {
                logger.warn(`[${warning.severity}] ${warning.text}. file: ${output.source}:${warning.line}`);
            }
        });
}

module.exports = lintCss;
