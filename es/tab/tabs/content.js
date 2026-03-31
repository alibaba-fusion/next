import { __assign, __extends, __rest } from "tslib";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
var TabContent = /** @class */ (function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, activeKey = _b.activeKey, lazyLoad = _b.lazyLoad, unmountInactiveTabs = _b.unmountInactiveTabs, children = _b.children, className = _b.className, others = __rest(_b, ["prefix", "activeKey", "lazyLoad", "unmountInactiveTabs", "children", "className"]);
        var formatChildren = [];
        React.Children.forEach(children, function (child) {
            var active = activeKey === child.key;
            formatChildren.push(React.cloneElement(child, {
                prefix: prefix,
                active: active,
                lazyLoad: lazyLoad,
                unmountInactiveTabs: unmountInactiveTabs,
            }));
        });
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "tabs-content")] = true,
            _a), className);
        return (React.createElement("div", __assign({}, others, { className: classNames }), formatChildren));
    };
    TabContent.displayName = 'TabContent';
    TabContent.propTypes = {
        prefix: PropTypes.string,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        lazyLoad: PropTypes.bool,
        children: PropTypes.any,
    };
    return TabContent;
}(PureComponent));
export default TabContent;
