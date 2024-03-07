'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _panel = require('../../time-picker2/panel');

var _panel2 = _interopRequireDefault(_panel);

var _propTypes3 = require('../prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DECADE_TIME_FORMAT = 'HH:mm:ss';

var TimePanel = (_temp2 = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(TimePanel, _React$PureComponent);

    function TimePanel() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TimePanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.formater = function (v) {
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
            _util.func.invoke(_this.props, 'onSelect', [v]);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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

        return _react2.default.createElement(
            'div',
            { dir: rtl ? 'rtl' : undefined, className: prefix + 'date-time-picker-wrapper ' + prefix + 'calendar2-panel' },
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar2-header' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'calendar2-header-text-field' },
                    value ? this.formater(value) : null
                )
            ),
            _react2.default.createElement(_panel2.default, (0, _extends3.default)({
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
}(_react2.default.PureComponent), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    value: _propTypes4.default.date,
    timePanelProps: _propTypes2.default.object,
    onSelect: _propTypes2.default.func
}, _temp2);
exports.default = (0, _reactLifecyclesCompat.polyfill)(TimePanel);
module.exports = exports.default;
module.exports.default = exports.default;