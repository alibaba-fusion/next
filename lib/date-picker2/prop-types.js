'use strict';

exports.__esModule = true;
exports.error = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _constant = require('./constant');

var _util = require('../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = exports.error = function error(propName, ComponentName) {
    return new Error('Invalid prop ' + propName + ' supplied to ' + ComponentName + '. Validation failed.');
};

function checkType(type) {
    return function (props, propName, componentName) {
        var value = props[propName];
        if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }

            if (!Array.isArray(type)) {
                type = [type];
            }

            if (!value.every(function (v) {
                return type.includes(typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v));
            })) {
                throw error(propName, componentName);
            }
        }
    };
}

var SharedPT = {
    date: function date(props, propName, componentName) {
        if (propName in props && !(0, _util.datejs)(props.propName).isValid()) {
            throw error(propName, componentName);
        }
    },
    value: function value(props, propName, componentName) {
        if (![undefined, null].includes(props[propName])) {
            var value = props[propName];

            if (props.type === _constant.DATE_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw error(propName, componentName);
            } else if (!Array.isArray(value)) {
                value = [value];
            }

            if (!value.every(function (v) {
                return (0, _util.datejs)(v).isValid();
            })) {
                throw error(propName, componentName);
            }
        }
    },

    format: checkType(['string', 'function']),
    inputValue: checkType('string'),
    placeholder: checkType('string'),
    readOnly: checkType('boolean'),
    disabled: checkType('boolean'),
    disabledTime: checkType(['object', 'function']),
    ariaLabel: checkType('string'),

    render: PT.oneOfType([PT.node, PT.func]),
    mode: PT.oneOf(Object.values(_constant.DATE_PICKER_MODE)),
    type: PT.oneOf(Object.values(_constant.DATE_PICKER_TYPE)),
    inputType: PT.oneOf(Object.values(_constant.DATE_INPUT_TYPE)),
    size: PT.oneOf(['small', 'medium', 'large'])
};

exports.default = SharedPT;