"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../util");
var field_1 = tslib_1.__importDefault(require("../field"));
var responsive_grid_1 = tslib_1.__importDefault(require("../responsive-grid"));
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
    return react_1.Children.map(children, function (child) {
        if (util_1.obj.isReactFragmentElement(child)) {
            return getNewChildren(child.props.children, props);
        }
        if (child &&
            ['function', 'object'].indexOf(typeof child.type) > -1 &&
            child.type._typeMark === 'form_item') {
            var childrenProps = {
                labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
                wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
                labelAlign: child.props.labelAlign
                    ? child.props.labelAlign
                    : device === 'phone'
                        ? 'top'
                        : labelAlign,
                labelTextAlign: child.props.labelTextAlign
                    ? child.props.labelTextAlign
                    : labelTextAlign,
                colon: 'colon' in child.props ? child.props.colon : colon,
                size: child.props.size ? child.props.size : size,
                responsive: responsive,
            };
            return (0, react_1.cloneElement)(child, pickerDefined(childrenProps));
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
        var _b = this.props, className = _b.className, inline = _b.inline, size = _b.size, device = _b.device, onSubmit = _b.onSubmit, children = _b.children, style = _b.style, prefix = _b.prefix, rtl = _b.rtl, isPreview = _b.isPreview, Tag = _b.component, responsive = _b.responsive, gap = _b.gap;
        var formClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "form")] = true,
            _a["".concat(prefix, "inline")] = inline,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "form-responsive-grid")] = responsive,
            _a["".concat(prefix, "form-preview")] = isPreview,
            _a[className] = !!className,
            _a));
        var newChildren = getNewChildren(children, this.props);
        return (react_1.default.createElement(Tag, tslib_1.__assign({ role: "form" }, util_1.obj.pickOthers(Form.propTypes, this.props), { className: formClassName, style: style, dir: rtl ? 'rtl' : undefined, onSubmit: onSubmit }), responsive ? (react_1.default.createElement(responsive_grid_1.default, { gap: gap, device: device }, newChildren)) : (newChildren)));
    };
    Form.displayName = 'Form';
    Form.propTypes = {
        prefix: prop_types_1.default.string,
        inline: prop_types_1.default.bool,
        size: prop_types_1.default.oneOf(['large', 'medium', 'small']),
        fullWidth: prop_types_1.default.bool,
        labelAlign: prop_types_1.default.oneOf(['top', 'left', 'inset']),
        labelTextAlign: prop_types_1.default.oneOf(['left', 'right']),
        field: prop_types_1.default.any,
        saveField: prop_types_1.default.func,
        labelCol: prop_types_1.default.object,
        wrapperCol: prop_types_1.default.object,
        onSubmit: prop_types_1.default.func,
        children: prop_types_1.default.any,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        value: prop_types_1.default.object,
        onChange: prop_types_1.default.func,
        component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
        fieldOptions: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        responsive: prop_types_1.default.bool,
        isPreview: prop_types_1.default.bool,
        useLabelForErrorMessage: prop_types_1.default.bool,
        preferMarginToDisplayHelp: prop_types_1.default.bool,
        colon: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        // 在 responsive 模式下，透传给 ResponsiveGrid 的，表示 每个 cell 之间的间距， [bottom&top, right&left]
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
}(react_1.Component));
exports.default = Form;
