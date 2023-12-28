"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var grid_1 = require("../grid");
var responsive_grid_1 = require("../responsive-grid");
var util_1 = require("../util");
var error_1 = require("./error");
var enhance_1 = require("./enhance");
var Row = grid_1.default.Row, Col = grid_1.default.Col;
var Cell = responsive_grid_1.default.Cell;
var isNil = util_1.obj.isNil;
/** Form.Item
 *  @description 手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid
 *  @order 1
 */
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 从子元素里面提取表单组件. TODO: 2.x 中改为只获取一个元素
     */
    Item.prototype.getNames = function (children) {
        var name = this.props.name;
        var childrenList = react_1.default.Children.toArray(children);
        var nameList = childrenList
            .filter(function (c) {
            return c.props && ('name' in c.props || 'data-meta' in c.props);
        })
            .map(function (c) {
            return c.props.name || c.props.id;
        });
        if (nameList.length) {
            return nameList;
        }
        else if (name) {
            return [name];
        }
        return [];
    };
    Item.prototype.getHelper = function (children) {
        var _a = this.props, help = _a.help, preferMarginToDisplayHelp = _a.preferMarginToDisplayHelp;
        var _b = this.context, _formField = _b._formField, _formMarginToDisplayHelp = _b._formMarginToDisplayHelp;
        var useMargin = typeof preferMarginToDisplayHelp !== 'undefined' ? preferMarginToDisplayHelp : _formMarginToDisplayHelp;
        return (react_1.default.createElement(error_1.default, { name: help === undefined ? this.getNames(children) : undefined, field: _formField, preferMarginToDisplayHelp: useMargin }, help));
    };
    Item.prototype.getState = function (children) {
        var validateState = this.props.validateState;
        if (validateState) {
            return validateState;
        }
        if (this.context._formField) {
            var getState = this.context._formField.getState;
            var names = this.getNames(children);
            if (!names.length) {
                return '';
            }
            // get first name
            return getState(names[0]);
        }
        return undefined;
    };
    Item.prototype.getSize = function () {
        return this.props.size || this.context._formSize;
    };
    Item.prototype.getDisabled = function () {
        return 'disabled' in this.props ? this.props.disabled : this.context._formDisabled;
    };
    Item.prototype.getIsPreview = function () {
        return 'isPreview' in this.props ? this.props.isPreview : this.context._formPreview;
    };
    Item.prototype.getFullWidth = function () {
        return isNil(this.props.fullWidth) ? !!this.context._formFullWidth : this.props.fullWidth;
    };
    Item.prototype.getLabelForErrorMessage = function () {
        var _a = this.props, errorMessageName = _a.errorMessageName, label = _a.label, useLabelForErrorMessage = _a.useLabelForErrorMessage;
        if (errorMessageName) {
            return errorMessageName;
        }
        if (!label || typeof label !== 'string') {
            return null;
        }
        var newLabel = label.replace(':', '').replace('：', '');
        var labelForErrorMessage = useLabelForErrorMessage !== undefined ? useLabelForErrorMessage : this.context._formLabelForErrorMessage;
        if (labelForErrorMessage && newLabel) {
            return newLabel;
        }
        return null;
    };
    Item.prototype.getItemLabel = function (children) {
        var _a;
        var _b = this.props, id = _b.id, required = _b.required, _c = _b.asterisk, asterisk = _c === void 0 ? required : _c, label = _b.label, labelCol = _b.labelCol, wrapperCol = _b.wrapperCol, prefix = _b.prefix, responsive = _b.responsive, labelWidth = _b.labelWidth, labelTextAlign = _b.labelTextAlign, colon = _b.colon;
        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
        if (!label) {
            return null;
        }
        var ele = (react_1.default.createElement("label", { htmlFor: id || this.getNames(children)[0], required: asterisk, key: "label" }, label));
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "form-item-label")] = true,
            _a['has-colon'] = colon,
            _a["".concat(prefix, "left")] = labelTextAlign === 'left',
            _a));
        if (responsive && labelWidth && labelAlign !== 'top') {
            return (react_1.default.createElement("div", { className: cls, style: { width: labelWidth } }, ele));
        }
        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (react_1.default.createElement(Col, tslib_1.__assign({}, labelCol, { className: cls }), ele));
        }
        return react_1.default.createElement("div", { className: cls }, ele);
    };
    Item.prototype.getItemWrapper = function (children) {
        var _this = this;
        var _a = this.props, hasFeedback = _a.hasFeedback, labelCol = _a.labelCol, wrapperCol = _a.wrapperCol, extra = _a.extra, prefix = _a.prefix, renderPreview = _a.renderPreview, name = _a.name;
        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
        var state = this.getState(children);
        var isPreview = this.getIsPreview();
        var childrenProps = {
            size: this.getSize(),
        };
        if (isPreview) {
            childrenProps.isPreview = true;
        }
        if ('renderPreview' in this.props && typeof renderPreview === 'function') {
            childrenProps.renderPreview = renderPreview;
        }
        if (state && (state === 'error' || hasFeedback)) {
            childrenProps.state = state;
        }
        if (labelAlign === 'inset') {
            childrenProps.label = this.getItemLabel(children);
        }
        if (this.getDisabled()) {
            childrenProps.disabled = true;
        }
        var labelForErrorMessage = this.getLabelForErrorMessage();
        var ele = react_1.default.Children.map(children, function (child, idx) {
            if (child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark !== 'form_item' &&
                child.type._typeMark !== 'form_error') {
                var extraProps = childrenProps;
                // 自己直接使用 field.init 会在 props 上面留下 data-meta
                // name 挪到 FormItem 上面，默认把第一个元素当做 Form 组件
                if (_this.context._formField &&
                    !('data-meta' in child.props) &&
                    ('name' in child.props || (name && idx === 0)) //TODO：1.x 为了不BR, 2.x 中把优先级调换下，优先取 FormItem 的 name
                ) {
                    var initName = 'name' in child.props && child.props.name ? child.props.name : name;
                    extraProps = _this.context._formField.init(initName, tslib_1.__assign(tslib_1.__assign({}, (0, enhance_1.getFieldInitCfg)(_this.props, child.type.displayName, labelForErrorMessage)), { props: tslib_1.__assign(tslib_1.__assign({}, child.props), { ref: child.ref }) }), childrenProps);
                }
                else {
                    extraProps = Object.assign({}, child.props, extraProps);
                }
                return react_1.default.cloneElement(child, extraProps);
            }
            return child;
        });
        var help = this.getHelper(children);
        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (react_1.default.createElement(Col, tslib_1.__assign({}, wrapperCol, { className: "".concat(prefix, "form-item-control"), key: "item" }),
                ele,
                " ",
                help,
                " ",
                extra));
        }
        return (react_1.default.createElement("div", { className: "".concat(prefix, "form-item-control") },
            ele,
            " ",
            help,
            " ",
            extra));
    };
    Item.prototype.getLabelAlign = function (labelAlign, device) {
        if (device === 'phone') {
            return 'top';
        }
        return labelAlign;
    };
    Item.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, prefix = _b.prefix, wrapperCol = _b.wrapperCol, labelCol = _b.labelCol, responsive = _b.responsive, children = _b.children;
        var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
        var childrenNode = children;
        if (typeof children === 'function' && this.context._formField) {
            childrenNode = children(this.context._formField.getValues());
        }
        var state = this.getState(childrenNode);
        var size = this.getSize();
        var fullWidth = this.getFullWidth();
        var isPreview = this.getIsPreview();
        var itemClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "form-item")] = true,
            _a["".concat(prefix).concat(labelAlign)] = labelAlign,
            _a["has-".concat(state)] = !!state,
            _a["".concat(prefix).concat(size)] = !!size,
            _a["".concat(prefix, "form-item-fullwidth")] = fullWidth,
            _a["".concat(className)] = !!className,
            _a["".concat(prefix, "form-preview")] = isPreview,
            _a));
        // 垂直模式并且左对齐才用到
        var Tag = responsive ? Cell : (wrapperCol || labelCol) && labelAlign !== 'top' ? Row : 'div';
        var label = labelAlign === 'inset' ? null : this.getItemLabel(childrenNode);
        return (react_1.default.createElement(Tag, tslib_1.__assign({}, util_1.obj.pickOthers(Item.propTypes, this.props), { className: itemClassName, style: style }),
            label,
            this.getItemWrapper(childrenNode)));
    };
    Item.propTypes = {
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /**
         * label 标签的文本
         */
        label: prop_types_1.default.node,
        /**
         * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
         */
        labelCol: prop_types_1.default.object,
        /**
         * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
         */
        wrapperCol: prop_types_1.default.object,
        /**
         * 自定义提示信息，如不设置，则会根据校验规则自动生成.
         */
        help: prop_types_1.default.node,
        /**
         * 字段名，默认赋值给第一个子元素
         */
        name: prop_types_1.default.string,
        /**
         * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
         */
        extra: prop_types_1.default.node,
        /**
         * 校验状态，如不设置，则会根据校验规则自动生成
         * @enumdesc 失败, 成功, 校验中, 警告
         */
        validateState: prop_types_1.default.oneOf(['error', 'success', 'loading', 'warning']),
        /**
         * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持
         */
        hasFeedback: prop_types_1.default.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
        /**
         * 自定义内联样式
         */
        style: prop_types_1.default.object,
        id: prop_types_1.default.string,
        /**
         * node 或者 function(values)
         */
        children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
        /**
         * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
         */
        size: prop_types_1.default.oneOf(['large', 'small', 'medium']),
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
         * 扩展class
         */
        className: prop_types_1.default.string,
        /**
         * [表单校验] 不能为空
         */
        required: prop_types_1.default.bool,
        /**
         * required 的星号是否显示
         */
        asterisk: prop_types_1.default.bool,
        /**
         * required 自定义错误信息
         */
        requiredMessage: prop_types_1.default.string,
        /**
         * required 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        requiredTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * [表单校验] 最小值
         */
        min: prop_types_1.default.number,
        /**
         * [表单校验] 最大值
         */
        max: prop_types_1.default.number,
        /**
         * min/max 自定义错误信息
         */
        minmaxMessage: prop_types_1.default.string,
        /**
         * min/max 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        minmaxTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * [表单校验] 字符串最小长度 / 数组最小个数
         */
        minLength: prop_types_1.default.number,
        /**
         * [表单校验] 字符串最大长度 / 数组最大个数
         */
        maxLength: prop_types_1.default.number,
        /**
         * minLength/maxLength 自定义错误信息
         */
        minmaxLengthMessage: prop_types_1.default.string,
        /**
         * minLength/maxLength 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        minmaxLengthTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * [表单校验] 字符串精确长度 / 数组精确个数
         */
        length: prop_types_1.default.number,
        /**
         * length 自定义错误信息
         */
        lengthMessage: prop_types_1.default.string,
        /**
         * length 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        lengthTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * 正则校验
         */
        pattern: prop_types_1.default.any,
        /**
         * pattern 自定义错误信息
         */
        patternMessage: prop_types_1.default.string,
        /**
         * pattern 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        patternTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * [表单校验] 四种常用的 pattern
         */
        format: prop_types_1.default.oneOf(['number', 'email', 'url', 'tel']),
        /**
         * format 自定义错误信息
         */
        formatMessage: prop_types_1.default.string,
        /**
         * format 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        formatTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * [表单校验] 自定义校验函数
         */
        validator: prop_types_1.default.func,
        /**
         * validator 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
         */
        validatorTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        /**
         * 是否修改数据时自动触发校验
         */
        autoValidate: prop_types_1.default.bool,
        /**
         * 预设屏幕宽度
         */
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        responsive: prop_types_1.default.bool,
        /**
         * 在响应式布局模式下，表单项占多少列
         */
        colSpan: prop_types_1.default.number,
        /**
         * 在响应式布局下，且label在左边时，label的宽度是多少
         */
        labelWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        /**
         * 是否开启预览态
         */
        isPreview: prop_types_1.default.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {any} value 根据包裹的组件的 value 类型而决定
         */
        renderPreview: prop_types_1.default.func,
        /**
         * 替代校验信息的 name 字段，useLabelForErrorMessage 开启的情况下比 label 优先级高
         */
        errorMessageName: prop_types_1.default.string,
        /**
         * 是否使用 label 替换校验信息的 name 字段
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
         */
        colon: prop_types_1.default.bool,
        /**
         * 是否禁用表单
         */
        disabled: prop_types_1.default.bool,
        /**
         * 子元素的 value 名称
         */
        valueName: prop_types_1.default.string,
    };
    Item.defaultProps = {
        prefix: 'next-',
        hasFeedback: false,
        labelWidth: 100,
    };
    Item.contextTypes = {
        _formField: prop_types_1.default.object,
        _formSize: prop_types_1.default.oneOf(['large', 'small', 'medium']),
        _formDisabled: prop_types_1.default.bool,
        _formPreview: prop_types_1.default.bool,
        _formFullWidth: prop_types_1.default.bool,
        _formLabelForErrorMessage: prop_types_1.default.bool,
        _formMarginToDisplayHelp: prop_types_1.default.bool,
    };
    Item._typeMark = 'form_item';
    return Item;
}(react_1.default.Component));
exports.default = Item;
