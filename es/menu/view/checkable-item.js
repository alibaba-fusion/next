import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../checkbox';
import Radio from '../../radio';
import { func, obj, KEYCODE, htmlId } from '../../util';
import Item from './item';
var noop = {};
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var CheckableItem = /** @class */ (function (_super) {
    __extends(CheckableItem, _super);
    function CheckableItem(props) {
        var _this = _super.call(this, props) || this;
        bindCtx(_this, ['stopPropagation', 'handleKeyDown', 'handleClick']);
        _this.id = htmlId.escapeForId("checkable-item-".concat(props.id || props._key));
        return _this;
    }
    CheckableItem.prototype.stopPropagation = function (e) {
        e.stopPropagation();
    };
    CheckableItem.prototype.handleCheck = function (e) {
        var _a = this.props, checkType = _a.checkType, checked = _a.checked, onChange = _a.onChange;
        if (!(checkType === 'radio' && checked)) {
            onChange(!checked, e);
        }
    };
    CheckableItem.prototype.handleKeyDown = function (e) {
        if (e.keyCode === KEYCODE.SPACE && !this.props.checkDisabled) {
            this.handleCheck(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    };
    CheckableItem.prototype.handleClick = function (e) {
        this.handleCheck(e);
        this.props.onClick && this.props.onClick(e);
    };
    CheckableItem.prototype.renderCheck = function () {
        var _a = this
            .props, root = _a.root, checked = _a.checked, indeterminate = _a.indeterminate, disabled = _a.disabled, checkType = _a.checkType, checkDisabled = _a.checkDisabled, onChange = _a.onChange;
        var labelToggleChecked = root.props.labelToggleChecked;
        var Check = checkType === 'radio' ? Radio : Checkbox;
        var checkProps = {
            tabIndex: -1,
            checked: checked,
            disabled: disabled || checkDisabled,
        };
        if (checkType === 'checkbox') {
            checkProps.indeterminate = indeterminate;
        }
        if (!labelToggleChecked) {
            checkProps.onChange = onChange;
            checkProps.onClick = this.stopPropagation;
        }
        return React.createElement(Check, __assign({ "aria-labelledby": this.id }, checkProps));
    };
    CheckableItem.prototype.render = function () {
        var _a = this
            .props, _key = _a._key, root = _a.root, checked = _a.checked, disabled = _a.disabled, onClick = _a.onClick, helper = _a.helper, children = _a.children;
        var _b = root.props, prefix = _b.prefix, labelToggleChecked = _b.labelToggleChecked;
        var others = pickOthers(CheckableItem.propTypes, this.props);
        var newProps = __assign({ _key: _key, root: root, disabled: disabled, type: 'item', onClick: onClick, onKeyDown: this.handleKeyDown }, others);
        if (labelToggleChecked && !disabled) {
            newProps.onClick = this.handleClick;
        }
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        return (React.createElement(Item, __assign({ "aria-checked": checked, title: title }, newProps),
            this.renderCheck(),
            React.createElement("span", { className: "".concat(prefix, "menu-item-text"), id: this.id }, children),
            helper ? React.createElement("div", { className: "".concat(prefix, "menu-item-helper") }, helper) : null));
    };
    CheckableItem.propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        disabled: PropTypes.bool,
        inlineIndent: PropTypes.number,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        checkType: PropTypes.oneOf(['checkbox', 'radio']),
        checkDisabled: PropTypes.bool,
        helper: PropTypes.node,
        children: PropTypes.node,
        onKeyDown: PropTypes.func,
        onClick: PropTypes.func,
        id: PropTypes.string,
    };
    CheckableItem.defaultProps = {
        disabled: false,
        checked: false,
        indeterminate: false,
        checkType: 'checkbox',
        checkDisabled: false,
        onChange: noop,
    };
    return CheckableItem;
}(Component));
export default CheckableItem;
