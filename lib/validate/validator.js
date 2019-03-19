'use strict';

exports.__esModule = true;
exports.validateFunc = validateFunc;
exports.getValidationMethod = getValidationMethod;

var _rules = require('./rules/');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * {required, format} => format; {required} => required
 * @param  {function} validator [description]
 * @param  {string} ruleType  [description]
 * @return {function}           [description]
 */
function validateFunc(validator, ruleType) {
    return function (rule, value, cb, options) {
        var errors = [];

        // 如果是非required校验
        if (ruleType !== 'required') {
            var _errors = [];
            _rules2.default.required(rule, value, _errors, options);
            if (_errors.length > 0) {
                if ('required' in rule) {
                    cb(_errors);
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
/* eslint-disable callback-return */
function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
        return rule.validator;
    }

    var keys = Object.keys(rule);

    //required和其他校验规则共存
    //{required, format} {required, unknown}
    for (var i = 0; i < keys.length; i++) {
        var ruleType = keys[i];

        if (ruleType === 'required') {
            continue;
        }
        if (ruleType in _rules2.default) {
            return validateFunc(_rules2.default[ruleType], ruleType);
        }
    }

    // 有其他位置参数
    if ('required' in rule) {
        return validateFunc(_rules2.default.required, 'required');
    }

    return null;
}