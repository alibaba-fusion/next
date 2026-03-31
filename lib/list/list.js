"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var loading_1 = tslib_1.__importDefault(require("../loading"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * List
 */
var List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, header = _b.header, footer = _b.footer, size = _b.size, divider = _b.divider, className = _b.className, children = _b.children, rtl = _b.rtl, dataSource = _b.dataSource, renderItem = _b.renderItem, locale = _b.locale, loading = _b.loading, _c = _b.loadingComponent, LoadingComponent = _c === void 0 ? loading_1.default : _c, emptyContent = _b.emptyContent, others = tslib_1.__rest(_b, ["prefix", "header", "footer", "size", "divider", "className", "children", "rtl", "dataSource", "renderItem", "locale", "loading", "loadingComponent", "emptyContent"]);
        if (rtl) {
            others.dir = 'rtl';
        }
        var dSValid = Array.isArray(dataSource);
        var classes = (0, classnames_1.default)("".concat(prefix, "list"), (_a = {},
            _a["".concat(prefix, "list-").concat(size)] = size,
            _a["".concat(prefix, "list-divider")] = divider,
            _a), className);
        var customContent = dSValid &&
            renderItem &&
            dataSource.map(function (one, index) {
                return renderItem(one, index);
            });
        var content = (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: classes }),
            header ? react_1.default.createElement("div", { className: "".concat(prefix, "list-header") }, header) : null,
            !(dSValid && dataSource.length > 0) && !children ? (react_1.default.createElement("div", { className: "".concat(prefix, "list-empty") }, emptyContent || (locale === null || locale === void 0 ? void 0 : locale.empty))) : (react_1.default.createElement("ul", { key: "list-body", className: "".concat(prefix, "list-items") },
                customContent,
                children)),
            footer ? react_1.default.createElement("div", { className: "".concat(prefix, "list-footer") }, footer) : null));
        if (loading) {
            var loadingClassName = "".concat(prefix, "list-loading");
            return react_1.default.createElement(LoadingComponent, { className: loadingClassName }, content);
        }
        return content;
    };
    List.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        header: prop_types_1.default.node,
        footer: prop_types_1.default.node,
        size: prop_types_1.default.oneOf(['medium', 'small']),
        divider: prop_types_1.default.bool,
        dataSource: prop_types_1.default.array,
        renderItem: prop_types_1.default.func,
        loading: prop_types_1.default.bool,
        loadingComponent: prop_types_1.default.func,
        emptyContent: prop_types_1.default.node,
        className: prop_types_1.default.string,
        children: prop_types_1.default.any,
        locale: prop_types_1.default.object,
    };
    List.defaultProps = {
        rtl: false,
        size: 'medium',
        divider: true,
        prefix: 'next-',
        locale: zh_cn_1.default.List,
        renderItem: function (item) { return item; },
        loading: false,
    };
    List.displayName = 'List';
    return List;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(List));
