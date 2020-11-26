import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, obj } from '../util';
import SharedPT from './prop-types';

import { CALENDAR_MODE, CALENDAR_SHAPE, DATE_PANEL_MODE } from './constant';
import HeaderPanel from './panels/header';
import DatePanel from './panels/date';

const { bindCtx } = func;

class Calendar extends React.Component {
    static propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
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
        panelDate: SharedPT.date,
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
         * 国际化配置
         */
        locale: PT.object,
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
        dateCellClassName: PT.oneOfType([PT.func, PT.string]),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        shape: CALENDAR_SHAPE.FULLSCREEN,
        mode: CALENDAR_MODE.MONTH,
        locale: defaultLocale.Calendar,
    };

    constructor(props) {
        super(props);

        const { defaultValue, mode } = props;

        const value = obj.get('value', props, defaultValue);
        const defaultPanelValue = obj.get('defaultPanelValue', props, value || datejs());
        const panelDate = obj.get('panelDate', props, defaultPanelValue);

        this.state = {
            mode,
            value,
            panelDate,
        };

        bindCtx(this, ['onPanelChange', 'onChange', 'onDateSelect']);

        this.getFromPropOrState = obj.getFromPropOrState.bind(this);
    }

    switchPanelMode(mode) {
        const { MONTH, YEAR, DECADE, CENTURY } = DATE_PANEL_MODE;
        switch (mode) {
            case YEAR:
                return MONTH;
            case DECADE:
                return YEAR;
            case CENTURY:
                return DECADE;
            default:
                return this.props.mode;
        }
    }

    onDateSelect(value) {
        const { state, props } = this;

        if (props.mode === state.mode || props.shape !== CALENDAR_SHAPE.PANEL) {
            this.onChange(value);
        } else {
            this.onPanelChange(value, this.switchPanelMode(state.mode));
        }
    }

    onPanelChange(value, mode) {
        this.setState({
            mode,
            panelDate: value,
        });

        func.call(this.props, 'onPanelChange', [value, mode]);
    }

    onChange(value) {
        this.setState({
            value,
            panelDate: value,
        });

        func.call(this.props, 'onChange', [value]);
    }

    render() {
        let { value, panelDate } = this.getFromPropOrState(['value', 'panelDate']);
        const { mode } = this.state;
        const {
            rtl,
            prefix,
            locale,
            shape,
            className,
            disabledDate,
            dateCellRender,
            dateCellClassName,
        } = this.props;

        panelDate = datejs(panelDate);
        value = datejs(value);

        const sharedProps = {
            rtl,
            prefix,
            locale,
            mode,
            shape,
            value,
            panelDate,
            onPanelChange: this.onPanelChange,
        };
        const headerPanelProps = {
            showModeSwitch: this.props.mode !== CALENDAR_MODE.YEAR, // mode为year时 不需要显示模式切换
            ...sharedProps,
        };
        const datePanelProps = {
            disabledDate,
            dateCellRender,
            dateCellClassName,
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
                <div className={`${prefix}calendar-body`}>
                    <DatePanel {...datePanelProps} />
                </div>
            </div>
        );
    }
}

export default polyfill(Calendar);
