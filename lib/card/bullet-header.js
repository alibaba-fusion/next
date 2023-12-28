"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
/**
 * Card.BulletHeader
 * @order 2
 */
var CardBulletHeader = /** @class */ (function (_super) {
    tslib_1.__extends(CardBulletHeader, _super);
    function CardBulletHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardBulletHeader.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, title = _b.title, subTitle = _b.subTitle, extra = _b.extra, showTitleBullet = _b.showTitleBullet;
        if (!title)
            return null;
        var headCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "card-head")] = true,
            _a["".concat(prefix, "card-head-show-bullet")] = showTitleBullet,
            _a));
        var headExtra = extra ? react_1.default.createElement("div", { className: "".concat(prefix, "card-extra") }, extra) : null;
        return (react_1.default.createElement("div", { className: headCls },
            react_1.default.createElement("div", { className: "".concat(prefix, "card-head-main") },
                react_1.default.createElement("div", { className: "".concat(prefix, "card-title") },
                    title,
                    subTitle ? react_1.default.createElement("span", { className: "".concat(prefix, "card-subtitle") }, subTitle) : null),
                headExtra)));
    };
    CardBulletHeader.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 卡片的标题
         */
        title: prop_types_1.default.node,
        /**
         * 卡片的副标题
         */
        subTitle: prop_types_1.default.node,
        /**
         * 是否显示标题的项目符号
         */
        showTitleBullet: prop_types_1.default.bool,
        /**
         * 标题区域的用户自定义内容
         */
        extra: prop_types_1.default.node,
    };
    CardBulletHeader.defaultProps = {
        prefix: 'next-',
        showTitleBullet: true,
    };
    return CardBulletHeader;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardBulletHeader, {
    componentName: 'Card',
});
