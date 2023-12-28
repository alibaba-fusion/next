"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var checkbox_1 = require("./checkbox");
var pickOthers = util_1.obj.pickOthers;
/** Checkbox.Group */
var CheckboxGroup = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxGroup, _super);
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
            value: tslib_1.__spreadArray([], tslib_1.__read(value), false),
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
        var valTemp = tslib_1.__spreadArray([], tslib_1.__read(value), false);
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
            children = react_1.default.Children.map(this.props.children, function (child) {
                if (!react_1.default.isValidElement(child)) {
                    return child;
                }
                var checked = _this.state.value && _this.state.value.indexOf(child.props.value) > -1;
                if (checked) {
                    previewed.push({
                        label: child.props.children,
                        value: child.props.value,
                    });
                }
                return react_1.default.cloneElement(child, child.props.rtl === undefined ? { rtl: rtl } : null);
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
                return (react_1.default.createElement(checkbox_1.default, { key: index, value: option.value, checked: checked, rtl: rtl, disabled: disabled || option.disabled, label: option.label }));
            });
        }
        if (isPreview) {
            var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (react_1.default.createElement("div", tslib_1.__assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), renderPreview(previewed, this.props)));
            }
            return (react_1.default.createElement("p", tslib_1.__assign({}, others, { dir: rtl ? 'rtl' : undefined, className: previewCls }), previewed.map(function (item) { return item.label; }).join(', ')));
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "checkbox-group")] = true,
            _a["".concat(prefix, "checkbox-group-").concat(direction)] = true,
            _a[className] = !!className,
            _a.disabled = disabled,
            _a));
        return (react_1.default.createElement("span", tslib_1.__assign({ dir: rtl ? 'rtl' : undefined }, others, { className: cls, style: style }), children));
    };
    CheckboxGroup.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 自定义内敛样式
         */
        style: prop_types_1.default.object,
        /**
         * 整体禁用
         */
        disabled: prop_types_1.default.bool,
        /**
         * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
         */
        dataSource: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.string), prop_types_1.default.arrayOf(prop_types_1.default.object)]),
        /**
         * 被选中的值列表
         */
        value: prop_types_1.default.oneOfType([prop_types_1.default.array, prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]),
        /**
         * 默认被选中的值列表
         */
        defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.array, prop_types_1.default.string, prop_types_1.default.number, prop_types_1.default.bool]),
        /**
         * 通过子元素方式设置内部 checkbox
         */
        children: prop_types_1.default.arrayOf(prop_types_1.default.element),
        /**
         * 选中值改变时的事件
         * @param {Array} value 选中项列表
         * @param {Event} e Dom 事件对象
         */
        onChange: prop_types_1.default.func,
        /**
         * 子项目的排列方式
         * - hoz: 水平排列 (default)
         * - ver: 垂直排列
         */
        direction: prop_types_1.default.oneOf(['hoz', 'ver']),
        /**
         * 是否为预览态
         * @version 1.19
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Array} previewed 预览值 [{label: '', value:''},...]
         * @param {Object} props 所有传入的参数
         * @returns {reactNode} Element 渲染内容
         * @version 1.19
         */
        renderPreview: prop_types_1.default.func,
    };
    CheckboxGroup.defaultProps = {
        dataSource: [],
        onChange: function () { },
        prefix: 'next-',
        direction: 'hoz',
        isPreview: false,
    };
    CheckboxGroup.childContextTypes = {
        onChange: prop_types_1.default.func,
        __group__: prop_types_1.default.bool,
        selectedValue: prop_types_1.default.array,
        disabled: prop_types_1.default.bool,
    };
    return CheckboxGroup;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(CheckboxGroup);
