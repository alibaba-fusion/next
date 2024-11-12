import React, {
    Component,
    type HTMLAttributes,
    type KeyboardEvent,
    type SyntheticEvent,
} from 'react';
import PropTypes from 'prop-types';
import moment, { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import type { PanelType, RangePickerProps, RangePickerState } from './types';
type InnerRangePickerProps = ClassPropsWithDefault<
    RangePickerProps,
    typeof RangePicker.defaultProps
>;
/**
 * DatePicker.RangePicker
 */
declare class RangePicker extends Component<RangePickerProps, RangePickerState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        type: PropTypes.Requireable<string>;
        defaultVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
        onVisibleMonthChange: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<any[]>;
        defaultValue: PropTypes.Requireable<any[]>;
        format: PropTypes.Requireable<string>;
        showTime: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        resetTime: PropTypes.Requireable<boolean>;
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        footerRender: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onOk: PropTypes.Requireable<(...args: any[]) => any>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        state: PropTypes.Requireable<string>;
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
        dateCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        monthCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        startDateInputAriaLabel: PropTypes.Requireable<string>;
        startTimeInputAriaLabel: PropTypes.Requireable<string>;
        endDateInputAriaLabel: PropTypes.Requireable<string>;
        endTimeInputAriaLabel: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        disableChangeMode: PropTypes.Requireable<boolean>;
        yearRange: PropTypes.Requireable<(number | null | undefined)[]>;
        ranges: PropTypes.Requireable<object>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        placeholder: PropTypes.Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
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
        type: string;
        size: string;
        showTime: boolean;
        resetTime: boolean;
        disabledDate: () => boolean;
        footerRender: () => null;
        hasClear: boolean;
        defaultVisible: boolean;
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
        disableChangeMode: boolean;
        onChange: () => void;
        onOk: () => void;
        onVisibleChange: () => void;
    };
    readonly props: InnerRangePickerProps;
    startDateInputRef: React.RefObject<
        import('../config-provider/types').ConfiguredComponent<
            import('../input').InputProps & import('../config-provider/types').ComponentCommonProps,
            import('../input/input').default<import('../input').InputProps>
        > &
            Pick<
                import('../input/input').default<import('../input').InputProps>,
                'focus' | 'getInputNode'
            >
    >;
    endDateInputRef: React.RefObject<
        import('../config-provider/types').ConfiguredComponent<
            import('../input').InputProps & import('../config-provider/types').ComponentCommonProps,
            import('../input/input').default<import('../input').InputProps>
        > &
            Pick<
                import('../input/input').default<import('../input').InputProps>,
                'focus' | 'getInputNode'
            >
    >;
    autoSwitchDateInput: boolean;
    constructor(props: RangePickerProps);
    static getDerivedStateFromProps(props: InnerRangePickerProps): {
        format: string | undefined;
        timeFormat: string;
        dateTimeFormat: string | undefined;
        startValue?: moment.Moment | null | undefined;
        endValue?: moment.Moment | null | undefined;
        startTime?: moment.Moment | null | undefined;
        endTime?: moment.Moment | null | undefined;
        inputAsString?: boolean | undefined;
        visible?: boolean | undefined;
        startDateInputStr?: string | undefined;
        endDateInputStr?: string | undefined;
        activeDateInput?: 'startValue' | 'endValue' | 'startTime' | 'endTime' | undefined;
        startTimeInputStr?: string | undefined;
        endTimeInputStr?: string | undefined;
        inputing?: string | boolean | undefined;
        panel?: PanelType | undefined;
    };
    onValueChange: (values: (Moment | undefined | null)[], handler?: 'onOk' | 'onChange') => void;
    onSelectCalendarPanel: (value: Moment, active?: RangePickerState['activeDateInput']) => void;
    clearRange: () => void;
    onDateInputChange: (inputStr: string, e: SyntheticEvent, eventType?: string) => void;
    onDateInputBlur: () => void;
    onDateInputKeyDown: (e: KeyboardEvent) => void;
    onFocusDateInput: (type: RangePickerState['activeDateInput']) => void;
    onFocusTimeInput: (type: RangePickerState['activeDateInput']) => void;
    onSelectStartTime: (value: Moment) => void;
    onSelectEndTime: (value: Moment) => void;
    onTimeInputChange: (inputStr: string) => void;
    onTimeInputBlur: () => void;
    onTimeInputKeyDown: (e: KeyboardEvent) => void;
    handleChange: (valueName: 'startValue' | 'endValue', newValue?: Moment | null) => void;
    onVisibleChange: (visible: boolean, type: string) => void;
    changePanel: (panel: PanelType) => void;
    onOk: (value?: (Moment | null | undefined)[]) => void;
    getDisabledTime: ({
        startValue,
        endValue,
    }: {
        startValue?: moment.Moment | null | undefined;
        endValue?: moment.Moment | null | undefined;
    } & Record<string, unknown>) => {};
    enableAutoSwitchDateInput: () => void;
    afterOpen: () => void;
    renderPreview(
        [startValue, endValue]: [Moment | null, Moment | null],
        others: HTMLAttributes<HTMLDivElement>
    ): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof RangePicker;
export default _default;
