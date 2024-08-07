import React, { type UIEvent } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';
import { type Dayjs, type ConfigType } from 'dayjs';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, obj, type ClassPropsWithDefault } from '../util';
import SharedPT from './prop-types';

import { CALENDAR_MODE, CALENDAR_SHAPE, DATE_PANEL_MODE } from './constant';
import HeaderPanel from './panels/header-panel';
import DateTable from './panels/date-table';
import type {
    CalendarMode,
    CalendarPanelMode,
    CalendarProps,
    CalendarState,
    CellData,
} from './types';

const { pickProps, pickOthers } = obj;

// CALENDAR_MODE => DATE_PANEL_MODE
function getPanelMode(mode: CalendarMode | CalendarPanelMode) {
    return mode && (mode === CALENDAR_MODE.YEAR ? DATE_PANEL_MODE.MONTH : DATE_PANEL_MODE.DATE);
}

function isValueChanged(newVal: ConfigType, oldVal: ConfigType) {
    return newVal !== oldVal && !datejs(newVal).isSame(datejs(oldVal));
}

type CalendarPropsWithDefault = ClassPropsWithDefault<CalendarProps, typeof Calendar.defaultProps>;

class Calendar extends React.Component<CalendarProps, CalendarState> {
    static propTypes = {
        rtl: PT.bool,
        name: PT.string,
        prefix: PT.string,
        locale: PT.object,
        shape: SharedPT.shape,
        mode: SharedPT.mode,
        value: SharedPT.date,
        defaultValue: SharedPT.date,
        panelValue: SharedPT.date,
        defaultPanelValue: SharedPT.date,
        disabledDate: PT.func,
        dateCellRender: PT.func,
        quarterCellRender: PT.func,
        monthCellRender: PT.func,
        yearCellRender: PT.func,
        headerRender: PT.func,
        onChange: PT.func,
        onSelect: PT.func,
        onPanelChange: PT.func,
        cellProps: PT.object,
        cellClassName: PT.oneOfType([PT.func, PT.string]),
        panelMode: PT.any,
        onPrev: PT.func,
        onNext: PT.func,
        onSuperPrev: PT.func,
        onSuperNext: PT.func,
        colNum: PT.number,
    };

    static defaultProps = {
        rtl: false,
        prefix: 'next-',
        locale: defaultLocale.Calendar,
        shape: CALENDAR_SHAPE.FULLSCREEN,
        mode: CALENDAR_MODE.MONTH,
    };

    static displayName = 'Calendar';

    readonly props: CalendarPropsWithDefault;

    constructor(props: CalendarProps) {
        super(props);

        const { defaultValue, mode, defaultPanelValue = datejs() } = props;
        const value = 'value' in props ? props.value : defaultValue;
        const panelValue = datejs(
            'panelValue' in props ? props.panelValue : value || defaultPanelValue
        );
        const panelMode = props.panelMode || getPanelMode(mode!) || DATE_PANEL_MODE.DATE;

        this.state = {
            mode: mode!,
            value,
            panelMode,
            panelValue: panelValue.isValid() ? panelValue : datejs(),
        };
    }

    static getDerivedStateFromProps(props: CalendarPropsWithDefault, state: CalendarState) {
        let newState: Partial<CalendarState> = {};
        let value;
        let panelValue;

        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = datejs(value);
        }

        if ('panelValue' in props) {
            panelValue = datejs(props.panelValue);
        }

        // panelValue 不能是无效值
        if (panelValue) {
            panelValue = panelValue.isValid() ? panelValue : datejs();
            newState = {
                panelValue,
            };
        }
        if (value) {
            newState.value = value;
        }

        return newState;
    }

    switchPanelMode = (mode: CalendarPanelMode) => {
        const { MONTH, YEAR, DECADE } = DATE_PANEL_MODE;
        const originalPanelMode = this.props.panelMode || getPanelMode(mode);

        switch (mode) {
            case YEAR:
                return MONTH;
            case DECADE:
                return YEAR;
            default:
                return originalPanelMode;
        }
    };

    shouldSwitchPanelMode = () => {
        const { mode, shape } = this.props;
        const { panelMode } = this.state;
        const originalPanelMode = this.props.panelMode || getPanelMode(mode);
        return shape === CALENDAR_SHAPE.PANEL && panelMode !== originalPanelMode;
    };

    onDateSelect = (value: Dayjs, _: UIEvent, { isCurrent }: Pick<CellData, 'isCurrent'>) => {
        const { panelMode } = this.state;
        const unit = panelMode === 'date' ? 'day' : panelMode;

        if (this.shouldSwitchPanelMode()) {
            this.onPanelChange(
                value,
                this.switchPanelMode(panelMode),
                'DATESELECT_VALUE_SWITCH_MODE'
            );
        } else {
            isCurrent || this.onPanelValueChange(value, 'DATESELECT');
            // @ts-expect-error unit 在这里不能是 quarter 和 week
            value.isSame(this.state.value, unit) || this.onChange(value);

            func.invoke(this.props, 'onSelect', [value]);
        }
    };

    onModeChange = (mode: CalendarMode, reason?: string) => {
        this.setState({
            mode,
        });
        const panelMode = getPanelMode(mode);

        if (this.state.panelMode !== panelMode) {
            this.onPanelModeChange(panelMode, reason);
        }
    };

    onPanelValueChange = (panelValue: Dayjs, reason?: string) => {
        this.onPanelChange(panelValue, this.state.panelMode, reason);
    };

    onPanelModeChange = (panelMode: CalendarPanelMode, reason?: string) => {
        this.onPanelChange(this.state.panelValue, panelMode, reason);
    };

    onPanelChange = (value: Dayjs, mode: CalendarPanelMode, reason?: string) => {
        this.setState({
            panelMode: mode,
            panelValue: value,
        });

        func.invoke(this.props, 'onPanelChange', [value, mode, reason]);
    };

    onChange = (value: Dayjs) => {
        this.setState({
            value,
            panelValue: value,
        });
        func.invoke(this.props, 'onChange', [value]);
    };

    render() {
        const value = 'value' in this.props ? datejs(this.props.value) : this.state.value;
        const { panelMode, mode, panelValue } = this.state;

        const { prefix, shape, rtl, className, ...restProps } = this.props;

        const sharedProps = {
            rtl,
            prefix,
            shape,
            value,
            panelValue,
        };

        const headerPanelProps = {
            ...pickProps(HeaderPanel.propTypes, restProps),
            ...sharedProps,
            mode,
            panelMode,
            onPanelValueChange: this.onPanelValueChange,
            onModeChange: this.onModeChange,
            onPanelModeChange: this.onPanelModeChange,
            showModeSwitch: this.props.mode !== CALENDAR_MODE.YEAR,
        };

        const dateTableProps = {
            ...pickProps(DateTable.propTypes, restProps),
            ...sharedProps,
            mode: panelMode,
            onSelect: this.onDateSelect,
        };

        const classNames = classnames([
            `${prefix}calendar2`,
            `${prefix}calendar2-${shape}`,
            className,
        ]);

        return (
            <div
                {...pickOthers(Calendar.propTypes, restProps)}
                dir={rtl ? 'rtl' : undefined}
                className={classNames}
            >
                <HeaderPanel {...headerPanelProps} />
                <div className={`${prefix}calendar2-body`}>
                    <DateTable {...dateTableProps} />
                </div>
            </div>
        );
    }
}

export default polyfill(Calendar);
