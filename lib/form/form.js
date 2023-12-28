"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var util_1 = require("../util");
var field_1 = require("../field");
var responsive_grid_1 = require("../responsive-grid");
function pickerDefined(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function (i) {
        if (typeof obj[i] !== 'undefined') {
            newObj[i] = obj[i];
        }
    });
    return newObj;
}
function preventDefault(e) {
    e.preventDefault();
}
var getNewChildren = function (children, props) {
    var size = props.size, device = props.device, labelAlign = props.labelAlign, labelTextAlign = props.labelTextAlign, labelCol = props.labelCol, wrapperCol = props.wrapperCol, responsive = props.responsive, colon = props.colon;
    return react_1.default.Children.map(children, function (child) {
        if (util_1.obj.isReactFragment(child)) {
            return getNewChildren(child.props.children, props);
        }
        if (child && ['function', 'object'].indexOf(typeof child.type) > -1 && child.type._typeMark === 'form_item') {
            var childrenProps = {
                labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
                wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
                labelAlign: child.props.labelAlign ? child.props.labelAlign : device === 'phone' ? 'top' : labelAlign,
                labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
                colon: 'colon' in child.props ? child.props.colon : colon,
                size: child.props.size ? child.props.size : size,
                responsive: responsive,
            };
            return react_1.default.cloneElement(child, pickerDefined(childrenProps));
        }
        return child;
    });
};
/** Form */
var Form = /** @class */ (function (_super) {
    tslib_1.__extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (name, value) {
            _this.props.onChange(_this._formField.getValues(), {
                name: name,
                value: value,
                field: _this._formField,
            });
        };
        _this._formField = null;
        if (props.field !== false) {
            var options = tslib_1.__assign(tslib_1.__assign({}, props.fieldOptions), { onChange: _this.onChange });
            if (props.field) {
                _this._formField = props.field;
                var onChange = _this._formField.options.onChange;
                options.onChange = util_1.func.makeChain(onChange, _this.onChange);
                _this._formField.setOptions && _this._formField.setOptions(options);
            }
            else {
                if ('value' in props) {
                    options.values = props.value;
                }
                _this._formField = new field_1.default(_this, options);
            }
            if (props.locale && props.locale.Validate) {
                _this._formField.setOptions({ messages: props.locale.Validate });
            }
            props.saveField(_this._formField);
        }
        return _this;
    }
    Form.prototype.getChildContext = function () {
        return {
            _formField: this.props.field ? this.props.field : this._formField,
            _formSize: this.props.size,
            _formDisabled: this.props.disabled,
            _formPreview: this.props.isPreview,
            _formFullWidth: this.props.fullWidth,
            _formLabelForErrorMessage: this.props.useLabelForErrorMessage,
            _formMarginToDisplayHelp: this.props.preferMarginToDisplayHelp,
        };
    };
    Form.prototype.componentDidUpdate = function (prevProps) {
        var props = this.props;
        if (this._formField) {
            if ('value' in props && props.value !== prevProps.value) {
                this._formField.setValues(props.value);
            }
            if ('error' in props && props.error !== prevProps.error) {
                this._formField.setValues(props.error);
            }
        }
    };
    Form.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, inline = _b.inline, size = _b.size, device = _b.device, labelAlign = _b.labelAlign, labelTextAlign = _b.labelTextAlign, onSubmit = _b.onSubmit, children = _b.children, labelCol = _b.labelCol, wrapperCol = _b.wrapperCol, style = _b.style, prefix = _b.prefix, rtl = _b.rtl, isPreview = _b.isPreview, Tag = _b.component, responsive = _b.responsive, gap = _b.gap, colon = _b.colon;
        var formClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "form")] = true,
            _a["".concat(prefix, "inline")] = inline,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "form-responsive-grid")] = responsive,
            _a["".concat(prefix, "form-preview")] = isPreview,
            _a[className] = !!className,
            _a));
        var newChildren = getNewChildren(children, this.props);
        return (react_1.default.createElement(Tag, tslib_1.__assign({ role: "grid" }, util_1.obj.pickOthers(Form.propTypes, this.props), { className: formClassName, style: style, dir: rtl ? 'rtl' : undefined, onSubmit: onSubmit }), responsive ? react_1.default.createElement(responsive_grid_1.default, { gap: gap }, newChildren) : newChildren));
    };
    Form.propTypes = {
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 内联表单
         */
        inline: prop_types_1.default.bool,
        /**
         * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
         * @enumdesc 大, 中, 小
         */
        size: prop_types_1.default.oneOf(['large', 'medium', 'small']),
        /**
         * 单个 Item 中表单类组件宽度是否是100%
         */
        fullWidth: prop_types_1.default.bool,
        /**
         * 标签的位置, 如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
         * @enumdesc 上, 左, 内
         */
        labelAlign: prop_types_1.default.oneOf(['top', 'left', 'inset']),
        /**
         * 标签的左右对齐方式
         * @enumdesc 左, 右
         */
        labelTextAlign: prop_types_1.default.oneOf(['left', 'right']),
        /**
         * field 实例, 传 false 会禁用 field
         */
        field: prop_types_1.default.any,
        /**
         * 保存 Form 自动生成的 field 对象
         */
        saveField: prop_types_1.default.func,
        /**
         * 控制第一级 Item 的 labelCol
         */
        labelCol: prop_types_1.default.object,
        /**
         * 控制第一级 Item 的 wrapperCol
         */
        wrapperCol: prop_types_1.default.object,
        /**
         * form内有 `htmlType="submit"` 的元素的时候会触发
         */
        onSubmit: prop_types_1.default.func,
        /**
         * 子元素
         */
        children: prop_types_1.default.any,
        /**
         * 扩展class
         */
        className: prop_types_1.default.string,
        /**
         * 自定义内联样式
         */
        style: prop_types_1.default.object,
        /**
         * 表单数值
         */
        value: prop_types_1.default.object,
        /**
         * 表单变化回调
         * @param {Object} values 表单数据
         * @param {Object} item 详细
         * @param {String} item.name 变化的组件名
         * @param {String} item.value 变化的数据
         * @param {Object} item.field field 实例
         */
        onChange: prop_types_1.default.func,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
        fieldOptions: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        /**
         * 预设屏幕宽度
         */
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 是否开启内置的响应式布局 （使用ResponsiveGrid）
         * @version 1.19
         */
        responsive: prop_types_1.default.bool,
        /**
         * 是否开启预览态
         * @version 1.19
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 是否使用 label 替换校验信息的 name 字段
         * @version 1.20
         */
        useLabelForErrorMessage: prop_types_1.default.bool,
        /**
         * 倾向使用 item 的 margin 空间来展示 help
         * @default false
         * @version 1.26.37
         */
        preferMarginToDisplayHelp: prop_types_1.default.bool,
        /**
         * 表示是否显示 label 后面的冒号
         * @version 1.22
         */
        colon: prop_types_1.default.bool,
        /**
         * 是否禁用表单
         */
        disabled: prop_types_1.default.bool,
        // 在 responsive模式下，透传给 ResponsiveGrid的， 表示 每个 cell 之间的间距， [bottom&top, right&left]
        gap: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
    };
    Form.defaultProps = {
        prefix: 'next-',
        onSubmit: preventDefault,
        size: 'medium',
        labelAlign: 'left',
        onChange: util_1.func.noop,
        component: 'form',
        saveField: util_1.func.noop,
        device: 'desktop',
        colon: false,
        disabled: false,
        preferMarginToDisplayHelp: false,
    };
    Form.childContextTypes = {
        _formField: prop_types_1.default.object,
        _formSize: prop_types_1.default.string,
        _formDisabled: prop_types_1.default.bool,
        _formPreview: prop_types_1.default.bool,
        _formFullWidth: prop_types_1.default.bool,
        _formLabelForErrorMessage: prop_types_1.default.bool,
        _formMarginToDisplayHelp: prop_types_1.default.bool,
    };
    return Form;
}(react_1.default.Component));
exports.default = Form;
