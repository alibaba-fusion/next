import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import BulletHeader from './bullet-header';
import CollapseContent from './collapse-content';
import CardMedia from './media';
import CardActions from './actions';
import { obj } from '../util';
var pickOthers = obj.pickOthers;
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
        var others = pickOthers(Card.propTypes, this.props);
        others.dir = rtl ? 'rtl' : undefined;
        return (React.createElement("div", __assign({}, others, { className: cardCls }),
            media && React.createElement(CardMedia, null, media),
            React.createElement(BulletHeader, { title: title, subTitle: subTitle, extra: extra, showTitleBullet: showTitleBullet }),
            free ? (children) : (React.createElement(CollapseContent, { contentHeight: contentHeight }, children)),
            actions && React.createElement(CardActions, null, actions)));
    };
    Card.displayName = 'Card';
    Card.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, media: PropTypes.node, title: PropTypes.node, subTitle: PropTypes.node, actions: PropTypes.node, showTitleBullet: PropTypes.bool, showHeadDivider: PropTypes.bool, contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), extra: PropTypes.node, free: PropTypes.bool, hasBorder: PropTypes.bool, className: PropTypes.string, children: PropTypes.node });
    Card.defaultProps = {
        prefix: 'next-',
        free: false,
        showTitleBullet: true,
        showHeadDivider: true,
        hasBorder: true,
        contentHeight: 120,
    };
    return Card;
}(Component));
export default Card;
