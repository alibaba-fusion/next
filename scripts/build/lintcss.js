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
                    "no-descending-specificity": null,
                    "no-duplicate-selectors": null,
                    "font-family-no-missing-generic-family-keyword": null
                },
            },
        })
        .then(function(resultObject) {
            const output = JSON.parse(resultObject.output);
            if (output.length !== 1) {
                throw new Error('unexpected');
            }
            for (const warning of output[0].warnings) {
                logger.warn(`[${warning.severity}] ${warning.text}. file: ${output[0].source}:${warning.line}`);
            }

            /* .. */
        });
}

module.exports = lintCss;
