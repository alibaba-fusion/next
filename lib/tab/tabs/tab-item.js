"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
/** Tab.Item */
var TabItem = /** @class */ (function (_super) {
    tslib_1.__extends(TabItem, _super);
    function TabItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItem.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, active = _b.active, lazyLoad = _b.lazyLoad, unmountInactiveTabs = _b.unmountInactiveTabs, children = _b.children;
        this._actived = this._actived || active;
        if (lazyLoad && !this._actived) {
            return null;
        }
        if (unmountInactiveTabs && !active) {
            return null;
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "tabs-tabpane")] = true,
            _a["".concat(active ? 'active' : 'hidden')] = true,
            _a));
        return (react_1.default.createElement("div", { role: "tabpanel", "aria-hidden": active ? 'false' : 'true', className: cls }, children));
    };
    TabItem.displayName = 'TabItem';
    TabItem.propTypes = {
        prefix: prop_types_1.default.string,
        title: prop_types_1.default.node,
        closeable: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        active: prop_types_1.default.bool,
        lazyLoad: prop_types_1.default.bool,
        unmountInactiveTabs: prop_types_1.default.bool,
        children: prop_types_1.default.any,
    };
    TabItem.defaultProps = {
        prefix: 'next-',
        closeable: false,
    };
    return TabItem;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(TabItem);
