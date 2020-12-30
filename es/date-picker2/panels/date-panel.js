import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';

import Calendar from '../../calendar2';
import TimePanel from './time-panel';

var DatePanel = (_temp2 = _class = function (_React$Component) {
    _inherits(DatePanel, _React$Component);

    function DatePanel() {
        var _temp, _this, _ret;

        _classCallCheck(this, DatePanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onTimeSelect = function (v) {
            var value = _this.props.value;


            func.invoke(_this.props, 'onSelect', [setTime(value || datejs(), v)]);
        }, _this.handleSelect = function (v) {
            if (!_this.props.resetTime) {
                v = setTime(v, _this.props.value || datejs());
            }

            func.invoke(_this.props, 'onSelect', [v]);
        }, _this.handlePanelChange = function (v, mode) {
            func.invoke(_this.props, 'onPanelChange', [v, mode]);
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
                value: value,
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
}, _temp2);
DatePanel.displayName = 'DatePanel';


export default polyfill(DatePanel);