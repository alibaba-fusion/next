import { datejs } from '../../util';

// 检查传入值是否为 dayjs 对象
export function checkDayjsObj(props, propName, componentName) {
    if (props[propName] && !datejs.isSelf(props[propName])) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Required a dayjs object.`);
    }
}

// 检查传入值是否为 dayjs 对象
export function checkDateValue(props, propName, componentName) {
    if (props[propName] && !datejs.isSelf(props[propName]) && typeof props[propName] !== 'string') {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a dayjs object or format date string.`
        );
    }
}

export function checkRangeDateValue(props, propName, componentName) {
    if (
        props[propName] &&
        (!Array.isArray(props[propName]) ||
            props[propName].every(item => {
                return datejs.isSelf(props[propName]) || typeof props[propName] === 'string';
            }))
    ) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a dayjs object or format date string.`
        );
    }
}

export function formatDateValue(value, format) {
    const val = typeof value === 'string' ? datejs(value, format, true) : value;
    if (val && datejs.isSelf(val) && val.isValid()) {
        return val;
    }
    return null;
}
