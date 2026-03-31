"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var grid_1 = tslib_1.__importDefault(require("../grid"));
var responsive_grid_1 = tslib_1.__importDefault(require("../responsive-grid"));
var util_1 = require("../util");
var error_1 = tslib_1.__importDefault(require("./error"));
var enhance_1 = require("./enhance");
var Row = grid_1.default.Row, Col = grid_1.default.Col;
var Cell = responsive_grid_1.default.Cell;
var isNil = util_1.obj.isNil;
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 从子元素里面提取表单组件。TODO: 2.x 中改为只获取一个元素
     */
    Item.prototype.getNames = function (children) {
        var name = this.props.name;
        var childrenList = react_1.Children.toArray(children);
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
        var useMargin = typeof preferMarginToDisplayHelp !== 'undefined'
            ? preferMarginToDisplayHelp
            : _formMarginToDisplayHelp;
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
        var labelForErrorMessage = useLabelForErrorMessage !== undefined
            ? useLabelForErrorMessage
            : this.context._formLabelForErrorMessage;
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
        var ele = (
        // @ts-expect-error label 上不存在 required，所以会有 TS 报错
        react_1.default.createElement("label", { htmlFor: id || this.getNames(children)[0], required: asterisk, key: "label" }, label));
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
        var ele = react_1.Children.map(children, function (child, idx) {
            if (child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark !== 'form_item' &&
                child.type._typeMark !== 'form_error') {
                var extraProps = childrenProps;
                // 自己直接使用 field.init 会在 props 上面留下 data-meta
                // name 挪到 FormItem 上面，默认把第一个元素当做 Form 组件
                if (_this.context._formField &&
                    !('data-meta' in child.props) &&
                    ('name' in child.props || (name && idx === 0)) //TODO：1.x 为了不 BR, 2.x 中把优先级调换下，优先取 FormItem 的 name
                ) {
                    var initName = 'name' in child.props && child.props.name ? child.props.name : name;
                    extraProps = _this.context._formField.init(initName, tslib_1.__assign(tslib_1.__assign({}, (0, enhance_1.getFieldInitCfg)(_this.props, child.type.displayName, labelForErrorMessage)), { props: tslib_1.__assign(tslib_1.__assign({}, child.props), { ref: child.ref }) }), childrenProps);
                }
                else {
                    extraProps = Object.assign({}, child.props, extraProps);
                }
                return (0, react_1.cloneElement)(child, extraProps);
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
        var Tag = responsive
            ? Cell
            : (wrapperCol || labelCol) && labelAlign !== 'top'
                ? Row
                : 'div';
        var label = labelAlign === 'inset' ? null : this.getItemLabel(childrenNode);
        return (react_1.default.createElement(Tag, tslib_1.__assign({}, util_1.obj.pickOthers(Item.propTypes, this.props), { className: itemClassName, style: style }),
            label,
            this.getItemWrapper(childrenNode)));
    };
    Item.displayName = 'Item';
    Item.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        label: prop_types_1.default.node,
        labelCol: prop_types_1.default.object,
        wrapperCol: prop_types_1.default.object,
        help: prop_types_1.default.node,
        name: prop_types_1.default.string,
        extra: prop_types_1.default.node,
        validateState: prop_types_1.default.oneOf(['error', 'success', 'loading', 'warning']),
        hasFeedback: prop_types_1.default.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
        style: prop_types_1.default.object,
        id: prop_types_1.default.string,
        children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
        size: prop_types_1.default.oneOf(['large', 'small', 'medium']),
        fullWidth: prop_types_1.default.bool,
        labelAlign: prop_types_1.default.oneOf(['top', 'left', 'inset']),
        labelTextAlign: prop_types_1.default.oneOf(['left', 'right']),
        className: prop_types_1.default.string,
        required: prop_types_1.default.bool,
        asterisk: prop_types_1.default.bool,
        requiredMessage: prop_types_1.default.string,
        requiredTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        min: prop_types_1.default.number,
        max: prop_types_1.default.number,
        minmaxMessage: prop_types_1.default.string,
        minmaxTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        minLength: prop_types_1.default.number,
        maxLength: prop_types_1.default.number,
        minmaxLengthMessage: prop_types_1.default.string,
        minmaxLengthTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        length: prop_types_1.default.number,
        lengthMessage: prop_types_1.default.string,
        lengthTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        pattern: prop_types_1.default.any,
        patternMessage: prop_types_1.default.string,
        patternTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        format: prop_types_1.default.oneOf(['number', 'email', 'url', 'tel']),
        formatMessage: prop_types_1.default.string,
        formatTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        validator: prop_types_1.default.func,
        validatorTrigger: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
        autoValidate: prop_types_1.default.bool,
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        responsive: prop_types_1.default.bool,
        colSpan: prop_types_1.default.number,
        labelWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        isPreview: prop_types_1.default.bool,
        renderPreview: prop_types_1.default.func,
        errorMessageName: prop_types_1.default.string,
        useLabelForErrorMessage: prop_types_1.default.bool,
        preferMarginToDisplayHelp: prop_types_1.default.bool,
        colon: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
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
}(react_1.Component));
exports.default = Item;
