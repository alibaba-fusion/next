import { datejs } from '../../util';

// 检查传入值是否为 moment 对象
export function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !datejs.isMoment(props[propName])) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Required a moment object`);
    }
}

// 检查传入值是否为 moment 对象或时间字符串，字符串不检测是否为日期字符串
export function checkDateValue(props, propName, componentName) {
    if (props[propName] && !datejs.isMoment(props[propName]) && typeof props[propName] !== 'string') {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object or format date string!`
        );
    }
}

export function checkRangeDateValue(props, propName, componentName) {
    if (
        props[propName] &&
        (!Array.isArray(props[propName]) ||
            props[propName].every(item => {
                return datejs.isMoment(props[propName]) || typeof props[propName] === 'string';
            }))
    ) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object or format date string!`
        );
    }
}

export function formatDateValue(value, format) {
    const val = typeof value === 'string' ? datejs(value, format, true) : value;
    if (val && datejs.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
