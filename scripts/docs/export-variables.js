const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function* (options) {
    const exportNextCorVars = [
        'lib/core/util/_mixin.scss',
        'lib/core/util/_function.scss',
        'lib/core/style/_global.scss',
        'lib/core/style/_size.scss',
        'lib/core/style/_color.scss',
        'lib/core/style/_corner.scss',
        'lib/core/style/_font.scss',
        'lib/core/style/_line.scss',
        'lib/core/style/_shadow.scss',
        'lib/core/style/_icon.scss',
        'lib/core/utility/_form-element.scss',
        'lib/core/utility/_mask.scss',
        'lib/core/utility/_popup.scss'
    ];
    const exportVars = [].concat(exportNextCorVars);
    const possibleNames = ['variable.scss', 'variables.scss', '_variable.scss'];

    const entries = options.entries;
    for (let i = 0; i < entries.length; i++) {
        const entryName = entries[i].name;
        for (let j = 0; j < possibleNames.length; j++) {
            const possibleName = possibleNames[j];
            const possiblePath = path.join(cwd, 'lib', entryName, 'scss', possibleName);
            if (yield fs.exists(possiblePath)) {
                exportVars.push(path.relative(cwd, possiblePath));
                break;
            }
        }
    }

    const varScss = exportVars.map(p => `@import "${p}";`).join('\n');
    const varScssPath = path.join(cwd, 'variables.scss');
    yield fs.writeFile(varScssPath, varScss);
};
