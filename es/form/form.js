import { __assign, __extends } from "tslib";
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, func } from '../util';
import NextField from '../field';
import RGrid from '../responsive-grid';
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
    return Children.map(children, function (child) {
        if (obj.isReactFragmentElement(child)) {
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
            return cloneElement(child, pickerDefined(childrenProps));
        }
        return child;
    });
};
/** Form */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
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
            var options = __assign(__assign({}, props.fieldOptions), { onChange: _this.onChange });
            if (props.field) {
                _this._formField = props.field;
                var onChange = _this._formField.options.onChange;
                options.onChange = func.makeChain(onChange, _this.onChange);
                _this._formField.setOptions && _this._formField.setOptions(options);
            }
            else {
                if ('value' in props) {
                    options.values = props.value;
                }
                _this._formField = new NextField(_this, options);
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
        var formClassName = classNames((_a = {},
            _a["".concat(prefix, "form")] = true,
            _a["".concat(prefix, "inline")] = inline,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "form-responsive-grid")] = responsive,
            _a["".concat(prefix, "form-preview")] = isPreview,
            _a[className] = !!className,
            _a));
        var newChildren = getNewChildren(children, this.props);
        return (React.createElement(Tag, __assign({ role: "form" }, obj.pickOthers(Form.propTypes, this.props), { className: formClassName, style: style, dir: rtl ? 'rtl' : undefined, onSubmit: onSubmit }), responsive ? (React.createElement(RGrid, { gap: gap, device: device }, newChildren)) : (newChildren)));
    };
    Form.displayName = 'Form';
    Form.propTypes = {
        prefix: PropTypes.string,
        inline: PropTypes.bool,
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        fullWidth: PropTypes.bool,
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        field: PropTypes.any,
        saveField: PropTypes.func,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        onSubmit: PropTypes.func,
        children: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        value: PropTypes.object,
        onChange: PropTypes.func,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        fieldOptions: PropTypes.object,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        responsive: PropTypes.bool,
        isPreview: PropTypes.bool,
        useLabelForErrorMessage: PropTypes.bool,
        preferMarginToDisplayHelp: PropTypes.bool,
        colon: PropTypes.bool,
        disabled: PropTypes.bool,
        // 在 responsive 模式下，透传给 ResponsiveGrid 的，表示 每个 cell 之间的间距， [bottom&top, right&left]
        gap: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    };
    Form.defaultProps = {
        prefix: 'next-',
        onSubmit: preventDefault,
        size: 'medium',
        labelAlign: 'left',
        onChange: func.noop,
        component: 'form',
        saveField: func.noop,
        device: 'desktop',
        colon: false,
        disabled: false,
        preferMarginToDisplayHelp: false,
    };
    Form.childContextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.string,
        _formDisabled: PropTypes.bool,
        _formPreview: PropTypes.bool,
        _formFullWidth: PropTypes.bool,
        _formLabelForErrorMessage: PropTypes.bool,
        _formMarginToDisplayHelp: PropTypes.bool,
    };
    return Form;
}(Component));
export default Form;
