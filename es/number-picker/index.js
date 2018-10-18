import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import ConfigProvider from '../config-provider';
import { func, obj } from '../util';

/** NumberPicker */
var NumberPicker = (_temp = _class = function (_React$Component) {
    _inherits(NumberPicker, _React$Component);

    function NumberPicker(props) {
        _classCallCheck(this, NumberPicker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

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

        this.props.onChange(isNaN(v) || v === '' ? undefined : v, _extends({}, e, { triggerType: triggerType }));
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

        var cls = classNames((_classNames = {}, _classNames[prefixCls] = true, _classNames[prefixCls + '-' + this.props.type] = this.props.type, _classNames['' + prefix + size] = true, _classNames[className] = className, _classNames));

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
            innerAfter = [React.createElement(
                Button,
                { disabled: disabled || upDisabled, onClick: this.up.bind(this), key: '0' },
                React.createElement(Icon, { size: 'xxs', type: 'arrow-up' })
            ), React.createElement(
                Button,
                { disabled: disabled || downDisabled, onClick: this.down.bind(this), key: '1' },
                React.createElement(Icon, { size: 'xxs', type: 'arrow-down' })
            )];
            innerAfterClassName = prefixCls + '-handler';
        } else {
            addonBefore = React.createElement(
                Button,
                { size: size, disabled: disabled || downDisabled, onClick: this.down.bind(this) },
                React.createElement(Icon, { type: 'minus', size: 'xs' })
            );
            addonAfter = React.createElement(
                Button,
                { size: size, disabled: disabled || upDisabled, onClick: this.up.bind(this) },
                React.createElement(Icon, { type: 'add', size: 'xs' })
            );
        }

        var others = obj.pickOthers(NumberPicker.propTypes, this.props);
        var dataAttrs = obj.pickAttrsWith(this.props, 'data-');
        return React.createElement(
            'span',
            _extends({ className: cls, style: style }, dataAttrs),
            React.createElement(Input, _extends({}, others, {
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
}(React.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: PropTypes.string,
    /**
     * 设置类型
     * @enumdesc 普通, 内联
     */
    type: PropTypes.oneOf(['normal', 'inline']),
    /**
     * 大小
     */
    size: PropTypes.oneOf(['large', 'medium']),
    /**
     * 当前值
     */
    value: PropTypes.number,
    /**
     * 默认值
     */
    defaultValue: PropTypes.number,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 步长
     */
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * 保留小数点后位数
     */
    precision: PropTypes.number,
    /**
     * 用户是否可以输入
     */
    editable: PropTypes.bool,
    /**
     * 自动焦点
     */
    autoFocus: PropTypes.bool,
    /**
     * 数值被改变的事件
     * @param {Number} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: PropTypes.func,
    /**
     * 键盘按下
     */
    onKeyDown: PropTypes.func,
    /**
     * 焦点获得
     */
    onFocus: PropTypes.func,
    /**
     * 焦点失去
     */
    onBlur: PropTypes.func,
    /**
     * 数值订正后的回调
     * @param {Object} obj {currentValue,oldValue:String}
     */
    onCorrect: PropTypes.func,
    /**
     * 最大值
     */
    max: PropTypes.number,
    /**
     * 最小值
     */
    min: PropTypes.number,
    /**
     * 自定义class
     */
    className: PropTypes.string,
    /**
     * 自定义内联样式
     */
    style: PropTypes.object,
    state: PropTypes.oneOf(['error']),

    /**
     * 格式化当前值
     * @param {Number} value
     * @return {String|Number}
     */
    format: PropTypes.func
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
    onChange: func.noop,
    onKeyDown: func.noop,
    onBlur: func.noop,
    onCorrect: func.noop
}, _temp);
NumberPicker.displayName = 'NumberPicker';


export default ConfigProvider.config(NumberPicker);