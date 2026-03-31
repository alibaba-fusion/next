import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this
            .props, root = _a.root, className = _a.className, parentMode = _a.parentMode, parent = _a.parent, others = __rest(_a, ["root", "className", "parentMode", "parent"]);
        var prefix = root.props.prefix;
        var newClassName = cx("".concat(prefix, "menu-divider"), className);
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
