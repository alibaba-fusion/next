import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
/**
 * Menu.Divider
 * @order 6
 */
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a;
        var _b = this.props, root = _b.root, className = _b.className, parentMode = _b.parentMode, parent = _b.parent, others = __rest(_b, ["root", "className", "parentMode", "parent"]);
        var prefix = root.props.prefix;
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "menu-divider")] = true,
            _a[className] = !!className,
            _a));
        return React.createElement("li", __assign({ role: "separator", className: newClassName }, others));
    };
    Divider.menuChildType = 'divider';
    Divider.propTypes = {
        root: PropTypes.object,
        className: PropTypes.string,
    };
    return Divider;
}(Component));
export default Divider;
