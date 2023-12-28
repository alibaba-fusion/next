"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var tag_1 = require("./tag");
/**
 * Tag.Closeable
 */
var Closeable = /** @class */ (function (_super) {
    tslib_1.__extends(Closeable, _super);
    function Closeable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Closeable.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, closeArea = _a.closeArea, onClose = _a.onClose, afterClose = _a.afterClose, onClick = _a.onClick, type = _a.type, size = _a.size, children = _a.children, rtl = _a.rtl, others = tslib_1.__rest(_a, ["disabled", "className", "closeArea", "onClose", "afterClose", "onClick", "type", "size", "children", "rtl"]);
        return (react_1.default.createElement(tag_1.default, tslib_1.__assign({}, others, { rtl: rtl, disabled: disabled, className: className, closeArea: closeArea, onClose: onClose, afterClose: afterClose, onClick: onClick, type: type, size: size, closable: true }), children));
    };
    Closeable.propTypes = {
        disabled: prop_types_1.default.bool,
        className: prop_types_1.default.any,
        /**
         * closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮
         * @enumdesc 标签, 尾部icon
         */
        closeArea: prop_types_1.default.oneOf(['tag', 'tail']),
        /**
         * 点击关闭按钮时的回调
         * @param {String} from 事件来源, tag: 标签体点击, tail: 关闭按钮点击
         * @returns {Boolean} true则关闭, false阻止关闭
         */
        onClose: prop_types_1.default.func,
        /**
         * 标签关闭后执行的回调
         */
        afterClose: prop_types_1.default.func,
        /**
         * 点击回调
         */
        onClick: prop_types_1.default.func,
        type: prop_types_1.default.oneOf(['normal', 'primary']),
        /**
         * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        children: prop_types_1.default.any,
        rtl: prop_types_1.default.bool,
    };
    Closeable.defaultProps = {
        disabled: false,
        type: 'normal',
    };
    return Closeable;
}(react_1.Component));
exports.default = Closeable;
