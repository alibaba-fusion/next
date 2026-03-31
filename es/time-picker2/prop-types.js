import PT from 'prop-types';
import { TIME_PICKER_TYPE, TIME_INPUT_TYPE } from './constant';
import { datejs } from '../util';
export var error = function (propName, ComponentName) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(ComponentName, ". Validation failed."));
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
            if (!value.every(function (v) { return type.includes(typeof v); })) {
                throw error(propName, componentName);
            }
        }
    };
}
var SharedPT = {
    date: function (props, propName, componentName) {
        if (propName in props && !datejs(props.propName).isValid()) {
            throw error(propName, componentName);
        }
    },
    value: function (props, propName, componentName) {
        if (props[propName]) {
            var value = props[propName];
            if (props.type === TIME_PICKER_TYPE.RANGE && !Array.isArray(value)) {
                throw error(propName, componentName);
            }
            else if (!Array.isArray(value)) {
                value = [value];
            }
            if (!value.every(function (v) { return !v || datejs(v).isValid() || typeof v === 'string'; })) {
                throw error(propName, componentName);
            }
        }
    },
    format: checkType(['string', 'function']),
    inputValue: checkType('string'),
    placeholder: checkType('string'),
    readOnly: checkType('boolean'),
    disabled: checkType('boolean'),
    render: PT.oneOfType([PT.node, PT.func]),
    type: PT.oneOf(Object.values(TIME_PICKER_TYPE)),
    inputType: PT.oneOf(Object.values(TIME_INPUT_TYPE)),
    size: PT.oneOf(['small', 'medium', 'large']),
};
export default SharedPT;
