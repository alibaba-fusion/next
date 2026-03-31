import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Menu from '../menu';
import VirtualList from '../virtual-list';
var CascaderMenu = /** @class */ (function (_super) {
    __extends(CascaderMenu, _super);
    function CascaderMenu() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.saveMenuRef = function (ref) {
            _this.menuEl = ref;
        };
        _this.saveVirtualRef = function (ref) {
            _this.virtualEl = ref;
        };
        return _this;
    }
    CascaderMenu.prototype.componentDidMount = function () {
        this.scrollToSelectedItem();
    };
    CascaderMenu.prototype.scrollToSelectedItem = function () {
        var _a = this.props, prefix = _a.prefix, useVirtual = _a.useVirtual, children = _a.children;
        // FIXME 这里的判断很容易报错
        if (!children || children.length === 0) {
            return;
        }
        var selectedIndex = children.findIndex(function (item) { return !!item.props.checked || !!item.props.selected || !!item.props.expanded; });
        if (selectedIndex === -1) {
            return;
        }
        if (useVirtual) {
            var instance_1 = this.virtualEl.getInstance();
            setTimeout(function () { return instance_1.scrollTo(selectedIndex); }, 0);
        }
        else {
            var itemSelector = ".".concat(prefix, "menu-item");
            var menu = findDOMNode(this.menuEl);
            var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
            if (targetItem) {
                menu.scrollTop =
                    targetItem.offsetTop -
                        Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) *
                            targetItem.clientHeight;
            }
        }
    };
    CascaderMenu.prototype.renderMenu = function (items, ref, props) {
        var _this = this;
        function isItem(node) {
            // FIXME 这里的判断很容易报错，node.type 可以是 string 或者函数组件
            return (React.isValidElement(node) &&
                node.type.menuChildType === 'item');
        }
        return (React.createElement(Menu, __assign({ ref: ref, role: "listbox" }, props), items.map(function (node) {
            if (isItem(node)) {
                return React.cloneElement(node, {
                    menu: _this,
                });
            }
            return node;
        })));
    };
    CascaderMenu.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, prefix = _b.prefix, useVirtual = _b.useVirtual, className = _b.className, style = _b.style, children = _b.children, others = __rest(_b, ["prefix", "useVirtual", "className", "style", "children"]);
        var menuProps = __assign({ labelToggleChecked: false, className: "".concat(prefix, "cascader-menu") }, others);
        return (React.createElement("div", { ref: this.saveMenuRef, className: "".concat(prefix, "cascader-menu-wrapper ").concat(className ? className : ''), style: __assign(__assign({}, style), { backgroundColor: (_a = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _a !== void 0 ? _a : (useVirtual ? '#fff' : undefined) }) }, useVirtual ? (React.createElement(VirtualList, { ref: this.saveVirtualRef, itemsRenderer: function (items, ref) { return _this.renderMenu(items, ref, menuProps); } }, children)) : (this.renderMenu(children, undefined, menuProps))));
    };
    CascaderMenu.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        useVirtual: PropTypes.bool,
        children: PropTypes.node,
    };
    return CascaderMenu;
}(Component));
export default CascaderMenu;
