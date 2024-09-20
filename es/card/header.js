import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var CardHeader = /** @class */ (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, subTitle = _a.subTitle, extra = _a.extra, className = _a.className, component = _a.component, others = __rest(_a, ["prefix", "title", "subTitle", "extra", "className", "component"]);
        var Component = component;
        return (React.createElement(Component, __assign({}, others, { className: classNames("".concat(prefix, "card-header"), className) }),
            extra && React.createElement("div", { className: "".concat(prefix, "card-header-extra") }, extra),
            React.createElement("div", { className: "".concat(prefix, "card-header-titles") },
                title && React.createElement("div", { className: "".concat(prefix, "card-header-title") }, title),
                subTitle && React.createElement("div", { className: "".concat(prefix, "card-header-subtitle") }, subTitle))));
    };
    CardHeader.displayName = 'CardHeader';
    CardHeader.propTypes = {
        prefix: PropTypes.string,
        /**
         * 卡片的标题
         */
        title: PropTypes.node,
        /**
         * 卡片的副标题
         */
        subTitle: PropTypes.node,
        /**
         * 标题区域的用户自定义内容
         */
        extra: PropTypes.node,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        className: PropTypes.string,
    };
    CardHeader.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardHeader;
}(Component));
export default ConfigProvider.config(CardHeader);
