'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _timeMenu = require('./module/time-menu');

var _timeMenu2 = _interopRequireDefault(_timeMenu);

var _propTypes3 = require('./prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop;
var TimePickerPanel = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(TimePickerPanel, _Component);

    function TimePickerPanel() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TimePickerPanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.prefixCls = _this.props.prefix + 'time-picker2', _this.onSelectMenuItem = function (panelType, index, type) {
            var _this$props = _this.props,
                value = _this$props.value,
                isRange = _this$props.isRange;

            var valueArr = Array.isArray(value) ? value : [value];
            var val = panelType === 'end' ? valueArr[1] : valueArr[0];

            var clonedValue = val ? val.clone() : (0, _util.datejs)('00:00:00', 'HH:mm:ss', true);
            var newValue = void 0;
            switch (type) {
                case 'hour':
                    newValue = clonedValue.hour(index);
                    break;
                case 'minute':
                    newValue = clonedValue.minute(index);
                    break;
                case 'second':
                    newValue = clonedValue.second(index);
                    break;
            }

            if (isRange) {
                var nextValueArray = [];
                if (panelType === 'start') {
                    nextValueArray[0] = newValue;
                    nextValueArray[1] = value[1];
                } else if (panelType === 'end') {
                    nextValueArray[0] = value[0];
                    nextValueArray[1] = newValue;
                }

                _this.props.onSelect(nextValueArray, panelType);
            } else {
                _this.props.onSelect(newValue, 'panel');
            }
        }, _this.getDisabledItems = function () {
            var _this$props2 = _this.props,
                disabledHours = _this$props2.disabledHours,
                disabledMinutes = _this$props2.disabledMinutes,
                disabledSeconds = _this$props2.disabledSeconds,
                value = _this$props2.value,
                isRange = _this$props2.isRange;


            var disableds = {
                newDisabledHours: [disabledHours],
                newDisabledMinutes: [disabledMinutes],
                newDisabledSeconds: [disabledSeconds]
            };
            if (!isRange) {
                return disableds;
            }

            var dHours = disabledHours() || [];
            var dMinutes = disabledMinutes() || [];
            var dSeconds = disabledSeconds() || [];

            var v0 = value[0];
            var v1 = value[1];

            var hoursEqual = function hoursEqual() {
                return v0 && v1 && v0.hour() === v1.hour();
            };
            var minutesEqual = function minutesEqual() {
                return v0 && v1 && v0.hour() === v1.hour() && v0.minute() === v1.minute();
            };

            disableds.newDisabledHours[0] = function (h) {
                return v1 && h > v1.hour() || dHours.indexOf(h) > -1;
            };
            disableds.newDisabledMinutes[0] = function (m) {
                return v1 && hoursEqual() && m > v1.minute() || dMinutes.indexOf(m) > -1;
            };
            disableds.newDisabledSeconds[0] = function (s) {
                return v1 && minutesEqual() && s > v1.second() || dSeconds.indexOf(s) > -1;
            };

            disableds.newDisabledHours[1] = function (h) {
                return v0 && h < v0.hour() || dHours.indexOf(h) > -1;
            };
            disableds.newDisabledMinutes[1] = function (m) {
                return v0 && m < (hoursEqual() && v0.minute()) || dMinutes.indexOf(m) > -1;
            };
            disableds.newDisabledSeconds[1] = function (s) {
                return v0 && minutesEqual() && s < v0.second() || dSeconds.indexOf(s) > -1;
            };

            return disableds;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /**
     *
     * @param {enum} panelType 'start' | 'end' | 'panel'
     * @param {*} index
     * @param {*} type 'hour' | 'minute' | 'second'
     */


    TimePickerPanel.prototype.render = function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            value = _props.value,
            isRange = _props.isRange,
            locale = _props.locale,
            className = _props.className,
            disabled = _props.disabled,
            showHour = _props.showHour,
            showMinute = _props.showMinute,
            showSecond = _props.showSecond,
            hourStep = _props.hourStep,
            minuteStep = _props.minuteStep,
            secondStep = _props.secondStep,
            renderTimeMenuItems = _props.renderTimeMenuItems,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'value', 'isRange', 'locale', 'className', 'disabled', 'showHour', 'showMinute', 'showSecond', 'hourStep', 'minuteStep', 'secondStep', 'renderTimeMenuItems']);


        var colLen = [showHour, showMinute, showSecond].filter(function (v) {
            return v;
        }).length;
        var classNames = (0, _classnames3.default)(this.prefixCls + '-panel', (_classnames = {}, _classnames[this.prefixCls + '-panel-col-' + colLen] = !isRange, _classnames[this.prefixCls + '-panel-range'] = isRange, _classnames), className);

        var activeHour = [];
        var activeMinute = [];
        var activeSecond = [];

        var valueArr = Array.isArray(value) ? value : [value];
        valueArr.forEach(function (val, i) {
            if (val && _util.datejs.isSelf(val)) {
                activeHour[i] = val.hour();
                activeMinute[i] = val.minute();
                activeSecond[i] = val.second();
            }
        });

        var commonProps = {
            prefix: prefix,
            disabled: disabled,
            renderTimeMenuItems: renderTimeMenuItems
        };

        var _getDisabledItems = this.getDisabledItems(),
            newDisabledHours = _getDisabledItems.newDisabledHours,
            newDisabledMinutes = _getDisabledItems.newDisabledMinutes,
            newDisabledSeconds = _getDisabledItems.newDisabledSeconds;

        var generatePanel = function generatePanel(index) {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                showHour ? _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, {
                    value: valueArr[index],
                    activeIndex: activeHour[index],
                    title: locale.hour,
                    mode: 'hour',
                    step: hourStep,
                    onSelect: _this2.onSelectMenuItem.bind(_this2, '' + (index === 0 ? 'start' : 'end')),
                    disabledItems: newDisabledHours[index]
                })) : null,
                showMinute ? _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, {
                    value: valueArr[index],
                    activeIndex: activeMinute[index],
                    title: locale.minute,
                    mode: 'minute',
                    step: minuteStep,
                    onSelect: _this2.onSelectMenuItem.bind(_this2, '' + (index === 0 ? 'start' : 'end')),
                    disabledItems: newDisabledMinutes[index]
                })) : null,
                showSecond ? _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, {
                    value: valueArr[index],
                    activeIndex: activeSecond[index],
                    title: locale.second,
                    step: secondStep,
                    mode: 'second',
                    onSelect: _this2.onSelectMenuItem.bind(_this2, '' + (index === 0 ? 'start' : 'end')),
                    disabledItems: newDisabledSeconds[index]
                })) : null
            );
        };

        var singlePanel = generatePanel(0);

        var panelClassNames = (0, _classnames3.default)(this.prefixCls + '-panel-col-' + colLen, this.prefixCls + '-panel-list');

        var doublePanel = _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: panelClassNames },
                generatePanel(0)
            ),
            _react2.default.createElement(
                'div',
                { className: panelClassNames },
                generatePanel(1)
            )
        );

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, (0, _util.pickAttrs)(others), { className: classNames }),
            isRange ? doublePanel : singlePanel
        );
    };

    return TimePickerPanel;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 时间值（dayjs 对象）
     */
    value: _propTypes4.default.value,
    /**
     * 是否显示小时
     */
    showHour: _propTypes2.default.bool,
    /**
     * 是否显示分钟
     */
    showMinute: _propTypes2.default.bool,
    /**
     * 是否显示秒
     */
    showSecond: _propTypes2.default.bool,
    /**
     * 小时选项步长
     */
    hourStep: _propTypes2.default.number,
    /**
     * 分钟选项步长
     */
    minuteStep: _propTypes2.default.number,
    /**
     * 秒钟选项步长
     */
    secondStep: _propTypes2.default.number,
    /**
     * 禁用小时函数
     * @param {Number} index 时 0 - 23
     * @return {Boolean} 是否禁用
     */
    disabledHours: _propTypes2.default.func,
    /**
     * 禁用分钟函数
     * @param {Number} index 分 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledMinutes: _propTypes2.default.func,
    /**
     * 禁用秒函数
     * @param {Number} index 秒 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledSeconds: _propTypes2.default.func,
    /**
     * 渲染的可选择时间列表
     * [{
     *  label: '01',
     *  value: 1
     * }]
     * @param {Array} list 默认渲染的列表
     * @param {String} mode 渲染的菜单 hour, minute, second
     * @param {dayjs} value 当前时间，可能为 null
     * @return {Array} 返回需要渲染的数据
     */
    renderTimeMenuItems: _propTypes2.default.func,
    /**
     * 选择某个日期值时的回调
     * @param {Object} 选中后的日期值
     */
    onSelect: _propTypes2.default.func,
    isRange: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    showHour: true,
    showSecond: true,
    showMinute: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    onSelect: noop,
    disabled: false,
    isRange: false,
    locale: _zhCn2.default.TimePicker
}, _temp2);
TimePickerPanel.displayName = 'TimePickerPanel';
exports.default = TimePickerPanel;
module.exports = exports['default'];