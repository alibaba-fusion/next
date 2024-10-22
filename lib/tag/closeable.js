"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var tag_1 = tslib_1.__importDefault(require("./tag"));
var Closeable = /** @class */ (function (_super) {
    tslib_1.__extends(Closeable, _super);
    function Closeable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Closeable.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, closeArea = _a.closeArea, onClose = _a.onClose, afterClose = _a.afterClose, onClick = _a.onClick, type = _a.type, size = _a.size, children = _a.children, rtl = _a.rtl, others = tslib_1.__rest(_a, ["disabled", "className", "closeArea", "onClose", "afterClose", "onClick", "type", "size", "children", "rtl"]);
        return (react_1.default.createElement(tag_1.default, tslib_1.__assign({}, others, { rtl: rtl, disabled: disabled, className: className, closeArea: closeArea, onClose: onClose, afterClose: afterClose, onClick: onClick, type: type, size: size, closable: true }), children));
    };
    Closeable.defaultProps = {
        disabled: false,
        type: 'normal',
    };
    return Closeable;
}(react_1.Component));
exports.default = Closeable;
