const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const cwd = process.cwd();
const { logger } = require('../utils');

module.exports = function() {
    // generate core2: copy src/core-temp to lib/core2  es/core2
    const corePaths = glob.sync('src/core-temp/@(utility|style|base)/*-def-default.css');
    corePaths.forEach(cPath => {
        const cContent = fs.readFileSync(cPath, 'utf8');

        const newPath = cPath.replace('src', 'lib').replace('core-temp', 'core2').replace('-def-default.css', '.css');

        console.log(cPath, newPath)
        fs.outputFileSync(
            newPath,
            cContent
        );
        fs.outputFileSync(
            newPath.replace('lib', 'es'),
            cContent
        );
    });

    const indexContent = `@import "./index-noreset.css";`;
    fs.outputFileSync(path.join(cwd, 'lib/core2/index.css'), indexContent);

    const indexNoresetContent = `/* Style */
@import "./style/_global.css";
@import "./style/_size.css";
@import "./style/_color.css";
@import "./style/_corner.css";
@import "./style/_font.css";
@import "./style/_line.css";
@import "./style/_shadow.css";
@import "./style/_motion.css";

/* Icon */
@import "./style/_icon.css";

/* Utility */
@import "./utility/_form-element.css";
@import "./utility/_popup.css";
@import "./utility/_mask.css";

/* Accessibility */
@import "./base/_accessibility.css";
`;
    fs.outputFileSync(path.join(cwd, 'lib/core2/index-noreset.css'), indexNoresetContent);

    const resetContent = `/* Style */
@import "./index-noreset.css";
/* Base */
@import "./base/_normalize.css";
@import "./base/_reset.css";
@import "./base/_typography.css";
`;

    fs.outputFileSync(path.join(cwd, 'lib/core2/reset.css'), resetContent);

    logger.success('Generate index.css / style2.js / variable.css successfully!');
};
