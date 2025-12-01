import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Loading from '../loading';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';
/**
 * List
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, header = _b.header, footer = _b.footer, size = _b.size, divider = _b.divider, className = _b.className, children = _b.children, rtl = _b.rtl, dataSource = _b.dataSource, renderItem = _b.renderItem, locale = _b.locale, loading = _b.loading, _c = _b.loadingComponent, LoadingComponent = _c === void 0 ? Loading : _c, emptyContent = _b.emptyContent, others = __rest(_b, ["prefix", "header", "footer", "size", "divider", "className", "children", "rtl", "dataSource", "renderItem", "locale", "loading", "loadingComponent", "emptyContent"]);
        if (rtl) {
            others.dir = 'rtl';
        }
        var dSValid = Array.isArray(dataSource);
        var classes = classNames("".concat(prefix, "list"), (_a = {},
            _a["".concat(prefix, "list-").concat(size)] = size,
            _a["".concat(prefix, "list-divider")] = divider,
            _a), className);
        var customContent = dSValid &&
            renderItem &&
            dataSource.map(function (one, index) {
                return renderItem(one, index);
            });
        var content = (React.createElement("div", __assign({}, others, { className: classes }),
            header ? React.createElement("div", { className: "".concat(prefix, "list-header") }, header) : null,
            !(dSValid && dataSource.length > 0) && !children ? (React.createElement("div", { className: "".concat(prefix, "list-empty") }, emptyContent || (locale === null || locale === void 0 ? void 0 : locale.empty))) : (React.createElement("ul", { key: "list-body", className: "".concat(prefix, "list-items") },
                customContent,
                children)),
            footer ? React.createElement("div", { className: "".concat(prefix, "list-footer") }, footer) : null));
        if (loading) {
            var loadingClassName = "".concat(prefix, "list-loading");
            return React.createElement(LoadingComponent, { className: loadingClassName }, content);
        }
        return content;
    };
    List.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        header: PropTypes.node,
        footer: PropTypes.node,
        size: PropTypes.oneOf(['medium', 'small']),
        divider: PropTypes.bool,
        dataSource: PropTypes.array,
        renderItem: PropTypes.func,
        loading: PropTypes.bool,
        loadingComponent: PropTypes.func,
        emptyContent: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.any,
        locale: PropTypes.object,
    };
    List.defaultProps = {
        rtl: false,
        size: 'medium',
        divider: true,
        prefix: 'next-',
        locale: zhCN.List,
        renderItem: function (item) { return item; },
        loading: false,
    };
    List.displayName = 'List';
    return List;
}(Component));
export default ConfigProvider.config(polyfill(List));
