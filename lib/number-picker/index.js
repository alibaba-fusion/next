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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** NumberPicker */
var NumberPicker = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(NumberPicker, _React$Component);

    function NumberPicker(props) {
        (0, _classCallCheck3.default)(this, NumberPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value,
            hasFocused: false
        };
        return _this;
    }

    NumberPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value === undefined ? '' : nextProps.value
            });
        }
    };

    NumberPicker.prototype.onChange = function onChange(value, e) {
        if (this.props.editable === true) {
            value = value.trim();
            // ignore space
            if (this.state.value === value) {
                return;
            }

            // in case of autoCorrect ('0.'=>0, '0.0'=>0) , we have these steps
            if (value) {
                // ignore when input start form '-'
                if (value === '-' || this.state.value === '-') {
                    this.setState({
                        value: value
                    });
                    return;
                }
                // ignore when next value = prev value.
                // ps: Number('0.')=0 ; Number('0.0')=0;
                // but take care of Number('')=0;
                if (Number(this.state.value) === Number(value)) {
                    this.setState({
                        value: value
                    });
                    return;
                }
                // ignore when value < min (because number is inputted one by one)
                if (!isNaN(value) && Number(value) < this.props.min) {
                    this.setState({
                        value: value
                    });
                    return;
                }
            }

            this.setInputValue(value, e);
        }
    };

    /**
     * @param {Float} currentValue correct value
     * @param {String} oldValue input value
     */


    NumberPicker.prototype.onCorrect = function onCorrect(currentValue, oldValue) {
        this.props.onCorrect({
            currentValue: currentValue,
            oldValue: oldValue
        });
    };

    NumberPicker.prototype.onKeyDown = function onKeyDown(e) {
        var _props;

        if (e.keyCode === 38) {
            this.up(e);
        } else if (e.keyCode === 40) {
            this.down(e);
        }

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        (_props = this.props).onKeyDown.apply(_props, [e].concat(args));
    };

    NumberPicker.prototype.onFocus = function onFocus(e) {
        var onFocus = this.props.onFocus;

        this.setFocus(true);

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        onFocus && onFocus.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.onBlur = function onBlur(e) {
        var value = this.getCurrentValidValue(e.target.value.trim());
        if (this.state.value !== value) {
            this.setValue(value, e);
        }
        this.setFocus(false);
        var onBlur = this.props.onBlur;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        onBlur && onBlur.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.getCurrentValidValue = function getCurrentValidValue(value) {
        var val = value;
        var props = this.props;
        if (val === '') {
            val = '';
        } else if (!isNaN(val)) {
            val = Number(val);
            if (val < props.min) {
                val = props.min;
            }
            if (val > props.max) {
                val = props.max;
            }

            // precision=2  and input from 1.99 to 1.999, should stay with 1.99 not 2
            var strValue = '' + val;
            var pointPos = strValue.indexOf('.');
            var cutPos = pointPos + 1 + this.getPrecision();
            if (pointPos !== -1 && strValue.length > cutPos) {
                val = Number(strValue.substr(0, cutPos));
            }
        } else {
            val = this.state.value;
        }

        if ('' + val !== '' + value) {
            this.onCorrect(val, value);
        }

        return val;
    };

    NumberPicker.prototype.setValue = function setValue(v, e, triggerType) {
        if (!('value' in this.props)) {
            this.setState({
                value: v
            });
        }

        this.props.onChange(isNaN(v) || v === '' ? undefined : v, (0, _extends3.default)({}, e, { triggerType: triggerType }));
    };

    NumberPicker.prototype.setInputValue = function setInputValue(v, e) {
        var value = this.getCurrentValidValue(v);
        if (this.state.value !== value) {
            this.setValue(value, e);
        }
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

    NumberPicker.prototype.getPrecision = function getPrecision() {
        var props = this.props;
        var stepString = props.step.toString();
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

    NumberPicker.prototype.upStep = function upStep(val) {
        var _props2 = this.props,
            step = _props2.step,
            min = _props2.min;

        var precisionFactor = this.getPrecisionFactor();
        var result = void 0;
        if (typeof val === 'number') {
            result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
        } else {
            result = min === -Infinity ? step : min;
        }
        return result;
    };

    NumberPicker.prototype.downStep = function downStep(val) {
        var _props3 = this.props,
            step = _props3.step,
            min = _props3.min;

        var precisionFactor = this.getPrecisionFactor();
        var result = void 0;
        if (typeof val === 'number') {
            result = (precisionFactor * val - precisionFactor * step) / precisionFactor;

            // in chrome browser: 0.3 - 0.2 = 0.09999999999, we should creact to 0.1
            var precision = this.getPrecision();
            if (precision > 0) {
                result = Number(Number(result).toFixed(precision));
            }
        } else {
            result = min === -Infinity ? -step : min;
        }
        return result;
    };

    NumberPicker.prototype.step = function step(type, e) {
        if (e) {
            e.preventDefault();
        }
        var _props4 = this.props,
            disabled = _props4.disabled,
            min = _props4.min,
            max = _props4.max;

        if (disabled) {
            return;
        }
        var value = this.state.value;
        if (isNaN(value)) {
            return;
        }
        var val = this[type + 'Step'](value);
        if (val > max || val < min) {
            return;
        }
        this.setValue(val, e, type);
    };

    NumberPicker.prototype.down = function down(e) {
        this.step('down', e);
    };

    NumberPicker.prototype.up = function up(e) {
        this.step('up', e);
    };

    NumberPicker.prototype.renderValue = function renderValue() {
        var _state = this.state,
            value = _state.value,
            hasFocused = _state.hasFocused;
        var format = this.props.format;

        return typeof format === 'function' && !hasFocused ? format(value) : value;
    };

    NumberPicker.prototype.focus = function focus() {
        this.inputRef.getInstance().focus();
    };

    NumberPicker.prototype.saveInputRef = function saveInputRef(ref) {
        this.inputRef = ref;
    };

    NumberPicker.prototype.render = function render() {
        var _classNames;

        var _props5 = this.props,
            type = _props5.type,
            prefix = _props5.prefix,
            disabled = _props5.disabled,
            style = _props5.style,
            className = _props5.className,
            size = _props5.size,
            max = _props5.max,
            min = _props5.min,
            autoFocus = _props5.autoFocus,
            editable = _props5.editable,
            state = _props5.state;


        var prefixCls = prefix + 'number-picker';

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls] = true, _classNames[prefixCls + '-' + this.props.type] = this.props.type, _classNames['' + prefix + size] = true, _classNames[className] = className, _classNames));

        var upDisabled = false;
        var downDisabled = false;
        var value = this.state.value;
        if (!isNaN(value)) {
            var val = Number(value);
            if (val >= max) {
                upDisabled = true;
            }
            if (val <= min) {
                downDisabled = true;
            }
        }

        var innerAfter = null,
            innerAfterClassName = null,
            addonBefore = null,
            addonAfter = null;
        if (type === 'normal') {
            innerAfter = [_react2.default.createElement(
                _button2.default,
                { disabled: disabled || upDisabled, onClick: this.up.bind(this), key: '0' },
                _react2.default.createElement(_icon2.default, { size: 'xxs', type: 'arrow-up' })
            ), _react2.default.createElement(
                _button2.default,
                { disabled: disabled || downDisabled, onClick: this.down.bind(this), key: '1' },
                _react2.default.createElement(_icon2.default, { size: 'xxs', type: 'arrow-down' })
            )];
            innerAfterClassName = prefixCls + '-handler';
        } else {
            addonBefore = _react2.default.createElement(
                _button2.default,
                { size: size, disabled: disabled || downDisabled, onClick: this.down.bind(this) },
                _react2.default.createElement(_icon2.default, { type: 'minus', size: 'xs' })
            );
            addonAfter = _react2.default.createElement(
                _button2.default,
                { size: size, disabled: disabled || upDisabled, onClick: this.up.bind(this) },
                _react2.default.createElement(_icon2.default, { type: 'add', size: 'xs' })
            );
        }

        var others = _util.obj.pickOthers(NumberPicker.propTypes, this.props);
        var dataAttrs = _util.obj.pickAttrsWith(this.props, 'data-');
        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ className: cls, style: style }, dataAttrs),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, others, {
                state: state === 'error' ? 'error' : null,
                onBlur: this.onBlur.bind(this),
                onFocus: this.onFocus.bind(this),
                onKeyDown: this.onKeyDown.bind(this),
                autoFocus: autoFocus,
                readOnly: !editable,
                value: this.renderValue(),
                disabled: disabled,
                size: size,
                onChange: this.onChange.bind(this),
                ref: this.saveInputRef.bind(this),
                innerAfter: innerAfter,
                innerAfterClassName: innerAfterClassName,
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
     * 设置类型
     * @enumdesc 普通, 内联
     */
    type: _propTypes2.default.oneOf(['normal', 'inline']),
    /**
     * 大小
     */
    size: _propTypes2.default.oneOf(['large', 'medium']),
    /**
     * 当前值
     */
    value: _propTypes2.default.number,
    /**
     * 默认值
     */
    defaultValue: _propTypes2.default.number,
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
     * @param {Number} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 键盘按下
     */
    onKeyDown: _propTypes2.default.func,
    /**
     * 焦点获得
     */
    onFocus: _propTypes2.default.func,
    /**
     * 焦点失去
     */
    onBlur: _propTypes2.default.func,
    /**
     * 数值订正后的回调
     * @param {Object} obj {currentValue,oldValue:String}
     */
    onCorrect: _propTypes2.default.func,
    /**
     * 最大值
     */
    max: _propTypes2.default.number,
    /**
     * 最小值
     */
    min: _propTypes2.default.number,
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
    format: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    max: Infinity,
    min: -Infinity,
    type: 'normal',
    size: 'medium',
    step: 1,
    style: {},
    precision: 0,
    editable: true,
    onChange: _util.func.noop,
    onKeyDown: _util.func.noop,
    onBlur: _util.func.noop,
    onCorrect: _util.func.noop
}, _temp);
NumberPicker.displayName = 'NumberPicker';
exports.default = _configProvider2.default.config(NumberPicker);
module.exports = exports['default'];