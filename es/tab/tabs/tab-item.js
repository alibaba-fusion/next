import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
/** Tab.Item */
var TabItem = /** @class */ (function (_super) {
    __extends(TabItem, _super);
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
        var cls = classnames((_a = {},
            _a["".concat(prefix, "tabs-tabpane")] = true,
            _a["".concat(active ? 'active' : 'hidden')] = true,
            _a));
        return (React.createElement("div", { role: "tabpanel", "aria-hidden": active ? 'false' : 'true', className: cls }, children));
    };
    TabItem.propTypes = {
        prefix: PropTypes.string,
        /**
         * 选项卡标题
         */
        title: PropTypes.node,
        /**
         * 单个选项卡是否可关闭
         */
        closeable: PropTypes.bool,
        /**
         * 选项卡是否被禁用
         */
        disabled: PropTypes.bool,
        active: PropTypes.bool,
        lazyLoad: PropTypes.bool,
        unmountInactiveTabs: PropTypes.bool,
        children: PropTypes.any,
    };
    TabItem.defaultProps = {
        prefix: 'next-',
        closeable: false,
    };
    return TabItem;
}(React.Component));
export default polyfill(TabItem);
