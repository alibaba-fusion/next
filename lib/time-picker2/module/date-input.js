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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes2 = require('../prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _constant = require('../constant');

var _util = require('../../util');

var _util2 = require('../../date-picker2/util');

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(DateInput, _React$Component);

    function DateInput(props) {
        (0, _classCallCheck3.default)(this, DateInput);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.setInputRef = function (el, index) {
            if (_this.props.isRange) {
                if (!_this.input) {
                    _this.input = [];
                }
                _this.input[index] = el;
            } else {
                _this.input = el;
            }
        };

        _this.setValue = function (v) {
            var _this$props = _this.props,
                isRange = _this$props.isRange,
                inputType = _this$props.inputType,
                value = _this$props.value;


            var newVal = v;

            if (isRange) {
                newVal = [].concat(value);
                newVal[inputType] = v;
            }

            return newVal;
        };

        _this.formatter = function (v) {
            var format = _this.props.format;

            return typeof format === 'function' ? format(v) : v.format(format);
        };

        _this.onInput = function (v, e, eventType) {
            v = _this.setValue(v);

            if (eventType === 'clear') {
                v = null;
                e.stopPropagation();
            }

            _util.func.invoke(_this.props, 'onInput', [v, eventType]);
        };

        _this.handleTypeChange = function (inputType) {
            if (inputType !== _this.props.inputType) {
                _util.func.invoke(_this.props, 'onInputTypeChange', [inputType]);
            }
        };

        _this.getPlaceholder = function () {
            var isRange = _this.props.isRange;

            var holder = _this.props.placeholder;

            if (isRange && !Array.isArray(holder)) {
                holder = Array(2).fill(holder);
            }

            return holder;
        };

        _this.getHtmlSize = function () {
            var _this$props2 = _this.props,
                isRange = _this$props2.isRange,
                format = _this$props2.format,
                hasBorder = _this$props2.hasBorder;

            var value = '12:12:12';
            var size = 0;

            if (isRange) {
                var fmtStr = (0, _util2.fmtValue)([value, value].map(_util.datejs), format);
                size = Math.max.apply(Math, fmtStr.map(function (s) {
                    return s && s.length || 0;
                }));
            } else {
                var _fmtStr = (0, _util2.fmtValue)((0, _util.datejs)(value), format);
                size = _fmtStr && _fmtStr.length || 0;
            }

            return String(Math.max(size, hasBorder ? 12 : 8));
        };

        _this.prefixCls = props.prefix + 'time-picker2-input';
        return _this;
    }

    /**
     * 根据 format 计算输入框 htmlSize
     */


    DateInput.prototype.render = function render() {
        var _classnames2;

        var onInput = this.onInput,
            setInputRef = this.setInputRef,
            handleTypeChange = this.handleTypeChange,
            prefixCls = this.prefixCls;
        var _props = this.props,
            autoFocus = _props.autoFocus,
            readOnly = _props.readOnly,
            isRange = _props.isRange,
            value = _props.value,
            onBlur = _props.onBlur,
            hasClear = _props.hasClear,
            inputType = _props.inputType,
            size = _props.size,
            focus = _props.focus,
            prefix = _props.prefix,
            hasBorder = _props.hasBorder,
            separator = _props.separator,
            disabled = _props.disabled,
            inputProps = _props.inputProps,
            state = _props.state,
            label = _props.label,
            onClick = _props.onClick,
            onKeyDown = _props.onKeyDown,
            restProps = (0, _objectWithoutProperties3.default)(_props, ['autoFocus', 'readOnly', 'isRange', 'value', 'onBlur', 'hasClear', 'inputType', 'size', 'focus', 'prefix', 'hasBorder', 'separator', 'disabled', 'inputProps', 'state', 'label', 'onClick', 'onKeyDown']);


        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();

        var sharedProps = (0, _extends3.default)({}, _util.obj.pickProps(restProps, _input2.default), inputProps, {
            size: size,
            prefix: prefix,
            htmlSize: htmlSize,
            readOnly: readOnly,
            hasBorder: hasBorder,
            onBlur: onBlur,
            onChange: onInput,
            onClick: onClick,
            onKeyDown: onKeyDown
        });

        var rangeProps = void 0;
        if (isRange) {
            rangeProps = [_constant.TIME_INPUT_TYPE.BEGIN, _constant.TIME_INPUT_TYPE.END].map(function (idx) {
                var _classnames;

                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;

                return (0, _extends3.default)({}, sharedProps, {
                    autoFocus: autoFocus,
                    placeholder: placeholder[idx],
                    value: value[idx] || '',
                    disabled: _disabled,
                    ref: function ref(_ref) {
                        return setInputRef(_ref, idx);
                    },
                    onFocus: _disabled ? undefined : function () {
                        return handleTypeChange(idx);
                    },
                    className: (0, _classnames4.default)((_classnames = {}, _classnames[prefixCls + '-active'] = inputType === idx, _classnames))
                });
            });
        }

        var className = (0, _classnames4.default)([prefixCls, prefixCls + '-' + size, prefixCls + '-' + (isRange ? 'range' : 'time')], (_classnames2 = {}, _classnames2[prefixCls + '-focus'] = focus, _classnames2[prefixCls + '-noborder'] = !hasBorder, _classnames2[prefixCls + '-disabled'] = isRange && Array.isArray(disabled) ? disabled.every(function (v) {
            return v;
        }) : disabled, _classnames2));

        var calendarIcon = _react2.default.createElement(_icon2.default, { type: 'clock', className: this.prefixCls + '-symbol-clock-icon' });

        return _react2.default.createElement(
            'div',
            { className: className },
            isRange ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_input2.default, (0, _extends3.default)({}, rangeProps[0], {
                    label: label,
                    hasBorder: false,
                    autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                })),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-separator' },
                    separator
                ),
                _react2.default.createElement(_input2.default, (0, _extends3.default)({}, rangeProps[1], {
                    state: state,
                    hasBorder: false,
                    hasClear: !state && hasClear,
                    hint: state ? null : calendarIcon
                }))
            ) : _react2.default.createElement(_input2.default, (0, _extends3.default)({}, sharedProps, {
                label: label,
                state: state,
                disabled: disabled,
                hasClear: !state && hasClear,
                placeholder: placeholder,
                autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                , ref: setInputRef,
                value: value || '',
                hint: state ? null : calendarIcon
            }))
        );
    };

    return DateInput;
}(_react2.default.Component), _class.propTypes = {
    prefix: PT.string,
    rtl: PT.bool,
    locale: PT.object,
    value: PT.oneOfType([PT.arrayOf(PT.string), PT.string]),
    inputType: _propTypes3.default.inputType,
    format: _propTypes3.default.format,
    isRange: PT.bool,
    hasClear: PT.bool,
    onInputTypeChange: PT.func,
    autoFocus: PT.bool,
    readOnly: _propTypes3.default.readOnly,
    placeholder: _propTypes3.default.placeholder,
    size: _propTypes3.default.size,
    focus: PT.bool,
    hasBorder: PT.bool,
    onKeyDown: PT.func,
    onClick: PT.func,
    separator: PT.node,
    disabled: _propTypes3.default.disabled,
    inputProps: PT.object,
    label: PT.node
}, _class.defaultProps = {
    autoFocus: false,
    readOnly: false,
    hasClear: true,
    separator: '-',
    hasBorder: true,
    size: 'medium'
}, _temp);
DateInput.displayName = 'DateInput';
exports.default = (0, _reactLifecyclesCompat.polyfill)(DateInput);
module.exports = exports['default'];