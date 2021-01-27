import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, obj } from '../util';
import SharedPT from './prop-types';

import { CALENDAR_MODE, CALENDAR_SHAPE, DATE_PANEL_MODE } from './constant';
import HeaderPanel from './panels/header-panel';
import DateTable from './panels/date-table';

var pickProps = obj.pickProps,
    pickOthers = obj.pickOthers;

// CALENDAR_MODE => DATE_PANEL_MODE

function getPanelMode(mode) {
    return mode && (mode === CALENDAR_MODE.YEAR ? DATE_PANEL_MODE.MONTH : DATE_PANEL_MODE.DATE);
}

function isValueChanged(newVal, oldVal) {
    return newVal !== oldVal && !datejs(newVal).isSame(datejs(oldVal));
}

var Calendar = (_temp = _class = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var defaultValue = props.defaultValue,
            mode = props.mode;

        var value = 'value' in props ? props.value : defaultValue;
        var panelValue = datejs('panelValue' in props ? props.panelValue : value || props.defaultPanelValue);
        var panelMode = props.panelMode || getPanelMode(mode) || DATE_PANEL_MODE.DATE;

        _this.state = {
            mode: mode,
            value: value,
            panelMode: panelMode,
            panelValue: panelValue.isValid() ? panelValue : datejs()
        };
        return _this;
    }

    Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var newState = null;
        var value = void 0;
        var panelValue = void 0;

        if ('value' in props && isValueChanged(props.value, state.value)) {
            value = props.value;
            panelValue = datejs(value);
        }

        if ('panelValue' in props) {
            panelValue = datejs(props.panelValue);
        }

        // panelValue不能是无效值
        if (panelValue) {
            panelValue = panelValue.isValid() ? panelValue : datejs();
            newState = {
                panelValue: panelValue
            };
        }
        if (value) {
            newState.value = value;
        }

        return newState;
    };

    Calendar.prototype.render = function render() {
        var value = 'value' in this.props ? datejs(this.props.value) : this.state.value;
        var _state = this.state,
            panelMode = _state.panelMode,
            mode = _state.mode,
            panelValue = _state.panelValue;

        var _props = this.props,
            prefix = _props.prefix,
            shape = _props.shape,
            rtl = _props.rtl,
            className = _props.className,
            restProps = _objectWithoutProperties(_props, ['prefix', 'shape', 'rtl', 'className']);

        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            shape: shape,
            value: value,
            panelValue: panelValue
        };

        var headerPanelProps = _extends({}, pickProps(HeaderPanel.propTypes, restProps), sharedProps, {
            mode: mode,
            panelMode: panelMode,
            onPanelValueChange: this.onPanelValueChange,
            onModeChange: this.onModeChange,
            onPanelModeChange: this.onPanelModeChange,
            showModeSwitch: this.props.mode !== CALENDAR_MODE.YEAR
        });

        var dateTableProps = _extends({}, pickProps(DateTable.propTypes, restProps), sharedProps, {
            mode: panelMode,
            onSelect: this.onDateSelect
        });

        var classNames = classnames([prefix + 'calendar2', prefix + 'calendar2-' + shape, className]);

        return React.createElement(
            'div',
            _extends({}, pickOthers(Calendar.propTypes, restProps), { dir: rtl ? 'rtl' : undefined, className: classNames }),
            React.createElement(HeaderPanel, headerPanelProps),
            React.createElement(
                'div',
                { className: prefix + 'calendar2-body' },
                React.createElement(DateTable, dateTableProps)
            )
        );
    };

    return Calendar;
}(React.Component), _class.propTypes = {
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
    quarterCellRender: PT.func,
    monthCellRender: PT.func,
    yearCellRender: PT.func,
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
    cellProps: PT.object,
    cellClassName: PT.oneOfType([PT.func, PT.string]),
    panelMode: PT.any,
    onPrev: PT.func,
    onNext: PT.func,
    onSuperPrev: PT.func,
    onSuperNext: PT.func,
    colNum: PT.number
}, _class.defaultProps = {
    rtl: false,
    prefix: 'next-',
    locale: defaultLocale.Calendar,
    shape: CALENDAR_SHAPE.FULLSCREEN,
    mode: CALENDAR_MODE.MONTH,
    defaultPanelValue: datejs()
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.switchPanelMode = function (mode) {
        var MONTH = DATE_PANEL_MODE.MONTH,
            YEAR = DATE_PANEL_MODE.YEAR,
            DECADE = DATE_PANEL_MODE.DECADE;

        var originalPanelMode = _this2.props.panelMode || getPanelMode(mode);

        switch (mode) {
            case YEAR:
                return MONTH;
            case DECADE:
                return YEAR;
            default:
                return originalPanelMode;
        }
    };

    this.shouldSwitchPanelMode = function () {
        var _props2 = _this2.props,
            mode = _props2.mode,
            shape = _props2.shape;
        var panelMode = _this2.state.panelMode;

        var originalPanelMode = _this2.props.panelMode || getPanelMode(mode);
        return shape === CALENDAR_SHAPE.PANEL && panelMode !== originalPanelMode;
    };

    this.onDateSelect = function (value, _, _ref) {
        var isCurrent = _ref.isCurrent;
        var panelMode = _this2.state.panelMode;

        var unit = panelMode === 'date' ? 'day' : panelMode;

        if (_this2.shouldSwitchPanelMode()) {
            _this2.onPanelChange(value, _this2.switchPanelMode(panelMode), 'DATESELECT_VALUE_SWITCH_MODE');
        } else {
            isCurrent || _this2.onPanelValueChange(value, 'DATESELECT');
            value.isSame(_this2.state.value, unit) || _this2.onChange(value);

            func.invoke(_this2.props, 'onSelect', [value]);
        }
    };

    this.onModeChange = function (mode, reason) {
        _this2.setState({
            mode: mode
        });
        var panelMode = getPanelMode(mode);

        if (_this2.state.panelMode !== panelMode) {
            _this2.onPanelModeChange(panelMode, reason);
        }
    };

    this.onPanelValueChange = function (panelValue, reason) {
        _this2.onPanelChange(panelValue, _this2.state.panelMode, reason);
    };

    this.onPanelModeChange = function (panelMode, reason) {
        _this2.onPanelChange(_this2.state.panelValue, panelMode, reason);
    };

    this.onPanelChange = function (value, mode, reason) {
        _this2.setState({
            panelMode: mode,
            panelValue: value
        });

        func.invoke(_this2.props, 'onPanelChange', [value, mode, reason]);
    };

    this.onChange = function (value) {
        _this2.setState({
            value: value,
            panelValue: value
        });
        func.invoke(_this2.props, 'onChange', [value]);
    };
}, _temp);
Calendar.displayName = 'Calendar';


export default polyfill(Calendar);