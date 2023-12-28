"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
/**
 * Breadcrumb.Item
 */
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // stateless separator component
    Item.Separator = function (_a) {
        var prefix = _a.prefix, children = _a.children;
        return react_1.default.createElement("span", { className: "".concat(prefix, "breadcrumb-separator") }, children);
    };
    Item.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, className = _a.className, children = _a.children, link = _a.link, activated = _a.activated, separator = _a.separator, onClick = _a.onClick, others = tslib_1.__rest(_a, ["prefix", "rtl", "className", "children", "link", "activated", "separator", "onClick"]);
        var clazz = (0, classnames_1.default)("".concat(prefix, "breadcrumb-text"), className, {
            activated: activated,
        });
        return (react_1.default.createElement("li", { dir: rtl ? 'rtl' : null, className: "".concat(prefix, "breadcrumb-item"), onClick: onClick },
            link ? (react_1.default.createElement("a", tslib_1.__assign({ href: link, className: clazz }, others), children)) : (react_1.default.createElement("span", tslib_1.__assign({ className: clazz }, others), children)),
            activated ? null : Item.Separator({ prefix: prefix, children: separator })));
    };
    Item.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /**
         * 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`
         */
        link: prop_types_1.default.string,
        activated: prop_types_1.default.bool,
        separator: prop_types_1.default.node,
        className: prop_types_1.default.any,
        children: prop_types_1.default.node,
        /**
         * 元素点击事件
         * @param {MouseEvent} e Click Mouse Event
         */
        onClick: prop_types_1.default.func,
    };
    Item.defaultProps = {
        prefix: 'next-',
    };
    Item._typeMark = 'breadcrumb_item';
    return Item;
}(react_1.Component));
exports.default = config_provider_1.default.config(Item);
