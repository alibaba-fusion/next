import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, Children, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../../config-provider';
import { obj, log } from '../../util';
function mapIconSize(size) {
    return {
        large: 'small',
        medium: 'xs',
        small: 'xs',
    }[size];
}
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onMouseUp = function (e) {
            // @ts-expect-error fixme: may have no blur
            _this.button.blur();
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        _this.buttonRefHandler = function (button) {
            _this.button = button;
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, className = _c.className, type = _c.type, size = _c.size, htmlType = _c.htmlType, loading = _c.loading, text = _c.text, warning = _c.warning, ghost = _c.ghost, component = _c.component, iconSize = _c.iconSize, icons = _c.icons, disabled = _c.disabled, onClick = _c.onClick, children = _c.children, rtl = _c.rtl, others = __rest(_c, ["prefix", "className", "type", "size", "htmlType", "loading", "text", "warning", "ghost", "component", "iconSize", "icons", "disabled", "onClick", "children", "rtl"]);
        var ghostType = ['light', 'dark'].indexOf(ghost) >= 0 ? ghost : 'dark';
        var btnClsObj = (_a = {},
            _a["".concat(prefix, "btn")] = true,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "btn-").concat(type)] = type && !ghost,
            _a["".concat(prefix, "btn-text")] = text,
            _a["".concat(prefix, "btn-warning")] = warning,
            _a["".concat(prefix, "btn-loading")] = loading,
            _a["".concat(prefix, "btn-ghost")] = ghost,
            _a["".concat(prefix, "btn-").concat(ghostType)] = ghost,
            _a[className] = className,
            _a);
        var loadingIcon = null;
        // 如果传入了 loading 的 icons，使用该节点来渲染
        if (icons && icons.loading && isValidElement(icons.loading)) {
            if (loading) {
                delete btnClsObj["".concat(prefix, "btn-loading")];
                btnClsObj["".concat(prefix, "btn-custom-loading")] = true;
            }
            var loadingSize = iconSize || mapIconSize(size);
            loadingIcon = React.cloneElement(icons.loading, {
                className: classNames((_b = {},
                    _b["".concat(prefix, "btn-custom-loading-icon")] = true,
                    _b.show = loading,
                    _b)),
                size: loadingSize,
            });
        }
        var count = Children.count(children);
        // fixme: react children is a complex types, map children to modify is unrecommended
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var clonedChildren = Children.map(children, function (child, index) {
            var _a;
            if (child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark === 'icon') {
                var iconCls = classNames((_a = {},
                    _a["".concat(prefix, "btn-icon")] = !iconSize,
                    _a["".concat(prefix, "btn-icon-size")] = iconSize,
                    _a["".concat(prefix, "icon-first")] = count > 1 && index === 0,
                    _a["".concat(prefix, "icon-last")] = count > 1 && index === count - 1,
                    _a["".concat(prefix, "icon-alone")] = count === 1,
                    _a[child.props.className] = !!child.props.className,
                    _a));
                if ('size' in child.props) {
                    log.warning("The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size=\"".concat(child.props.size, "\" /></Button>), use <Button iconSize=\"").concat(child.props.size, "\"> or <Button><div><Icon size=\"").concat(child.props.size, "\" /></div></Button> instead of."));
                }
                return React.cloneElement(child, {
                    className: iconCls,
                    size: iconSize || mapIconSize(size),
                });
            }
            if (!isValidElement(child)) {
                return React.createElement("span", { className: "".concat(prefix, "btn-helper") }, child);
            }
            return child;
        });
        var TagName = component;
        var tagAttrs = __assign(__assign({}, obj.pickOthers(Object.keys(Button.propTypes), others)), { type: htmlType, disabled: disabled, onClick: onClick, className: classNames(btnClsObj) });
        if (TagName !== 'button') {
            delete tagAttrs.type;
            if (tagAttrs.disabled) {
                delete tagAttrs.onClick; // a 标签的 onClick 浏览器默认不会禁用
                if ('href' in tagAttrs && tagAttrs.href) {
                    delete tagAttrs.href; // a 标签在禁用状态下无跳转
                }
            }
        }
        return (React.createElement(TagName, __assign({}, tagAttrs, { dir: rtl ? 'rtl' : undefined, onMouseUp: this.onMouseUp, ref: this.buttonRefHandler }),
            loadingIcon,
            clonedChildren));
    };
    Button.displayName = 'Button';
    Button.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, type: PropTypes.oneOf(['primary', 'secondary', 'normal']), size: PropTypes.oneOf(['small', 'medium', 'large']), icons: PropTypes.shape({ loading: PropTypes.node }), iconSize: PropTypes.oneOfType([
            PropTypes.oneOf([
                'xxs',
                'xs',
                'small',
                'medium',
                'large',
                'xl',
                'xxl',
                'xxxl',
                'inherit',
            ]),
            PropTypes.number,
        ]), htmlType: PropTypes.oneOf(['submit', 'reset', 'button']), component: PropTypes.oneOf(['button', 'a', 'div', 'span']), loading: PropTypes.bool, ghost: PropTypes.oneOf([true, false, 'light', 'dark']), text: PropTypes.bool, warning: PropTypes.bool, disabled: PropTypes.bool, onClick: PropTypes.func, className: PropTypes.string, onMouseUp: PropTypes.func, children: PropTypes.node });
    Button.defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        icons: {},
        htmlType: 'button',
        component: 'button',
        loading: false,
        ghost: false,
        text: false,
        warning: false,
        disabled: false,
        onClick: function () { },
    };
    return Button;
}(Component));
export default Button;
