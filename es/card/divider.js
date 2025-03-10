import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var CardDivider = /** @class */ (function (_super) {
    __extends(CardDivider, _super);
    function CardDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardDivider.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, component = _b.component, inset = _b.inset, className = _b.className, others = __rest(_b, ["prefix", "component", "inset", "className"]);
        var Component = component;
        var dividerClassName = classNames("".concat(prefix, "card-divider"), (_a = {},
            _a["".concat(prefix, "card-divider--inset")] = inset,
            _a), className);
        return React.createElement(Component, __assign({}, others, { className: dividerClassName }));
    };
    CardDivider.displayName = 'CardDivider';
    CardDivider.propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        /**
         * 分割线是否向内缩进
         */
        inset: PropTypes.bool,
        className: PropTypes.string,
    };
    CardDivider.defaultProps = {
        prefix: 'next-',
        component: 'hr',
    };
    return CardDivider;
}(Component));
export default ConfigProvider.config(CardDivider);
