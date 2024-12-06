import type { KeyboardEvent } from 'react';
import type { Dayjs } from 'dayjs';
export declare function checkDayjsObj(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
): Error | undefined;
export declare function checkDateValue(
    props: Record<string, unknown>,
    propName: string,
    componentName: string
): Error | null;
/**
 * 监听键盘事件，操作时间
 * @param e - 键盘事件
 * @param param1 - Object
 * @param type - second hour minute
 */
export declare function onTimeKeydown(
    e: KeyboardEvent<HTMLInputElement>,
    {
        format,
        timeInputStr,
        steps,
        value,
    }: {
        format: string;
        timeInputStr: string;
        steps: Record<string, number>;
        value: Dayjs;
    },
    type: 'second' | 'hour' | 'minute'
): string | undefined;
