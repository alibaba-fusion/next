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

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes3 = require('../prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _constant = require('../constant');

var _util = require('../../util');

var _util2 = require('../util');

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE = _constant.DATE_PICKER_MODE.DATE,
    WEEK = _constant.DATE_PICKER_MODE.WEEK,
    MONTH = _constant.DATE_PICKER_MODE.MONTH,
    QUARTER = _constant.DATE_PICKER_MODE.QUARTER,
    YEAR = _constant.DATE_PICKER_MODE.YEAR;
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
            var _mode2placeholder;

            var _this$props2 = _this.props,
                locale = _this$props2.locale,
                isRange = _this$props2.isRange,
                mode = _this$props2.mode;
            var placeholder = locale.placeholder,
                selectDate = locale.selectDate,
                monthPlaceholder = locale.monthPlaceholder,
                weekPlaceholder = locale.weekPlaceholder,
                yearPlaceholder = locale.yearPlaceholder,
                startPlaceholder = locale.startPlaceholder,
                quarterPlaceholder = locale.quarterPlaceholder,
                endPlaceholder = locale.endPlaceholder;

            var mode2placeholder = (_mode2placeholder = {}, _mode2placeholder[DATE] = selectDate, _mode2placeholder[WEEK] = weekPlaceholder, _mode2placeholder[MONTH] = monthPlaceholder, _mode2placeholder[QUARTER] = quarterPlaceholder, _mode2placeholder[YEAR] = yearPlaceholder, _mode2placeholder);

            var holder = _this.props.placeholder;

            holder = holder || (isRange ? [startPlaceholder, endPlaceholder] : mode2placeholder[mode] || placeholder);

            if (isRange && !Array.isArray(holder)) {
                holder = Array(2).fill(holder);
            }

            return holder;
        };

        _this.getHtmlSize = function () {
            var _this$props3 = _this.props,
                isRange = _this$props3.isRange,
                format = _this$props3.format,
                hasBorder = _this$props3.hasBorder;

            var value = '2020-12-12 12:12:12';
            var size = 0;

            if (isRange) {
                var fmtStr = (0, _util2.fmtValue)([value, value].map(_util.datejs), format);
                size = Math.max.apply(Math, fmtStr.map(function (s) {
                    return s && s.length || 0;
                }));
            } else {
                var _fmtStr = (0, _util2.fmtValue)((0, _util.datejs)(value), format);
                (0, _util2.fmtValue)((0, _util.datejs)(value), format);
                size = _fmtStr && _fmtStr.length || 0;
            }

            return String(Math.max(size, hasBorder ? 12 : 8));
        };

        _this.prefixCls = props.prefix + 'date-picker2-input';
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
            prefix = _props.prefix,
            hasClear = _props.hasClear,
            inputType = _props.inputType,
            size = _props.size,
            focus = _props.focus,
            hasBorder = _props.hasBorder,
            separator = _props.separator,
            disabled = _props.disabled,
            inputProps = _props.inputProps,
            dateInputAriaLabel = _props.dateInputAriaLabel,
            state = _props.state,
            label = _props.label,
            restProps = (0, _objectWithoutProperties3.default)(_props, ['autoFocus', 'readOnly', 'isRange', 'value', 'prefix', 'hasClear', 'inputType', 'size', 'focus', 'hasBorder', 'separator', 'disabled', 'inputProps', 'dateInputAriaLabel', 'state', 'label']);


        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();

        var sharedProps = (0, _extends3.default)({}, _util.obj.pickProps(restProps, _input2.default), inputProps, {
            size: size,
            htmlSize: htmlSize,
            readOnly: readOnly,
            hasBorder: false,
            onChange: onInput
        });

        var rangeProps = void 0;
        if (isRange) {
            rangeProps = [_constant.DATE_INPUT_TYPE.BEGIN, _constant.DATE_INPUT_TYPE.END].map(function (idx) {
                var _classnames;

                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;

                return (0, _extends3.default)({}, sharedProps, {
                    autoFocus: autoFocus,
                    placeholder: placeholder[idx],
                    value: value[idx] || '',
                    'aria-label': Array.isArray(dateInputAriaLabel) ? dateInputAriaLabel[idx] : dateInputAriaLabel,
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

        var className = (0, _classnames4.default)([prefixCls, prefixCls + '-' + size, prefixCls + '-' + (isRange ? 'range' : 'date')], (_classnames2 = {}, _classnames2[prefixCls + '-focus'] = focus, _classnames2[prefixCls + '-noborder'] = !hasBorder, _classnames2[prefixCls + '-disabled'] = isRange && Array.isArray(disabled) ? disabled.every(function (v) {
            return v;
        }) : disabled, _classnames2[prefixCls + '-error'] = state === 'error', _classnames2));

        var calendarIcon = _react2.default.createElement(_icon2.default, { type: 'calendar', className: prefix + 'date-picker2-symbol-calendar-icon' });

        return _react2.default.createElement(
            'div',
            { className: className },
            isRange ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_input2.default, (0, _extends3.default)({}, rangeProps[0], {
                    label: label,
                    autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                })),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-separator' },
                    separator
                ),
                _react2.default.createElement(_input2.default, (0, _extends3.default)({}, rangeProps[1], {
                    state: state,
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
                'aria-label': dateInputAriaLabel,
                value: value || '',
                hint: state ? null : calendarIcon
            }))
        );
    };

    return DateInput;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    value: _propTypes4.default.inputValue,
    inputType: _propTypes4.default.inputType,
    format: _propTypes4.default.format,
    isRange: _propTypes2.default.bool,
    hasClear: _propTypes2.default.bool,
    onInputTypeChange: _propTypes2.default.func,
    autoFocus: _propTypes2.default.bool,
    readOnly: _propTypes4.default.readOnly,
    placeholder: _propTypes4.default.placeholder,
    size: _propTypes4.default.size,
    focus: _propTypes2.default.bool,
    hasBorder: _propTypes2.default.bool,
    separator: _propTypes2.default.node,
    disabled: _propTypes4.default.disabled,
    inputProps: _propTypes2.default.object,
    dateInputAriaLabel: _propTypes4.default.ariaLabel,
    label: _propTypes2.default.node,
    state: _propTypes2.default.string
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
module.exports = exports.default;
module.exports.default = exports.default;