import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
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
    if (Array.isArray(newValue)) {
        return newValue.some(function (val, idx) {
            return val !== (oldValue && oldValue[idx]) && val && !val.isSame(oldValue && oldValue[idx]);
        });
    } else {
        return newValue !== oldValue && newValue && !newValue.isSame(oldValue);
    }
}

var Picker = (_temp = _class = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker(props) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        _this.prefixCls = props.prefix + 'date-picker2';

        var value = _this.checkAndRectify('value' in props ? props.value : 'defaultValue' in props ? props.defaultValue : props.type === DATE_PICKER_TYPE.RANGE ? [null, null] : null);

        if ('value' in props) {
            _this.controlledValue = value;
        }

        _this.state = {
            type: props.type,
            value: value,
            curValue: value, // 当前输入中的值
            inputValue: _this.getInputValue(value),
            visible: 'defaultVisible' in props ? props.defaultVisible : false,
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: true,
            panelMode: props.mode
        };
        return _this;
    }

    Picker.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        return {
            isRange: props.type === DATE_PICKER_TYPE.RANGE,
            showOk: !!(props.showOk || props.showTime)
        };
    };

    Picker.prototype.componentWillUnmount = function componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(function (id) {
            return id && clearTimeout(id);
        });
    };

    // 返回日期字符串


    // 校验日期数据，范围选择模式下为数组
    // 不合法的日期重置null值


    // 判断弹层是否显示


    Picker.prototype.onVisibleChange = function onVisibleChange(visible) {
        var _this2 = this;

        if (visible !== this.state.visible) {
            var callback = function callback() {
                _this2.setState({
                    visible: visible,
                    justBeginInput: true
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

    // 清空输入之后 input组件内部会让第二个输入框获得焦点
    // 所以这里需要设置setTimeout才能让第一个input获得焦点


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
            restProps = _objectWithoutProperties(_props, ['rtl', 'locale', 'prefix', 'inputReadOnly', 'showTime', 'preset', 'mode', 'format', 'trigger', 'disabledDate', 'extraFooterRender', 'timePanelProps', 'resetTime', 'placeholder', 'disabledTime', 'dateCellRender', 'disabled', 'isPreview', 'className', 'defaultPanelValue', 'renderPreview']);

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

        // 受控

        if ('value' in this.props) {
            var value = this.checkAndRectify(this.props.value);
            if (isValueChanged(value, this.controlledValue)) {
                curValue = value;
                inputValue = this.getInputValue(curValue);
                this.controlledValue = value;
            }
        }

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
            isRange: isRange,
            disabled: disabled,
            placeholder: placeholder,
            focus: visible,
            onInputTypeChange: onInputTypeChange,
            onInput: handleInput,
            readOnly: inputReadOnly,
            inputProps: this.props.inputProps,
            ref: function ref(el) {
                return _this3.dateInput = el;
            }
        });

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
    type: DATE_PICKER_TYPE.DATE,
    mode: DATE_PICKER_MODE.DATE,
    format: 'YYYY-MM-DD'
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getInputValue = function (value) {
        return Array.isArray(value) ? value.map(function (v, idx) {
            return _this4.formater(v, idx);
        }) : _this4.formater(value);
    };

    this.formater = function (v, idx) {
        var fmt = _this4.props.format;

        if (Array.isArray(fmt)) {
            fmt = fmt[idx];
        }

        return v ? typeof fmt === 'function' ? fmt(v) : v.format(fmt) : '';
    };

    this.checkAndRectify = function (value) {
        var check = function check(v) {
            // 因为datejs(undefined) === datejs()
            // 但是这里期望的是一个空值
            if (v === undefined) {
                v = null;
            }
            v = datejs(v);
            return v.isValid() ? v : null;
        };

        if (_this4.props.type === DATE_PICKER_TYPE.RANGE) {
            var _ref = Array.isArray(value) ? [0, 1].map(function (i) {
                return check(value[i]);
            }) : [null, null],
                begin = _ref[0],
                end = _ref[1];

            if (begin && end && begin.isAfter(end)) {
                return [null, null];
            }

            return [begin, end];
        } else {
            return check(value);
        }
    };

    this.handleVisibleChange = function (visible, type) {
        if (type === 'docClick') {
            visible || _this4.handleChange(_this4.state.curValue, 'VISIBLE_CHANGE');

            _this4.onVisibleChange(visible);
        }
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
        _this4.clearTimeoutId = setTimeout(function () {
            _this4.handleInputFocus(0);
        });

        _this4.setState({
            inputType: DATE_INPUT_TYPE.BEGIN
        });
    };

    this.maySwitchInput = function (value) {
        var _state3 = _this4.state,
            inputType = _state3.inputType,
            justBeginInput = _state3.justBeginInput;

        var idx = value.indexOf(null);

        if (idx === -1 && justBeginInput) {
            idx = switchInputType(inputType);
        }
        if (idx !== -1) {
            _this4.onInputTypeChange(idx);
            _this4.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    this.handleChange = function (v, eventType) {
        var _state4 = _this4.state,
            value = _state4.value,
            isRange = _state4.isRange,
            showOk = _state4.showOk;

        v = _this4.checkAndRectify(v, value);

        _this4.setState({
            curValue: v,
            inputValue: _this4.getInputValue(v)
        });

        if (!showOk || ['KEYDOWN_ENTER', 'CLICK_OK', 'CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType)) {
            if (isRange) {
                if (eventType === 'INPUT_CLEAR') {
                    _this4.handleClear();
                } else if (!['VISIBLE_CHANGE', 'CLICK_PRESET'].includes(eventType) && _this4.maySwitchInput(v)) {
                    return;
                }

                if (v.some(function (o) {
                    return !o;
                })) {
                    v = [null, null];
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


        if (isValueChanged(v, value)) {
            if ('value' in _this4.props) {
                _this4.setState({
                    curValue: value,
                    inputValue: _this4.getInputValue(value)
                });
            } else {
                _this4.setState({
                    value: v
                });
            }

            func.invoke(_this4.props, 'onChange', [v, _this4.getInputValue(v)]);
        }
        _this4.onVisibleChange(false);
    };

    this.onOk = function () {
        var inputValue = _this4.state.inputValue;


        var result = func.invoke(_this4.props, 'onOk', [_this4.checkAndRectify(inputValue), inputValue]);

        result !== false && _this4.handleChange(inputValue, 'CLICK_OK');
    };

    this.onInputTypeChange = function (v) {
        var _state5 = _this4.state,
            inputType = _state5.inputType,
            visible = _state5.visible;


        if (v !== inputType) {
            _this4.setState({
                inputType: v,
                justBeginInput: !(v !== null && visible)
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