import keepValueSass from './white-list-key-reg';

/**
 * 有些变量不应该转成 css-var
 */
function shouldBeCssVar(name: string, value: string) {
    // 例如 $month-picker-prefix: '.' + $css-prefix + 'month-picker'; 不应该转成 css 变量
    if (/\$css-prefix/.test(value)) return false;
    if (keepValueSass.some(reg => name.match(reg))) return false;
    return true;
}

export default shouldBeCssVar;
