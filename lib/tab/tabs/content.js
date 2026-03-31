"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var TabContent = /** @class */ (function (_super) {
    tslib_1.__extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, activeKey = _b.activeKey, lazyLoad = _b.lazyLoad, unmountInactiveTabs = _b.unmountInactiveTabs, children = _b.children, className = _b.className, others = tslib_1.__rest(_b, ["prefix", "activeKey", "lazyLoad", "unmountInactiveTabs", "children", "className"]);
        var formatChildren = [];
        react_1.default.Children.forEach(children, function (child) {
            var active = activeKey === child.key;
            formatChildren.push(react_1.default.cloneElement(child, {
                prefix: prefix,
                active: active,
                lazyLoad: lazyLoad,
                unmountInactiveTabs: unmountInactiveTabs,
            }));
        });
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "tabs-content")] = true,
            _a), className);
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: classNames }), formatChildren));
    };
    TabContent.displayName = 'TabContent';
    TabContent.propTypes = {
        prefix: prop_types_1.default.string,
        activeKey: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        lazyLoad: prop_types_1.default.bool,
        children: prop_types_1.default.any,
    };
    return TabContent;
}(react_1.PureComponent));
exports.default = TabContent;
