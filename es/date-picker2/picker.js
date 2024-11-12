import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';

import SharedPT from './prop-types';
import defaultLocale from '../locale/zh-cn';
import { func, KEYCODE, obj } from '../util';
import { switchInputType, fmtValue, isValueChanged } from './util';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE, DATE_PICKER_MODE } from './constant';

import Overlay from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

var Popup = Overlay.Popup;
var pickProps = obj.pickProps,
    pickOthers = obj.pickOthers;
var renderNode = func.renderNode,
    checkDate = func.checkDate,
    checkRangeDate = func.checkRangeDate;
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
            value: value, // 确定值
            curValue: value, // 临时值
            preValue: value, // 上个值
            inputValue: fmtValue(value, format)
        }, _this.state);

        _this.prefixCls = prefix + 'date-picker2';

        _this.popupRef = React.createRef();
        return _this;
    }

    Picker.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var type = props.type,
            showTime = props.showTime,
            showOk = props.showOk,
            disabled = props.disabled,
            format = props.format,
            mode = props.mode;

        var isRange = type === DATE_PICKER_TYPE.RANGE;

        var newState = {
            isRange: isRange,
            showOk: !!(showOk || showTime)
        };

        /**
         * 如果当前输入框可能被 disabled
         * 且另一个输入框非 disabled 则切换到另一个输入框
         */
        if (isRange) {
            var inputType = state.inputType;


            var _disabled = Array.isArray(disabled) ? disabled : [disabled, disabled];

            if (_disabled[inputType]) {
                var otherType = switchInputType(state.inputType);

                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }

            newState.inputType = inputType;
        }

        if ('value' in props) {
            var value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);

            if (isValueChanged(value, state.preValue)) {
                newState = _extends({}, newState, {
                    value: value,
                    curValue: value,
                    preValue: value,
                    inputValue: fmtValue(value, format)
                });
            }

            if ('mode' in props) {
                if (mode !== state.panelMode) {
                    newState = _extends({}, newState, {
                        panelMode: mode,
                        inputValue: fmtValue(value, format)
                    });
                }
            }

            if ('showTime' in props) {
                if (showTime !== state.showTime) {
                    newState = _extends({}, newState, {
                        showTime: !!showTime,
                        inputValue: fmtValue(value, format)
                    });
                }
            }
        }

        return newState;
    };

    Picker.prototype.componentWillUnmount = function componentWillUnmount() {
        [this.clearTimeoutId, this.timeoutId].forEach(function (id) {
            return id && clearTimeout(id);
        });
    };

    /**
     * 获取初始值
     */


    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns {Object} inputState
     * @returns {boolean} inputState.justBeginInput 是否初始输入
     * @returns {number} inputState.inputType 当前输入框
     */


    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param {boolean} visible 是否可见
     * @param {string} type 事件类型
     */


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
                this.timeoutId = setTimeout(callback, 0);
            }

            func.invoke(this.props, 'onVisibleChange', [visible]);
        }
    };

    /**
     * 获取输入框的禁用状态
     * @param {Number} idx
     * @returns {Boolean}
     */


    /**
     * check if value has disabled value
     *
     * @param {string|string[]|Dayjs|Dayjs[]} val
     * @returns {Boolean}
     */


    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param {Dayjs} value
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */


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
            onKeyDown = this.onKeyDown,
            onCalendarChange = this.onCalendarChange;

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

        var _getPopupOffsetLeft = this.getPopupOffsetLeft(),
            arrowLeft = _getPopupOffsetLeft.arrowLeft,
            panelLeft = _getPopupOffsetLeft.panelLeft;

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

        var triggerNode = renderNode(trigger, React.createElement(DateInput, inputProps), inputProps);

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

        var DateNode = isRange ? React.createElement(RangePanel, _extends({ justBeginInput: justBeginInput, onCalendarChange: onCalendarChange }, panelProps)) : React.createElement(DatePanel, panelProps);

        // 底部节点
        var oKable = !!(!this.checkValueDisabled(inputValue) && (isRange ? inputValue && inputValue[inputType] : inputValue));
        var shouldShowFooter = showOk || preset || extraFooterRender;

        var footerNode = shouldShowFooter ? React.createElement(FooterPanel, {
            oKable: oKable,
            onOk: onOk,
            showOk: showOk,
            onChange: handleChange,
            preset: preset,
            locale: locale,
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
                className: classnames(className, prefixCls),
                style: this.props.style
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
                    disabled: allDisabled,
                    trigger: React.createElement(
                        'div',
                        _extends({}, triggerProps, { role: 'button', tabIndex: '0', style: { width: '100%' } }),
                        triggerNode
                    ),
                    onPosition: this.getCurrentAlign,
                    canCloseByTrigger: false
                }, popupProps, {
                    className: popupCls
                }),
                React.createElement(
                    'div',
                    { onMouseDown: handleMouseDown, style: { marginLeft: panelLeft } },
                    React.createElement(
                        'div',
                        { dir: rtl ? 'rtl' : undefined, className: prefixCls + '-wrapper', ref: this.popupRef },
                        isRange ? this.renderArrow(arrowLeft) : null,
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
    onCalendarChange: PT.func,

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
    /**
     * 日期显示格式
     */
    format: SharedPT.format,
    label: PT.node,
    separator: PT.node,
    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     *  - string 类型：根据时间格式进行转换
     *  - function 类型：((date: Dayjs, dateStr: string) => any)
     *
     * @version 1.23
     */
    outputFormat: SharedPT.format,

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
    popupTriggerType: 'click',
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

    this.handleVisibleChange = function (visible, targetType) {
        if (['docClick', 'fromTrigger'].indexOf(targetType) > -1) {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                _this4.handleChange(_this4.state.curValue, 'VISIBLE_CHANGE');
            }
            _this4.onVisibleChange(visible);
        }
    };

    this.checkValue = function (value, strictly, format) {
        return _this4.props.type === DATE_PICKER_TYPE.RANGE ? checkRangeDate(value, _this4.state.inputType, _this4.props.disabled, strictly, format) : checkDate(value, format);
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

            if (_this4.state.isRange) {
                _this4.handleClear();
            }
        } else {
            var newState = {
                inputValue: v,
                visible: true
            };
            var curValue = _this4.checkValue(v, true, _this4.props.format);
            if (curValue !== null) {
                newState.curValue = curValue;
            }
            _this4.setState(newState);
        }
    };

    this.onPanelChange = function (value, mode) {
        _this4.setState({
            panelMode: mode
        });
        func.invoke(_this4.props, 'onPanelChange', [value, mode]);
    };

    this.handleClear = function () {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        _this4.clearTimeoutId = setTimeout(function () {
            _this4.handleInputFocus(0);
        });

        _this4.setState({
            inputType: DATE_INPUT_TYPE.BEGIN,
            justBeginInput: _this4.isEnabled()
        });

        _this4.onCalendarChange(null);
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

    this.checkValueDisabled = function (val) {
        var disabledDate = _this4.props.disabledDate;
        var panelMode = _this4.state.panelMode;

        var values = (Array.isArray(val) ? val : [val]).map(function (value) {
            return checkDate(value);
        });

        if (!disabledDate) {
            return false;
        }

        var valuesFiltered = values.filter(function (value) {
            return !!value;
        });

        if (!valuesFiltered.length) {
            return false;
        }

        return valuesFiltered.some(function (value) {
            return disabledDate(value, panelMode);
        });
    };

    this.onKeyDown = function (e) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                {
                    var inputValue = _this4.state.inputValue;

                    _this4.onClick();
                    if (_this4.checkValueDisabled(inputValue)) {
                        // reset inputValue when current inputValue is disabled
                        _this4.handleChange(inputValue, 'VISIBLE_CHANGE');
                        return;
                    }
                    _this4.handleChange(inputValue, 'KEYDOWN_ENTER');
                    break;
                }
            case KEYCODE.SPACE:
                {
                    var _state4 = _this4.state,
                        _inputValue = _state4.inputValue,
                        isRange = _state4.isRange,
                        inputType = _state4.inputType;

                    _this4.onClick();
                    if (isRange) {
                        var updatedInputValue = [].concat(_inputValue);
                        updatedInputValue[inputType] = updatedInputValue[inputType] + ' ';
                        _this4.setState({ inputValue: updatedInputValue });
                    } else {
                        _this4.setState({
                            inputValue: _inputValue + ' '
                        });
                    }
                    break;
                }
            default:
                return;
        }
    };

    this.handleChange = function (v, eventType) {
        var format = _this4.props.format;
        var _state5 = _this4.state,
            isRange = _state5.isRange,
            showOk = _state5.showOk,
            value = _state5.value,
            preValue = _state5.preValue;

        var forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
        var isTemporary = showOk && !forceEvents.includes(eventType);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value : _this4.checkValue(v, !isTemporary, format);

        _this4.setState({
            curValue: v,
            inputValue: fmtValue(v, format)
        });

        if (!isTemporary) {
            _this4.setState({
                value: v
            }, function () {
                // 判断当前选择结束，收起面板：
                // 1. 非 Range 选择
                // 2. 非 选择预设时间、面板收起、清空输入 操作
                // 3. 不需要切换输入框
                var shouldHidePanel = !isRange || ['CLICK_PRESET', 'VISIBLE_CHANGE', 'INPUT_CLEAR'].includes(eventType) || !_this4.shouldSwitchInput(v);
                if (shouldHidePanel) {
                    _this4.onVisibleChange(false);

                    if (isValueChanged(v, preValue)) {
                        _this4.onChange();
                    }
                }
            });
        }
    };

    this.onChange = function () {
        var state = _this4.state,
            props = _this4.props;
        var format = props.format;


        var value = _this4.checkValue('value' in props ? props.value : state.value);

        _this4.setState({
            curValue: value,
            preValue: value,
            inputValue: fmtValue(value, format)
        });

        func.invoke(_this4.props, 'onChange', _this4.getOutputArgs(state.value));
    };

    this.onCalendarChange = function (values) {
        var _props3 = _this4.props,
            format = _props3.format,
            onCalendarChange = _props3.onCalendarChange;


        if (onCalendarChange) {
            var startValue = values && values[0];
            var endValue = values && values[1];
            var startStr = startValue ? fmtValue(values[0], format) : '';
            var endStr = endValue ? fmtValue(values[1], format) : '';

            onCalendarChange(values, [startStr, endStr]);
        }
    };

    this.onOk = function () {
        var inputValue = _this4.state.inputValue;

        var checkedValue = _this4.checkValue(inputValue, true, _this4.props.format);

        func.invoke(_this4.props, 'onOk', _this4.getOutputArgs(checkedValue));

        _this4.setState({ value: checkedValue });
        _this4.handleChange(checkedValue, 'CLICK_OK');
    };

    this.onInputTypeChange = function (idx) {
        var _state6 = _this4.state,
            inputType = _state6.inputType,
            visible = _state6.visible;


        if (idx !== inputType) {
            _this4.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible)
            });
        }
    };

    this.onClick = function () {
        var _state7 = _this4.state,
            visible = _state7.visible,
            inputType = _state7.inputType;


        if (!visible) {
            _this4.handleInputFocus(inputType);
        }
    };

    this.getOutputArgs = function (value) {
        var _props4 = _this4.props,
            outputFormat = _props4.outputFormat,
            format = _props4.format;


        if (outputFormat) {
            return [fmtValue(value, outputFormat)];
        }
        return [value, fmtValue(value, format)];
    };

    this.getCurrentAlign = function (_ref) {
        var align = _ref.align;

        _this4.setState({
            align: align
        });
    };

    this.getRangeInputOffsetLeft = function () {
        var left = _this4.dateInput && _this4.dateInput.input && _this4.dateInput.input[_this4.state.inputType] && _this4.dateInput.input[_this4.state.inputType].getInputNode().offsetLeft;

        return left;
    };

    this.getPopupOffsetLeft = function () {
        var inputOffsetLeft = _this4.getRangeInputOffsetLeft();
        var popupElement = _this4.popupRef.current;
        var popupElementWidth = popupElement ? popupElement.offsetWidth : 0;

        // 弹层宽度大于输入元素长度，只偏移 arrow
        if (popupElementWidth > 1.2 * inputOffsetLeft) {
            return {
                arrowLeft: inputOffsetLeft,
                panelLeft: 0
            };
        } else {
            // 否则 panel 整体偏移，arrow 随 panel 整体偏移
            return {
                arrowLeft: 0,
                panelLeft: inputOffsetLeft
            };
        }
    };

    this.renderArrow = function (left) {
        return React.createElement('div', { key: 'arrow', className: _this4.props.prefix + 'range-picker2-arrow', style: { left: left } });
    };
}, _temp);
Picker.displayName = 'Picker';


export default polyfill(Picker);