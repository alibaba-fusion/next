import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import Radio from './radio';

var pickOthers = obj.pickOthers;

/**
 * Radio.Group
 * @order 2
 */

var RadioGroup = (_temp = _class = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup(props) {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

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
            direction = _props.direction,
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
            children = React.Children.map(this.props.children, function (child, index) {
                if (!React.isValidElement(child)) {
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
                    return React.cloneElement(child, {
                        checked: checked,
                        tabIndex: tabIndex,
                        rtl: childrtl
                    });
                }
                return React.cloneElement(child, {
                    checked: checked,
                    rtl: childrtl
                });
            });
        } else {
            children = this.props.dataSource.map(function (item, index) {
                var option = item;
                if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
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
                return React.createElement(Radio, {
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
            var previewCls = classnames(className, prefix + 'form-preview');

            if ('renderPreview' in this.props) {
                return React.createElement(
                    'div',
                    _extends({}, others, { className: previewCls }),
                    renderPreview(previewed, this.props)
                );
            }

            return React.createElement(
                'p',
                _extends({}, others, { className: previewCls }),
                previewed.label
            );
        }

        var isButtonShape = shape === 'button';

        var cls = classnames((_classnames = {}, _classnames[prefix + 'radio-group'] = true, _classnames[prefix + 'radio-group-' + direction] = !isButtonShape, _classnames[prefix + 'radio-button'] = isButtonShape, _classnames[prefix + 'radio-button-' + size] = isButtonShape, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));

        var TagName = component;
        return React.createElement(
            TagName,
            _extends({}, others, { 'aria-disabled': disabled, role: 'radiogroup', className: cls, style: style }),
            children
        );
    };

    return RadioGroup;
}(Component), _class.propTypes = _extends({}, ConfigProvider.propTypes, {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes.string,
    /**
     * 自定义类名
     */
    className: PropTypes.string,
    /**
     * 自定义内敛样式
     */
    style: PropTypes.object,
    /**
     * name
     */
    name: PropTypes.string,
    /**
     * radio group的选中项的值
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    /**
     * radio group的默认值
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    /**
     * 设置标签类型
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /**
     * 选中值改变时的事件
     * @param {String/Number} value 选中项的值
     * @param {Event} e Dom 事件对象
     */
    onChange: PropTypes.func,
    /**
     * 表示radio被禁用
     */
    disabled: PropTypes.bool,
    /**
     * 可以设置成 button 展示形状
     * @enumdesc 按钮状
     */
    shape: PropTypes.oneOf(['normal', 'button']),
    /**
     * 与 `shape` 属性配套使用，shape设为button时有效
     * @enumdesc 大, 中, 小
     */
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` `[{label: 'apply', value: 'apple'}]`
     */
    dataSource: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
    /**
     * 通过子元素方式设置内部radio
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),

    /**
     * 子项目的排列方式
     * - hoz: 水平排列 (default)
     * - ver: 垂直排列
     */
    direction: PropTypes.oneOf(['hoz', 'ver']),
    /**
     * 是否为预览态
     */
    isPreview: PropTypes.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Object} previewed 预览值：{label: "", value: ""}
     * @param {Object} props 所有传入的参数
     * @returns {reactNode} Element 渲染内容
     */
    renderPreview: PropTypes.func
}), _class.defaultProps = {
    dataSource: [],
    size: 'medium',
    onChange: function onChange() {},
    prefix: 'next-',
    component: 'div',
    direction: 'hoz',
    isPreview: false
}, _class.childContextTypes = {
    onChange: PropTypes.func,
    __group__: PropTypes.bool,
    isButton: PropTypes.bool,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool
}, _temp);
RadioGroup.displayName = 'RadioGroup';


export default ConfigProvider.config(polyfill(RadioGroup), {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Radio');

            var _props2 = props,
                itemDirection = _props2.itemDirection,
                others = _objectWithoutProperties(_props2, ['itemDirection']);

            props = _extends({ direction: itemDirection }, others);
        }

        return props;
    }
});