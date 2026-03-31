import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
var CardActions = /** @class */ (function (_super) {
    __extends(CardActions, _super);
    function CardActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActions.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, component = _a.component, className = _a.className, others = __rest(_a, ["prefix", "component", "className"]);
        var Component = component;
        return React.createElement(Component, __assign({}, others, { className: classNames("".concat(prefix, "card-actions"), className) }));
    };
    CardActions.displayName = 'CardActions';
    CardActions.propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
        className: PropTypes.string,
    };
    CardActions.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardActions;
}(Component));
export default ConfigProvider.config(CardActions);
