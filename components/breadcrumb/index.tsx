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
class Breadcrumb extends Component {
    static Item = Item;

    static propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /*eslint-disable*/
        /**
         * 面包屑子节点，需传入 Breadcrumb.Item
         */
        children: (props, propName) => {
            Children.forEach(props[propName], child => {
                if (
                    !(
                        child &&
                        ['function', 'object'].indexOf(typeof child.type) > -1 &&
                        child.type._typeMark === 'breadcrumb_item'
                    )
                ) {
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

    static defaultProps = {
        prefix: 'next-',
        maxNode: 100,
        showHiddenItems: false,
        component: 'nav',
    };

    constructor(props) {
        super(props);
        this.state = {
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.prevMaxNode === props.maxNode) {
            return {};
        }

        return {
            prevMaxNode: props.maxNode,
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode,
        };
    }

    componentDidMount() {
        this.computeMaxNode();
        events.on(window, 'resize', this.computeMaxNode);
    }

    componentDidUpdate() {
        this.computeMaxNode();
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.computeMaxNode);
    }

    computeMaxNode = () => {
        // 计算最大node节点，无法获取到 ... 节点的宽度，目前会有 nodeWidth - ellipsisNodeWidth 的误差
        if (this.props.maxNode !== 'auto' || !this.breadcrumbEl) return;
        const scrollWidth = this.breadcrumbEl.scrollWidth;
        const rect = this.breadcrumbEl.getBoundingClientRect();

        if (scrollWidth <= rect.width) return;
        let maxNode = this.breadcrumbEl.children.length;
        let index = 1;
        let fullWidth = scrollWidth;

        while (index < this.breadcrumbEl.children.length - 1) {
            const el = this.breadcrumbEl.children[index];
            maxNode--;
            fullWidth -= el.getBoundingClientRect().width;
            if (fullWidth <= rect.width) {
                break;
            }
            index++;
        }

        maxNode = Math.max(3, maxNode);

        if (maxNode !== this.state.maxNode) {
            this.setState({
                maxNode,
            });
        }
    };

    saveBreadcrumbRef = ref => {
        this.breadcrumbEl = ref;
    };

    renderEllipsisNodeWithMenu(children, breakpointer) {
        // 拿到被隐藏的项
        const hiddenItems = [];
        Children.forEach(children, (item, i) => {
            const { link, children: itemChildren, onClick } = item.props;
            if (i > 0 && i <= breakpointer) {
                hiddenItems.push(
                    <Menu.Item key={i} onClick={onClick}>
                        {link ? <a href={link}>{itemChildren}</a> : itemChildren}
                    </Menu.Item>
                );
            }
        });

        const { prefix, followTrigger, popupContainer, popupProps } = this.props;

        return (
            <Dropdown
                trigger={<span>...</span>}
                {...popupProps}
                container={popupContainer}
                followTrigger={followTrigger}
            >
                <div className={`${prefix}breadcrumb-dropdown-wrapper`}>
                    <Menu>{hiddenItems}</Menu>
                </div>
            </Dropdown>
        );
    }

    render() {
        const {
            prefix,
            rtl,
            className,
            children,
            component,
            showHiddenItems,
            maxNode: maxNodeProp,
            ...others
        } = this.props;

        const separator = this.props.separator || (
            <Icon type="arrow-right" className={`${prefix}breadcrumb-icon-sep`} />
        );

        const { maxNode } = this.state;

        let items;
        const length = Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            const breakpointer = length - maxNode + 1;
            items = [];

            Children.forEach(children, (item, i) => {
                const ariaProps = {};

                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                if (i && i === breakpointer) {
                    items.push(
                        React.cloneElement(
                            item,
                            {
                                separator,
                                prefix,
                                key: i,
                                activated: i === length - 1,
                                ...ariaProps,
                                className: showHiddenItems
                                    ? `${prefix}breadcrumb-text-ellipsis-clickable`
                                    : `${prefix}breadcrumb-text-ellipsis`,
                            },
                            showHiddenItems
                                ? this.renderEllipsisNodeWithMenu(children, breakpointer)
                                : '...'
                        )
                    );
                } else if (!i || i > breakpointer) {
                    items.push(
                        React.cloneElement(item, {
                            separator,
                            prefix,
                            key: i,
                            ...ariaProps,
                            activated: i === length - 1,
                        })
                    );
                }
            });
        } else {
            items = Children.map(children, (item, i) => {
                const ariaProps = {};
                // 增加空值判断
                if (!item) {
                    return;
                }
                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                return React.cloneElement(item, {
                    separator,
                    prefix,
                    activated: i === length - 1,
                    ...ariaProps,
                    key: i,
                });
            });
        }

        if (rtl) {
            others.dir = 'rtl';
        }

        const BreadcrumbComponent = component;

        delete others.maxNode;

        return (
            <BreadcrumbComponent
                aria-label="Breadcrumb"
                className={className}
                {...others}
                style={{ position: 'relative', ...(others.style || {}) }}
            >
                <ul className={`${prefix}breadcrumb`}>{items}</ul>
                {maxNodeProp === 'auto' ? (
                    <ul
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            visibility: 'hidden',
                        }}
                        ref={this.saveBreadcrumbRef}
                        className={`${prefix}breadcrumb`}
                    >
                        {Children.map(children, (item, i) => {
                            return React.cloneElement(item, {
                                separator,
                                prefix,
                                activated: i === length - 1,
                                key: i,
                            });
                        })}
                    </ul>
                ) : null}
            </BreadcrumbComponent>
        );
    }
}

export default ConfigProvider.config(polyfill(Breadcrumb));
