import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, obj } from '../util';
import SharedPT from './prop-types';

import { CALENDAR_MODE, CALENDAR_SHAPE, DATE_PANEL_MODE } from './constant';
import HeaderPanel from './panels/header-panel';
import DatePanel from './panels/date-panel';

const { bindCtx } = func;

// CALENDAR_MODE => DATE_PANEL_MODE
function getPanelMode(mode) {
    return mode === CALENDAR_MODE.YEAR ? DATE_PANEL_MODE.MONTH : DATE_PANEL_MODE.DATE;
}

class Calendar extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        /**
         * 展现形态
         */
        shape: SharedPT.shape,
        /*
         * 日期模式: month | year
         */
        mode: SharedPT.mode,
        /**
         * 默认选中的日期（受控）
         */
        value: SharedPT.date,
        /**
         * 默认选中的日期
         */
        defaultValue: SharedPT.date,
        /**
         * 面板显示的日期（受控）
         */
        panelValue: SharedPT.date,
        /**
         * 面板默认显示的日期
         */
        defaultPanelValue: SharedPT.date,
        /**
         * 不可选择的日期
         */
        disabledDate: PT.func,
        /**
         * 可显示的日期范围
         */
        validRange: PT.arrayOf(SharedPT.date),
        /**
         * 自定义日期渲染
         */
        dateCellRender: PT.func,
        /**
         * 自定义头部渲染
         */
        headerRender: PT.func,
        /**
         * 日期变化回调
         */
        onChange: PT.func,
        /**
         * 点击选择日期回调
         */
        onSelect: PT.func,
        /**
         * 日期面板变化回调
         */
        onPanelChange: PT.func,
        dateCellProps: PT.object,
        dateCellClassName: PT.oneOfType([PT.func, PT.string]),
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
        mode: CALENDAR_MODE.MONTH,
        shape: CALENDAR_SHAPE.FULLSCREEN,
    };

    constructor(props) {
        super(props);

        const { defaultValue, mode } = props;

        const value = obj.get('value', props, defaultValue);
        const defaultPanelValue = obj.get('defaultPanelValue', props, value || datejs());
        const panelValue = obj.get('panelValue', props, defaultPanelValue);
        const panelMode = props.panelMode || getPanelMode(mode);

        this.state = {
            mode,
            value,
            panelMode,
            panelValue,
        };

        bindCtx(this, [
            'shouldSwitchPanelMode',
            'onPanelChange',
            'onChange',
            'onDateSelect',
            'onModeChange',
            'onPanelValueChange',
            'onPanelModeChange',
        ]);

        this.getFromPropOrState = obj.getFromPropOrState.bind(this);
    }

    switchPanelMode(mode) {
        const { DATE, MONTH, YEAR, DECADE } = DATE_PANEL_MODE;
        switch (mode) {
            case MONTH:
                return DATE;
            case YEAR:
                return MONTH;
            case DECADE:
                return YEAR;
            default:
                return this.state.panelMode;
        }
    }

    shouldSwitchPanelMode() {
        const { panelMode, shape } = this.props;

        return shape === CALENDAR_SHAPE.PANEL && this.state.panelMode !== panelMode;
    }

    onDateSelect(value) {
        this.shouldSwitchPanelMode()
            ? this.onPanelChange(value, this.switchPanelMode(this.state.panelMode))
            : this.onChange(value);
    }

    onModeChange(mode, reason) {
        this.setState({
            mode,
        });

        const panelMode = getPanelMode(mode);

        if (this.state.panelMode !== panelMode) {
            this.onPanelModeChange(panelMode, reason);
        }
    }

    onPanelValueChange(panelValue, reason) {
        this.onPanelChange(panelValue, this.state.panelMode, reason);
    }

    onPanelModeChange(panelMode, reason) {
        this.onPanelChange(this.state.panelValue, panelMode, reason);
    }

    onPanelChange(value, mode, reason) {
        this.setState({
            panelMode: mode,
            panelValue: value,
        });

        func.call(this.props, 'onPanelChange', [value, mode, reason]);
    }

    onChange(value) {
        this.setState({
            value,
            panelValue: value,
        });

        func.call(this.props, 'onChange', [value]);
    }

    render() {
        let { value, panelValue } = this.getFromPropOrState(['value', 'panelValue']);
        const { panelMode, mode } = this.state;
        const {
            rtl,
            prefix,
            locale,
            shape,
            className,
            disabledDate,
            dateCellRender,
            dateCellProps,
            dateCellClassName,
            onPrev,
            onNext,
            onSuperPrev,
            onSuperNext,
            colNum,
        } = this.props;

        panelValue = datejs(panelValue);
        value = datejs(value);

        const sharedProps = {
            rtl,
            prefix,
            locale,
            shape,
            value,
            panelValue,
        };

        const headerPanelProps = {
            mode,
            panelMode,
            onPanelValueChange: this.onPanelValueChange,
            onModeChange: this.onModeChange,
            onPanelModeChange: this.onPanelModeChange,
            showModeSwitch: this.props.mode !== CALENDAR_MODE.YEAR,
            onPrev,
            onNext,
            onSuperPrev,
            onSuperNext,
            ...sharedProps,
        };
        const datePanelProps = {
            mode: panelMode,
            disabledDate,
            dateCellRender,
            dateCellClassName,
            dateCellProps,
            colNum,
            onSelect: this.onDateSelect,
            ...sharedProps,
        };

        const classNames = classnames([
            `${prefix}calendar`,
            `${prefix}calendar-${shape}`,
            className,
        ]);

        return (
            <div className={classNames}>
                <HeaderPanel {...headerPanelProps} />
                <div className={`${prefix}calendar-body ${prefix}picker-body`}>
                    <DatePanel {...datePanelProps} />
                </div>
            </div>
        );
    }
}

export default polyfill(Calendar);
