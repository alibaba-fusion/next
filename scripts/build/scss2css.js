// all: $breadcrumb-text-ellipsis-color: $color-text1-3 !default;
// s1: $breadcrumb-text-ellipsis-color
// s2: $color-text1-3

// $avatar-prefix: ".#{$css-prefix}avatar";  -> 直接保留
// $dialog-part-padding-right-closeable: $dialog-close-width + $dialog-close-right + ($dialog-close-width - $dialog-close-size) / 2;  -> 计算确切值
// $color-calculate-input-focus-shadow: rgba($input-focus-border-color, .2);  -> 计算确切值
// $tag-closable-normal-icon: $icon-content-close;  -> 直接引用后面的值
// $balloon-size-padding: $balloon-size-padding-top $balloon-size-padding-right; -> 转为多变量
// $margin: 10px -> 原样不变
const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const { logger } = require('../utils');

// basePath 例如 path.join(cwd, 'lib/core/')
// entry 例如 index.scss
const compileScss = function(all, s1, basePath, entry) {
    let cssval = '';
    try {
        const content = fs.readFileSync(path.join(basePath, entry), 'utf-8');

        const data = `${content}\n${all}.theScssCompileResultIwant{color:${s1};}`;
        const result = sass.renderSync({
            file: path.join(basePath, entry),
            includePaths: [path.join(basePath, entry)],
            outputStyle: 'compressed',
            data,
        });
        const output = result.css.toString();

        output.replace(/.*theScssCompileResultIwant{color:(.*)}/gi, (_, compileValue) => {
            cssval = compileValue;
            const temp = `${s1.replace('$', '--')}: ${compileValue};\n`;
            logger.info(`${all}\n${temp}`);
        });
    } catch (error) {
        logger.error('[!]Error in :', error);
    }

    return cssval;
};

// basePath 例如 path.join(cwd, 'lib/core/')
// entry 例如 index.scss
const scss2css = function(all, s1, s2, basePath, entry) {
    s2 = s2.replace('!default', '').trim();

    let cssvar = '',
        newcContent = '';
    if (s2.match(/\$css-prefix/)) {
        // 保留原状
    } else if (s2.match(/[/()+]/gi)) {
        const compileValue = compileScss(all, s1, basePath, entry);
        newcContent = `    ${s1.replace('$', '--')}: ${compileValue};\n`;
    } else if (s2.match(/[ ]/gi)) {
        const vs = s2.split(' ');
        const nvs = vs.map(v => {
            return v.match(/[$]/gi) ? `var(${v.replace('$', '--')})` : v;
        });
        if (s2.match(/\*/gi)) {
            newcContent = `    ${s1.replace('$', '--')}: calc(${nvs.join(' ')});\n`;
        } else {
            newcContent = `    ${s1.replace('$', '--')}: ${nvs.join(' ')};\n`;
        }
    } else if (s2.match(/[$]/gi)) {
        cssvar = `var(${s2.replace('$', '--')})`;
        newcContent = `    ${s1.replace('$', '--')}: ${cssvar};\n`;
    } else {
        newcContent = `    ${s1.replace('$', '--')}: ${s2};\n`;
    }
    return newcContent;
};

module.exports = {
    scss2css,
    compileScss,
};
