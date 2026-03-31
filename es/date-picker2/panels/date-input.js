import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, datejs, obj } from '../../util';
import { fmtValue } from '../util';

import Input from '../../input';
import Icon from '../../icon';

var DATE = DATE_PICKER_MODE.DATE,
    WEEK = DATE_PICKER_MODE.WEEK,
    MONTH = DATE_PICKER_MODE.MONTH,
    QUARTER = DATE_PICKER_MODE.QUARTER,
    YEAR = DATE_PICKER_MODE.YEAR;
var DateInput = (_temp = _class = function (_React$Component) {
    _inherits(DateInput, _React$Component);

    function DateInput(props) {
        _classCallCheck(this, DateInput);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

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

            func.invoke(_this.props, 'onInput', [v, eventType]);
        };

        _this.handleTypeChange = function (inputType) {
            if (inputType !== _this.props.inputType) {
                func.invoke(_this.props, 'onInputTypeChange', [inputType]);
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
                var fmtStr = fmtValue([value, value].map(datejs), format);
                size = Math.max.apply(Math, fmtStr.map(function (s) {
                    return s && s.length || 0;
                }));
            } else {
                var _fmtStr = fmtValue(datejs(value), format);
                fmtValue(datejs(value), format);
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
            restProps = _objectWithoutProperties(_props, ['autoFocus', 'readOnly', 'isRange', 'value', 'prefix', 'hasClear', 'inputType', 'size', 'focus', 'hasBorder', 'separator', 'disabled', 'inputProps', 'dateInputAriaLabel', 'state', 'label']);

        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();

        var sharedProps = _extends({}, obj.pickProps(restProps, Input), inputProps, {
            size: size,
            htmlSize: htmlSize,
            readOnly: readOnly,
            hasBorder: false,
            onChange: onInput
        });

        var rangeProps = void 0;
        if (isRange) {
            rangeProps = [DATE_INPUT_TYPE.BEGIN, DATE_INPUT_TYPE.END].map(function (idx) {
                var _classnames;

                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;

                return _extends({}, sharedProps, {
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
                    className: classnames((_classnames = {}, _classnames[prefixCls + '-active'] = inputType === idx, _classnames))
                });
            });
        }

        var className = classnames([prefixCls, prefixCls + '-' + size, prefixCls + '-' + (isRange ? 'range' : 'date')], (_classnames2 = {}, _classnames2[prefixCls + '-focus'] = focus, _classnames2[prefixCls + '-noborder'] = !hasBorder, _classnames2[prefixCls + '-disabled'] = isRange && Array.isArray(disabled) ? disabled.every(function (v) {
            return v;
        }) : disabled, _classnames2[prefixCls + '-error'] = state === 'error', _classnames2));

        var calendarIcon = React.createElement(Icon, { type: 'calendar', className: prefix + 'date-picker2-symbol-calendar-icon' });

        return React.createElement(
            'div',
            { className: className },
            isRange ? React.createElement(
                React.Fragment,
                null,
                React.createElement(Input, _extends({}, rangeProps[0], {
                    label: label,
                    autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                })),
                React.createElement(
                    'div',
                    { className: prefixCls + '-separator' },
                    separator
                ),
                React.createElement(Input, _extends({}, rangeProps[1], {
                    state: state,
                    hasClear: !state && hasClear,
                    hint: state ? null : calendarIcon
                }))
            ) : React.createElement(Input, _extends({}, sharedProps, {
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
}(React.Component), _class.propTypes = {
    prefix: PT.string,
    rtl: PT.bool,
    locale: PT.object,
    value: SharedPT.inputValue,
    inputType: SharedPT.inputType,
    format: SharedPT.format,
    isRange: PT.bool,
    hasClear: PT.bool,
    onInputTypeChange: PT.func,
    autoFocus: PT.bool,
    readOnly: SharedPT.readOnly,
    placeholder: SharedPT.placeholder,
    size: SharedPT.size,
    focus: PT.bool,
    hasBorder: PT.bool,
    separator: PT.node,
    disabled: SharedPT.disabled,
    inputProps: PT.object,
    dateInputAriaLabel: SharedPT.ariaLabel,
    label: PT.node,
    state: PT.string
}, _class.defaultProps = {
    autoFocus: false,
    readOnly: false,
    hasClear: true,
    separator: '-',
    hasBorder: true,
    size: 'medium'
}, _temp);
DateInput.displayName = 'DateInput';


export default polyfill(DateInput);