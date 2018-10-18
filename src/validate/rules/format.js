import * as util from '../util';

const pattern = {
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
    number: /\d*/,
    tel: /^(1\d{10})$|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{3,4})-(\d{7,8})|(\d{7,8})-(\d{1,4}))$)$|^([ ]?)$/
};

const types = {
    number(value) {
        if (isNaN(value)) {
            return false;
        }
        return typeof value === 'number' || (typeof value === 'string' && !!value.match(pattern.number));
    },
    email(value) {
        return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
        return typeof value === 'string' && !!value.match(pattern.url);
    },
    tel(value) {
        return typeof value === 'string' && !!value.match(pattern.tel);
    }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function format(rule, value, errors, options) {
    const custom = ['email', 'number', 'url', 'tel'];
    const ruleType = rule.format;
    if (custom.indexOf(ruleType) > -1 && !types[ruleType](value)) {
        errors.push(util.format(options.messages.format[ruleType], rule.field, rule.format));
    }
}

export default format;
