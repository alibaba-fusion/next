import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';

var DECADE_TIME_FORMAT = 'HH:mm:ss';

var TimePanel = (_temp2 = _class = function (_React$PureComponent) {
    _inherits(TimePanel, _React$PureComponent);

    function TimePanel() {
        var _temp, _this, _ret;

        _classCallCheck(this, TimePanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.formater = function (v) {
            var _this$props$timePanel = _this.props.timePanelProps,
                timePanelProps = _this$props$timePanel === undefined ? {} : _this$props$timePanel;

            var _this$getShow = _this.getShow(),
                showHour = _this$getShow.showHour,
                showMinute = _this$getShow.showMinute,
                showSecond = _this$getShow.showSecond;

            var fmt = void 0;
            if ('format' in timePanelProps) {
                fmt = timePanelProps.format;
            } else {
                var fmtArr = [];

                showHour && fmtArr.push('HH');
                showMinute && fmtArr.push('mm');
                showSecond && fmtArr.push('ss');

                fmt = fmtArr.join(':');
            }

            return typeof fmt === 'function' ? fmt(v) : v.format(fmt);
        }, _this.getShow = function () {
            var _this$props$timePanel2 = _this.props.timePanelProps,
                props = _this$props$timePanel2 === undefined ? {} : _this$props$timePanel2;


            var fmt = props.format || DECADE_TIME_FORMAT;

            var showHour = void 0;
            var showMinute = void 0;
            var showSecond = void 0;

            if (typeof fmt === 'string') {
                showHour = fmt.indexOf('H') > -1;
                showSecond = fmt.indexOf('s') > -1;
                showMinute = fmt.indexOf('m') > -1;
            }

            return {
                showHour: 'showHour' in props ? props.showHour : showHour,
                showMinute: 'showMinute' in props ? props.showMinute : showMinute,
                showSecond: 'showSecond' in props ? props.showSecond : showSecond
            };
        }, _this.onSelect = function (v) {
            func.invoke(_this.props, 'onSelect', [v]);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    TimePanel.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            locale = _props.locale,
            _props$timePanelProps = _props.timePanelProps,
            timePanelProps = _props$timePanelProps === undefined ? {} : _props$timePanelProps,
            value = _props.value;

        var _getShow = this.getShow(),
            showHour = _getShow.showHour,
            showMinute = _getShow.showMinute,
            showSecond = _getShow.showSecond;

        return React.createElement(
            'div',
            { dir: rtl ? 'rtl' : undefined, className: prefix + 'date-time-picker-wrapper ' + prefix + 'calendar2-panel' },
            React.createElement(
                'div',
                { className: prefix + 'calendar2-header' },
                React.createElement(
                    'div',
                    { className: prefix + 'calendar2-header-text-field' },
                    value ? this.formater(value) : null
                )
            ),
            React.createElement(TimePickerPanel, _extends({
                prefix: prefix,
                locale: locale,
                onSelect: this.onSelect,
                showHour: showHour,
                showSecond: showSecond,
                showMinute: showMinute
            }, timePanelProps, {
                value: value
            }))
        );
    };

    return TimePanel;
}(React.PureComponent), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    value: SharedPT.date,
    timePanelProps: PT.object,
    onSelect: PT.func
}, _temp2);


export default polyfill(TimePanel);