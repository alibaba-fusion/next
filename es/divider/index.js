import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import ConfigProvider from '../config-provider';
/**
 * Divider
 */
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, dashed = _b.dashed, direction = _b.direction, orientation = _b.orientation, children = _b.children;
        var others = obj.pickOthers(Divider.propTypes, this.props);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "divider")] = true,
            _a["".concat(prefix, "divider-dashed")] = !!dashed,
            _a["".concat(prefix, "divider-").concat(direction)] = !!direction,
            _a["".concat(prefix, "divider-with-text-").concat(orientation)] = !!orientation && children,
            _a), className);
        return (React.createElement("div", __assign({ role: "separator", className: cls }, others), children && React.createElement("span", { className: "".concat(prefix, "divider-inner-text") }, children)));
    };
    Divider.propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        dashed: PropTypes.bool,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        orientation: PropTypes.oneOf(['left', 'right', 'center']),
    };
    Divider.defaultProps = {
        prefix: 'next-',
        direction: 'hoz',
        orientation: 'center',
        dashed: false,
    };
    return Divider;
}(Component));
export default ConfigProvider.config(polyfill(Divider));
