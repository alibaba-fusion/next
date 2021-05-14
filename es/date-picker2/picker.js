import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, datejs, KEYCODE, obj } from '../util';
import { switchInputType } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import Overlay from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

var Popup = Overlay.Popup;
var renderNode = func.renderNode;
var pickProps = obj.pickProps,
    pickOthers = obj.pickOthers;


function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue) ? isValueChanged(newValue[0], oldValue && oldValue[0]) || isValueChanged(newValue[1], oldValue && oldValue[1]) : newValue !== oldValue && !datejs(newValue).isSame(oldValue);
}

// 返回日期字符串
function getInputValue(value, fmt) {
    var formater = function formater(v, idx) {
        if (Array.isArray(fmt)) {
            fmt = fmt[idx];
        }
        return v ? typeof fmt === 'function' ? fmt(v) : v.format(fmt) : '';
    };

    return Array.isArray(value) ? value.map(function (v, idx) {
        return formater(v, idx);
    }) : formater(value);
}

// 无效值转为 null
// undefined 值表示当前时间
function checkDate(value) {
    // 因为datejs(undefined) === datejs()
    // 但是这里期望的是一个空值
    if (value === undefined) {
        value = null;
    }
    value = datejs(value);
    return value.isValid() ? value : null;
}

function checkRangeDate(value, inputType, disabled) {
    var strictly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var _ref = Array.isArray(value) ? [0, 1].map(function (i) {
        return checkDate(value[i]);
    }) : [null, null],
        begin = _ref[0],
        end = _ref[1];

    var _disabled = Array.isArray(disabled) ? disabled : [disabled, disabled];

    // 严格模式下
    // 如果开始时间在结束时间之后 清空另一个时间
    // 如果另一个时间处于禁用状态 清除当前时间
    if (strictly && begin && end && begin.isAfter(end)) {
        return inputType === DATE_INPUT_TYPE.BEGIN && !_disabled[1] ? [begin, null] : [null, end];
    }

    return [begin, end];
}

var Picker = (_temp = _class = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker(props) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var prefix = props.prefix,
            type = props.type,
            format = props.format,
            mode = props.mode,
            defaultVisible = props.defaultVisible;


        _this.state = {
            panelMode: mode,
            visible: defaultVisible
        };

        if (type === DATE_PICKER_TYPE.RANGE) {
            var _this$getInitRangeInp = _this.getInitRangeInputState(),
                inputType = _this$getInitRangeInp.inputType,
                justBeginInput = _this$getInitRangeInp.justBeginInput;

            _this.state = _extends({
                inputType: inputType,
                justBeginInput: justBeginInput
            }, _this.state);
        }

        var value = _this.getInitValue();

        _this.state = _extends({
            value: value,
            inputValue: getInputValue(value, format),
            curValue: value }, _this.state);

        _this.prefixCls = prefix + 'date-picker2';
        return _this;
    }

    Picker.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var type = props.type,
            showTime = props.showTime,
            showOk = props.showOk,
            disabled = props.disabled,
            format = props.format;


        var isRange = type === DATE_PICKER_TYPE.RANGE;

        var newState = {
            isRange: isRange,
            showOk: !!(showOk || showTime)
        };

        if ('value' in props) {
            var value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);

            if (isValueChanged(value, state.value)) {
                newState = _extends({}, newState, {
                    value: value,
                    curValue: value,
                    inputValue: getInputValue(value, format)
                });
            }
        }

        return newState;
    };

    Picker.prototype.componentWillUnmount = function componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(function (id) {
            return id && clearTimeout(id);
        });
    };

    // 判断弹层是否显示


    Picker.prototype.onVisibleChange = function onVisibleChange(visible) {
        var _this2 = this;

        if (visible !== this.state.visible) {
            var callback = function callback() {
                _this2.setState({
                    visible: visible,
                    justBeginInput: _this2.isEnabled()
                });
            };

            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }

            if (visible) {
                callback();
            } else {
                this.timeoutId = setTimeout(callback, 150);
            }

            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    };

    Picker.prototype.render = function render() {
        var _this3 = this,
            _classnames;

        var prefixCls = this.prefixCls,
            handleChange = this.handleChange,
            handleMouseDown = this.handleMouseDown,
            handleVisibleChange = this.handleVisibleChange,
            onOk = this.onOk,
            onClick = this.onClick,
            handleInput = this.handleInput,
            onInputTypeChange = this.onInputTypeChange,
            onPanelChange = this.onPanelChange,
            onKeyDown = this.onKeyDown;

        var _props = this.props,
            rtl = _props.rtl,
            locale = _props.locale,
            prefix = _props.prefix,
            inputReadOnly = _props.inputReadOnly,
            showTime = _props.showTime,
            preset = _props.preset,
            mode = _props.mode,
            format = _props.format,
            trigger = _props.trigger,
            disabledDate = _props.disabledDate,
            extraFooterRender = _props.extraFooterRender,
            timePanelProps = _props.timePanelProps,
            resetTime = _props.resetTime,
            placeholder = _props.placeholder,
            disabledTime = _props.disabledTime,
            dateCellRender = _props.dateCellRender,
            disabled = _props.disabled,
            isPreview = _props.isPreview,
            className = _props.className,
            defaultPanelValue = _props.defaultPanelValue,
            renderPreview = _props.renderPreview,
            label = _props.label,
            restProps = _objectWithoutProperties(_props, ['rtl', 'locale', 'prefix', 'inputReadOnly', 'showTime', 'preset', 'mode', 'format', 'trigger', 'disabledDate', 'extraFooterRender', 'timePanelProps', 'resetTime', 'placeholder', 'disabledTime', 'dateCellRender', 'disabled', 'isPreview', 'className', 'defaultPanelValue', 'renderPreview', 'label']);

        var _state = this.state,
            isRange = _state.isRange,
            inputType = _state.inputType,
            justBeginInput = _state.justBeginInput,
            panelMode = _state.panelMode,
            showOk = _state.showOk,
            align = _state.align;
        var _state2 = this.state,
            inputValue = _state2.inputValue,
            curValue = _state2.curValue;

        // 预览态

        if (isPreview) {
            var previewCls = classnames(className, prefix + 'form-preview');

            return React.createElement(
                'div',
                { className: previewCls },
                renderNode(renderPreview, isRange ? inputValue.join('-') : inputValue, [curValue, this.props])
            );
        }

        var visible = 'visible' in this.props ? this.props.visible : this.state.visible;
        var allDisabled = isRange && Array.isArray(disabled) ? disabled.every(function (v) {
            return v;
        }) : disabled;
        var sharedProps = {
            rtl: rtl,
            prefix: prefix,
            locale: locale,
            mode: mode,
            format: format,
            showTime: showTime,
            inputType: inputType
        };

        // 输入框
        var inputProps = _extends({}, pickProps(DateInput.propTypes, restProps), sharedProps, {
            value: inputValue,
            label: label,
            isRange: isRange,
            disabled: disabled,
            placeholder: placeholder,
            onInputTypeChange: onInputTypeChange,
            focus: visible,
            onInput: handleInput,
            readOnly: inputReadOnly,
            inputProps: this.props.inputProps,
            ref: function ref(el) {
                return _this3.dateInput = el;
            }
        });

        // 禁用状态下 不允许清空
        if (!this.isEnabled()) {
            inputProps.hasClear = false;
        }

        var triggerNode = renderNode(trigger, React.createElement(DateInput, inputProps));

        // 日期
        var panelProps = _extends({}, sharedProps, {
            panelMode: panelMode,
            value: curValue,
            disabledDate: disabledDate,
            onPanelChange: onPanelChange,
            timePanelProps: timePanelProps,
            disabledTime: disabledTime,
            resetTime: resetTime,
            dateCellRender: dateCellRender,
            defaultPanelValue: defaultPanelValue,
            onSelect: handleChange
        });

        var DateNode = isRange ? React.createElement(RangePanel, _extends({ justBeginInput: justBeginInput }, panelProps)) : React.createElement(DatePanel, panelProps);

        // 底部节点
        var oKable = !!(isRange ? curValue && curValue[inputType] : curValue);
        var shouldShowFooter = showOk || preset || extraFooterRender;

        var footerNode = shouldShowFooter ? React.createElement(FooterPanel, {
            oKable: oKable,
            onOk: onOk,
            showOk: showOk,
            onChange: handleChange,
            preset: preset,
            prefix: prefix,
            extraRender: extraFooterRender
        }) : null;

        var triggerProps = void 0;
        if (!allDisabled) {
            triggerProps = { onKeyDown: onKeyDown, onClick: onClick };
        }

        // popup
        var _props2 = this.props,
            followTrigger = _props2.followTrigger,
            popupTriggerType = _props2.popupTriggerType,
            popupAlign = _props2.popupAlign,
            popupContainer = _props2.popupContainer,
            popupStyle = _props2.popupStyle,
            popupClassName = _props2.popupClassName,
            popupComponent = _props2.popupComponent,
            popupProps = _props2.popupProps;


        var popupCls = classnames(popupClassName || popupProps && popupProps.className, (_classnames = {}, _classnames[prefixCls + '-overlay'] = true, _classnames[prefixCls + '-' + (align || []).join('-')] = align, _classnames[prefixCls + '-overlay-range'] = isRange, _classnames));
        var PopupComp = popupComponent || Popup;

        return React.createElement(
            'div',
            _extends({}, pickOthers(Picker.propTypes, restProps), {
                dir: rtl ? 'rtl' : undefined,
                className: classnames(className, prefixCls)
            }),
            React.createElement(
                PopupComp,
                _extends({
                    rtl: rtl,
                    key: 'date-picker-popup',
                    visible: visible,
                    align: popupAlign,
                    container: popupContainer,
                    followTrigger: followTrigger,
                    triggerType: popupTriggerType,
                    style: popupStyle,
                    onVisibleChange: handleVisibleChange,
                    trigger: React.createElement(
                        'div',
                        _extends({}, triggerProps, { role: 'button', tabIndex: '0', style: this.props.style }),
                        triggerNode
                    ),
                    onPosition: this.getCurrentAlign
                }, popupProps, {
                    className: popupCls
                }),
                React.createElement(
                    'div',
                    { onMouseDown: handleMouseDown },
                    React.createElement(
                        'div',
                        { dir: rtl ? 'rtl' : undefined, className: prefixCls + '-wrapper' },
                        isRange ? this.renderArrow() : null,
                        DateNode,
                        this.state.panelMode !== this.props.mode ? null : footerNode
                    )
                )
            )
        );
    };

    return Picker;
}(React.Component), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    name: PT.string,

    // calendar
    mode: SharedPT.mode,
    type: SharedPT.type,
    value: SharedPT.value,
    defaultValue: SharedPT.value,
    defaultPanelValue: SharedPT.date,
    disabledDate: PT.func,
    visible: PT.bool,
    defaultVisible: PT.bool,
    dateCellRender: PT.func,

    // event
    onOk: PT.func,
    onChange: PT.func,
    onVisibleChange: PT.func,
    onPanelChange: PT.func,

    // time
    showTime: PT.bool,
    resetTime: PT.bool,
    timePanelProps: PT.object,
    disabledTime: PT.object,

    // header
    titleRender: PT.func,

    // footer
    preset: PT.oneOfType([PT.array, PT.object]),
    extraFooterRender: SharedPT.render,
    showOk: PT.bool,

    // input
    trigger: SharedPT.render,
    hasBorder: PT.bool,
    inputProps: PT.object,
    hasClear: PT.bool,
    placeholder: SharedPT.placeholder,
    disabled: SharedPT.disabled,
    inputReadOnly: SharedPT.readOnly,
    format: SharedPT.format,
    label: PT.node,
    separator: PT.node,

    // popup
    followTrigger: PT.bool,
    popupTriggerType: PT.oneOf(['click', 'hover']),
    popupAlign: PT.string,
    popupContainer: PT.any,
    popupStyle: PT.object,
    popupClassName: PT.string,
    popupComponent: PT.elementType,
    popupProps: PT.object,

    // preview
    isPreview: PT.bool,
    renderPreview: PT.func,

    // ariaLabel
    dateInputAriaLabel: SharedPT.ariaLabel
}, _class.defaultProps = {
    rtl: false,
    prefix: 'next-',
    locale: defaultLocale.DatePicker,
    defaultVisible: false,
    type: DATE_PICKER_TYPE.DATE,
    mode: DATE_PICKER_MODE.DATE,
    format: 'YYYY-MM-DD'
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getInitValue = function () {
        var props = _this4.props;
        var type = props.type,
            value = props.value,
            defaultValue = props.defaultValue;


        var val = type === DATE_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return _this4.checkValue(val);
    };

    this.getInitRangeInputState = function () {
        return {
            justBeginInput: _this4.isEnabled(),
            inputType: _this4.isEnabled(0) ? DATE_INPUT_TYPE.BEGIN : DATE_INPUT_TYPE.END
        };
    };

    this.handleVisibleChange = function (visible, type) {
        if (type === 'docClick') {
            visible || _this4.handleChange(_this4.state.curValue, 'VISIBLE_CHANGE');

            _this4.onVisibleChange(visible);
        }
    };

    this.checkValue = function (value, strictly) {
        return _this4.props.type === DATE_PICKER_TYPE.RANGE ? checkRangeDate(value, _this4.state.inputType, _this4.props.disabled, strictly) : checkDate(value);
    };

    this.handleInputFocus = function (inputType) {
        var inputEl = _this4.dateInput && _this4.dateInput.input;

        if (_this4.state.isRange) {
            inputEl = inputEl && inputEl[inputType];
        }

        inputEl && inputEl.focus();
    };

    this.handleMouseDown = function (e) {
        e.preventDefault();
    };

    this.handleInput = function (v, eventType) {
        if (eventType === 'clear') {
            _this4.handleChange(v, 'INPUT_CLEAR');
        } else {
            _this4.setState({
                inputValue: v,
                visible: true
            });
        }
    };

    this.onPanelChange = function (value, mode) {
        _this4.setState({
            panelMode: mode
        });
        func.invoke(_this4.props, 'onPanelChange', [value, mode]);
    };

    this.handleClear = function () {
        // 清空输入之后 input组件内部会让第二个输入框获得焦点
        // 所以这里需要设置setTimeout才能让第一个input获得焦点
        _this4.clearTimeoutId = setTimeout(function () {
            _this4.handleInputFocus(0);
        });

        _this4.setState({
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: _this4.isEnabled()
        });
    };

    this.shouldSwitchInput = function (value) {
        var _state3 = _this4.state,
            inputType = _state3.inputType,
            justBeginInput = _state3.justBeginInput;

        var idx = justBeginInput ? switchInputType(inputType) : value.indexOf(null);

        if (idx !== -1 && _this4.isEnabled(idx)) {
            _this4.onInputTypeChange(idx);
            _this4.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    this.isEnabled = function (idx) {
        var disabled = _this4.props.disabled;


        return Array.isArray(disabled) ? idx === undefined ? !disabled[0] && !disabled[1] : !disabled[idx] : !disabled;
    };

    this.handleChange = function (v, eventType) {
        var format = _this4.props.format;
        var _state4 = _this4.state,
            isRange = _state4.isRange,
            showOk = _state4.showOk,
            value = _state4.value;

        var forceEvents = ['KEYDOWN_ENTER', 'CLICK_OK', 'CLICK_PRESET', 'INPUT_CLEAR'];

        // 在显示确认按键且关闭弹层的时候 将当前值设置回确认值
        // 在有确认按键的时候 需要点击确认值才生效
        if (showOk && eventType === 'VISIBLE_CHANGE') {
            v = value;
        } else {
            // 在显示确认按键
            v = _this4.checkValue(v, !showOk || forceEvents.includes(eventType));
        }

        _this4.setState({
            curValue: v,
            inputValue: getInputValue(v, format)
        });

        if (!showOk || forceEvents.includes(eventType)) {
            if (isRange) {
                if (eventType === 'INPUT_CLEAR') {
                    _this4.handleClear();
                } else if (!['VISIBLE_CHANGE', 'CLICK_PRESET'].includes(eventType) && _this4.shouldSwitchInput(v)) {
                    return;
                }
            }
            _this4.onChange(v);
        }
    };

    this.onKeyDown = function (e) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                {
                    var inputValue = _this4.state.inputValue;

                    _this4.onClick();
                    _this4.handleChange(inputValue, 'KEYDOWN_ENTER');
                    break;
                }
            default:
                return;
        }
    };

    this.onChange = function (v) {
        var value = _this4.state.value;
        var format = _this4.props.format;


        if (isValueChanged(v, value)) {
            // 受控
            if ('value' in _this4.props) {
                _this4.setState({
                    curValue: value,
                    inputValue: getInputValue(value, format)
                });
            } else {
                v = _this4.checkValue(v);

                _this4.setState({
                    value: v,
                    curValue: v,
                    inputValue: getInputValue(v, format)
                });
            }

            func.invoke(_this4.props, 'onChange', [v, getInputValue(v, format)]);
        }

        _this4.onVisibleChange(false);
    };

    this.onOk = function () {
        var inputValue = _this4.state.inputValue;


        var result = func.invoke(_this4.props, 'onOk', [_this4.checkValue(inputValue), inputValue]);

        result !== false && _this4.handleChange(inputValue, 'CLICK_OK');
    };

    this.onInputTypeChange = function (idx) {
        var _state5 = _this4.state,
            inputType = _state5.inputType,
            visible = _state5.visible;


        if (idx !== inputType) {
            _this4.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible)
            });
        }
    };

    this.onClick = function () {
        var _state6 = _this4.state,
            visible = _state6.visible,
            inputType = _state6.inputType;


        if (!visible) {
            _this4.onVisibleChange(true);
            _this4.handleInputFocus(inputType);
        }
    };

    this.getCurrentAlign = function (_ref2) {
        var align = _ref2.align;

        _this4.setState({
            align: align
        });
    };

    this.renderArrow = function () {
        var left = _this4.dateInput && _this4.dateInput.input && _this4.dateInput.input[_this4.state.inputType] && _this4.dateInput.input[_this4.state.inputType].getInputNode().offsetLeft;

        return React.createElement('div', { key: 'arrow', className: _this4.props.prefix + 'range-picker2-arrow', style: { left: left } });
    };
}, _temp);
Picker.displayName = 'Picker';


export default polyfill(Picker);