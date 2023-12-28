"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var icon_1 = require("../icon");
var config_provider_1 = require("../config-provider");
var dropdown_1 = require("../dropdown");
var menu_1 = require("../menu");
var item_1 = require("./item");
var util_1 = require("../util");
/**
 * Breadcrumb
 */
var Breadcrumb = /** @class */ (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb(props) {
        var _this = _super.call(this, props) || this;
        _this.computeMaxNode = function () {
            // 计算最大node节点，无法获取到 ... 节点的宽度，目前会有 nodeWidth - ellipsisNodeWidth 的误差
            if (_this.props.maxNode !== 'auto' || !_this.breadcrumbEl)
                return;
            var scrollWidth = _this.breadcrumbEl.scrollWidth;
            var rect = _this.breadcrumbEl.getBoundingClientRect();
            if (scrollWidth <= rect.width)
                return;
            var maxNode = _this.breadcrumbEl.children.length;
            var index = 1;
            var fullWidth = scrollWidth;
            while (index < _this.breadcrumbEl.children.length - 1) {
                var el = _this.breadcrumbEl.children[index];
                maxNode--;
                fullWidth -= el.getBoundingClientRect().width;
                if (fullWidth <= rect.width) {
                    break;
                }
                index++;
            }
            maxNode = Math.max(3, maxNode);
            if (maxNode !== _this.state.maxNode) {
                _this.setState({
                    maxNode: maxNode,
                });
            }
        };
        _this.saveBreadcrumbRef = function (ref) {
            _this.breadcrumbEl = ref;
        };
        _this.state = {
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode,
        };
        return _this;
    }
    Breadcrumb.getDerivedStateFromProps = function (props, state) {
        if (state.prevMaxNode === props.maxNode) {
            return {};
        }
        return {
            prevMaxNode: props.maxNode,
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode,
        };
    };
    Breadcrumb.prototype.componentDidMount = function () {
        this.computeMaxNode();
        util_1.events.on(window, 'resize', this.computeMaxNode);
    };
    Breadcrumb.prototype.componentDidUpdate = function () {
        this.computeMaxNode();
    };
    Breadcrumb.prototype.componentWillUnmount = function () {
        util_1.events.off(window, 'resize', this.computeMaxNode);
    };
    Breadcrumb.prototype.renderEllipsisNodeWithMenu = function (children, breakpointer) {
        // 拿到被隐藏的项
        var hiddenItems = [];
        react_1.Children.forEach(children, function (item, i) {
            var _a = item.props, link = _a.link, itemChildren = _a.children, onClick = _a.onClick;
            if (i > 0 && i <= breakpointer) {
                hiddenItems.push(react_1.default.createElement(menu_1.default.Item, { key: i, onClick: onClick }, link ? react_1.default.createElement("a", { href: link }, itemChildren) : itemChildren));
            }
        });
        var _a = this.props, prefix = _a.prefix, followTrigger = _a.followTrigger, popupContainer = _a.popupContainer, popupProps = _a.popupProps;
        return (react_1.default.createElement(dropdown_1.default, tslib_1.__assign({ trigger: react_1.default.createElement("span", null, "...") }, popupProps, { container: popupContainer, followTrigger: followTrigger }),
            react_1.default.createElement("div", { className: "".concat(prefix, "breadcrumb-dropdown-wrapper") },
                react_1.default.createElement(menu_1.default, null, hiddenItems))));
    };
    Breadcrumb.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, className = _a.className, children = _a.children, component = _a.component, showHiddenItems = _a.showHiddenItems, maxNodeProp = _a.maxNode, others = tslib_1.__rest(_a, ["prefix", "rtl", "className", "children", "component", "showHiddenItems", "maxNode"]);
        var separator = this.props.separator || (react_1.default.createElement(icon_1.default, { type: "arrow-right", className: "".concat(prefix, "breadcrumb-icon-sep") }));
        var maxNode = this.state.maxNode;
        var items;
        var length = react_1.Children.count(children);
        if (maxNode > 1 && length > maxNode) {
            var breakpointer_1 = length - maxNode + 1;
            items = [];
            react_1.Children.forEach(children, function (item, i) {
                var ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }
                if (i && i === breakpointer_1) {
                    items.push(react_1.default.cloneElement(item, tslib_1.__assign(tslib_1.__assign({ separator: separator, prefix: prefix, key: i, activated: i === length - 1 }, ariaProps), { className: showHiddenItems
                            ? "".concat(prefix, "breadcrumb-text-ellipsis-clickable")
                            : "".concat(prefix, "breadcrumb-text-ellipsis") }), showHiddenItems ? _this.renderEllipsisNodeWithMenu(children, breakpointer_1) : '...'));
                }
                else if (!i || i > breakpointer_1) {
                    items.push(react_1.default.cloneElement(item, tslib_1.__assign(tslib_1.__assign({ separator: separator, prefix: prefix, key: i }, ariaProps), { activated: i === length - 1 })));
                }
            });
        }
        else {
            items = react_1.Children.map(children, function (item, i) {
                var ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }
                return react_1.default.cloneElement(item, tslib_1.__assign(tslib_1.__assign({ separator: separator, prefix: prefix, activated: i === length - 1 }, ariaProps), { key: i }));
            });
        }
        if (rtl) {
            others.dir = 'rtl';
        }
        var BreadcrumbComponent = component;
        delete others.maxNode;
        return (react_1.default.createElement(BreadcrumbComponent, tslib_1.__assign({ "aria-label": "Breadcrumb", className: className }, others, { style: tslib_1.__assign({ position: 'relative' }, (others.style || {})) }),
            react_1.default.createElement("ul", { className: "".concat(prefix, "breadcrumb") }, items),
            maxNodeProp === 'auto' ? (react_1.default.createElement("ul", { style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    visibility: 'hidden',
                }, ref: this.saveBreadcrumbRef, className: "".concat(prefix, "breadcrumb") }, react_1.Children.map(children, function (item, i) {
                return react_1.default.cloneElement(item, {
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1,
                    key: i,
                });
            }))) : null));
    };
    Breadcrumb.Item = item_1.default;
    Breadcrumb.propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /*eslint-disable*/
        /**
         * 面包屑子节点，需传入 Breadcrumb.Item
         */
        children: function (props, propName) {
            react_1.Children.forEach(props[propName], function (child) {
                if (!(child &&
                    ['function', 'object'].indexOf(typeof child.type) > -1 &&
                    child.type._typeMark === 'breadcrumb_item')) {
                    throw new Error("Breadcrumb's children must be Breadcrumb.Item!");
                }
            });
        },
        /*eslint-enable*/
        /**
         * 面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。
         */
        maxNode: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.oneOf(['auto'])]),
        /**
         * 当超过的项被隐藏时，是否可通过点击省略号展示菜单（包含被隐藏的项）
         * @version 1.23
         */
        showHiddenItems: prop_types_1.default.bool,
        /**
         * 弹层挂载的容器节点（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 是否跟随trigger滚动（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 添加到弹层上的属性（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        popupProps: prop_types_1.default.object,
        /**
         * 分隔符，可以是文本或 Icon
         */
        separator: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
        className: prop_types_1.default.any,
        onClick: prop_types_1.default.func,
    };
    Breadcrumb.defaultProps = {
        prefix: 'next-',
        maxNode: 100,
        showHiddenItems: false,
        component: 'nav',
    };
    return Breadcrumb;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Breadcrumb));
