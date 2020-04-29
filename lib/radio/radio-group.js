'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;

/**
 * Radio.Group
 * @order 2
 */

var RadioGroup = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(RadioGroup, _Component);

    function RadioGroup(props) {
        (0, _classCallCheck3.default)(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        var value = '';
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }

        _this.state = { value: value };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    RadioGroup.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if ('value' in props && props.value !== state.value) {
            return {
                value: props.value
            };
        }

        return null;
    };

    RadioGroup.prototype.getChildContext = function getChildContext() {
        var disabled = this.props.disabled;


        return {
            __group__: true,
            isButton: this.props.shape === 'button',
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: disabled
        };
    };

    RadioGroup.prototype.onChange = function onChange(currentValue, e) {
        if (!('value' in this.props)) {
            this.setState({ value: currentValue });
        }
        if (currentValue !== this.state.value) {
            this.props.onChange(currentValue, e);
        }
    };

    RadioGroup.prototype.render = function render() {
        var _this2 = this,
            _classnames;

        var _props = this.props,
            rtl = _props.rtl,
            className = _props.className,
            disabled = _props.disabled,
            shape = _props.shape,
            size = _props.size,
            style = _props.style,
            prefix = _props.prefix,
            itemDirection = _props.itemDirection,
            component = _props.component,
            isPreview = _props.isPreview,
            renderPreview = _props.renderPreview;

        var others = pickOthers(Object.keys(RadioGroup.propTypes), this.props);

        if (rtl) {
            others.dir = 'rtl';
        }

        var children = void 0;
        var previewed = {};
        if (this.props.children) {
            children = _react2.default.Children.map(this.props.children, function (child, index) {
                if (!_react2.default.isValidElement(child)) {
                    return child;
                }
                var checked = _this2.state.value === child.props.value;
                if (checked) {
                    previewed.label = child.props.children;
                    previewed.value = child.props.value;
                }
                var tabIndex = index === 0 && !_this2.state.value || checked ? 0 : -1;
                var childrtl = child.props.rtl === undefined ? rtl : child.props.rtl;
                if (child.type && child.type.displayName === 'Config(Radio)') {
                    return _react2.default.cloneElement(child, {
                        checked: checked,
                        tabIndex: tabIndex,
                        rtl: childrtl
                    });
                }
                return _react2.default.cloneElement(child, {
                    checked: checked,
                    rtl: childrtl
                });
            });
        } else {
            children = this.props.dataSource.map(function (item, index) {
                var option = item;
                if ((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled: disabled
                    };
                }
                var checked = _this2.state.value === option.value;
                if (checked) {
                    previewed.label = option.label;
                    previewed.value = option.value;
                }
                return _react2.default.createElement(_radio2.default, {
                    key: index,
                    tabIndex: index === 0 && !_this2.state.value || checked ? 0 : -1,
                    value: option.value,
                    checked: checked,
                    label: option.label,
                    disabled: disabled || option.disabled
                });
            });
        }

        if (isPreview) {
            var previewCls = (0, _classnames3.default)(className, prefix + 'form-preview');

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { className: previewCls }),
                    renderPreview(previewed, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({}, others, { className: previewCls }),
                previewed.label
            );
        }

        var isButtonShape = shape === 'button';

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'radio-group'] = true, _classnames[prefix + 'radio-group-' + itemDirection] = !isButtonShape, _classnames[prefix + 'radio-button'] = isButtonShape, _classnames[prefix + 'radio-button-' + size] = isButtonShape, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));

        var TagName = component;
        return _react2.default.createElement(
            TagName,
            (0, _extends3.default)({}, others, {
                'aria-disabled': disabled,
                role: 'radiogroup',
                className: cls,
                style: style
            }),
            children
        );
    };

    return RadioGroup;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * name
     */
    name: _propTypes2.default.string,
    /**
     * radio group的选中项的值
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    /**
     * radio group的默认值
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    /**
     * 选中值改变时的事件
     * @param {String/Number} value 选中项的值
     * @param {Event} e Dom 事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 表示radio被禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 可以设置成 button 展示形状
     * @enumdesc 按钮状
     */
    shape: _propTypes2.default.oneOf(['normal', 'button']),
    /**
     * 与 `shape` 属性配套使用，shape设为button时有效
     * @enumdesc 大, 中, 小
     */
    size: _propTypes2.default.oneOf(['large', 'medium', 'small']),
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']`
     */
    dataSource: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.arrayOf(_propTypes2.default.object)]),
    /**
     * 通过子元素方式设置内部radio
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]),

    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    itemDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}), _class.defaultProps = {
    dataSource: [],
    size: 'medium',
    onChange: function onChange() {},
    prefix: 'next-',
    component: 'div',
    itemDirection: 'hoz',
    isPreview: false
}, _class.childContextTypes = {
    onChange: _propTypes2.default.func,
    __group__: _propTypes2.default.bool,
    isButton: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    disabled: _propTypes2.default.bool
}, _temp);
RadioGroup.displayName = 'RadioGroup';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(RadioGroup));
module.exports = exports['default'];