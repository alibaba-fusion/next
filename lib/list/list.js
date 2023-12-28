"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var loading_1 = require("../loading");
var zh_cn_1 = require("../locale/zh-cn");
var config_provider_1 = require("../config-provider");
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
            dataSource.map(function (one, index) {
                return renderItem(one, index);
            });
        var content = (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: classes }),
            header ? react_1.default.createElement("div", { className: "".concat(prefix, "list-header") }, header) : null,
            !(dSValid && dataSource.length > 0) && !children ? (react_1.default.createElement("div", { className: "".concat(prefix, "list-empty") }, emptyContent || locale.empty)) : (react_1.default.createElement("ul", { key: "list-body", className: "".concat(prefix, "list-items") },
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
        /**
         * 列表头部
         */
        header: prop_types_1.default.node,
        /**
         * 列表尾部
         */
        footer: prop_types_1.default.node,
        /**
         * 列表尺寸
         */
        size: prop_types_1.default.oneOf(['medium', 'small']),
        /**
         * 是否显示分割线
         */
        divider: prop_types_1.default.bool,
        /**
         * 列表数据源
         */
        dataSource: prop_types_1.default.array,
        /**
         * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
         * @param {Any} current 当前遍历的项
         * @param {Number} index 当前遍历的项的索引
         */
        renderItem: prop_types_1.default.func,
        /**
         * 是否在加载中
         */
        loading: prop_types_1.default.bool,
        /**
         * 自定义 Loading 组件
         * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
         * @param {LoadingProps} props 需要透传给组件的参数
         * @return {React.ReactNode} 展示的组件
         */
        loadingComponent: prop_types_1.default.func,
        /**
         * 设置数据为空的时候的表格内容展现
         */
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
    return List;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(List));
