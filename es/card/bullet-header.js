import { __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var CardBulletHeader = /** @class */ (function (_super) {
    __extends(CardBulletHeader, _super);
    function CardBulletHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardBulletHeader.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, title = _b.title, subTitle = _b.subTitle, extra = _b.extra, showTitleBullet = _b.showTitleBullet;
        if (!title)
            return null;
        var headCls = classNames((_a = {},
            _a["".concat(prefix, "card-head")] = true,
            _a["".concat(prefix, "card-head-show-bullet")] = showTitleBullet,
            _a));
        var headExtra = extra ? React.createElement("div", { className: "".concat(prefix, "card-extra") }, extra) : null;
        return (React.createElement("div", { className: headCls },
            React.createElement("div", { className: "".concat(prefix, "card-head-main") },
                React.createElement("div", { className: "".concat(prefix, "card-title") },
                    title,
                    subTitle ? (React.createElement("span", { className: "".concat(prefix, "card-subtitle") }, subTitle)) : null),
                headExtra)));
    };
    CardBulletHeader.displayName = 'CardBulletHeader';
    CardBulletHeader.propTypes = {
        prefix: PropTypes.string,
        title: PropTypes.node,
        subTitle: PropTypes.node,
        showTitleBullet: PropTypes.bool,
        extra: PropTypes.node,
    };
    CardBulletHeader.defaultProps = {
        prefix: 'next-',
        showTitleBullet: true,
    };
    return CardBulletHeader;
}(Component));
export default ConfigProvider.config(CardBulletHeader, {
    componentName: 'Card',
});
