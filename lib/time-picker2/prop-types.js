"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var tslib_1 = require("tslib");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var constant_1 = require("./constant");
var util_1 = require("../util");
var error = function (propName, ComponentName) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(ComponentName, ". Validation failed."));
};
exports.error = error;
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
            if (!value.every(function (v) { return type.includes(typeof v); })) {
                throw (0, exports.error)(propName, componentName);
            }
        }
    };
}
var SharedPT = {
    date: function (props, propName, componentName) {
        if (propName in props && !(0, util_1.datejs)(props.propName).isValid()) {
            throw (0, exports.error)(propName, componentName);
        }
    },
    value: function (props, propName, componentName) {
        if (props[propName]) {
            var value = props[propName];
            if (props.type === constant_1.TIME_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw (0, exports.error)(propName, componentName);
            }
            else if (!Array.isArray(value)) {
                value = [value];
            }
            if (!value.every(function (v) { return !v || (0, util_1.datejs)(v).isValid() || typeof v === 'string'; })) {
                throw (0, exports.error)(propName, componentName);
            }
        }
    },
    format: checkType(['string', 'function']),
    inputValue: checkType('string'),
    placeholder: checkType('string'),
    readOnly: checkType('boolean'),
    disabled: checkType('boolean'),
    render: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
    type: prop_types_1.default.oneOf(Object.values(constant_1.TIME_PICKER_TYPE)),
    inputType: prop_types_1.default.oneOf(Object.values(constant_1.TIME_INPUT_TYPE)),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
exports.default = SharedPT;
