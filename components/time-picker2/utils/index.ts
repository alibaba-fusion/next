import type { KeyboardEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { datejs, KEYCODE } from '../../util';

// 检查传入值是否为 dayjs 对象
export function checkDayjsObj(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    if (props[propName] && !datejs.isSelf(props[propName])) {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a dayjs object.`
        );
    }
}

// 检查传入值是否为 dayjs 对象
export function checkDateValue(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
) {
    if (props[propName] && !datejs.isSelf(props[propName]) && typeof props[propName] !== 'string') {
        return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Required a dayjs object or format date string.`
        );
    }
    return null;
}

/**
 * 监听键盘事件，操作时间
 * @param e - 键盘事件
 * @param param1 - Object
 * @param type - second hour minute
 */
export function onTimeKeydown(
    e: KeyboardEvent<HTMLInputElement>,
    {
        format,
        timeInputStr,
        steps,
        value,
    }: { format: string; timeInputStr: string; steps: Record<string, number>; value: Dayjs },
    type: 'second' | 'hour' | 'minute'
) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1)
        return;
    if (
        (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
        // @ts-expect-error e.controlKey 是旧标准的用法，新标准使用 e.ctrlKey 来代表 Control 键是否被按下
        e.controlKey ||
        e.shiftKey
    )
        return;

    let time = datejs(timeInputStr, format, true);

    if (time.isValid()) {
        const stepUnit = e.altKey ? 'hour' : 'minute';
        switch (e.keyCode) {
            case KEYCODE.UP:
                time = time.subtract(steps[type], type);
                break;
            case KEYCODE.DOWN:
                time = time.add(steps[type], type);
                break;
            case KEYCODE.PAGE_UP:
                time = time.subtract(steps[stepUnit], stepUnit);
                break;
            case KEYCODE.PAGE_DOWN:
                time = time.add(steps[stepUnit], stepUnit);
                break;
        }
    } else if (value) {
        time = value.clone();
    } else {
        time = datejs();
        time = time.hour(0).minute(0).second(0);
    }

    e.preventDefault();
    return time.format(format);
}
