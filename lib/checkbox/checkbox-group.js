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

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;

/** Checkbox.Group */

var CheckboxGroup = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CheckboxGroup, _Component);

    function CheckboxGroup(props) {
        (0, _classCallCheck3.default)(this, CheckboxGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        var value = [];
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                value = [];
            } else {
                value = [value];
            }
        }
        _this.state = {
            value: [].concat(value)
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    CheckboxGroup.prototype.getChildContext = function getChildContext() {
        return {
            __group__: true,
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.props.disabled
        };
    };

    CheckboxGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            var value = nextProps.value;

            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    value = [];
                } else {
                    value = [value];
                }
            }

            return { value: value };
        }

        return null;
    };

    CheckboxGroup.prototype.onChange = function onChange(currentValue, e) {
        var value = this.state.value;

        var index = value.indexOf(currentValue);
        var valTemp = [].concat(value);

        if (index === -1) {
            valTemp.push(currentValue);
        } else {
            valTemp.splice(index, 1);
        }

        if (!('value' in this.props)) {
            this.setState({ value: valTemp });
        }
        this.props.onChange(valTemp, e);
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this,
            _classnames;

        var _props = this.props,
            className = _props.className,
            style = _props.style,
            prefix = _props.prefix,
            disabled = _props.disabled,
            itemDirection = _props.itemDirection,
            rtl = _props.rtl,
            isPreview = _props.isPreview,
            renderPreview = _props.renderPreview;

        var others = pickOthers(CheckboxGroup.propTypes, this.props);

        // 如果内嵌标签跟dataSource同时存在，以内嵌标签为主
        var children = void 0;
        var previewed = [];
        if (this.props.children) {
            children = _react2.default.Children.map(this.props.children, function (child) {
                if (!_react2.default.isValidElement(child)) {
                    return child;
                }
                var checked = _this2.state.value && _this2.state.value.indexOf(child.props.value) > -1;

                if (checked) {
                    previewed.push({
                        label: child.props.children,
                        value: child.props.value
                    });
                }

                return _react2.default.cloneElement(child, child.props.rtl === undefined ? { rtl: rtl } : null);
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
                var checked = _this2.state.value && _this2.state.value.indexOf(option.value) > -1;

                if (checked) {
                    previewed.push({
                        label: option.label,
                        value: option.value
                    });
                }

                return _react2.default.createElement(_checkbox2.default, {
                    key: index,
                    value: option.value,
                    checked: checked,
                    rtl: rtl,
                    disabled: disabled || option.disabled,
                    label: option.label
                });
            });
        }

        if (isPreview) {
            var previewCls = (0, _classnames3.default)(className, prefix + 'form-preview');

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, {
                        dir: rtl ? 'rtl' : undefined,
                        className: previewCls
                    }),
                    renderPreview(previewed, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({}, others, {
                    dir: rtl ? 'rtl' : undefined,
                    className: previewCls
                }),
                previewed.map(function (item) {
                    return item.label;
                }).join(', ')
            );
        }

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'checkbox-group'] = true, _classnames[prefix + 'checkbox-group-' + itemDirection] = true, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({
                dir: rtl ? 'rtl' : undefined
            }, others, {
                className: cls,
                style: style
            }),
            children
        );
    };

    return CheckboxGroup;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 整体禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
     */
    dataSource: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.arrayOf(_propTypes2.default.object)]),
    /**
     * 被选中的值列表
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 默认被选中的值列表
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 通过子元素方式设置内部 checkbox
     */
    children: _propTypes2.default.arrayOf(_propTypes2.default.element),
    /**
     * 选中值改变时的事件
     * @param {Array} value 选中项列表
     * @param {Event} e Dom 事件对象
     */
    onChange: _propTypes2.default.func,

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
}, _class.defaultProps = {
    dataSource: [],
    onChange: function onChange() {},
    prefix: 'next-',
    itemDirection: 'hoz',
    isPreview: false
}, _class.childContextTypes = {
    onChange: _propTypes2.default.func,
    __group__: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.array,
    disabled: _propTypes2.default.bool
}, _temp);
CheckboxGroup.displayName = 'CheckboxGroup';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(CheckboxGroup));
module.exports = exports['default'];