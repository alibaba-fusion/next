import { __assign, __extends } from "tslib";
/* eslint-disable valid-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import BulletHeader from './bullet-header';
import CollapseContent from './collapse-content';
import CardMedia from './media';
import CardActions from './actions';
import { obj } from '../util';
var pickOthers = obj.pickOthers;
/**
 * Card
 * @order 0
 */
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, title = _b.title, subTitle = _b.subTitle, extra = _b.extra, showTitleBullet = _b.showTitleBullet, showHeadDivider = _b.showHeadDivider, children = _b.children, rtl = _b.rtl, contentHeight = _b.contentHeight, free = _b.free, actions = _b.actions, hasBorder = _b.hasBorder, media = _b.media;
        var cardCls = classNames((_a = {},
            _a["".concat(prefix, "card")] = true,
            _a["".concat(prefix, "card-free")] = free,
            _a["".concat(prefix, "card-noborder")] = !hasBorder,
            _a["".concat(prefix, "card-show-divider")] = showHeadDivider,
            _a["".concat(prefix, "card-hide-divider")] = !showHeadDivider,
            _a), className);
        var others = pickOthers(Object.keys(Card.propTypes), this.props);
        others.dir = rtl ? 'rtl' : undefined;
        return (React.createElement("div", __assign({}, others, { className: cardCls }),
            media && React.createElement(CardMedia, null, media),
            React.createElement(BulletHeader, { title: title, subTitle: subTitle, extra: extra, showTitleBullet: showTitleBullet }),
            free ? children : React.createElement(CollapseContent, { contentHeight: contentHeight }, children),
            actions && React.createElement(CardActions, null, actions)));
    };
    Card.displayName = 'Card';
    Card.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, 
        /**
         * 卡片的上的图片 / 视频
         */
        media: PropTypes.node, 
        /**
         * 卡片的标题
         */
        title: PropTypes.node, 
        /**
         * 卡片的副标题
         */
        subTitle: PropTypes.node, 
        /**
         * 卡片操作组，位置在卡片底部
         */
        actions: PropTypes.node, 
        /**
         * 是否显示标题的项目符号
         */
        showTitleBullet: PropTypes.bool, 
        /**
         * 是否展示头部的分隔线
         */
        showHeadDivider: PropTypes.bool, 
        /**
         * 内容区域的固定高度
         */
        contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        /**
         * 标题区域的用户自定义内容
         */
        extra: PropTypes.node, 
        /**
         * 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效
         */
        free: PropTypes.bool, 
        /**
         * 是否带边框
         * @version 1.24
         */
        hasBorder: PropTypes.bool, className: PropTypes.string, children: PropTypes.node });
    Card.defaultProps = {
        prefix: 'next-',
        free: false,
        showTitleBullet: true,
        showHeadDivider: true,
        hasBorder: true,
        contentHeight: 120,
    };
    return Card;
}(React.Component));
export default Card;
