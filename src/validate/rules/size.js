import * as util from '../util';

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function size(rule, value, errors, options) {
    let key = null;
    const isNum = typeof value === 'number';
    const isStr = typeof value === 'string';

    if (isNum) {
        key = 'number';
    } else if (isStr) {
        key = 'string';
    }

    if (!key) {
        return false;
    }

    let val = value;
    const max = Number(rule.max);
    const min = Number(rule.min);

    if (min || max) {
        if (isStr) {
            val = Number(val);
        }
        if (val < min) {
            errors.push(
                util.format(options.messages[key].min, rule.field, rule.min)
            );
        } else if (val > max) {
            errors.push(
                util.format(options.messages[key].max, rule.field, rule.max)
            );
        }
    }
}

export default size;
