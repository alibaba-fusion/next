const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const keepValueSass = require('./white-list-key-reg');
const cwd = process.cwd();
const { logger } = require('../utils');
const { scss2css, compileScss } = require('./scss2css');

module.exports = function() {
    // generate temp files for [other component]
    const variablesPaths = glob.sync(path.join(cwd, 'src', '*', 'scss/variable.scss'));
    variablesPaths.forEach(varsPath => {
        const varsContent = fs.readFileSync(varsPath, 'utf8');
        let scss2cssContent = '';
        let cssvarDefaultContent = '';
        const componentName = path.basename(path.dirname(path.dirname(varsPath)));

        varsContent.replace(/\n(\$[\d\s\S-]*?): ([\s\S\d-]*?);/g, (all, s1, s2) => {
            if (componentName === 'grid' && s1 === '$breakpoints') {
                scss2cssContent += `$breakpoints: ((
    "xxs",
    "(min-width: " + $grid-xxs + ")",
    "(max-width: " + ($grid-xs - 1) + ")"
), (
    "xs",
    "(min-width: " + $grid-xs + ")",
    "(max-width: " + ($grid-s - 1) + ")"
), (
    "s",
    "(min-width: " + $grid-s + ")",
    "(max-width: " + ($grid-m - 1) + ")"
), (
    "m",
    "(min-width: " + $grid-m + ")",
    "(max-width: " + ($grid-l - 1) + ")"
), (
    "l",
    "(min-width: " + $grid-l + ")",
    "(max-width: " + ($grid-xl - 1) + ")"
), (
    "xl",
    "(min-width: " + $grid-xl + ")",
    ""
));
`
                return;
            }

            // FIXME 对每一个变量都执行compileScss，严重拖慢脚本速度，需要优化
            const buildtimeResolvedValue = compileScss(all, s1, path.resolve(varsPath, '../../'), 'main.scss');
            // 对于value(s2)使用到$css-prefix的
            // 例如 $month-picker-prefix: '.' + $css-prefix + 'month-picker';
            // 或者某些白名单key(s1) 这些白名单key一般都是不作为css的value使用的
            if (s2.match(/\$css-prefix/) || keepValueSass.some(reg => s1.match(reg))) {
                const result = buildtimeResolvedValue;
                scss2cssContent += `${s1}: ${result};\n`
            } else {
                scss2cssContent += `${s1}: var(${s1.replace('$', '--')}, ${buildtimeResolvedValue});\n`;
            }

            cssvarDefaultContent += scss2css(all, s1, s2, path.resolve(varsPath, '../../'), 'main.scss');
        });

        cssvarDefaultContent = `:root {\n${cssvarDefaultContent}}\n`;

        fs.writeFileSync(
            path.join(cwd, 'lib', componentName, 'scss/scss-var-to-css-var.scss'),
            scss2cssContent
        );
        fs.writeFileSync(
            path.join(cwd, 'es', componentName, 'scss/scss-var-to-css-var.scss'),
            scss2cssContent
        );

        fs.writeFileSync(
            path.join(cwd, 'lib', componentName, 'scss/css-var-def-default.scss'),
            cssvarDefaultContent
        );
        fs.writeFileSync(
            path.join(cwd, 'es', componentName, 'scss/css-var-def-default.scss'),
            cssvarDefaultContent
        );
    });

    logger.success('[Component] add scss-var-to-css-var.scss & css-var-def-default.scss successfully!');
};
