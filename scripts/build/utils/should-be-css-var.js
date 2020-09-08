const keepValueSass = require('../white-list-key-reg');

/**
 * 有些变量不应该转成css-var
 */
function shouldBeCssVar(name, value) {
    // 例如 $month-picker-prefix: '.' + $css-prefix + 'month-picker'; 不应该转成css变量
    if (/\$css-prefix/.test(value)) return false;
    if (keepValueSass.some(reg => name.match(reg))) return false;
    return true;
}

module.exports = shouldBeCssVar;
