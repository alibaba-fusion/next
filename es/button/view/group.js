import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../../config-provider';
/**
 * Button.Group
 */
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, size = _b.size, children = _b.children, rtl = _b.rtl, others = __rest(_b, ["prefix", "className", "size", "children", "rtl"]);
        var groupCls = classNames((_a = {},
            _a["".concat(prefix, "btn-group")] = true,
            _a[className] = className,
            _a));
        var cloneChildren = Children.map(children, function (child) {
            if (child) {
                // fixme: child may not be cloned
                return React.cloneElement(child, {
                    size: size,
                });
            }
        });
        if (rtl) {
            others.dir = 'rtl';
        }
        return (React.createElement("div", __assign({}, others, { className: groupCls }), cloneChildren));
    };
    ButtonGroup.displayName = 'ButtonGroup';
    ButtonGroup.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { rtl: PropTypes.bool, prefix: PropTypes.string, size: PropTypes.string, className: PropTypes.string, children: PropTypes.node });
    ButtonGroup.defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };
    return ButtonGroup;
}(Component));
export default ConfigProvider.config(ButtonGroup);
