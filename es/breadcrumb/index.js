import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children, isValidElement } from 'react';
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
                            : "".concat(prefix, "breadcrumb-text-ellipsis") }), showHiddenItems ? _this.renderEllipsisNodeWithMenu(children, breakpointer_1) : '...'));
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
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /*eslint-disable*/
        /**
         * 面包屑子节点，需传入 Breadcrumb.Item
         */
        children: function (props, propName) {
            Children.forEach(props[propName], function (child) {
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
        maxNode: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
        /**
         * 当超过的项被隐藏时，是否可通过点击省略号展示菜单（包含被隐藏的项）
         * @version 1.23
         */
        showHiddenItems: PropTypes.bool,
        /**
         * 弹层挂载的容器节点（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        popupContainer: PropTypes.any,
        /**
         * 是否跟随trigger滚动（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        followTrigger: PropTypes.bool,
        /**
         * 添加到弹层上的属性（在showHiddenItems为true时才有意义）
         * @version 1.23
         */
        popupProps: PropTypes.object,
        /**
         * 分隔符，可以是文本或 Icon
         */
        separator: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        /**
         * 设置标签类型
         */
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
    return Breadcrumb;
}(Component));
export default ConfigProvider.config(polyfill(Breadcrumb));
