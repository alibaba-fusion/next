import React, { Component, type HTMLAttributes, type SyntheticEvent, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkDateValue } from './utils';
import type { TimePickerProps, TimePickerState } from './types';
type InnerTimePickerProps = ClassPropsWithDefault<TimePickerProps, typeof TimePicker.defaultProps>;
/**
 * TimePicker
 */
declare class TimePicker extends Component<TimePickerProps, TimePickerState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        state: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        value: typeof checkDateValue;
        defaultValue: typeof checkDateValue;
        size: PropTypes.Requireable<string>;
        hasClear: PropTypes.Requireable<boolean>;
        format: PropTypes.Requireable<string>;
        hourStep: PropTypes.Requireable<number>;
        minuteStep: PropTypes.Requireable<number>;
        secondStep: PropTypes.Requireable<number>;
        disabledHours: PropTypes.Requireable<(...args: any[]) => any>;
        disabledMinutes: PropTypes.Requireable<(...args: any[]) => any>;
        disabledSeconds: PropTypes.Requireable<(...args: any[]) => any>;
        renderTimeMenuItems: PropTypes.Requireable<(...args: any[]) => any>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        popupContainer: PropTypes.Requireable<any>;
        popupAlign: PropTypes.Requireable<string>;
        popupTriggerType: PropTypes.Requireable<string>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        inputProps: PropTypes.Requireable<object>;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        locale: Partial<{
            placeholder: string;
            clear: string;
            hour: string;
            minute: string;
            second: string;
            ok: string;
        }> & {
            momentLocale?: string | undefined;
        };
        size: string;
        format: string;
        hasClear: boolean;
        disabled: boolean;
        popupAlign: string;
        popupTriggerType: string;
        onChange: () => void;
        onVisibleChange: () => void;
    };
    static displayName: string;
    inputAsString: boolean;
    readonly props: InnerTimePickerProps;
    constructor(props: TimePickerProps);
    static getDerivedStateFromProps(props: InnerTimePickerProps): Partial<TimePickerState>;
    onValueChange(newValue: Moment | null): void;
    onClearValue: () => void;
    onInputChange: (inputValue: string, e?: SyntheticEvent, eventType?: string) => void;
    onInputBlur: () => void;
    onKeyown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onTimePanelSelect: (value: Moment) => void;
    onVisibleChange: (visible: boolean, type: string) => void;
    renderPreview(others: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof TimePicker;
export default _default;
