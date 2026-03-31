import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import type { NumberPickerProps, NumberPickerState } from './types';
/** NumberPicker */
declare class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        disabled: PropTypes.Requireable<boolean>;
        step: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        precision: PropTypes.Requireable<number>;
        editable: PropTypes.Requireable<boolean>;
        autoFocus: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onCorrect: PropTypes.Requireable<(...args: any[]) => any>;
        onDisabled: PropTypes.Requireable<(...args: any[]) => any>;
        max: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        min: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        state: PropTypes.Requireable<string>;
        format: PropTypes.Requireable<(...args: any[]) => any>;
        upBtnProps: PropTypes.Requireable<object>;
        downBtnProps: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        innerAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        rtl: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        device: PropTypes.Requireable<string>;
        hasTrigger: PropTypes.Requireable<boolean>;
        alwaysShowTrigger: PropTypes.Requireable<boolean>;
        stringMode: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
        step: number;
        style: {};
        precision: number;
        editable: boolean;
        onChange: () => void;
        onKeyDown: () => void;
        onBlur: () => void;
        onCorrect: () => void;
        onDisabled: () => void;
        hasTrigger: boolean;
        alwaysShowTrigger: boolean;
        stringMode: boolean;
    };
    static displayName: string;
    inputRef: React.ComponentRef<typeof Input> | null;
    constructor(props: NumberPickerProps);
    static getDerivedStateFromProps(
        nextProps: NumberPickerProps,
        prevState: NumberPickerState
    ): Partial<NumberPickerState> | null;
    isGreaterThan(v1: string | number, v2: string | number): boolean;
    correctBoundary(value: string | number): string | number;
    setFocus(status: boolean): void;
    onFocus: NumberPickerProps['onFocus'];
    onBlur: NumberPickerProps['onBlur'];
    withinMinMax(value: number | string): boolean;
    withinMin(value: number | string): boolean;
    setDisplayValue({
        displayValue,
        onlyDisplay,
    }: {
        displayValue: string | number;
        onlyDisplay?: boolean;
    }): void;
    getDisplayValue(): string | number;
    /**
     * 输入时判断是否要触发onChange
     * 正常触发: 合法数字 (eg: -0 -0. 0.1)；超出最大值
     * 不触发: 1. 非数字（eg: - ）, 2. 小于最小值(输入需要过程由小变大)
     */
    shouldFireOnChange(value: string): boolean;
    onChange(
        value: string,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.CompositionEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
    ): void;
    correctValue(value: string): string | number;
    setValue({
        value,
        e,
        triggerType,
    }: {
        value: string | number;
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.CompositionEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>;
        triggerType?: 'up' | 'down';
    }): void;
    getPrecision(): number;
    getPrecisionFactor(): number;
    onKeyDown: NumberPickerProps['onKeyDown'];
    up(disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>): void;
    down(disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>): void;
    step(type: 'up' | 'down', disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>): void;
    upStep(val: number | string): string | number;
    downStep(val: number | string): string | number;
    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param value - The numeric value to be corrected
     */
    hackChrome(value: number): number;
    focus(): void;
    saveInputRef(ref: React.ComponentRef<typeof Input> | null): void;
    getInputNode():
        | (import('../config-provider/types').ConfiguredComponent<
              import('../input').InputProps &
                  import('../config-provider/types').ComponentCommonProps,
              import('../input/input').default<import('../input').InputProps>
          > &
              Pick<
                  import('../input/input').default<import('../input').InputProps>,
                  'focus' | 'getInputNode'
              >)
        | null;
    handleMouseDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    render(): React.JSX.Element;
}
declare const _default: typeof NumberPicker;
export default _default;
