import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import Dropdown from '../dropdown';
import Menu from '../menu';
import Item from './item';
import { events } from '../util';
/**
 * Breadcrumb
 */
var Breadcrumb = /** @class */ (function (_super) {
    __extends(Breadcrumb, _super);
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
        events.on(window, 'resize', this.computeMaxNode);
    };
    Breadcrumb.prototype.componentDidUpdate = function () {
        this.computeMaxNode();
    };
    Breadcrumb.prototype.componentWillUnmount = function () {
        events.off(window, 'resize', this.computeMaxNode);
    };
    Breadcrumb.prototype.renderEllipsisNodeWithMenu = function (children, breakpointer) {
        // 拿到被隐藏的项
        var hiddenItems = [];
        Children.forEach(children, function (item, i) {
            var _a = item.props, link = _a.link, itemChildren = _a.children, onClick = _a.onClick;
            if (i > 0 && i <= breakpointer) {
                hiddenItems.push(React.createElement(Menu.Item, { key: i, onClick: onClick }, link ? React.createElement("a", { href: link }, itemChildren) : itemChildren));
            }
        });
        var _a = this.props, prefix = _a.prefix, followTrigger = _a.followTrigger, popupContainer = _a.popupContainer, popupProps = _a.popupProps;
        return (React.createElement(Dropdown, __assign({ trigger: React.createElement("span", null, "...") }, popupProps, { container: popupContainer, followTrigger: followTrigger }),
            React.createElement("div", { className: "".concat(prefix, "breadcrumb-dropdown-wrapper") },
                React.createElement(Menu, null, hiddenItems))));
    };
    Breadcrumb.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, className = _a.className, children = _a.children, component = _a.component, showHiddenItems = _a.showHiddenItems, maxNodeProp = _a.maxNode, others = __rest(_a, ["prefix", "rtl", "className", "children", "component", "showHiddenItems", "maxNode"]);
        var separator = this.props.separator || (React.createElement(Icon, { type: "arrow-right", className: "".concat(prefix, "breadcrumb-icon-sep") }));
        var maxNode = this.state.maxNode;
        var items;
        var length = Children.count(children);
        if (maxNode > 1 && length > maxNode) {
            var breakpointer_1 = length - maxNode + 1;
            items = [];
            Children.forEach(children, function (item, i) {
                var ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }
                if (i && i === breakpointer_1) {
                    items.push(React.cloneElement(item, __assign(__assign({ separator: separator, prefix: prefix, key: i, activated: i === length - 1 }, ariaProps), { className: showHiddenItems
                            ? "".concat(prefix, "breadcrumb-text-ellipsis-clickable")
                            : "".concat(prefix, "breadcrumb-text-ellipsis") }), showHiddenItems
                        ? _this.renderEllipsisNodeWithMenu(children, breakpointer_1)
                        : '...'));
                }
                else if (!i || i > breakpointer_1) {
                    items.push(React.cloneElement(item, __assign(__assign({ separator: separator, prefix: prefix, key: i }, ariaProps), { activated: i === length - 1 })));
                }
            });
        }
        else {
            items = Children.map(children, function (item, i) {
                var ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }
                return React.cloneElement(item, __assign(__assign({ separator: separator, prefix: prefix, activated: i === length - 1 }, ariaProps), { key: i }));
            });
        }
        if (rtl) {
            others.dir = 'rtl';
        }
        var BreadcrumbComponent = component;
        // @ts-expect-error 属性 maxNode 不存在于类型 others 上
        delete others.maxNode;
        return (React.createElement(BreadcrumbComponent, __assign({ "aria-label": "Breadcrumb", className: className }, others, { style: __assign({ position: 'relative' }, (others.style || {})) }),
            React.createElement("ul", { className: "".concat(prefix, "breadcrumb") }, items),
            maxNodeProp === 'auto' ? (React.createElement("ul", { style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    visibility: 'hidden',
                }, ref: this.saveBreadcrumbRef, className: "".concat(prefix, "breadcrumb") }, Children.map(children, function (item, i) {
                return React.cloneElement(item, {
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1,
                    key: i,
                });
            }))) : null));
    };
    Breadcrumb.Item = Item;
    Breadcrumb.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        children: function (props, propName) {
            Children.forEach(props[propName], function (child) {
                var _a;
                if (!(child &&
                    ['function', 'object'].indexOf(typeof child.type) > -1 &&
                    ((_a = child.type) === null || _a === void 0 ? void 0 : _a._typeMark) === 'breadcrumb_item')) {
                    throw new Error("Breadcrumb's children must be Breadcrumb.Item!");
                }
            });
        },
        maxNode: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
        showHiddenItems: PropTypes.bool,
        popupContainer: PropTypes.any,
        followTrigger: PropTypes.bool,
        popupProps: PropTypes.object,
        separator: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        className: PropTypes.any,
        onClick: PropTypes.func,
    };
    Breadcrumb.defaultProps = {
        prefix: 'next-',
        maxNode: 100,
        showHiddenItems: false,
        component: 'nav',
    };
    Breadcrumb.displayName = 'Breadcrumb';
    return Breadcrumb;
}(Component));
export default ConfigProvider.config(polyfill(Breadcrumb));
