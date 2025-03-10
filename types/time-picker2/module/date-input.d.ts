import React from 'react';
import PT from 'prop-types';
import { type Dayjs } from 'dayjs';
import Input, { type InputProps } from '../../input';
import type { DateInputProps } from '../types';
declare class DateInput extends React.Component<DateInputProps> {
    static propTypes: {
        prefix: PT.Requireable<string>;
        rtl: PT.Requireable<boolean>;
        locale: PT.Requireable<object>;
        value: PT.Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
        inputType: PT.Requireable<number>;
        format: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        isRange: PT.Requireable<boolean>;
        hasClear: PT.Requireable<boolean>;
        onInputTypeChange: PT.Requireable<(...args: any[]) => any>;
        autoFocus: PT.Requireable<boolean>;
        readOnly: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        placeholder: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => void;
        size: PT.Requireable<string>;
        focus: PT.Requireable<boolean>;
        hasBorder: PT.Requireable<boolean>;
        onKeyDown: PT.Requireable<(...args: any[]) => any>;
        onClick: PT.Requireable<(...args: any[]) => any>;
        separator: PT.Requireable<PT.ReactNodeLike>;
        disabled: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        inputProps: PT.Requireable<object>;
        label: PT.Requireable<PT.ReactNodeLike>;
    };
    static defaultProps: {
        autoFocus: boolean;
        readOnly: boolean;
        hasClear: boolean;
        separator: string;
        hasBorder: boolean;
        size: string;
    };
    prefixCls: string;
    input?: InstanceType<typeof Input> | InstanceType<typeof Input>[];
    constructor(props: DateInputProps);
    setInputRef: (el: InstanceType<typeof Input>, index?: number) => void;
    setValue: (v: string | number | null) => string | number | (string | number | null)[] | null;
    formatter: (v: Dayjs) => string | Dayjs;
    onInput: InputProps['onChange'];
    handleTypeChange: (inputType: number) => void;
    getPlaceholder: () => string | string[] | undefined;
    /**
     * 根据 format 计算输入框 htmlSize
     */
    getHtmlSize: () => string;
    render(): React.JSX.Element;
}
declare const _default: typeof DateInput;
export default _default;
