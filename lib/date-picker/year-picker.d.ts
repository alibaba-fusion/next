import React, { Component, type HTMLAttributes, type KeyboardEvent, type SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkDateValue } from './util';
import type { YearPickerProps, YearPickerState } from './types';
type InnerYearPickerProps = ClassPropsWithDefault<YearPickerProps, typeof YearPicker.defaultProps>;
/**
 * DatePicker.YearPicker
 */
declare class YearPicker extends Component<YearPickerProps, YearPickerState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        state: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        value: typeof checkDateValue;
        defaultValue: typeof checkDateValue;
        format: PropTypes.Requireable<string>;
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        footerRender: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        size: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupTriggerType: PropTypes.Requireable<string>;
        popupAlign: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        inputProps: PropTypes.Requireable<object>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        dateInputAriaLabel: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        format: string;
        size: string;
        disabledDate: () => boolean;
        footerRender: () => null;
        hasClear: boolean;
        popupTriggerType: string;
        popupAlign: string;
        locale: Partial<{
            placeholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            weekPlaceholder: string;
            yearPlaceholder: string;
            now: string;
            selectTime: string;
            selectDate: string;
            ok: string;
            clear: string;
            startPlaceholder: string;
            endPlaceholder: string;
            hour: string;
            minute: string;
            second: string;
            monthBeforeYear?: boolean | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
        onChange: () => void;
        onVisibleChange: () => void;
    };
    readonly props: InnerYearPickerProps;
    constructor(props: YearPickerProps);
    static getDerivedStateFromProps(props: InnerYearPickerProps): Partial<YearPickerState>;
    onValueChange: (newValue: Moment | null) => void;
    onSelectCalendarPanel: (value: Moment) => void;
    clearValue: () => void;
    onDateInputChange: (inputStr: string, e: SyntheticEvent, eventType?: string) => void;
    onDateInputBlur: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
    handleChange: (newValue: Moment | null, prevValue: Moment | null, others?: {}, callback?: () => void) => void;
    onVisibleChange: (visible: boolean, reason: string) => void;
    renderPreview(others: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof YearPicker;
export default _default;
