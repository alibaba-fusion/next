"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
/** Paragraph */
var Paragraph = /** @class */ (function (_super) {
    tslib_1.__extends(Paragraph, _super);
    function Paragraph(props) {
        var _this = _super.call(this, props) || this;
        util_1.log.warning('[Paragraph] is deprecated, please use Typography.Paragraph instead!');
        return _this;
    }
    Paragraph.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, type = _a.type, size = _a.size, rtl = _a.rtl, others = tslib_1.__rest(_a, ["prefix", "className", "type", "size", "rtl"]);
        var cls = classNames("".concat(prefix, "paragraph"), type === 'short' ? "".concat(prefix, "paragraph-short") : "".concat(prefix, "paragraph-long"), size === 'small' ? "".concat(prefix, "paragraph-small") : "".concat(prefix, "paragraph-medium"), className);
        if (rtl) {
            others.dir = 'rtl';
        }
        return (React.createElement("div", tslib_1.__assign({}, others, { className: cls }), this.props.children));
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
exports.default = config_provider_1.default.config(Paragraph);
