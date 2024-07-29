import moment, { type MomentFormatSpecification, type Moment, type MomentInput } from 'moment';

// 检查传入值是否为 moment 对象
export function checkMomentObj(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    if (props[propName] && !moment.isMoment(props[propName])) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object`
        );
    }
}

// 检查传入值是否为 moment 对象或时间字符串，字符串不检测是否为日期字符串
export function checkDateValue(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    if (
        props[propName] &&
        !moment.isMoment(props[propName]) &&
        typeof props[propName] !== 'string'
    ) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a moment object or format date string!`
        );
    }
}
export function formatDateValue(
    value: MomentInput | Moment,
    format: MomentFormatSpecification
): Moment;
export function formatDateValue(value: unknown, format: MomentFormatSpecification): null;
export function formatDateValue(value: unknown, format: MomentFormatSpecification) {
    const val = typeof value === 'string' ? moment(value, format, true) : value;
    if (val && moment.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
