import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './tag';
/**
 * Tag.Closeable
 */
var Closeable = /** @class */ (function (_super) {
    __extends(Closeable, _super);
    function Closeable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Closeable.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, className = _a.className, closeArea = _a.closeArea, onClose = _a.onClose, afterClose = _a.afterClose, onClick = _a.onClick, type = _a.type, size = _a.size, children = _a.children, rtl = _a.rtl, others = __rest(_a, ["disabled", "className", "closeArea", "onClose", "afterClose", "onClick", "type", "size", "children", "rtl"]);
        return (React.createElement(Tag, __assign({}, others, { rtl: rtl, disabled: disabled, className: className, closeArea: closeArea, onClose: onClose, afterClose: afterClose, onClick: onClick, type: type, size: size, closable: true }), children));
    };
    Closeable.propTypes = {
        disabled: PropTypes.bool,
        className: PropTypes.any,
        /**
         * closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮
         * @enumdesc 标签, 尾部icon
         */
        closeArea: PropTypes.oneOf(['tag', 'tail']),
        /**
         * 点击关闭按钮时的回调
         * @param {String} from 事件来源, tag: 标签体点击, tail: 关闭按钮点击
         * @returns {Boolean} true则关闭, false阻止关闭
         */
        onClose: PropTypes.func,
        /**
         * 标签关闭后执行的回调
         */
        afterClose: PropTypes.func,
        /**
         * 点击回调
         */
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['normal', 'primary']),
        /**
         * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        children: PropTypes.any,
        rtl: PropTypes.bool,
    };
    Closeable.defaultProps = {
        disabled: false,
        type: 'normal',
    };
    return Closeable;
}(Component));
export default Closeable;
