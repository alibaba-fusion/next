import _typeof from 'babel-runtime/helpers/typeof';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

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
var Breadcrumb = (_temp = _class = function (_Component) {
    _inherits(Breadcrumb, _Component);

    function Breadcrumb(props) {
        _classCallCheck(this, Breadcrumb);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode
        };
        return _this;
    }

    Breadcrumb.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (state.prevMaxNode === props.maxNode) {
            return {};
        }

        return {
            prevMaxNode: props.maxNode,
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode
        };
    };

    Breadcrumb.prototype.componentDidMount = function componentDidMount() {
        this.computeMaxNode();
        events.on(window, 'resize', this.computeMaxNode);
    };

    Breadcrumb.prototype.componentDidUpdate = function componentDidUpdate() {
        this.computeMaxNode();
    };

    Breadcrumb.prototype.componentWillUnmount = function componentWillUnmount() {
        events.off(window, 'resize', this.computeMaxNode);
    };

    Breadcrumb.prototype.renderEllipsisNodeWithMenu = function renderEllipsisNodeWithMenu(children, breakpointer) {
        // 拿到被隐藏的项
        var hiddenItems = [];
        Children.forEach(children, function (item, i) {
            var _item$props = item.props,
                link = _item$props.link,
                itemChildren = _item$props.children;

            if (i > 0 && i <= breakpointer) {
                hiddenItems.push(React.createElement(
                    Menu.Item,
                    { key: i },
                    link ? React.createElement(
                        'a',
                        { href: link },
                        itemChildren
                    ) : itemChildren
                ));
            }
        });

        var _props = this.props,
            prefix = _props.prefix,
            followTrigger = _props.followTrigger,
            popupContainer = _props.popupContainer,
            popupProps = _props.popupProps;


        return React.createElement(
            Dropdown,
            _extends({
                trigger: React.createElement(
                    'span',
                    null,
                    '...'
                )
            }, popupProps, {
                container: popupContainer,
                followTrigger: followTrigger
            }),
            React.createElement(
                'div',
                { className: prefix + 'breadcrumb-dropdown-wrapper' },
                React.createElement(
                    Menu,
                    null,
                    hiddenItems
                )
            )
        );
    };

    Breadcrumb.prototype.render = function render() {
        var _this2 = this;

        var _props2 = this.props,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            className = _props2.className,
            children = _props2.children,
            component = _props2.component,
            showHiddenItems = _props2.showHiddenItems,
            maxNodeProp = _props2.maxNode,
            others = _objectWithoutProperties(_props2, ['prefix', 'rtl', 'className', 'children', 'component', 'showHiddenItems', 'maxNode']);

        var separator = this.props.separator || React.createElement(Icon, { type: 'arrow-right', className: prefix + 'breadcrumb-icon-sep' });

        var maxNode = this.state.maxNode;


        var items = void 0;
        var length = Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            var breakpointer = length - maxNode + 1;
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

                if (i && i === breakpointer) {
                    items.push(React.cloneElement(item, _extends({
                        separator: separator,
                        prefix: prefix,
                        key: i,
                        activated: i === length - 1
                    }, ariaProps, {
                        className: showHiddenItems ? prefix + 'breadcrumb-text-ellipsis-clickable' : prefix + 'breadcrumb-text-ellipsis'
                    }), showHiddenItems ? _this2.renderEllipsisNodeWithMenu(children, breakpointer) : '...'));
                } else if (!i || i > breakpointer) {
                    items.push(React.cloneElement(item, _extends({
                        separator: separator,
                        prefix: prefix,
                        key: i
                    }, ariaProps, {
                        activated: i === length - 1
                    })));
                }
            });
        } else {
            items = Children.map(children, function (item, i) {
                var ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                return React.cloneElement(item, _extends({
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1
                }, ariaProps, {
                    key: i
                }));
            });
        }

        if (rtl) {
            others.dir = 'rtl';
        }

        var BreadcrumbComponent = component;

        delete others.maxNode;

        return React.createElement(
            BreadcrumbComponent,
            _extends({
                'aria-label': 'Breadcrumb',
                className: className
            }, others, {
                style: _extends({ position: 'relative' }, others.style || {})
            }),
            React.createElement(
                'ul',
                { className: prefix + 'breadcrumb' },
                items
            ),
            maxNodeProp === 'auto' ? React.createElement(
                'ul',
                {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        visibility: 'hidden'
                    },
                    ref: this.saveBreadcrumbRef,
                    className: prefix + 'breadcrumb'
                },
                Children.map(children, function (item, i) {
                    return React.cloneElement(item, {
                        separator: separator,
                        prefix: prefix,
                        activated: i === length - 1,
                        key: i
                    });
                })
            ) : null
        );
    };

    return Breadcrumb;
}(Component), _class.Item = Item, _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /*eslint-disable*/
    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     */
    children: function children(props, propName) {
        Children.forEach(props[propName], function (child) {
            if (!(child && ['function', 'object'].indexOf(_typeof(child.type)) > -1 && child.type._typeMark === 'breadcrumb_item')) {
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
    className: PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    maxNode: 100,
    showHiddenItems: false,
    component: 'nav'
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.computeMaxNode = function () {
        // 计算最大node节点，无法获取到 ... 节点的宽度，目前会有 nodeWidth - ellipsisNodeWidth 的误差
        if (_this3.props.maxNode !== 'auto' || !_this3.breadcrumbEl) return;
        var scrollWidth = _this3.breadcrumbEl.scrollWidth;
        var rect = _this3.breadcrumbEl.getBoundingClientRect();

        if (scrollWidth <= rect.width) return;
        var maxNode = _this3.breadcrumbEl.children.length;
        var index = 1;
        var fullWidth = scrollWidth;

        while (index < _this3.breadcrumbEl.children.length - 1) {
            var el = _this3.breadcrumbEl.children[index];
            maxNode--;
            fullWidth -= el.getBoundingClientRect().width;
            if (fullWidth <= rect.width) {
                break;
            }
            index++;
        }

        maxNode = Math.max(3, maxNode);

        if (maxNode !== _this3.state.maxNode) {
            _this3.setState({
                maxNode: maxNode
            });
        }
    };

    this.saveBreadcrumbRef = function (ref) {
        _this3.breadcrumbEl = ref;
    };
}, _temp);
Breadcrumb.displayName = 'Breadcrumb';


export default ConfigProvider.config(polyfill(Breadcrumb));