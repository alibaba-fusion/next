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
