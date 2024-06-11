import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';

import Calendar from '../../calendar2';
import TimePanel from './time-panel';

var DatePanel = (_temp = _class = function (_React$Component) {
    _inherits(DatePanel, _React$Component);

    function DatePanel(props) {
        _classCallCheck(this, DatePanel);

        // 默认时间
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var _props$timePanelProps = props.timePanelProps,
            timePanelProps = _props$timePanelProps === undefined ? {} : _props$timePanelProps;

        var defaultTime = timePanelProps.defaultValue;

        if (defaultTime) {
            // fix: https://github.com/alibaba-fusion/next/issues/3203
            defaultTime = datejs(defaultTime, typeof defaultTime === 'string' ? timePanelProps.format || 'HH:mm:ss' : undefined);
        }

        _this.state = {
            defaultTime: defaultTime
        };
        return _this;
    }

    DatePanel.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            mode = _props.mode,
            panelMode = _props.panelMode,
            prefix = _props.prefix,
            showTime = _props.showTime,
            value = _props.value,
            disabledDate = _props.disabledDate,
            disabledTime = _props.disabledTime,
            timePanelProps = _props.timePanelProps,
            dateCellRender = _props.dateCellRender,
            restProps = _objectWithoutProperties(_props, ['mode', 'panelMode', 'prefix', 'showTime', 'value', 'disabledDate', 'disabledTime', 'timePanelProps', 'dateCellRender']);

        var className = classnames(prefix + 'date-picker2-panel', (_classnames = {}, _classnames[prefix + 'date-time-picker2-panel'] = showTime, _classnames));

        // 禁用时间
        var _disabledTime = void 0;
        if (showTime && mode === panelMode && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value) : disabledTime;
            if ((typeof _disabledTime === 'undefined' ? 'undefined' : _typeof(_disabledTime)) !== 'object') {
                _disabledTime = null;
            }
        }

        return React.createElement(
            'div',
            { className: className },
            React.createElement(Calendar, _extends({}, obj.pickProps(Calendar.propTypes, restProps), {
                shape: 'panel',
                value: value,
                panelMode: mode,
                colNum: showTime ? 6 : undefined,
                onSelect: this.handleSelect,
                onPanelChange: this.handlePanelChange,
                disabledDate: disabledDate,
                dateCellRender: dateCellRender
            })),
            showTime && mode === panelMode ? React.createElement(TimePanel, _extends({}, obj.pickProps(TimePanel.propTypes, restProps), {
                prefix: prefix,
                value: value || this.state.defaultTime,
                onSelect: this.onTimeSelect,
                disabledTime: disabledTime,
                timePanelProps: _extends({}, _disabledTime, timePanelProps)
            })) : null
        );
    };

    return DatePanel;
}(React.Component), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    mode: SharedPT.mode,
    panelMode: PT.any,
    value: SharedPT.date,
    disabledDate: PT.func,
    showTime: PT.bool,
    resetTime: PT.bool,
    timePanelProps: PT.object,
    disabledTime: SharedPT.disabledTime,
    dateCellRender: PT.func
}, _class.defaultProps = {
    showTime: false,
    resetTime: false
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onTimeSelect = function (v) {
        _this2.handleSelect(v, true);
    };

    this.handleSelect = function (v, fromTimeChange) {
        var defaultTime = _this2.state.defaultTime;


        var timeVal = null;

        if (!_this2.props.resetTime && !fromTimeChange) {
            timeVal = _this2.props.value || defaultTime || datejs();
        }

        v = setTime(v, timeVal);

        func.invoke(_this2.props, 'onSelect', [v]);
    };

    this.handlePanelChange = function (v, mode) {
        func.invoke(_this2.props, 'onPanelChange', [v, mode]);
    };
}, _temp);
DatePanel.displayName = 'DatePanel';


export default polyfill(DatePanel);