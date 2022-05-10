'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

var _utils = require('./utils');

var _propTypes3 = require('./prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _util2 = require('../date-picker2/util');

var _footerPanel = require('../date-picker2/panels/footer-panel');

var _footerPanel2 = _interopRequireDefault(_footerPanel);

var _dateInput = require('./module/date-input');

var _dateInput2 = _interopRequireDefault(_dateInput);

var _constant = require('./constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;
var noop = _util.func.noop,
    checkDate = _util.func.checkDate,
    checkRangeDate = _util.func.checkRangeDate;

var timePickerLocale = _zhCn2.default.TimePicker;

var presetPropType = _propTypes2.default.shape((0, _extends3.default)({
    label: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.func, _utils.checkDateValue])
}, _button2.default.propTypes));

var TimePicker2 = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TimePicker2, _Component);

    function TimePicker2(props, context) {
        (0, _classCallCheck3.default)(this, TimePicker2);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var isRange = props.type === _constant.TIME_PICKER_TYPE.RANGE;

        _this.state = {};
        if (isRange) {
            var _this$getInitRangeInp = _this.getInitRangeInputState(),
                inputType = _this$getInitRangeInp.inputType,
                justBeginInput = _this$getInitRangeInp.justBeginInput;

            _this.state = {
                inputType: inputType,
                justBeginInput: justBeginInput
            };
        }

        var _this$props = _this.props,
            format = _this$props.format,
            visible = _this$props.visible,
            defaultVisible = _this$props.defaultVisible,
            prefix = _this$props.prefix;


        var value = _this.getInitValue();

        // const value = formatInputTimeValue(props.value || props.defaultValue, props.format, isRange);
        _this.state = (0, _extends3.default)({}, _this.state, {
            isRange: isRange,
            inputStr: '', // 输入框的输入值， string类型
            value: value, // 确定值 dayjs类型
            curValue: value, // 临时值 dayjs类型
            preValue: value, // 上个值 dayjs类型
            inputValue: (0, _util2.fmtValue)(value, format),
            inputing: false,
            visible: 'visible' in _this.props ? visible : defaultVisible
        });
        _this.prefixCls = prefix + 'time-picker2';
        return _this;
    }

    TimePicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props, prevState) {
        var disabled = props.disabled,
            type = props.type,
            format = props.format,
            propsValue = props.value;

        var isRange = type === _constant.TIME_PICKER_TYPE.RANGE;
        var state = {
            isRange: isRange
        };

        if ('value' in props) {
            // checkDate function doesn't support hh:mm:ss format, convert to valid dayjs value in advance
            var formatter = function formatter(v) {
                return typeof v === 'string' ? (0, _util.datejs)(v, format) : v;
            };
            var formattedValue = Array.isArray(propsValue) ? propsValue.map(function (v) {
                return formatter(v);
            }) : formatter(propsValue);
            var value = isRange ? checkRangeDate(formattedValue, state.inputType, disabled) : checkDate(formattedValue);
            if ((0, _util2.isValueChanged)(value, state.preValue)) {
                state = (0, _extends3.default)({}, state, {
                    value: value,
                    preValue: value
                });
                if (isRange && !prevState.selecting) {
                    state.inputValue = (0, _util2.fmtValue)(value, format);
                    state.curValue = formattedValue;
                }
            }
        }

        if ('visible' in props) {
            state.visible = props.visible;
        }

        return state;
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


    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param {Dayjs} value
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */


    /**
     * 获取输入框的禁用状态
     * @param {Number} idx
     * @returns {Boolean}
     */


    TimePicker2.prototype.renderPreview = function renderPreview(others) {
        var _props = this.props,
            prefix = _props.prefix,
            format = _props.format,
            className = _props.className,
            renderPreview = _props.renderPreview;
        var value = this.state.value;

        var previewCls = (0, _classnames4.default)(className, prefix + 'form-preview');

        var label = value ? value.format(format) : '';

        if (typeof renderPreview === 'function') {
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                renderPreview(value, this.props)
            );
        }

        return _react2.default.createElement(
            'p',
            (0, _extends3.default)({}, others, { className: previewCls }),
            label
        );
    };

    TimePicker2.prototype.render = function render() {
        var _classnames,
            _this2 = this,
            _classnames2;

        var _props2 = this.props,
            prefix = _props2.prefix,
            label = _props2.label,
            state = _props2.state,
            placeholder = _props2.placeholder,
            size = _props2.size,
            format = _props2.format,
            hasClear = _props2.hasClear,
            hourStep = _props2.hourStep,
            minuteStep = _props2.minuteStep,
            secondStep = _props2.secondStep,
            disabledHours = _props2.disabledHours,
            disabledMinutes = _props2.disabledMinutes,
            disabledSeconds = _props2.disabledSeconds,
            renderTimeMenuItems = _props2.renderTimeMenuItems,
            inputProps = _props2.inputProps,
            popupAlign = _props2.popupAlign,
            popupTriggerType = _props2.popupTriggerType,
            popupContainer = _props2.popupContainer,
            popupStyle = _props2.popupStyle,
            popupClassName = _props2.popupClassName,
            popupProps = _props2.popupProps,
            popupComponent = _props2.popupComponent,
            followTrigger = _props2.followTrigger,
            disabled = _props2.disabled,
            hasBorder = _props2.hasBorder,
            className = _props2.className,
            locale = _props2.locale,
            rtl = _props2.rtl,
            isPreview = _props2.isPreview,
            preset = _props2.preset,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'label', 'state', 'placeholder', 'size', 'format', 'hasClear', 'hourStep', 'minuteStep', 'secondStep', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'renderTimeMenuItems', 'inputProps', 'popupAlign', 'popupTriggerType', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'popupComponent', 'followTrigger', 'disabled', 'hasBorder', 'className', 'locale', 'rtl', 'isPreview', 'preset']);
        var _state = this.state,
            value = _state.value,
            inputStr = _state.inputStr,
            inputValue = _state.inputValue,
            curValue = _state.curValue,
            inputing = _state.inputing,
            visible = _state.visible,
            isRange = _state.isRange,
            inputType = _state.inputType;

        var triggerCls = (0, _classnames4.default)((_classnames = {}, _classnames[this.prefixCls + '-trigger'] = true, _classnames));

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            return this.renderPreview(_util.obj.pickOthers(others, TimePicker2.PropTypes));
        }

        var sharedInputProps = (0, _extends3.default)({
            prefix: prefix,
            locale: locale,
            label: label,
            state: state,
            placeholder: placeholder
        }, inputProps, {
            size: size,
            disabled: disabled,
            // RangePicker 有临时输入态在 inputValue 里面
            value: inputing ? inputStr : isRange ? inputValue : (0, _util2.fmtValue)(value, format) || '',
            hasClear: value && hasClear,
            inputType: inputType,
            isRange: isRange,
            onInputTypeChange: this.onInputTypeChange,
            onInput: this.handleInput,
            onKeyDown: this.onKeyDown,
            ref: function ref(el) {
                return _this2.dateInput = el;
            }
        });

        var triggerInput = _react2.default.createElement(
            'div',
            { className: triggerCls },
            _react2.default.createElement(_dateInput2.default, (0, _extends3.default)({}, sharedInputProps, {
                label: label,
                state: state,
                onClick: this.onClick,
                hasBorder: hasBorder,
                placeholder: placeholder || locale.placeholder,
                className: (0, _classnames4.default)(this.prefixCls + '-input')
            }))
        );

        var panelProps = {
            prefix: prefix,
            locale: locale,
            value: inputing ? this.checkValue(inputStr) : curValue,
            // value: curValue,
            isRange: isRange,
            disabled: disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            showMinute: format.indexOf('m') > -1,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            renderTimeMenuItems: renderTimeMenuItems,
            onSelect: this.handleChange
        };

        var classNames = (0, _classnames4.default)((_classnames2 = {}, _classnames2['' + this.prefixCls] = true, _classnames2[this.prefixCls + '-' + size] = size, _classnames2[prefix + 'disabled'] = disabled, _classnames2), className);

        var PopupComponent = popupComponent ? popupComponent : Popup;
        var oKable = !!(isRange ? inputValue && inputValue[inputType] : inputValue);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(TimePicker2.propTypes, others), { className: classNames }),
            _react2.default.createElement(
                PopupComponent,
                (0, _extends3.default)({
                    align: popupAlign
                }, popupProps, {
                    followTrigger: followTrigger,
                    visible: visible,
                    onVisibleChange: this.handleVisibleChange,
                    trigger: triggerInput,
                    container: popupContainer,
                    disabled: disabled,
                    triggerType: popupTriggerType,
                    style: popupStyle,
                    className: popupClassName
                }),
                _react2.default.createElement(
                    'div',
                    { dir: others.dir, className: this.prefixCls + '-wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: this.prefixCls + '-body' },
                        _react2.default.createElement(_panel2.default, panelProps),
                        preset || isRange ? _react2.default.createElement(_footerPanel2.default, {
                            prefix: prefix,
                            className: this.prefixCls + '-footer',
                            showTime: true,
                            oKable: oKable,
                            showOk: isRange,
                            onOk: this.onOk,
                            onChange: this.handleChange,
                            preset: preset
                        }) : null
                    )
                )
            )
        );
    };

    return TimePicker2;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 按钮的文案
     */
    label: _propTypes2.default.node,
    /**
     * 输入框状态
     */
    state: _propTypes2.default.oneOf(['error', 'success']),
    /**
     * 输入框提示
     */
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
    /**
     * 时间值，dayjs格式或者2020-01-01字符串格式，受控状态使用
     */
    value: _propTypes4.default.value,
    /**
     * 时间初值，dayjs格式或者2020-01-01字符串格式，非受控状态使用
     */
    defaultValue: _propTypes4.default.value,
    /**
     * 时间选择框的尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 是否允许清空时间
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 时间的格式
     * https://dayjs.gitee.io/docs/zh-CN/display/format
     */
    format: _propTypes2.default.string,
    /**
     * 小时选项步长
     */
    hourStep: _propTypes2.default.number,
    /**
     * 分钟选项步长
     */
    minuteStep: _propTypes2.default.number,
    /**
     * 秒钟选项步长
     */
    secondStep: _propTypes2.default.number,
    /**
     * 禁用小时函数
     * @param {Number} index 时 0 - 23
     * @return {Boolean} 是否禁用
     */
    disabledHours: _propTypes2.default.func,
    /**
     * 禁用分钟函数
     * @param {Number} index 分 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledMinutes: _propTypes2.default.func,
    /**
     * 禁用秒钟函数
     * @param {Number} index 秒 0 - 59
     * @return {Boolean} 是否禁用
     */
    disabledSeconds: _propTypes2.default.func,
    /**
     * 渲染的可选择时间列表
     * [{
     *  label: '01',
     *  value: 1
     * }]
     * @param {Array} list 默认渲染的列表
     * @param {String} mode 渲染的菜单 hour, minute, second
     * @param {dayjs} value 当前时间，可能为 null
     * @return {Array} 返回需要渲染的数据
     */
    renderTimeMenuItems: _propTypes2.default.func,
    /**
     * 弹层是否显示（受控）
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示（非受控）
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层容器
     * @param {Object} target 目标节点
     * @return {ReactNode} 容器节点
     */
    popupContainer: _propTypes2.default.any,
    /**
     * 弹层对齐方式, 详情见Overlay 文档
     */
    popupAlign: _propTypes2.default.string,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层展示状态变化时的回调
     * @param {Boolean} visible 弹层是否隐藏和显示
     * @param {String} type 触发弹层显示和隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层属性
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 输入框是否有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {DayjsObject} value 时间
     */
    renderPreview: _propTypes2.default.func,
    /**
     * 时间值改变时的回调
     * @param {DayjsObject} date dayjs时间对象
     * @param {Object|String} dateString 时间对象或时间字符串
     */
    onChange: _propTypes2.default.func,
    className: _propTypes2.default.string,
    name: _propTypes2.default.string,
    /**
     * 预设值，会显示在时间面板下面
     */
    preset: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(presetPropType), presetPropType]),
    inputProps: _propTypes2.default.shape(_input2.default.propTypes),
    popupComponent: _propTypes2.default.elementType,
    type: _propTypes2.default.oneOf(['time', 'range'])
}), _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    locale: timePickerLocale,
    size: 'medium',
    format: 'HH:mm:ss',
    hasClear: true,
    disabled: false,
    hasBorder: true,
    type: 'time',
    popupAlign: 'tl bl',
    popupTriggerType: 'click',
    onChange: noop,
    onVisibleChange: noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getInitValue = function () {
        var props = _this3.props;
        var type = props.type,
            value = props.value,
            defaultValue = props.defaultValue;


        var val = type === _constant.TIME_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value : 'defaultValue' in props ? defaultValue : val;

        return _this3.checkValue(val);
    };

    this.getInitRangeInputState = function () {
        return {
            justBeginInput: _this3.isEnabled(),
            inputType: _this3.isEnabled(0) ? _constant.TIME_INPUT_TYPE.BEGIN : _constant.TIME_INPUT_TYPE.END
        };
    };

    this.onKeyDown = function (e) {
        if (e.keyCode === _util.KEYCODE.ENTER) {
            var inputValue = _this3.state.inputValue;

            _this3.handleChange(inputValue, 'KEYDOWN_ENTER');
            _this3.onClick();
            return;
        }

        var _state2 = _this3.state,
            value = _state2.value,
            inputStr = _state2.inputStr,
            inputType = _state2.inputType,
            isRange = _state2.isRange;
        var _props3 = _this3.props,
            format = _props3.format,
            _props3$hourStep = _props3.hourStep,
            hourStep = _props3$hourStep === undefined ? 1 : _props3$hourStep,
            _props3$minuteStep = _props3.minuteStep,
            minuteStep = _props3$minuteStep === undefined ? 1 : _props3$minuteStep,
            _props3$secondStep = _props3.secondStep,
            secondStep = _props3$secondStep === undefined ? 1 : _props3$secondStep,
            disabledMinutes = _props3.disabledMinutes,
            disabledSeconds = _props3.disabledSeconds;


        var unit = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        var timeStr = (0, _utils.onTimeKeydown)(e, {
            format: format,
            timeInputStr: isRange ? inputStr[inputType] : inputStr,
            steps: {
                hour: hourStep,
                minute: minuteStep,
                second: secondStep
            },
            value: value
        }, unit);

        if (!timeStr) return;
        var newInputStr = timeStr;
        if (isRange) {
            newInputStr = inputStr;
            newInputStr[inputType] = timeStr;
        }

        _this3.handleChange(newInputStr, 'KEYDOWN_CODE');
    };

    this.onVisibleChange = function (visible, type) {
        if (!('visible' in _this3.props)) {
            _this3.setState({
                visible: visible
            });
        }
        _this3.props.onVisibleChange(visible, type);
    };

    this.onClick = function () {
        var _state3 = _this3.state,
            visible = _state3.visible,
            inputType = _state3.inputType;


        if (!visible) {
            _this3.onVisibleChange(true);
            _this3.handleInputFocus(inputType);
        }
    };

    this.handleVisibleChange = function (visible, targetType) {
        if (targetType === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                _this3.handleChange(_this3.state.curValue, 'VISIBLE_CHANGE');
            }
            _this3.onVisibleChange(visible);
        }
    };

    this.handleInputFocus = function (inputType) {
        var inputEl = _this3.dateInput && _this3.dateInput.input;

        if (_this3.state.isRange) {
            inputEl = inputEl && inputEl[inputType];
        }

        inputEl && inputEl.focus();
    };

    this.onOk = function () {
        var curValue = _this3.state.curValue;

        var checkedValue = _this3.checkValue(curValue);

        _util.func.invoke(_this3.props, 'onOk', _this3.getOutputArgs(checkedValue));

        _this3.setState({ value: checkedValue });
        _this3.handleChange(checkedValue, 'CLICK_OK');
    };

    this.onInputTypeChange = function (idx) {
        var _state4 = _this3.state,
            inputType = _state4.inputType,
            visible = _state4.visible;


        if (idx !== inputType) {
            _this3.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible)
            });
        }
    };

    this.checkValue = function (value, strictly) {
        var inputType = _this3.state.inputType;

        var formatter = function formatter(v) {
            return typeof v === 'string' ? (0, _util.datejs)(v, 'HH:mm:ss') : v;
        };
        var formattedValue = Array.isArray(value) ? value.map(function (v) {
            return formatter(v);
        }) : formatter(value);

        return _this3.props.type === _constant.TIME_PICKER_TYPE.RANGE ? checkRangeDate(formattedValue, inputType, _this3.props.disabled, strictly) : checkDate(formattedValue);
    };

    this.getOutputArgs = function (value) {
        var format = _this3.props.format;

        return [value, (0, _util2.fmtValue)(value, format)];
    };

    this.onChange = function (v) {
        var state = _this3.state,
            props = _this3.props;
        var format = props.format;


        var nextValue = v === undefined ? state.value : v;
        var value = _this3.checkValue(nextValue);

        _this3.setState({
            curValue: value,
            preValue: value,
            inputStr: (0, _util2.fmtValue)(value, format),
            inputValue: (0, _util2.fmtValue)(value, format)
        });

        _util.func.invoke(_this3.props, 'onChange', _this3.getOutputArgs(nextValue));
    };

    this.shouldSwitchInput = function (value) {
        var _state5 = _this3.state,
            inputType = _state5.inputType,
            justBeginInput = _state5.justBeginInput;

        var idx = justBeginInput ? (0, _util2.switchInputType)(inputType) : value.indexOf(null);

        if (idx !== -1 && _this3.isEnabled(idx)) {
            _this3.onInputTypeChange(idx);
            _this3.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    this.handleChange = function (v, eventType) {
        var format = _this3.props.format;
        var _state6 = _this3.state,
            isRange = _state6.isRange,
            value = _state6.value,
            preValue = _state6.preValue;

        var forceEvents = ['KEYDOWN_ENTER', 'CLICK_PRESET', 'CLICK_OK', 'INPUT_CLEAR', 'VISIBLE_CHANGE'];
        var isTemporary = isRange && !forceEvents.includes(eventType);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value : _this3.checkValue(v, !isTemporary);

        var stringV = (0, _util2.fmtValue)(v, format);

        _this3.setState({
            curValue: v,
            inputStr: stringV,
            inputValue: stringV,
            inputing: false,
            selecting: eventType === 'start' || eventType === 'end'
        });

        if (!isTemporary) {
            _this3.setState({
                value: v
            }, function () {
                // 判断当前选择结束，收起面板：
                // 1. 非 Range 选择
                // 2. 非 选择预设时间、面板收起、清空输入 操作
                // 3. 不需要切换输入框
                var shouldHidePanel = ['CLICK_PRESET', 'VISIBLE_CHANGE', 'KEYDOWN_ENTER', 'INPUT_CLEAR', 'CLICK_OK'].includes(eventType) || isRange && !_this3.shouldSwitchInput(v);
                if (shouldHidePanel) {
                    _this3.onVisibleChange(false);
                }

                if ((0, _util2.isValueChanged)(v, preValue)) {
                    _this3.onChange(v);
                }
            });
        }
    };

    this.isEnabled = function (idx) {
        var disabled = _this3.props.disabled;


        return Array.isArray(disabled) ? idx === undefined ? !disabled[0] && !disabled[1] : !disabled[idx] : !disabled;
    };

    this.handleClear = function () {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        _this3.clearTimeoutId = setTimeout(function () {
            _this3.handleInputFocus(0);
        });

        _this3.setState({
            inputType: _constant.TIME_INPUT_TYPE.BEGIN,
            justBeginInput: _this3.isEnabled()
        });
    };

    this.handleInput = function (v, eventType) {
        var isRange = _this3.state.isRange;

        if (eventType === 'clear') {
            _this3.handleChange(v, 'INPUT_CLEAR');

            if (isRange) {
                _this3.handleClear();
            }
        } else {
            _this3.setState({
                inputStr: v,
                inputValue: v,
                curValue: _this3.checkValue(v),
                inputing: true,
                visible: true
            });
        }
    };
}, _temp);
TimePicker2.displayName = 'TimePicker2';
exports.default = (0, _reactLifecyclesCompat.polyfill)(TimePicker2);
module.exports = exports['default'];