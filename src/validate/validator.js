import rules from './rules/';

/**
 * {required, format} => format; {required} => required
 * @param  {function} validator [description]
 * @param  {string} ruleType  [description]
 * @return {function}           [description]
 */
export function validateFunc(validator, ruleType) {
    return (rule, value, cb, options) => {
        const errors = [];

        // 如果是非required校验
        if (ruleType !== 'required') {
            const errors = [];
            rules.required(rule, value, errors, options);
            if (errors.length > 0) {
                if ('required' in rule) {
                    cb(errors);
                } else {
                    cb([]); //忽略空数据的判断
                }
                return;
            }
        }

        validator(rule, value, errors, options);
        cb(errors);
    };
}

/**
 * {required, format} => format; {required} => required
 * @param  {object} rule [description]
 * @return {function}      [description]
 */
export function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
        return rule.validator;
    }

    const keys = Object.keys(rule);

    //required和其他校验规则共存
    //{required, format} {required, unknown}
    for (let i = 0; i < keys.length; i++) {
        const ruleType = keys[i];

        if (ruleType === 'required') {
            continue;
        }
        if (ruleType in rules) {
            return validateFunc(rules[ruleType], ruleType);
        }
    }

    // 有其他位置参数
    if ('required' in rule) {
        return validateFunc(rules.required, 'required');
    }

    return null;
}
