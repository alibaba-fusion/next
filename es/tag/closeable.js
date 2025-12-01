import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import Tag from './tag';
var Closeable = /** @class */ (function (_super) {
    __extends(Closeable, _super);
    function Closeable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Closeable.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, closeArea = _a.closeArea, onClose = _a.onClose, afterClose = _a.afterClose, onClick = _a.onClick, type = _a.type, size = _a.size, children = _a.children, rtl = _a.rtl, others = __rest(_a, ["disabled", "className", "closeArea", "onClose", "afterClose", "onClick", "type", "size", "children", "rtl"]);
        return (React.createElement(Tag, __assign({}, others, { rtl: rtl, disabled: disabled, className: className, closeArea: closeArea, onClose: onClose, afterClose: afterClose, onClick: onClick, type: type, size: size, closable: true }), children));
    };
    Closeable.defaultProps = {
        disabled: false,
        type: 'normal',
    };
    return Closeable;
}(Component));
export default Closeable;
