import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { log } from '../util';
/** Paragraph */
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(props) {
        var _this = _super.call(this, props) || this;
        log.warning('[Paragraph] is deprecated, please use Typography.Paragraph instead!');
        return _this;
    }
    Paragraph.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, type = _a.type, size = _a.size, rtl = _a.rtl, others = __rest(_a, ["prefix", "className", "type", "size", "rtl"]);
        var cls = classNames("".concat(prefix, "paragraph"), type === 'short' ? "".concat(prefix, "paragraph-short") : "".concat(prefix, "paragraph-long"), size === 'small' ? "".concat(prefix, "paragraph-small") : "".concat(prefix, "paragraph-medium"), className);
        if (rtl) {
            others.dir = 'rtl';
        }
        return (React.createElement("div", __assign({}, others, { className: cls }), this.props.children));
    };
    Paragraph.propTypes = {
        prefix: PropTypes.string,
        /**
         * 额外的样式名 会附加到 root dom 上
         */
        className: PropTypes.string,
        /**
         * 什么方式展示段落
         * - 'long' :  展示所有文本
         * - 'short' : 展示三行以内（非强制）
         */
        type: PropTypes.oneOf(['long', 'short']),
        /**
         * 组件大小。
         * - 'medium' : 中号
         * - 'short' : 小号
         */
        size: PropTypes.oneOf(['medium', 'small']),
        rtl: PropTypes.bool,
    };
    Paragraph.defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
    };
    return Paragraph;
}(React.Component));
export default ConfigProvider.config(Paragraph);
