import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from '../animate';
import Icon from '../icon';
import { func, KEYCODE, obj, support } from '../util';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';
var noop = func.noop, bindCtx = func.bindCtx;
var PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;
/**
 * Tag
 */
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(props) {
        var _this = _super.call(this, props) || this;
        _this.onKeyDown = function (e) {
            // 针对无障碍化要求 添加键盘SPACE事件
            var _a = _this.props, closable = _a.closable, closeArea = _a.closeArea, onClick = _a.onClick, disabled = _a.disabled;
            if (e.keyCode !== KEYCODE.SPACE || disabled) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (closable) {
                _this.handleClose(closeArea);
            }
            else {
                typeof onClick === 'function' && onClick(e);
            }
        };
        _this.state = {
            visible: true,
        };
        bindCtx(_this, [
            'handleBodyClick',
            'handleTailClick',
            'handleAnimationInit',
            'handleAnimationEnd',
            'renderTailNode',
        ]);
        return _this;
    }
    Tag.prototype.componentWillUnmount = function () {
        this.__destroyed = true;
    };
    Tag.prototype.handleClose = function (from) {
        var _this = this;
        var _a = this.props, animation = _a.animation, onClose = _a.onClose;
        var hasAnimation = support.animation && animation;
        // 先执行回调
        var result = onClose(from, this.tagNode);
        // 如果回调函数返回 false，则阻止关闭行为
        if (result !== false && !this.__destroyed) {
            this.setState({
                visible: false,
            }, function () {
                // 如果没有动画，则直接执行 afterClose
                !hasAnimation && _this.props.afterClose(_this.tagNode);
            });
        }
    };
    // 标签体点击
    Tag.prototype.handleBodyClick = function (e) {
        var _a = this.props, closable = _a.closable, closeArea = _a.closeArea, onClick = _a.onClick;
        var node = e.currentTarget;
        if (node && (node === e.target || node.contains(e.target))) {
            if (closable && closeArea === 'tag') {
                this.handleClose('tag');
            }
            if (typeof onClick === 'function') {
                return onClick(e);
            }
        }
    };
    Tag.prototype.handleTailClick = function (e) {
        e && e.preventDefault();
        e && e.stopPropagation();
        this.handleClose('tail');
    };
    Tag.prototype.handleAnimationInit = function (node) {
        this.props.afterAppear(node);
    };
    Tag.prototype.handleAnimationEnd = function (node) {
        this.props.afterClose(node);
    };
    Tag.prototype.renderAnimatedTag = function (children, animationName) {
        return (React.createElement(Animate, { animation: animationName, afterAppear: this.handleAnimationInit, afterLeave: this.handleAnimationEnd }, children));
    };
    Tag.prototype.renderTailNode = function () {
        var _a = this.props, prefix = _a.prefix, closable = _a.closable, locale = _a.locale;
        if (!closable) {
            return null;
        }
        return (React.createElement("span", { className: "".concat(prefix, "tag-close-btn"), onClick: this.handleTailClick, role: "button", "aria-label": locale.delete },
            React.createElement(Icon, { type: "close" })));
    };
    Tag.prototype.isPresetColor = function () {
        var color = this.props.color;
        if (!color) {
            return false;
        }
        return PRESET_COLOR_REG.test(color);
    };
    Tag.prototype.getTagStyle = function () {
        var _a = this.props, _b = _a.color, color = _b === void 0 ? '' : _b, style = _a.style;
        var isPresetColor = this.isPresetColor();
        var customColorStyle = {
            backgroundColor: color,
            borderColor: color,
            color: '#fff',
        };
        return __assign(__assign({}, (color && !isPresetColor ? customColorStyle : null)), style);
    };
    Tag.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, type = _b.type, size = _b.size, color = _b.color, _shape = _b._shape, closable = _b.closable, closeArea = _b.closeArea, className = _b.className, children = _b.children, animation = _b.animation, disabled = _b.disabled, rtl = _b.rtl;
        var visible = this.state.visible;
        var isPresetColor = this.isPresetColor();
        var others = obj.pickOthers(Tag.propTypes, this.props);
        // eslint-disable-next-line no-unused-vars
        var style = others.style, otherTagProps = __rest(others, ["style"]);
        var shape = closable ? 'closable' : _shape;
        var bodyClazz = classNames(["".concat(prefix, "tag"), "".concat(prefix, "tag-").concat(shape), "".concat(prefix, "tag-").concat(size)], (_a = {},
            _a["".concat(prefix, "tag-level-").concat(type)] = !color,
            _a["".concat(prefix, "tag-closable")] = closable,
            _a["".concat(prefix, "tag-body-pointer")] = closable && closeArea === 'tag',
            _a["".concat(prefix, "tag-").concat(color)] = color && isPresetColor && type === 'primary',
            _a["".concat(prefix, "tag-").concat(color, "-inverse")] = color && isPresetColor && type === 'normal',
            _a), className);
        // close btn
        var tailNode = this.renderTailNode();
        // tag node
        var tagNode = !visible ? null : (React.createElement("div", __assign({ className: bodyClazz, onClick: this.handleBodyClick, onKeyDown: this.onKeyDown, tabIndex: disabled ? '' : '0', role: "button", "aria-disabled": disabled, disabled: disabled, dir: rtl ? 'rtl' : undefined, ref: function (n) { return (_this.tagNode = n); }, style: this.getTagStyle() }, otherTagProps),
            React.createElement("span", { className: "".concat(prefix, "tag-body") }, children),
            tailNode));
        if (animation && support.animation) {
            return this.renderAnimatedTag(tagNode, "".concat(prefix, "tag-zoom"));
        }
        // 未开启或不支持动画
        return tagNode;
    };
    Tag.propTypes = {
        /**
         * 标签类名前缀,提供给二次开发者用
         * @default next-
         */
        prefix: PropTypes.string,
        /**
         * 标签的类型
         * @enumdesc 普通, 主要
         */
        type: PropTypes.oneOf(['normal', 'primary']),
        /**
         * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
         * @enumdesc 小, 中, 大
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效
         */
        color: PropTypes.string,
        /**
         * 是否开启动效
         */
        animation: PropTypes.bool,
        closeArea: PropTypes.oneOf(['tag', 'tail']),
        closable: PropTypes.bool,
        onClose: PropTypes.func,
        afterClose: PropTypes.func,
        /**
         * 标签出现动画结束后执行的回调
         */
        afterAppear: PropTypes.func,
        className: PropTypes.any,
        children: PropTypes.node,
        /**
         * 点击回调
         */
        onClick: PropTypes.func,
        _shape: PropTypes.oneOf(['default', 'closable', 'checkable']),
        disabled: PropTypes.bool,
        rtl: PropTypes.bool,
        locale: PropTypes.object,
    };
    Tag.defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        closeArea: 'tail',
        animation: false,
        onClose: noop,
        afterClose: noop,
        afterAppear: noop,
        onClick: noop,
        _shape: 'default',
        disabled: false,
        rtl: false,
        locale: zhCN.Tag,
    };
    return Tag;
}(Component));
export default ConfigProvider.config(Tag);
