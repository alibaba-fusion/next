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
            dataSource.map(function (one, index) {
                return renderItem(one, index);
            });
        var content = (React.createElement("div", __assign({}, others, { className: classes }),
            header ? React.createElement("div", { className: "".concat(prefix, "list-header") }, header) : null,
            !(dSValid && dataSource.length > 0) && !children ? (React.createElement("div", { className: "".concat(prefix, "list-empty") }, emptyContent || locale.empty)) : (React.createElement("ul", { key: "list-body", className: "".concat(prefix, "list-items") },
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
        /**
         * 列表头部
         */
        header: PropTypes.node,
        /**
         * 列表尾部
         */
        footer: PropTypes.node,
        /**
         * 列表尺寸
         */
        size: PropTypes.oneOf(['medium', 'small']),
        /**
         * 是否显示分割线
         */
        divider: PropTypes.bool,
        /**
         * 列表数据源
         */
        dataSource: PropTypes.array,
        /**
         * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
         * @param {Any} current 当前遍历的项
         * @param {Number} index 当前遍历的项的索引
         */
        renderItem: PropTypes.func,
        /**
         * 是否在加载中
         */
        loading: PropTypes.bool,
        /**
         * 自定义 Loading 组件
         * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
         * @param {LoadingProps} props 需要透传给组件的参数
         * @return {React.ReactNode} 展示的组件
         */
        loadingComponent: PropTypes.func,
        /**
         * 设置数据为空的时候的表格内容展现
         */
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
    return List;
}(Component));
export default ConfigProvider.config(polyfill(List));
