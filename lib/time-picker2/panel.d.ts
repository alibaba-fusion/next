import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { PannelType, PanelProps, DisabledItems } from './types';
declare class TimePickerPanel extends Component<PanelProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        value: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        showHour: PropTypes.Requireable<boolean>;
        showMinute: PropTypes.Requireable<boolean>;
        showSecond: PropTypes.Requireable<boolean>;
        hourStep: PropTypes.Requireable<number>;
        minuteStep: PropTypes.Requireable<number>;
        secondStep: PropTypes.Requireable<number>;
        disabledHours: PropTypes.Requireable<(...args: any[]) => any>;
        disabledMinutes: PropTypes.Requireable<(...args: any[]) => any>;
        disabledSeconds: PropTypes.Requireable<(...args: any[]) => any>;
        renderTimeMenuItems: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        isRange: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        showHour: boolean;
        showSecond: boolean;
        showMinute: boolean;
        disabledHours: () => void;
        disabledMinutes: () => void;
        disabledSeconds: () => void;
        onSelect: () => void;
        disabled: boolean;
        isRange: boolean;
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
    };
    prefixCls: string;
    /**
     *
     * @param panelType - 'start' | 'end' | 'panel'
     * @param index - number
     * @param type - 'hour' | 'minute' | 'second'
     */
    onSelectMenuItem: (panelType: PannelType, index: number, type: 'hour' | 'minute' | 'second') => void;
    getDisabledItems: () => DisabledItems;
    render(): React.JSX.Element;
}
export default TimePickerPanel;
