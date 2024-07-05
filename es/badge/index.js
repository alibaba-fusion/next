import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import Sup from './sup';
/**
 * Badge
 */
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, dot = _b.dot, className = _b.className, children = _b.children, content = _b.content, style = _b.style, rtl = _b.rtl, originCount = _b.count, showZero = _b.showZero, originOverflowCount = _b.overflowCount;
        var count = parseInt(originCount, 10);
        var overflowCount = parseInt(originOverflowCount, 10);
        var others = obj.pickOthers(Badge.propTypes, this.props);
        // 如果是数字，则添加默认的 title
        if (count || (count === 0 && showZero)) {
            others.title = others.title || "".concat(count);
        }
        var classes = classNames("".concat(prefix, "badge"), (_a = {},
            _a["".concat(prefix, "badge-not-a-wrapper")] = !children,
            _a), className);
        return (React.createElement("span", __assign({ dir: rtl ? 'rtl' : undefined, className: classes }, others),
            children,
            React.createElement(Sup, { prefix: prefix, content: content, count: count, showZero: showZero, overflowCount: overflowCount, dot: dot, style: style })));
    };
    Badge.propTypes = {
        // 样式类名的品牌前缀
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        // 自定义类名
        className: PropTypes.string,
        // 自定义内联样式
        style: PropTypes.object,
        /**
         * 徽标依托的内容，一般显示在其右上方
         */
        children: PropTypes.node,
        /**
         * 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 `0` 时默认隐藏
         */
        count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 当`count`为`0`时，是否显示 count
         * @version 1.16
         */
        showZero: PropTypes.bool,
        /**
         * 自定义徽标中的内容
         */
        content: PropTypes.node,
        /**
         * 展示的封顶的数字
         */
        overflowCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 不展示数字，只展示一个小红点
         */
        dot: PropTypes.bool,
    };
    Badge.defaultProps = {
        prefix: 'next-',
        count: 0,
        showZero: false,
        overflowCount: 99,
        dot: false,
    };
    return Badge;
}(Component));
export default ConfigProvider.config(Badge);
