"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var util_1 = require("../../util");
function mapIconSize(size) {
    return {
        large: 'small',
        medium: 'xs',
        small: 'xs',
    }[size];
}
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        var _c = this.props, prefix = _c.prefix, className = _c.className, type = _c.type, size = _c.size, htmlType = _c.htmlType, loading = _c.loading, text = _c.text, warning = _c.warning, ghost = _c.ghost, component = _c.component, iconSize = _c.iconSize, icons = _c.icons, disabled = _c.disabled, onClick = _c.onClick, children = _c.children, rtl = _c.rtl, others = tslib_1.__rest(_c, ["prefix", "className", "type", "size", "htmlType", "loading", "text", "warning", "ghost", "component", "iconSize", "icons", "disabled", "onClick", "children", "rtl"]);
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
        if (icons && icons.loading && (0, react_1.isValidElement)(icons.loading)) {
            if (loading) {
                delete btnClsObj["".concat(prefix, "btn-loading")];
                btnClsObj["".concat(prefix, "btn-custom-loading")] = true;
            }
            var loadingSize = iconSize || mapIconSize(size);
            loadingIcon = react_1.default.cloneElement(icons.loading, {
                className: (0, classnames_1.default)((_b = {},
                    _b["".concat(prefix, "btn-custom-loading-icon")] = true,
                    _b.show = loading,
                    _b)),
                size: loadingSize,
            });
        }
        var count = react_1.Children.count(children);
        // fixme: react children is a complex types, map children to modify is unrecommended
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var clonedChildren = react_1.Children.map(children, function (child, index) {
            var _a;
            if (child &&
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark === 'icon') {
                var iconCls = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "btn-icon")] = !iconSize,
                    _a["".concat(prefix, "btn-icon-size")] = iconSize,
                    _a["".concat(prefix, "icon-first")] = count > 1 && index === 0,
                    _a["".concat(prefix, "icon-last")] = count > 1 && index === count - 1,
                    _a["".concat(prefix, "icon-alone")] = count === 1,
                    _a[child.props.className] = !!child.props.className,
                    _a));
                if ('size' in child.props) {
                    util_1.log.warning("The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size=\"".concat(child.props.size, "\" /></Button>), use <Button iconSize=\"").concat(child.props.size, "\"> or <Button><div><Icon size=\"").concat(child.props.size, "\" /></div></Button> instead of."));
                }
                return react_1.default.cloneElement(child, {
                    className: iconCls,
                    size: iconSize || mapIconSize(size),
                });
            }
            if (!(0, react_1.isValidElement)(child)) {
                return react_1.default.createElement("span", { className: "".concat(prefix, "btn-helper") }, child);
            }
            return child;
        });
        var TagName = component;
        var tagAttrs = tslib_1.__assign(tslib_1.__assign({}, util_1.obj.pickOthers(Object.keys(Button.propTypes), others)), { type: htmlType, disabled: disabled, onClick: onClick, className: (0, classnames_1.default)(btnClsObj) });
        if (TagName !== 'button') {
            delete tagAttrs.type;
            if (tagAttrs.disabled) {
                delete tagAttrs.onClick; // a 标签的 onClick 浏览器默认不会禁用
                if ('href' in tagAttrs && tagAttrs.href) {
                    delete tagAttrs.href; // a 标签在禁用状态下无跳转
                }
            }
        }
        return (react_1.default.createElement(TagName, tslib_1.__assign({}, tagAttrs, { dir: rtl ? 'rtl' : undefined, onMouseUp: this.onMouseUp, ref: this.buttonRefHandler }),
            loadingIcon,
            clonedChildren));
    };
    Button.displayName = 'Button';
    Button.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, type: prop_types_1.default.oneOf(['primary', 'secondary', 'normal']), size: prop_types_1.default.oneOf(['small', 'medium', 'large']), icons: prop_types_1.default.shape({ loading: prop_types_1.default.node }), iconSize: prop_types_1.default.oneOfType([
            prop_types_1.default.oneOf([
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
            prop_types_1.default.number,
        ]), htmlType: prop_types_1.default.oneOf(['submit', 'reset', 'button']), component: prop_types_1.default.oneOf(['button', 'a', 'div', 'span']), loading: prop_types_1.default.bool, ghost: prop_types_1.default.oneOf([true, false, 'light', 'dark']), text: prop_types_1.default.bool, warning: prop_types_1.default.bool, disabled: prop_types_1.default.bool, onClick: prop_types_1.default.func, className: prop_types_1.default.string, onMouseUp: prop_types_1.default.func, children: prop_types_1.default.node });
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
}(react_1.Component));
exports.default = Button;
