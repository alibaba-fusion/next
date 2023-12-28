import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
/**
 * Breadcrumb.Item
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // stateless separator component
    Item.Separator = function (_a) {
        var prefix = _a.prefix, children = _a.children;
        return React.createElement("span", { className: "".concat(prefix, "breadcrumb-separator") }, children);
    };
    Item.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, className = _a.className, children = _a.children, link = _a.link, activated = _a.activated, separator = _a.separator, onClick = _a.onClick, others = __rest(_a, ["prefix", "rtl", "className", "children", "link", "activated", "separator", "onClick"]);
        var clazz = classNames("".concat(prefix, "breadcrumb-text"), className, {
            activated: activated,
        });
        return (React.createElement("li", { dir: rtl ? 'rtl' : null, className: "".concat(prefix, "breadcrumb-item"), onClick: onClick },
            link ? (React.createElement("a", __assign({ href: link, className: clazz }, others), children)) : (React.createElement("span", __assign({ className: clazz }, others), children)),
            activated ? null : Item.Separator({ prefix: prefix, children: separator })));
    };
    Item.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`
         */
        link: PropTypes.string,
        activated: PropTypes.bool,
        separator: PropTypes.node,
        className: PropTypes.any,
        children: PropTypes.node,
        /**
         * 元素点击事件
         * @param {MouseEvent} e Click Mouse Event
         */
        onClick: PropTypes.func,
    };
    Item.defaultProps = {
        prefix: 'next-',
    };
    Item._typeMark = 'breadcrumb_item';
    return Item;
}(Component));
export default ConfigProvider.config(Item);
