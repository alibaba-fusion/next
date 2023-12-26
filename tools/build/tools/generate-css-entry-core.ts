import fs = require('fs-extra');
import path = require('path');
import glob = require('glob');
import { CWD, SRC_DIR, logger } from '../../utils';

const cwd = CWD;

export default function () {
    // generate core2: copy components/core-temp to lib/core2  es/core2
    const corePaths = glob.sync(`${SRC_DIR}/core-temp/@(utility|style|base)/*-def-default.css`, {
        cwd,
    });
    corePaths.forEach(cPath => {
        const cContent = fs.readFileSync(cPath, 'utf8');

        const newPath = cPath
            .replace(SRC_DIR, 'lib')
            .replace('core-temp', 'core2')
            .replace('-def-default.css', '.css');

        fs.outputFileSync(newPath, cContent);
        fs.outputFileSync(newPath.replace('lib', 'es'), cContent);
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

    const resetContent = `
/* Base */
@import "./base/_normalize.css";
@import "./base/_reset.css";
@import "./base/_typography.css";
`;

    fs.outputFileSync(path.join(cwd, 'lib/core2/reset.css'), resetContent);

    logger.log('Generate core2 successfully!');
}
