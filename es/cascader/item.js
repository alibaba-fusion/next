import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import { func, obj, KEYCODE } from '../util';
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var CascaderMenuItem = /** @class */ (function (_super) {
    __extends(CascaderMenuItem, _super);
    function CascaderMenuItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false,
        };
        bindCtx(_this, [
            'handleExpand',
            'handleClick',
            'handleMouseEnter',
            'handleKeyDown',
            'removeLoading',
        ]);
        return _this;
    }
    CascaderMenuItem.prototype.addLoading = function () {
        this.setState({
            loading: true,
        });
    };
    CascaderMenuItem.prototype.removeLoading = function () {
        this.setState({
            loading: false,
        });
    };
    CascaderMenuItem.prototype.setLoadingIfNeed = function (p) {
        if (p && typeof p.then === 'function') {
            this.addLoading();
            p.then(this.removeLoading).catch(this.removeLoading);
        }
    };
    CascaderMenuItem.prototype.handleExpand = function (focusedFirstChild) {
        this.setLoadingIfNeed(this.props.onExpand(focusedFirstChild));
    };
    CascaderMenuItem.prototype.handleClick = function () {
        this.handleExpand(false);
    };
    CascaderMenuItem.prototype.handleMouseEnter = function () {
        this.handleExpand(false);
    };
    CascaderMenuItem.prototype.handleKeyDown = function (e) {
        if (!this.props.disabled) {
            if (e.keyCode === KEYCODE.RIGHT || e.keyCode === KEYCODE.ENTER) {
                if (this.props.canExpand) {
                    this.handleExpand(true);
                }
            }
            else if (e.keyCode === KEYCODE.LEFT || e.keyCode === KEYCODE.ESC) {
                this.props.onFold();
            }
            else if (e.keyCode === KEYCODE.SPACE) {
                this.handleExpand(false);
            }
        }
    };
    CascaderMenuItem.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, menu = _b.menu, disabled = _b.disabled, selected = _b.selected, onSelect = _b.onSelect, expanded = _b.expanded, canExpand = _b.canExpand, expandTriggerType = _b.expandTriggerType, checkable = _b.checkable, checked = _b.checked, indeterminate = _b.indeterminate, checkboxDisabled = _b.checkboxDisabled, onCheck = _b.onCheck, children = _b.children;
        var others = pickOthers(CascaderMenuItem.propTypes, this.props);
        var loading = this.state.loading;
        var itemProps = __assign({ className: cx((_a = {},
                _a["".concat(prefix, "cascader-menu-item")] = true,
                _a["".concat(prefix, "expanded")] = expanded,
                _a[className] = !!className,
                _a)), disabled: disabled, menu: menu, onKeyDown: this.handleKeyDown, role: 'option' }, others);
        if (!disabled) {
            if (expandTriggerType === 'hover') {
                itemProps.onMouseEnter = this.handleMouseEnter;
            }
            else {
                itemProps.onClick = this.handleClick;
            }
        }
        var Item, title;
        if (checkable) {
            Item = Menu.CheckboxItem;
            itemProps.checked = checked;
            itemProps.indeterminate = indeterminate;
            itemProps.checkboxDisabled = checkboxDisabled;
            itemProps.onChange = onCheck;
        }
        else {
            Item = Menu.Item;
            itemProps.selected = selected;
            itemProps.onSelect = onSelect;
        }
        if (typeof children === 'string') {
            title = children;
        }
        return (React.createElement(Item, __assign({ title: title }, itemProps),
            children,
            canExpand ? (loading ? (React.createElement(Icon, { className: "".concat(prefix, "cascader-menu-icon-right ").concat(prefix, "cascader-menu-icon-loading"), type: "loading" })) : (React.createElement(Icon, { className: "".concat(prefix, "cascader-menu-icon-right ").concat(prefix, "cascader-menu-icon-expand"), type: "arrow-right" }))) : null));
    };
    CascaderMenuItem.menuChildType = 'item';
    CascaderMenuItem.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        selected: PropTypes.bool,
        onSelect: PropTypes.func,
        expanded: PropTypes.bool,
        canExpand: PropTypes.bool,
        menu: PropTypes.any,
        expandTriggerType: PropTypes.oneOf(['click', 'hover']),
        onExpand: PropTypes.func,
        onFold: PropTypes.func,
        checkable: PropTypes.bool,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        checkboxDisabled: PropTypes.bool,
        onCheck: PropTypes.func,
        children: PropTypes.node,
    };
    return CascaderMenuItem;
}(Component));
export default CascaderMenuItem;
