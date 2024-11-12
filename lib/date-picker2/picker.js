'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('./prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _util2 = require('./util');

var _constant = require('./constant');

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _dateInput = require('./panels/date-input');

var _dateInput2 = _interopRequireDefault(_dateInput);

var _datePanel = require('./panels/date-panel');

var _datePanel2 = _interopRequireDefault(_datePanel);

var _rangePanel = require('./panels/range-panel');

var _rangePanel2 = _interopRequireDefault(_rangePanel);

var _footerPanel = require('./panels/footer-panel');

var _footerPanel2 = _interopRequireDefault(_footerPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;
var pickProps = _util.obj.pickProps,
    pickOthers = _util.obj.pickOthers;
var renderNode = _util.func.renderNode,
    checkDate = _util.func.checkDate,
    checkRangeDate = _util.func.checkRangeDate;
var Picker = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

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

        if (type === _constant.DATE_PICKER_TYPE.RANGE) {
            var _this$getInitRangeInp = _this.getInitRangeInputState(),
                inputType = _this$getInitRangeInp.inputType,
                justBeginInput = _this$getInitRangeInp.justBeginInput;

            _this.state = (0, _extends3.default)({
                inputType: inputType,
                justBeginInput: justBeginInput
            }, _this.state);
        }

        var value = _this.getInitValue();

        _this.state = (0, _extends3.default)({
            value: value, // 确定值
            curValue: value, // 临时值
            preValue: value, // 上个值
            inputValue: (0, _util2.fmtValue)(value, format)
        }, _this.state);

        _this.prefixCls = prefix + 'date-picker2';

        _this.popupRef = _react2.default.createRef();
        return _this;
    }

    Picker.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var type = props.type,
            showTime = props.showTime,
            showOk = props.showOk,
            disabled = props.disabled,
            format = props.format,
            mode = props.mode;

        var isRange = type === _constant.DATE_PICKER_TYPE.RANGE;

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
                var otherType = (0, _util2.switchInputType)(state.inputType);

                if (!_disabled[otherType]) {
                    inputType = otherType;
                }
            }

            newState.inputType = inputType;
        }

        if ('value' in props) {
            var value = isRange ? checkRangeDate(props.value, state.inputType, disabled) : checkDate(props.value);

            if ((0, _util2.isValueChanged)(value, state.preValue)) {
                newState = (0, _extends3.default)({}, newState, {
                    value: value,
                    curValue: value,
                    preValue: value,
                    inputValue: (0, _util2.fmtValue)(value, format)
                });
            }

            if ('mode' in props) {
                if (mode !== state.panelMode) {
                    newState = (0, _extends3.default)({}, newState, {
                        panelMode: mode,
                        inputValue: (0, _util2.fmtValue)(value, format)
                    });
                }
            }

            if ('showTime' in props) {
                if (showTime !== state.showTime) {
                    newState = (0, _extends3.default)({}, newState, {
                        showTime: !!showTime,
                        inputValue: (0, _util2.fmtValue)(value, format)
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

            _util.func.invoke(this.props, 'onVisibleChange', [visible]);
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
            restProps = (0, _objectWithoutProperties3.default)(_props, ['rtl', 'locale', 'prefix', 'inputReadOnly', 'showTime', 'preset', 'mode', 'format', 'trigger', 'disabledDate', 'extraFooterRender', 'timePanelProps', 'resetTime', 'placeholder', 'disabledTime', 'dateCellRender', 'disabled', 'isPreview', 'className', 'defaultPanelValue', 'renderPreview', 'label']);
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
            var previewCls = (0, _classnames3.default)(className, prefix + 'form-preview');

            return _react2.default.createElement(
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
        var inputProps = (0, _extends3.default)({}, pickProps(_dateInput2.default.propTypes, restProps), sharedProps, {
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

        var triggerNode = renderNode(trigger, _react2.default.createElement(_dateInput2.default, inputProps), inputProps);

        // 日期
        var panelProps = (0, _extends3.default)({}, sharedProps, {
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

        var DateNode = isRange ? _react2.default.createElement(_rangePanel2.default, (0, _extends3.default)({ justBeginInput: justBeginInput, onCalendarChange: onCalendarChange }, panelProps)) : _react2.default.createElement(_datePanel2.default, panelProps);

        // 底部节点
        var oKable = !!(!this.checkValueDisabled(inputValue) && (isRange ? inputValue && inputValue[inputType] : inputValue));
        var shouldShowFooter = showOk || preset || extraFooterRender;

        var footerNode = shouldShowFooter ? _react2.default.createElement(_footerPanel2.default, {
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


        var popupCls = (0, _classnames3.default)(popupClassName || popupProps && popupProps.className, (_classnames = {}, _classnames[prefixCls + '-overlay'] = true, _classnames[prefixCls + '-' + (align || []).join('-')] = align, _classnames[prefixCls + '-overlay-range'] = isRange, _classnames));
        var PopupComp = popupComponent || Popup;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, pickOthers(Picker.propTypes, restProps), {
                dir: rtl ? 'rtl' : undefined,
                className: (0, _classnames3.default)(className, prefixCls),
                style: this.props.style
            }),
            _react2.default.createElement(
                PopupComp,
                (0, _extends3.default)({
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
                    trigger: _react2.default.createElement(
                        'div',
                        (0, _extends3.default)({}, triggerProps, { role: 'button', tabIndex: '0', style: { width: '100%' } }),
                        triggerNode
                    ),
                    onPosition: this.getCurrentAlign,
                    canCloseByTrigger: false
                }, popupProps, {
                    className: popupCls
                }),
                _react2.default.createElement(
                    'div',
                    { onMouseDown: handleMouseDown, style: { marginLeft: panelLeft } },
                    _react2.default.createElement(
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
}(_react2.default.Component), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    name: _propTypes2.default.string,

    // calendar
    mode: _propTypes4.default.mode,
    type: _propTypes4.default.type,
    value: _propTypes4.default.value,
    defaultValue: _propTypes4.default.value,
    defaultPanelValue: _propTypes4.default.date,
    disabledDate: _propTypes2.default.func,
    visible: _propTypes2.default.bool,
    defaultVisible: _propTypes2.default.bool,
    dateCellRender: _propTypes2.default.func,

    // event
    onOk: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onVisibleChange: _propTypes2.default.func,
    onPanelChange: _propTypes2.default.func,
    onCalendarChange: _propTypes2.default.func,

    // time
    showTime: _propTypes2.default.bool,
    resetTime: _propTypes2.default.bool,
    timePanelProps: _propTypes2.default.object,
    disabledTime: _propTypes2.default.object,

    // header
    titleRender: _propTypes2.default.func,

    // footer
    preset: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    extraFooterRender: _propTypes4.default.render,
    showOk: _propTypes2.default.bool,

    // input
    trigger: _propTypes4.default.render,
    hasBorder: _propTypes2.default.bool,
    inputProps: _propTypes2.default.object,
    hasClear: _propTypes2.default.bool,
    placeholder: _propTypes4.default.placeholder,
    disabled: _propTypes4.default.disabled,
    inputReadOnly: _propTypes4.default.readOnly,
    /**
     * 日期显示格式
     */
    format: _propTypes4.default.format,
    label: _propTypes2.default.node,
    separator: _propTypes2.default.node,
    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     *  - string 类型：根据时间格式进行转换
     *  - function 类型：((date: Dayjs, dateStr: string) => any)
     *
     * @version 1.23
     */
    outputFormat: _propTypes4.default.format,

    // popup
    followTrigger: _propTypes2.default.bool,
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    popupAlign: _propTypes2.default.string,
    popupContainer: _propTypes2.default.any,
    popupStyle: _propTypes2.default.object,
    popupClassName: _propTypes2.default.string,
    popupComponent: _propTypes2.default.elementType,
    popupProps: _propTypes2.default.object,

    // preview
    isPreview: _propTypes2.default.bool,
    renderPreview: _propTypes2.default.func,

    // ariaLabel
    dateInputAriaLabel: _propTypes4.default.ariaLabel
}, _class.defaultProps = {
    rtl: false,
    prefix: 'next-',
    popupTriggerType: 'click',
    locale: _zhCn2.default.DatePicker,
    defaultVisible: false,
    type: _constant.DATE_PICKER_TYPE.DATE,
    mode: _constant.DATE_PICKER_MODE.DATE,
    format: 'YYYY-MM-DD'
}, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getInitValue = function () {
        var props = _this4.props;
        var type = props.type,
            value = props.value,
            defaultValue = props.defaultValue;


        var val = type === _constant.DATE_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return _this4.checkValue(val);
    };

    this.getInitRangeInputState = function () {
        return {
            justBeginInput: _this4.isEnabled(),
            inputType: _this4.isEnabled(0) ? _constant.DATE_INPUT_TYPE.BEGIN : _constant.DATE_INPUT_TYPE.END
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
        return _this4.props.type === _constant.DATE_PICKER_TYPE.RANGE ? checkRangeDate(value, _this4.state.inputType, _this4.props.disabled, strictly, format) : checkDate(value, format);
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
        _util.func.invoke(_this4.props, 'onPanelChange', [value, mode]);
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
            inputType: _constant.DATE_INPUT_TYPE.BEGIN,
            justBeginInput: _this4.isEnabled()
        });

        _this4.onCalendarChange(null);
    };

    this.shouldSwitchInput = function (value) {
        var _state3 = _this4.state,
            inputType = _state3.inputType,
            justBeginInput = _state3.justBeginInput;

        var idx = justBeginInput ? (0, _util2.switchInputType)(inputType) : value.indexOf(null);

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
            case _util.KEYCODE.ENTER:
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
            case _util.KEYCODE.SPACE:
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
            inputValue: (0, _util2.fmtValue)(v, format)
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

                    if ((0, _util2.isValueChanged)(v, preValue)) {
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
            inputValue: (0, _util2.fmtValue)(value, format)
        });

        _util.func.invoke(_this4.props, 'onChange', _this4.getOutputArgs(state.value));
    };

    this.onCalendarChange = function (values) {
        var _props3 = _this4.props,
            format = _props3.format,
            onCalendarChange = _props3.onCalendarChange;


        if (onCalendarChange) {
            var startValue = values && values[0];
            var endValue = values && values[1];
            var startStr = startValue ? (0, _util2.fmtValue)(values[0], format) : '';
            var endStr = endValue ? (0, _util2.fmtValue)(values[1], format) : '';

            onCalendarChange(values, [startStr, endStr]);
        }
    };

    this.onOk = function () {
        var inputValue = _this4.state.inputValue;

        var checkedValue = _this4.checkValue(inputValue, true, _this4.props.format);

        _util.func.invoke(_this4.props, 'onOk', _this4.getOutputArgs(checkedValue));

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
            return [(0, _util2.fmtValue)(value, outputFormat)];
        }
        return [value, (0, _util2.fmtValue)(value, format)];
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
        return _react2.default.createElement('div', { key: 'arrow', className: _this4.props.prefix + 'range-picker2-arrow', style: { left: left } });
    };
}, _temp);
Picker.displayName = 'Picker';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Picker);
module.exports = exports.default;
module.exports.default = exports.default;