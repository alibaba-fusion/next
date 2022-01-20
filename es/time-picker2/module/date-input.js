import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { TIME_INPUT_TYPE } from '../constant';
import { func, datejs, obj } from '../../util';
import { fmtValue } from '../../date-picker2/util';

import Input from '../../input';
import Icon from '../../icon';

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
                var fmtStr = fmtValue([value, value].map(datejs), format);
                size = Math.max.apply(Math, fmtStr.map(function (s) {
                    return s && s.length || 0;
                }));
            } else {
                var _fmtStr = fmtValue(datejs(value), format);
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
            restProps = _objectWithoutProperties(_props, ['autoFocus', 'readOnly', 'isRange', 'value', 'onBlur', 'hasClear', 'inputType', 'size', 'focus', 'prefix', 'hasBorder', 'separator', 'disabled', 'inputProps', 'state', 'label', 'onClick', 'onKeyDown']);

        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();

        var sharedProps = _extends({}, obj.pickProps(restProps, Input), inputProps, {
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
            rangeProps = [TIME_INPUT_TYPE.BEGIN, TIME_INPUT_TYPE.END].map(function (idx) {
                var _classnames;

                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;

                return _extends({}, sharedProps, {
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
                    className: classnames((_classnames = {}, _classnames[prefixCls + '-active'] = inputType === idx, _classnames))
                });
            });
        }

        var className = classnames([prefixCls, prefixCls + '-' + size, prefixCls + '-' + (isRange ? 'range' : 'time')], (_classnames2 = {}, _classnames2[prefixCls + '-focus'] = focus, _classnames2[prefixCls + '-noborder'] = !hasBorder, _classnames2[prefixCls + '-disabled'] = isRange && Array.isArray(disabled) ? disabled.every(function (v) {
            return v;
        }) : disabled, _classnames2));

        var calendarIcon = React.createElement(Icon, { type: 'clock', className: this.prefixCls + '-symbol-clock-icon' });

        return React.createElement(
            'div',
            { className: className },
            isRange ? React.createElement(
                React.Fragment,
                null,
                React.createElement(Input, _extends({}, rangeProps[0], {
                    label: label,
                    hasBorder: false,
                    autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                })),
                React.createElement(
                    'div',
                    { className: prefixCls + '-separator' },
                    separator
                ),
                React.createElement(Input, _extends({}, rangeProps[1], {
                    state: state,
                    hasBorder: false,
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
    value: PT.oneOfType([PT.arrayOf(PT.string), PT.string]),
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
    onKeyDown: PT.func,
    onClick: PT.func,
    separator: PT.node,
    disabled: SharedPT.disabled,
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


export default polyfill(DateInput);