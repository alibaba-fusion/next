import { __assign, __extends } from "tslib";
import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '../grid';
import RGrid from '../responsive-grid';
import { obj } from '../util';
import Error from './error';
import { getFieldInitCfg } from './enhance';
var Row = Grid.Row, Col = Grid.Col;
var Cell = RGrid.Cell;
var isNil = obj.isNil;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 从子元素里面提取表单组件。TODO: 2.x 中改为只获取一个元素
     */
    Item.prototype.getNames = function (children) {
        var name = this.props.name;
        var childrenList = Children.toArray(children);
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
        return (React.createElement(Error, { name: help === undefined ? this.getNames(children) : undefined, field: _formField, preferMarginToDisplayHelp: useMargin }, help));
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
        React.createElement("label", { htmlFor: id || this.getNames(children)[0], required: asterisk, key: "label" }, label));
        var cls = classNames((_a = {},
            _a["".concat(prefix, "form-item-label")] = true,
            _a['has-colon'] = colon,
            _a["".concat(prefix, "left")] = labelTextAlign === 'left',
            _a));
        if (responsive && labelWidth && labelAlign !== 'top') {
            return (React.createElement("div", { className: cls, style: { width: labelWidth } }, ele));
        }
        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (React.createElement(Col, __assign({}, labelCol, { className: cls }), ele));
        }
        return React.createElement("div", { className: cls }, ele);
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
        var ele = Children.map(children, function (child, idx) {
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
                    extraProps = _this.context._formField.init(initName, __assign(__assign({}, getFieldInitCfg(_this.props, child.type.displayName, labelForErrorMessage)), { props: __assign(__assign({}, child.props), { ref: child.ref }) }), childrenProps);
                }
                else {
                    extraProps = Object.assign({}, child.props, extraProps);
                }
                return cloneElement(child, extraProps);
            }
            return child;
        });
        var help = this.getHelper(children);
        if ((wrapperCol || labelCol) && labelAlign !== 'top') {
            return (React.createElement(Col, __assign({}, wrapperCol, { className: "".concat(prefix, "form-item-control"), key: "item" }),
                ele,
                " ",
                help,
                " ",
                extra));
        }
        return (React.createElement("div", { className: "".concat(prefix, "form-item-control") },
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
        var itemClassName = classNames((_a = {},
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
        return (React.createElement(Tag, __assign({}, obj.pickOthers(Item.propTypes, this.props), { className: itemClassName, style: style }),
            label,
            this.getItemWrapper(childrenNode)));
    };
    Item.displayName = 'Item';
    Item.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        help: PropTypes.node,
        name: PropTypes.string,
        extra: PropTypes.node,
        validateState: PropTypes.oneOf(['error', 'success', 'loading', 'warning']),
        hasFeedback: PropTypes.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
        style: PropTypes.object,
        id: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        size: PropTypes.oneOf(['large', 'small', 'medium']),
        fullWidth: PropTypes.bool,
        labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
        labelTextAlign: PropTypes.oneOf(['left', 'right']),
        className: PropTypes.string,
        required: PropTypes.bool,
        asterisk: PropTypes.bool,
        requiredMessage: PropTypes.string,
        requiredTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        min: PropTypes.number,
        max: PropTypes.number,
        minmaxMessage: PropTypes.string,
        minmaxTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        minLength: PropTypes.number,
        maxLength: PropTypes.number,
        minmaxLengthMessage: PropTypes.string,
        minmaxLengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        length: PropTypes.number,
        lengthMessage: PropTypes.string,
        lengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        pattern: PropTypes.any,
        patternMessage: PropTypes.string,
        patternTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        format: PropTypes.oneOf(['number', 'email', 'url', 'tel']),
        formatMessage: PropTypes.string,
        formatTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        validator: PropTypes.func,
        validatorTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        autoValidate: PropTypes.bool,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        responsive: PropTypes.bool,
        colSpan: PropTypes.number,
        labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        errorMessageName: PropTypes.string,
        useLabelForErrorMessage: PropTypes.bool,
        preferMarginToDisplayHelp: PropTypes.bool,
        colon: PropTypes.bool,
        disabled: PropTypes.bool,
        valueName: PropTypes.string,
    };
    Item.defaultProps = {
        prefix: 'next-',
        hasFeedback: false,
        labelWidth: 100,
    };
    Item.contextTypes = {
        _formField: PropTypes.object,
        _formSize: PropTypes.oneOf(['large', 'small', 'medium']),
        _formDisabled: PropTypes.bool,
        _formPreview: PropTypes.bool,
        _formFullWidth: PropTypes.bool,
        _formLabelForErrorMessage: PropTypes.bool,
        _formMarginToDisplayHelp: PropTypes.bool,
    };
    Item._typeMark = 'form_item';
    return Item;
}(Component));
export default Item;
