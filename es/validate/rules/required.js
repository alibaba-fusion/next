import * as util from '../util';

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, errors, options) {
    if (value === undefined || value === null || value === '' || value.length === 0) {
        errors.push(util.format(options.messages.required, rule.field));
    }
}

export default required;