'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;

/** NumberPicker */
var NumberPicker = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(NumberPicker, _React$Component);

    function NumberPicker(props) {
        (0, _classCallCheck3.default)(this, NumberPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        var defaultValue = props.defaultValue,
            max = props.max,
            min = props.min,
            stringMode = props.stringMode;


        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = defaultValue;
        }
        value = value === undefined || value === null ? '' : stringMode ? '' + value : value;
        _this.state = {
            value: value,
            hasFocused: false,
            onlyDisplay: false,
            displayValue: value,
            max: max === MAX_SAFE_INTEGER && stringMode ? Infinity : max,
            min: min === MIN_SAFE_INTEGER && stringMode ? -Infinity : min
        };
        return _this;
    }

    NumberPicker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        // 用户键入非法值后render逻辑，未触发onChange，业务组件无感知，不强制受控value
        if (prevState.onlyDisplay) {
            return {
                value: prevState.value,
                displayValue: prevState.displayValue,
                onlyDisplay: false
            };
        }
        // 一般受控render逻辑
        if ('value' in nextProps && '' + nextProps.value !== '' + prevState.value) {
            var value = nextProps.value,
                max = nextProps.max,
                min = nextProps.min,
                stringMode = nextProps.stringMode;

            value = value === undefined || value === null ? '' : stringMode ? '' + value : value;
            return {
                value: value,
                displayValue: value,
                max: max !== MAX_SAFE_INTEGER ? max : prevState.max,
                min: min !== MIN_SAFE_INTEGER ? min : prevState.min
            };
        }

        return null;
    };

    NumberPicker.prototype.isGreaterThan = function isGreaterThan(v1, v2) {
        var stringMode = this.props.stringMode;

        if (stringMode) return (0, _bignumber2.default)(v1).isGreaterThan((0, _bignumber2.default)(v2));
        return Number(v1) > Number(v2);
    };

    NumberPicker.prototype.correctBoundary = function correctBoundary(value) {
        var _state = this.state,
            max = _state.max,
            min = _state.min;

        return this.isGreaterThan(min, value) ? min : this.isGreaterThan(value, max) ? max : value;
    };

    NumberPicker.prototype.setFocus = function setFocus(status) {
        var format = this.props.format;
        // Only trigger `setState` if `format` is settled to avoid unnecessary rendering

        if (typeof format === 'function') {
            this.setState({
                hasFocused: status
            });
        }
    };

    NumberPicker.prototype.onFocus = function onFocus(e) {
        var onFocus = this.props.onFocus;

        this.setFocus(true);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        onFocus && onFocus.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.onBlur = function onBlur(e) {
        var _props = this.props,
            editable = _props.editable,
            stringMode = _props.stringMode;

        var displayValue = '' + this.state.displayValue;
        // 展示值合法但超出边界时，额外在Blur时触发onChange
        // 展示值非法时，回退前一个有效值
        if (editable === true && !isNaN(displayValue) && !this.shouldFireOnChange(displayValue) && !this.withinMinMax(displayValue)) {
            var valueCorrected = this.correctValue(displayValue);
            valueCorrected = stringMode ? (0, _bignumber2.default)(valueCorrected).toFixed(this.getPrecision()) : valueCorrected;
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e, prevValue: displayValue });
            }
            this.setDisplayValue({ displayValue: valueCorrected });
        } else {
            this.setDisplayValue({ displayValue: this.state.value });
        }
        this.setFocus(false);
        var onBlur = this.props.onBlur;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        onBlur && onBlur.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.withinMinMax = function withinMinMax(value) {
        var _state2 = this.state,
            max = _state2.max,
            min = _state2.min;

        if (isNaN(value) || this.isGreaterThan(value, max) || this.isGreaterThan(min, value)) return false;
        return true;
    };

    NumberPicker.prototype.setDisplayValue = function setDisplayValue(_ref) {
        var displayValue = _ref.displayValue,
            _ref$onlyDisplay = _ref.onlyDisplay,
            onlyDisplay = _ref$onlyDisplay === undefined ? false : _ref$onlyDisplay;

        this.setState({ displayValue: displayValue, onlyDisplay: onlyDisplay });
    };

    NumberPicker.prototype.getDisplayValue = function getDisplayValue() {
        var _state3 = this.state,
            displayValue = _state3.displayValue,
            hasFocused = _state3.hasFocused;
        var format = this.props.format;


        return typeof format === 'function' && !hasFocused ? format(displayValue) : // 避免原生input将number类型的-0，渲染为0
        typeof displayValue === 'number' && 1 / displayValue === -Infinity ? '-0' : displayValue;
    };

    NumberPicker.prototype.shouldFireOnChange = function shouldFireOnChange(value) {
        // 不触发onChange：a.非数字  b.超出边界的数字输入
        if (isNaN(value) || !this.withinMinMax(value)) {
            return false;
        }
        return true;
    };

    NumberPicker.prototype.onChange = function onChange(value, e) {
        // ignore space & Compatible Chinese Input Method
        value = value.replace('。', '.').trim();
        var onlyDisplay = false;
        if (this.props.editable === true && this.shouldFireOnChange(value)) {
            var valueCorrected = this.correctValue(value);
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e, prevValue: value });
            }
        } else {
            onlyDisplay = true;
        }

        // 【不应支持】如果输入为满足精度要求的纯数字，底层input.value设置为数字类型而非string
        // if (`${valueCorrected}` === value) value = valueCorrected;

        this.setDisplayValue({ displayValue: value, onlyDisplay: onlyDisplay });
    };

    NumberPicker.prototype.correctValue = function correctValue(value) {
        var val = value;

        // take care of isNaN('')=false
        if (val !== '') {
            // 精度订正：直接cut，不四舍五入
            var precisionSet = this.getPrecision();
            var precisionCurrent = value.length - value.indexOf('.') - 1;
            var dotIndex = value.indexOf('.');
            // precision === 0 should cut '.' for stringMode
            var cutPosition = precisionSet !== 0 ? dotIndex + 1 + precisionSet : dotIndex + precisionSet;
            if (dotIndex > -1 && precisionCurrent > precisionSet) val = val.substr(0, cutPosition);

            // 边界订正：
            val = this.correctBoundary(val);
            val = this.props.stringMode ? (0, _bignumber2.default)(val).toFixed() : Number(val);
        }

        if (isNaN(val)) val = this.state.value;

        if ('' + val !== '' + value) {
            // .0* 到 .x0* 不该触发onCorrect
            if (!/\.[0-9]*0+$/g.test(value)) {
                this.props.onCorrect({
                    currentValue: val,
                    oldValue: value
                });
            }
        }

        return val;
    };

    NumberPicker.prototype.setValue = function setValue(_ref2) {
        var _this2 = this;

        var value = _ref2.value,
            e = _ref2.e,
            triggerType = _ref2.triggerType,
            _ref2$prevValue = _ref2.prevValue,
            prevValue = _ref2$prevValue === undefined ? null : _ref2$prevValue;

        if (!('value' in this.props) || value === this.props.value) {
            this.setState({
                value: value
            });
        }

        // 延迟onChange时机，绕过原生 input BUG https://github.com/alibaba-fusion/next/issues/3110
        if (prevValue !== null && '0' + value === '' + prevValue) {
            e.persist();
            setTimeout(function () {
                _this2.props.onChange(isNaN(value) || value === '' ? undefined : value, (0, _extends3.default)({}, e, {
                    triggerType: triggerType
                }));
            }, 0);
        } else {
            this.props.onChange(isNaN(value) || value === '' ? undefined : value, (0, _extends3.default)({}, e, {
                triggerType: triggerType
            }));
        }
    };

    NumberPicker.prototype.getPrecision = function getPrecision() {
        var stepString = this.props.step.toString();
        if (stepString.indexOf('e-') >= 0) {
            return parseInt(stepString.slice(stepString.indexOf('e-')), 10);
        }
        var precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }

        return Math.max(precision, this.props.precision);
    };

    NumberPicker.prototype.getPrecisionFactor = function getPrecisionFactor() {
        var precision = this.getPrecision();
        return Math.pow(10, precision);
    };

    NumberPicker.prototype.onKeyDown = function onKeyDown(e) {
        var _props2;

        if (e.keyCode === 38) {
            this.up(false, e);
        } else if (e.keyCode === 40) {
            this.down(false, e);
        }

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        (_props2 = this.props).onKeyDown.apply(_props2, [e].concat(args));
    };

    NumberPicker.prototype.up = function up(disabled, e) {
        this.step('up', disabled, e);
    };

    NumberPicker.prototype.down = function down(disabled, e) {
        this.step('down', disabled, e);
    };

    NumberPicker.prototype.step = function step(type, disabled, e) {
        if (e) {
            e.preventDefault();
        }

        var onDisabled = this.props.onDisabled;

        if (disabled) {
            return onDisabled(e);
        }

        var value = this.state.value;
        // 受控下，可能强制回填非法值
        if (isNaN(value)) {
            return;
        }

        var val = this[type + 'Step'](value);
        val = this.correctBoundary(val);
        this.setDisplayValue({ displayValue: val });
        this.setValue({ value: val, e: e, triggerType: type });
    };

    NumberPicker.prototype.upStep = function upStep(val) {
        var _props3 = this.props,
            step = _props3.step,
            stringMode = _props3.stringMode;

        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return (0, _bignumber2.default)(val).plus(step).toFixed(this.getPrecision());
    };

    NumberPicker.prototype.downStep = function downStep(val) {
        var _props4 = this.props,
            step = _props4.step,
            stringMode = _props4.stringMode;

        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return (0, _bignumber2.default)(val).minus(step).toFixed(this.getPrecision());
    };

    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param {Number} value value
     */


    NumberPicker.prototype.hackChrome = function hackChrome(value) {
        var precision = this.getPrecision();
        if (precision > 0) {
            return Number(Number(value).toFixed(precision));
        }
        return value;
    };

    NumberPicker.prototype.focus = function focus() {
        this.inputRef.getInstance().focus();
    };

    NumberPicker.prototype.saveInputRef = function saveInputRef(ref) {
        this.inputRef = ref;
    };

    NumberPicker.prototype.getInputNode = function getInputNode() {
        return this.inputRef;
    };

    NumberPicker.prototype.handleMouseDown = function handleMouseDown(e) {
        e.preventDefault();
    };

    NumberPicker.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props5 = this.props,
            device = _props5.device,
            prefix = _props5.prefix,
            rtl = _props5.rtl,
            disabled = _props5.disabled,
            style = _props5.style,
            className = _props5.className,
            size = _props5.size,
            autoFocus = _props5.autoFocus,
            editable = _props5.editable,
            state = _props5.state,
            label = _props5.label,
            _props5$upBtnProps = _props5.upBtnProps,
            upBtnProps = _props5$upBtnProps === undefined ? {} : _props5$upBtnProps,
            _props5$downBtnProps = _props5.downBtnProps,
            downBtnProps = _props5$downBtnProps === undefined ? {} : _props5$downBtnProps,
            innerAfter = _props5.innerAfter,
            isPreview = _props5.isPreview,
            renderPreview = _props5.renderPreview,
            hasTrigger = _props5.hasTrigger,
            alwaysShowTrigger = _props5.alwaysShowTrigger;
        var _state4 = this.state,
            max = _state4.max,
            min = _state4.min;

        var type = device === 'phone' || this.props.type === 'inline' ? 'inline' : 'normal';

        var prefixCls = prefix + 'number-picker';

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls] = true, _classNames[prefixCls + '-' + type] = type, _classNames['' + prefix + size] = true, _classNames[prefixCls + '-show-trigger'] = alwaysShowTrigger, _classNames[prefixCls + '-no-trigger'] = !hasTrigger, _classNames[prefix + 'disabled'] = disabled, _classNames[className] = className, _classNames));

        var upDisabled = false;
        var downDisabled = false;
        var value = this.state.value;
        if (!isNaN(value)) {
            if (!this.isGreaterThan(max, value)) {
                upDisabled = true;
            }
            if (this.isGreaterThan(min, value) || min === value) {
                downDisabled = true;
            }
        }

        var extra = null,
            innerAfterClassName = null,
            addonBefore = null,
            addonAfter = null;
        if (type === 'normal') {
            extra = _react2.default.createElement(
                'span',
                { className: prefixCls + '-handler' },
                _react2.default.createElement(
                    _button2.default,
                    (0, _extends3.default)({}, upBtnProps, {
                        onMouseDown: this.handleMouseDown,
                        disabled: disabled,
                        className: (upBtnProps.className || '') + ' ' + (upDisabled ? 'disabled' : ''),
                        onClick: this.up.bind(this, upDisabled),
                        tabIndex: -1
                    }),
                    _react2.default.createElement(_icon2.default, { type: 'arrow-up', className: prefixCls + '-up-icon' })
                ),
                _react2.default.createElement(
                    _button2.default,
                    (0, _extends3.default)({}, downBtnProps, {
                        onMouseDown: this.handleMouseDown,
                        disabled: disabled,
                        className: (downBtnProps.className || '') + ' ' + (downDisabled ? 'disabled' : ''),
                        onClick: this.down.bind(this, downDisabled),
                        tabIndex: -1
                    }),
                    _react2.default.createElement(_icon2.default, { type: 'arrow-down', className: prefixCls + '-down-icon' })
                )
            );
        } else {
            addonBefore = _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, downBtnProps, {
                    size: size,
                    disabled: disabled,
                    className: (downBtnProps.className || '') + ' ' + (downDisabled ? 'disabled' : ''),
                    onClick: this.down.bind(this, downDisabled),
                    tabIndex: -1
                }),
                _react2.default.createElement(_icon2.default, { type: 'minus', className: prefixCls + '-minus-icon' })
            );
            addonAfter = _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, upBtnProps, {
                    size: size,
                    disabled: disabled,
                    className: (upBtnProps.className || '') + ' ' + (upDisabled ? 'disabled' : ''),
                    onClick: this.up.bind(this, upDisabled),
                    tabIndex: -1
                }),
                _react2.default.createElement(_icon2.default, { type: 'add', className: prefixCls + '-add-icon' })
            );
        }

        var others = _util.obj.pickOthers(NumberPicker.propTypes, this.props);
        var dataAttrs = _util.obj.pickAttrsWith(this.props, 'data-');

        var previewCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'form-preview'] = true, _classNames2[className] = !!className, _classNames2));

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { style: style, className: previewCls }),
                    renderPreview(this.getDisplayValue(), this.props)
                );
            }
            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({}, others, { style: { style: style }, className: previewCls }),
                this.getDisplayValue()
            );
        }

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ className: cls, style: style, dir: rtl ? 'rtl' : undefined }, dataAttrs),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, others, {
                hasClear: false,
                'aria-valuemax': max !== MAX_SAFE_INTEGER ? max : MAX_SAFE_INTEGER,
                'aria-valuemin': min !== MIN_SAFE_INTEGER ? min : MIN_SAFE_INTEGER,
                state: state === 'error' ? 'error' : null,
                onBlur: this.onBlur.bind(this),
                onFocus: this.onFocus.bind(this),
                onKeyDown: this.onKeyDown.bind(this),
                autoFocus: autoFocus,
                readOnly: !editable,
                value: this.getDisplayValue(),
                disabled: disabled,
                size: size,
                onChange: this.onChange.bind(this),
                ref: this.saveInputRef.bind(this),
                label: label,
                innerAfter: innerAfter,
                extra: hasTrigger ? extra : null,
                addonBefore: addonBefore,
                addonAfter: addonAfter
            }))
        );
    };

    return NumberPicker;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 设置类型(当 device 为 phone 时，NumberPicker 的类型强制为 normal，不可通过 type 修改)
     * @enumdesc 普通, 内联
     */
    type: _propTypes2.default.oneOf(['normal', 'inline']),
    /**
     * 大小
     */
    size: _propTypes2.default.oneOf(['large', 'medium', 'small']),
    /**
     * 当前值
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 默认值
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 步长
     */
    step: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 保留小数点后位数
     */
    precision: _propTypes2.default.number,
    /**
     * 用户是否可以输入
     */
    editable: _propTypes2.default.bool,
    /**
     * 自动焦点
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 数值被改变的事件
     * @param {Number|String} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 键盘按下
     * @param {Event} e DOM事件对象
     */
    onKeyDown: _propTypes2.default.func,
    /**
     * 焦点获得
     * @param {Event} e DOM事件对象
     */
    onFocus: _propTypes2.default.func,
    /**
     * 焦点失去
     * @param {Event} e DOM事件对象
     */
    onBlur: _propTypes2.default.func,
    /**
     * 数值订正后的回调
     * @param {Object} obj {currentValue,oldValue:String}
     */
    onCorrect: _propTypes2.default.func,
    onDisabled: _propTypes2.default.func, // 兼容0.x onDisabled
    /**
     * 最大值
     */
    max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 最小值
     */
    min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 自定义class
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    state: _propTypes2.default.oneOf(['error']),
    /**
     * 格式化当前值
     * @param {Number} value
     * @return {String|Number}
     */
    format: _propTypes2.default.func,
    /**
     * 增加按钮的props
     */
    upBtnProps: _propTypes2.default.object,
    /**
     * 减少按钮的props
     */
    downBtnProps: _propTypes2.default.object,
    /**
     * 内联 左侧label
     */
    label: _propTypes2.default.node,
    /**
     * 内联 右侧附加内容
     */
    innerAfter: _propTypes2.default.node,
    rtl: _propTypes2.default.bool,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Number|String} value 当前值
     * @param {Object} props 传入的组件参数
     * @returns {reactNode} Element 渲染内容
     */
    renderPreview: _propTypes2.default.func,
    /**
     * 预设屏幕宽度
     */
    device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop']),
    /**
     * 是否展示点击按钮
     */
    hasTrigger: _propTypes2.default.bool,
    /**
     * 是否一直显示点击按钮(无须hover)
     */
    alwaysShowTrigger: _propTypes2.default.bool,
    /**
     * 开启大数支持，输入输出均为string类型
     * @version 1.24
     */
    stringMode: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    max: MAX_SAFE_INTEGER,
    min: MIN_SAFE_INTEGER,
    type: 'normal',
    size: 'medium',
    step: 1,
    style: {},
    precision: 0,
    editable: true,
    onChange: _util.func.noop,
    onKeyDown: _util.func.noop,
    onBlur: _util.func.noop,
    onCorrect: _util.func.noop,
    onDisabled: _util.func.noop,
    hasTrigger: true,
    alwaysShowTrigger: false,
    stringMode: false
}, _temp);
NumberPicker.displayName = 'NumberPicker';
exports.default = (0, _reactLifecyclesCompat.polyfill)(NumberPicker);
module.exports = exports['default'];