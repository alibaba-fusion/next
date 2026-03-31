import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var CardContent = /** @class */ (function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, others = __rest(_a, ["prefix", "className", "component"]);
        var Component = component;
        return (React.createElement(Component, __assign({}, others, { className: classNames("".concat(prefix, "card-content-container"), className) })));
    };
    CardContent.displayName = 'CardContent';
    CardContent.propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        className: PropTypes.string,
    };
    CardContent.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardContent;
}(Component));
export default ConfigProvider.config(CardContent);
