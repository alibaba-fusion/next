import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import Checkbox from './checkbox';
var pickOthers = obj.pickOthers;
/** Checkbox.Group */
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup(props) {
        var _this = _super.call(this, props) || this;
        var value = [];
        if ('value' in props) {
            value = props.value;
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                value = [];
            }
            else {
                value = [value];
            }
        }
        _this.state = {
            value: __spreadArray([], __read(value), false),
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    CheckboxGroup.prototype.getChildContext = function () {
        return {
            __group__: true,
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.props.disabled,
        };
    };
    CheckboxGroup.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            var value = nextProps.value;
            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    value = [];
                }
                else {
                    value = [value];
                }
            }
            return { value: value };
        }
        return null;
    };
    CheckboxGroup.prototype.onChange = function (currentValue, e) {
        var value = this.state.value;
        var index = value.indexOf(currentValue);
        var valTemp = __spreadArray([], __read(value), false);
        if (index === -1) {
            valTemp.push(currentValue);
        }
        else {
            valTemp.splice(index, 1);
        }
        if (!('value' in this.props)) {
            this.setState({ value: valTemp });
        }
        this.props.onChange(valTemp, e);
    };
    CheckboxGroup.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, className = _b.className, style = _b.style, prefix = _b.prefix, disabled = _b.disabled, direction = _b.direction, rtl = _b.rtl, isPreview = _b.isPreview, renderPreview = _b.renderPreview;
        var others = pickOthers(CheckboxGroup.propTypes, this.props);
        // 如果内嵌标签跟dataSource同时存在，以内嵌标签为主
        var children;
        var previewed = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, function (child) {
                if (!React.isValidElement(child)) {
                    return child;
                }
                var checked = _this.state.value && _this.state.value.indexOf(child.props.value) > -1;
                if (checked) {
                    previewed.push({
                        label: child.props.children,
                        value: child.props.value,
                    });
                }
                return React.cloneElement(child, child.props.rtl === undefined ? { rtl: rtl } : null);
            });
        }
        else {
            children = this.props.dataSource.map(function (item, index) {
                var option = item;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled: disabled,
                    };
                }
                var checked = _this.state.value && _this.state.value.indexOf(option.value) > -1;
                if (checked) {
                    previewed.push({
                        label: option.label,
                        value: option.value,
                    });
                }
                return (React.createElement(Checkbox, { key: index, value: option.value, checked: checked, rtl: rtl, disabled: disabled || option.disabled, label: option.label }));
            });
        }
        if (isPreview) {
            var previewCls = classnames(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), renderPreview(previewed, this.props)));
            }
            return (React.createElement("p", __assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), previewed.map(function (item) { return item.label; }).join(', ')));
        }
        var cls = classnames((_a = {},
            _a["".concat(prefix, "checkbox-group")] = true,
            _a["".concat(prefix, "checkbox-group-").concat(direction)] = true,
            _a[className] = !!className,
            _a.disabled = disabled,
            _a));
        return (React.createElement("span", __assign({ dir: rtl ? 'rtl' : undefined }, others, { className: cls, style: style }), children));
    };
    CheckboxGroup.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 整体禁用
         */
        disabled: PropTypes.bool,
        /**
         * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
         */
        dataSource: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
        /**
         * 被选中的值列表
         */
        value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * 默认被选中的值列表
         */
        defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * 通过子元素方式设置内部 checkbox
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * 选中值改变时的事件
         * @param {Array} value 选中项列表
         * @param {Event} e Dom 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 子项目的排列方式
         * - hoz: 水平排列 (default)
         * - ver: 垂直排列
         */
        direction: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 是否为预览态
         * @version 1.19
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Array} previewed 预览值 [{label: '', value:''},...]
         * @param {Object} props 所有传入的参数
         * @returns {reactNode} Element 渲染内容
         * @version 1.19
         */
        renderPreview: PropTypes.func,
    };
    CheckboxGroup.defaultProps = {
        dataSource: [],
        onChange: function () { },
        prefix: 'next-',
        direction: 'hoz',
        isPreview: false,
    };
    CheckboxGroup.childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        selectedValue: PropTypes.array,
        disabled: PropTypes.bool,
    };
    return CheckboxGroup;
}(Component));
export default polyfill(CheckboxGroup);
