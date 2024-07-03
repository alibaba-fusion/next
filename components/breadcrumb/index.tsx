import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import Dropdown, { type DropdownProps } from '../dropdown';
import Menu from '../menu';
import Item from './item';
import { events } from '../util';
import type { BreadcrumbProps } from './types';

export type { BreadcrumbProps } from './types';

interface Child {
    type: {
        _typeMark: string;
    };
}

/**
 * Breadcrumb
 */
class Breadcrumb extends Component<
    BreadcrumbProps,
    {
        maxNode: BreadcrumbProps['maxNode'];
        prevMaxNode?: BreadcrumbProps['maxNode'];
    }
> {
    static Item = Item;

    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        children: (props: Record<string, unknown>, propName: string) => {
            Children.forEach(props[propName], (child: Child) => {
                if (
                    !(
                        child &&
                        ['function', 'object'].indexOf(typeof child.type) > -1 &&
                        child.type?._typeMark === 'breadcrumb_item'
                    )
                ) {
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

    static defaultProps = {
        prefix: 'next-',
        maxNode: 100,
        showHiddenItems: false,
        component: 'nav',
    };

    breadcrumbEl: HTMLUListElement;

    constructor(props: BreadcrumbProps) {
        super(props);
        this.state = {
            maxNode: props.maxNode === 'auto' ? 100 : props.maxNode,
        };
    }

    static getDerivedStateFromProps(
        props: { maxNode: BreadcrumbProps['maxNode'] },
        state: { prevMaxNode: BreadcrumbProps['maxNode'] }
    ) {
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

    saveBreadcrumbRef = (ref: HTMLUListElement) => {
        this.breadcrumbEl = ref;
    };

    renderEllipsisNodeWithMenu(children: React.ReactNode, breakpointer: number) {
        // 拿到被隐藏的项
        const hiddenItems: React.ReactNode[] = [];
        Children.forEach(children, (item: React.ReactElement, i) => {
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
                {...(popupProps as DropdownProps)}
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

        const maxNode = this.state.maxNode as number;

        let items;
        const length: number = Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            const breakpointer = length - maxNode + 1;
            items = [];

            Children.forEach(children, (item: React.ReactElement, i) => {
                const ariaProps: Record<string, string> = {};

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
            items = Children.map(children, (item: React.ReactElement, i) => {
                const ariaProps: Record<string, string> = {};
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

        const BreadcrumbComponent = component as unknown as React.FC<BreadcrumbProps>;

        if ('maxNode' in others) {
            delete others.maxNode;
        }

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
                        {Children.map(children, (item: React.ReactElement, i) => {
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
