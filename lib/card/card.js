"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable valid-jsdoc */
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
var bullet_header_1 = require("./bullet-header");
var collapse_content_1 = require("./collapse-content");
var media_1 = require("./media");
var actions_1 = require("./actions");
var util_1 = require("../util");
var pickOthers = util_1.obj.pickOthers;
/**
 * Card
 * @order 0
 */
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, title = _b.title, subTitle = _b.subTitle, extra = _b.extra, showTitleBullet = _b.showTitleBullet, showHeadDivider = _b.showHeadDivider, children = _b.children, rtl = _b.rtl, contentHeight = _b.contentHeight, free = _b.free, actions = _b.actions, hasBorder = _b.hasBorder, media = _b.media;
        var cardCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "card")] = true,
            _a["".concat(prefix, "card-free")] = free,
            _a["".concat(prefix, "card-noborder")] = !hasBorder,
            _a["".concat(prefix, "card-show-divider")] = showHeadDivider,
            _a["".concat(prefix, "card-hide-divider")] = !showHeadDivider,
            _a), className);
        var others = pickOthers(Object.keys(Card.propTypes), this.props);
        others.dir = rtl ? 'rtl' : undefined;
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: cardCls }),
            media && react_1.default.createElement(media_1.default, null, media),
            react_1.default.createElement(bullet_header_1.default, { title: title, subTitle: subTitle, extra: extra, showTitleBullet: showTitleBullet }),
            free ? children : react_1.default.createElement(collapse_content_1.default, { contentHeight: contentHeight }, children),
            actions && react_1.default.createElement(actions_1.default, null, actions)));
    };
    Card.displayName = 'Card';
    Card.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, 
        /**
         * 卡片的上的图片 / 视频
         */
        media: prop_types_1.default.node, 
        /**
         * 卡片的标题
         */
        title: prop_types_1.default.node, 
        /**
         * 卡片的副标题
         */
        subTitle: prop_types_1.default.node, 
        /**
         * 卡片操作组，位置在卡片底部
         */
        actions: prop_types_1.default.node, 
        /**
         * 是否显示标题的项目符号
         */
        showTitleBullet: prop_types_1.default.bool, 
        /**
         * 是否展示头部的分隔线
         */
        showHeadDivider: prop_types_1.default.bool, 
        /**
         * 内容区域的固定高度
         */
        contentHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
        /**
         * 标题区域的用户自定义内容
         */
        extra: prop_types_1.default.node, 
        /**
         * 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效
         */
        free: prop_types_1.default.bool, 
        /**
         * 是否带边框
         * @version 1.24
         */
        hasBorder: prop_types_1.default.bool, className: prop_types_1.default.string, children: prop_types_1.default.node });
    Card.defaultProps = {
        prefix: 'next-',
        free: false,
        showTitleBullet: true,
        showHeadDivider: true,
        hasBorder: true,
        contentHeight: 120,
    };
    return Card;
}(react_1.default.Component));
exports.default = Card;
