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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _util = require('../../util');

var _util2 = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelFooter = (_temp2 = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(PanelFooter, _React$PureComponent);

    function PanelFooter() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PanelFooter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.changePanel = function () {
            var _PANEL$DATE$PANEL$TIM;

            var targetPanel = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[_util2.PANEL.DATE] = _util2.PANEL.TIME, _PANEL$DATE$PANEL$TIM[_util2.PANEL.TIME] = _util2.PANEL.DATE, _PANEL$DATE$PANEL$TIM)[_this.props.panel];
            _this.props.onPanelChange(targetPanel);
        }, _this.createRanges = function (ranges) {
            if (!ranges || ranges.length === 0) return null;
            var _this$props = _this.props,
                onOk = _this$props.onOk,
                prefix = _this$props.prefix;


            return _react2.default.createElement(
                'div',
                { className: prefix + 'date-picker-panel-tools' },
                ranges.map(function (_ref) {
                    var label = _ref.label,
                        _ref$value = _ref.value,
                        value = _ref$value === undefined ? [] : _ref$value,
                        onChange = _ref.onChange;

                    var handleClick = function handleClick() {
                        onChange(value.map(function (v) {
                            return (0, _moment2.default)(v);
                        }));
                        onOk();
                    };
                    return _react2.default.createElement(
                        _button2.default,
                        {
                            key: label,
                            text: true,
                            size: 'small',
                            type: 'primary',
                            onClick: handleClick
                        },
                        label
                    );
                })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    PanelFooter.prototype.render = function render() {
        var _PANEL$DATE$PANEL$TIM2;

        var _props = this.props,
            prefix = _props.prefix,
            locale = _props.locale,
            panel = _props.panel,
            value = _props.value,
            ranges = _props.ranges,
            disabledOk = _props.disabledOk,
            onPanelChange = _props.onPanelChange,
            onOk = _props.onOk;

        var panelBtnLabel = (_PANEL$DATE$PANEL$TIM2 = {}, _PANEL$DATE$PANEL$TIM2[_util2.PANEL.DATE] = locale.selectTime, _PANEL$DATE$PANEL$TIM2[_util2.PANEL.TIME] = locale.selectDate, _PANEL$DATE$PANEL$TIM2)[panel];

        var sharedBtnProps = {
            size: 'small',
            type: 'primary',
            disabled: !value
        };

        return _react2.default.createElement(
            'div',
            { className: prefix + 'date-picker-panel-footer' },
            this.createRanges(ranges),
            onPanelChange ? _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, sharedBtnProps, { text: true, onClick: this.changePanel }),
                panelBtnLabel
            ) : null,
            _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, sharedBtnProps, {
                    disabled: disabledOk || !value,
                    onClick: onOk
                }),
                locale.ok
            )
        );
    };

    return PanelFooter;
}(_react2.default.PureComponent), _class.defaultProps = {
    // onPanelChange: func.noop,
    onOk: _util.func.noop
}, _temp2);
exports.default = PanelFooter;
module.exports = exports['default'];