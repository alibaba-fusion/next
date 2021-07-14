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

var PT = _interopRequireWildcard(_propTypes);

var _propTypes2 = require('./prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;
var renderNode = _util.func.renderNode;
var pickProps = _util.obj.pickProps,
    pickOthers = _util.obj.pickOthers;

/**
 * 判断值是否改变
 * @param {dayjs.ConfigType}} newValue
 * @param {dayjs.ConfigType} oldValue
 * @returns {boolean}
 */

function isValueChanged(newValue, oldValue) {
    return Array.isArray(newValue) ? isValueChanged(newValue[0], oldValue && oldValue[0]) || isValueChanged(newValue[1], oldValue && oldValue[1]) : newValue !== oldValue && !(0, _util.datejs)(newValue).isSame(oldValue);
}

/**
 * 获取输入框值
 * @param {*} value 日期值
 * @param {string | funtion} fmt 日期格式
 * @returns {string | string[]}
 */
function fmtValue(value, fmt) {
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

/**
 * 日期检验：无效值返回 null
 * @param {dayjs.ConfigType} value
 * @returns {Dayjs | null}
 */
function checkDate(value) {
    /**
     * 因为 datejs(undefined) 表示当前时间
     * 但是这里期望的是一个空值，即用户不输入值的时候显示为空
     */
    if (value === undefined) {
        value = null;
    }

    value = (0, _util.datejs)(value);
    return value.isValid() ? value : null;
}

/**
 * Range 日期检验
 * @param {dayjs.ConfigType[]} value 日期值
 * @param {number} inputType 输入框类型：开始时间输入框/结束时间输入框
 * @param {boolean} disabled 是否禁用
 * @param {boolean} strictly 是否严格校验：严格模式下不允许开始时间大于结束时间，在显示确认按键的，用户输入过程可不严格校验
 * @returns {Dayjs[] | null[]}
 */
function checkRangeDate(value, inputType, disabled) {
    var strictly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var _ref = Array.isArray(value) ? [0, 1].map(function (i) {
        return checkDate(value[i]);
    }) : [null, null],
        begin = _ref[0],
        end = _ref[1];

    var _ref2 = Array.isArray(disabled) ? disabled : [disabled, disabled],
        disabledBegin = _ref2[0],
        disabledEnd = _ref2[1];

    /**
     * 需要清除其中一个时间，优先清除结束时间，下面情况清除开始时间：
     * 1. 结束时间被 disabled 而开始时间没有被 disabled
     * 2. 开始时间和结束时间都没被 disabled 且当前正在输入是结束时间
     */


    if (strictly && begin && end && begin.isAfter(end)) {
        if (!disabledBegin && disabledEnd || !disabledBegin && !disabledBegin && inputType === _constant.DATE_INPUT_TYPE.END) {
            return [null, end];
        }

        return [begin, null];
    }

    return [begin, end];
}

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
            value: value,
            inputValue: fmtValue(value, format),
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

            if (isValueChanged(value, state.value)) {
                newState = (0, _extends3.default)({}, newState, {
                    value: value,
                    curValue: value,
                    inputValue: fmtValue(value, format)
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

        var triggerNode = renderNode(trigger, _react2.default.createElement(_dateInput2.default, inputProps));

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

        var DateNode = isRange ? _react2.default.createElement(_rangePanel2.default, (0, _extends3.default)({ justBeginInput: justBeginInput }, panelProps)) : _react2.default.createElement(_datePanel2.default, panelProps);

        // 底部节点
        var oKable = !!(isRange ? curValue && curValue[inputType] : curValue);
        var shouldShowFooter = showOk || preset || extraFooterRender;

        var footerNode = shouldShowFooter ? _react2.default.createElement(_footerPanel2.default, {
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


        var popupCls = (0, _classnames3.default)(popupClassName || popupProps && popupProps.className, (_classnames = {}, _classnames[prefixCls + '-overlay'] = true, _classnames[prefixCls + '-' + (align || []).join('-')] = align, _classnames[prefixCls + '-overlay-range'] = isRange, _classnames));
        var PopupComp = popupComponent || Popup;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, pickOthers(Picker.propTypes, restProps), {
                dir: rtl ? 'rtl' : undefined,
                className: (0, _classnames3.default)(className, prefixCls)
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
                    trigger: _react2.default.createElement(
                        'div',
                        (0, _extends3.default)({}, triggerProps, { role: 'button', tabIndex: '0', style: this.props.style }),
                        triggerNode
                    ),
                    onPosition: this.getCurrentAlign
                }, popupProps, {
                    className: popupCls
                }),
                _react2.default.createElement(
                    'div',
                    { onMouseDown: handleMouseDown },
                    _react2.default.createElement(
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
}(_react2.default.Component), _class.propTypes = {
    rtl: PT.bool,
    prefix: PT.string,
    locale: PT.object,
    name: PT.string,

    // calendar
    mode: _propTypes3.default.mode,
    type: _propTypes3.default.type,
    value: _propTypes3.default.value,
    defaultValue: _propTypes3.default.value,
    defaultPanelValue: _propTypes3.default.date,
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
    extraFooterRender: _propTypes3.default.render,
    showOk: PT.bool,

    // input
    trigger: _propTypes3.default.render,
    hasBorder: PT.bool,
    inputProps: PT.object,
    hasClear: PT.bool,
    placeholder: _propTypes3.default.placeholder,
    disabled: _propTypes3.default.disabled,
    inputReadOnly: _propTypes3.default.readOnly,
    /**
     * 日期显示格式
     */
    format: _propTypes3.default.format,
    label: PT.node,
    separator: PT.node,
    /**
     * 输出格式：控制 onChange、onOk 事件的输出值格式
     *  - string 类型：根据时间格式进行转换
     *  - function 类型：((date: Dayjs, dateStr: string) => any)
     *
     * @version 1.23
     */
    outputFormat: _propTypes3.default.format,

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
    dateInputAriaLabel: _propTypes3.default.ariaLabel
}, _class.defaultProps = {
    rtl: false,
    prefix: 'next-',
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

    this.handleVisibleChange = function (visible, type) {
        if (type === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                _this4.handleChange(_this4.state.curValue, 'VISIBLE_CHANGE');
            }
            _this4.onVisibleChange(visible);
        }
    };

    this.checkValue = function (value, strictly) {
        return _this4.props.type === _constant.DATE_PICKER_TYPE.RANGE ? checkRangeDate(value, _this4.state.inputType, _this4.props.disabled, strictly) : checkDate(value);
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

    this.onKeyDown = function (e) {
        switch (e.keyCode) {
            case _util.KEYCODE.ENTER:
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

    this.handleChange = function (v, eventType) {
        var format = _this4.props.format;
        var _state4 = _this4.state,
            isRange = _state4.isRange,
            showOk = _state4.showOk,
            value = _state4.value;

        var forceEvents = ['KEYDOWN_ENTER', 'CLICK_OK', 'CLICK_PRESET', 'INPUT_CLEAR'];

        /**
         * 在显示确认按键且关闭弹层的时候 将当前值设置回确认值
         * 在有确认按键的时候 需要点击确认值才生效
         */
        if (showOk && eventType === 'VISIBLE_CHANGE') {
            v = value;
        } else {
            // 在显示确认按键
            v = _this4.checkValue(v, !showOk || forceEvents.includes(eventType));
        }

        _this4.setState({
            curValue: v,
            inputValue: fmtValue(v, format)
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

    this.onChange = function (v) {
        var value = _this4.state.value;
        var format = _this4.props.format;


        if (isValueChanged(v, value)) {
            // 受控
            if ('value' in _this4.props) {
                _this4.setState({
                    curValue: value,
                    inputValue: fmtValue(value, format)
                });
            } else {
                v = _this4.checkValue(v);

                _this4.setState({
                    value: v,
                    curValue: v,
                    inputValue: fmtValue(v, format)
                });
            }

            _util.func.invoke(_this4.props, 'onChange', _this4.getOutputArgs(v));
        }

        _this4.onVisibleChange(false);
    };

    this.onOk = function () {
        var inputValue = _this4.state.inputValue;

        var checkedValue = _this4.checkValue(inputValue);

        var result = _util.func.invoke(_this4.props, 'onOk', _this4.getOutputArgs(checkedValue));

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

    this.getOutputArgs = function (value) {
        var _props3 = _this4.props,
            outputFormat = _props3.outputFormat,
            format = _props3.format;


        if (outputFormat) {
            return [fmtValue(value, outputFormat)];
        }
        return [value, fmtValue(value, format)];
    };

    this.getCurrentAlign = function (_ref3) {
        var align = _ref3.align;

        _this4.setState({
            align: align
        });
    };

    this.renderArrow = function () {
        var left = _this4.dateInput && _this4.dateInput.input && _this4.dateInput.input[_this4.state.inputType] && _this4.dateInput.input[_this4.state.inputType].getInputNode().offsetLeft;

        return _react2.default.createElement('div', { key: 'arrow', className: _this4.props.prefix + 'range-picker2-arrow', style: { left: left } });
    };
}, _temp);
Picker.displayName = 'Picker';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Picker);
module.exports = exports['default'];