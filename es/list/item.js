import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
/**
 * List.Item
 */
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, description = _a.description, media = _a.media, extra = _a.extra, className = _a.className, children = _a.children, others = __rest(_a, ["prefix", "title", "description", "media", "extra", "className", "children"]);
        var classes = classNames("".concat(prefix, "list-item"), className);
        return (React.createElement("li", __assign({}, others, { className: classes }),
            media ? React.createElement("div", { className: "".concat(prefix, "list-item-media") }, media) : null,
            React.createElement("div", { className: "".concat(prefix, "list-item-content") },
                title ? React.createElement("div", { className: "".concat(prefix, "list-item-title") }, title) : null,
                description ? (React.createElement("div", { className: "".concat(prefix, "list-item-description") }, description)) : null,
                children),
            extra ? React.createElement("div", { className: "".concat(prefix, "list-item-extra") }, extra) : null));
    };
    ListItem.propTypes = {
        prefix: PropTypes.string,
        /**
         * 列表元素的标题
         */
        title: PropTypes.node,
        /**
         * 列表元素的描述内容
         */
        description: PropTypes.node,
        /**
         * 列表元素的头像 / 图标 / 图片内容
         */
        media: PropTypes.node,
        /**
         * 额外内容
         */
        extra: PropTypes.node,
        className: PropTypes.any,
    };
    ListItem.defaultProps = {
        prefix: 'next-',
    };
    return ListItem;
}(Component));
export default ConfigProvider.config(polyfill(ListItem));
