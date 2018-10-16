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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _timeMenu = require('./module/time-menu');

var _timeMenu2 = _interopRequireDefault(_timeMenu);

var _utils = require('./utils');

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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSelectMenuItem = function (index, type) {
            var value = _this.props.value;

            var clonedValue = value ? value.clone() : (0, _moment2.default)('00:00:00', 'HH:mm:ss', true);
            switch (type) {
                case 'hour':
                    clonedValue.hour(index);
                    break;
                case 'minute':
                    clonedValue.minute(index);
                    break;
                case 'second':
                    clonedValue.second(index);
                    break;
            }
            _this.props.onSelect(clonedValue);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    TimePickerPanel.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            value = _props.value,
            locale = _props.locale,
            className = _props.className,
            disabled = _props.disabled,
            showHour = _props.showHour,
            showSecond = _props.showSecond,
            hourStep = _props.hourStep,
            minuteStep = _props.minuteStep,
            secondStep = _props.secondStep,
            disabledHours = _props.disabledHours,
            disabledMinutes = _props.disabledMinutes,
            disabledSeconds = _props.disabledSeconds,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'value', 'locale', 'className', 'disabled', 'showHour', 'showSecond', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds']);


        var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'time-picker-panel'] = true, _classnames[prefix + 'time-picker-panel-col-3'] = showHour && showSecond, _classnames[prefix + 'time-picker-panel-col-2'] = !showHour || !showSecond, _classnames), className);

        var commonProps = {
            prefix: prefix,
            disabled: disabled,
            onSelect: this.onSelectMenuItem
        };

        var activeHour = void 0;
        var activeMinute = void 0;
        var activeSecond = void 0;

        if (value && _moment2.default.isMoment(value)) {
            activeHour = value.hour();
            activeMinute = value.minute();
            activeSecond = value.second();
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: classNames }),
            showHour ? _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, { activeIndex: activeHour, title: locale.hour, mode: 'hour', step: hourStep, disabledItems: disabledHours })) : null,
            _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, { activeIndex: activeMinute, title: locale.minute, mode: 'minute', step: minuteStep, disabledItems: disabledMinutes })),
            showSecond ? _react2.default.createElement(_timeMenu2.default, (0, _extends3.default)({}, commonProps, { activeIndex: activeSecond, title: locale.second, step: secondStep, mode: 'second', disabledItems: disabledSeconds })) : null
        );
    };

    return TimePickerPanel;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 时间值（moment 对象）
     */
    value: _utils.checkMomentObj,
    /**
     * 是否显示小时
     */
    showHour: _propTypes2.default.bool,
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
     * 选择某个日期值时的回调
     * @param {Object} 选中后的日期值
     */
    onSelect: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    showHour: true,
    showSecond: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    onSelect: noop,
    disabled: false,
    locale: _zhCn2.default.TimePicker
}, _temp2);
TimePickerPanel.displayName = 'TimePickerPanel';
exports.default = TimePickerPanel;
module.exports = exports['default'];