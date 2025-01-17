import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { dom } from '../util';
import HeaderComponent from './fixed/header';
import BodyComponent from './fixed/body';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';
import type Base from './base';
import type { FixedTableProps, WrapperLike } from './types';

export default function fixed(BaseComponent: typeof Base) {
    /** Table */
    class FixedTable extends React.Component<FixedTableProps> {
        static FixedHeader = HeaderComponent;
        static FixedBody = BodyComponent;
        static FixedWrapper = WrapperComponent;
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            hasHeader: true,
            fixedHeader: false,
            maxBodyHeight: 200,
            components: {},
            refs: {},
            prefix: 'next-',
        };

        static childContextTypes = {
            fixedHeader: PropTypes.bool,
            getNode: PropTypes.func,
            onFixedScrollSync: PropTypes.func,
            getTableInstanceForFixed: PropTypes.func,
            maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        };

        state = {};
        scrollToRightEnd?: boolean;
        scrollTarget: HTMLElement | null;
        timeoutId?: number;

        getChildContext() {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                getTableInstanceForFixed: this.getTableInstance,
                onFixedScrollSync: this.onFixedScrollSync,
                getNode: this.getNode,
            };
        }

        componentDidMount() {
            this.adjustFixedHeaderSize();
            this.scrollToRightEnd = undefined;
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        }

        componentDidUpdate() {
            this.adjustFixedHeaderSize();
            this.onFixedScrollSync({ currentTarget: this.bodyNode, target: this.bodyNode });
        }

        [nodeKey: `${string}${'header' | 'body'}${'Left' | 'Right' | ''}Node`]: HTMLElement;
        [tableKey: `table${string}Inc`]: InstanceType<typeof Base>;

        getNode = (type: 'header' | 'body', node: HTMLElement, lockType?: string) => {
            lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
            this[`${type}${lockType as 'Left' | 'Right'}Node` as const] = node;
        };

        getTableInstance = (type: string, instance: InstanceType<typeof Base>) => {
            type = '';
            this[`table${type}Inc` as const] = instance;
        };

        getTableNode() {
            const table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        // for fixed header scroll left
        onFixedScrollSync = (
            current: { currentTarget?: HTMLElement; target?: HTMLElement } = {}
        ) => {
            const currentTarget = current.currentTarget || ({} as HTMLElement),
                headerNode = this.headerNode,
                bodyNode = this.bodyNode;

            const { scrollLeft, scrollWidth, clientWidth } = currentTarget;
            const scrollToRightEnd = !(scrollLeft! < scrollWidth! - clientWidth!);
            const { prefix, loading } = this.props;

            if (!loading && scrollToRightEnd !== this.scrollToRightEnd) {
                this.scrollToRightEnd = scrollToRightEnd;
                const table = this.getTableNode();

                const leftFunc = scrollToRightEnd ? 'removeClass' : 'addClass';
                dom[leftFunc](table, `${prefix}table-scrolling-to-right`);
            }

            // 通过定时器避免重复设置表格的左滚动距离
            if (!this.scrollTarget || this.scrollTarget === currentTarget) {
                this.scrollTarget = currentTarget;
                window.clearTimeout(this.timeoutId);

                this.timeoutId = window.setTimeout(() => {
                    this.scrollTarget = null;
                    this.timeoutId = undefined;
                }, 100);

                if (currentTarget === bodyNode) {
                    if (headerNode && scrollLeft !== headerNode.scrollLeft) {
                        headerNode.scrollLeft = scrollLeft;
                    }
                } else if (currentTarget === headerNode) {
                    if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
                        bodyNode.scrollLeft = scrollLeft;
                    }
                }
            }
        };

        adjustFixedHeaderSize() {
            const { hasHeader, rtl, prefix } = this.props;
            const paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            const marginName = rtl ? 'marginLeft' : 'marginRight';
            const body = this.bodyNode;
            const scrollBarSize = +dom.scrollbar().width || 0;

            if (hasHeader && !this.props.lockType && body) {
                const hasVerScroll = body.scrollHeight > body.clientHeight,
                    hasHozScroll = body.scrollWidth > body.clientWidth;
                const style: Partial<
                    Record<
                        typeof paddingName | typeof marginName | 'marginBottom' | 'paddingBottom',
                        unknown
                    >
                > = {};
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }

                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    if (hasHozScroll) {
                        style.paddingBottom = scrollBarSize;
                    } else {
                        style.paddingBottom = scrollBarSize;
                    }
                    if (hasVerScroll) {
                        style[marginName] = scrollBarSize;
                    }
                }

                dom.setStyle(this.headerNode, style);
            }

            if (hasHeader && !this.props.lockType && this.headerNode) {
                const fixer = this.headerNode.querySelector(
                    `.${prefix}table-header-fixer`
                ) as HTMLElement;
                const height = dom.getStyle(this.headerNode, 'height') as number;
                const paddingBottom = dom.getStyle(this.headerNode, 'paddingBottom') as number;

                dom.setStyle(fixer, {
                    width: scrollBarSize,
                    height: height - paddingBottom,
                });
            }
        }

        render() {
            const { prefix, fixedHeader, lockType, dataSource, maxBodyHeight, ...others } =
                this.props;
            let { className, components } = this.props;
            if (fixedHeader) {
                components = { ...components };
                if (!components.Header) {
                    components.Header = HeaderComponent;
                }
                if (!components.Body) {
                    components.Body = BodyComponent;
                }
                if (!components.Wrapper) {
                    components.Wrapper = WrapperComponent as WrapperLike;
                }
                className = classnames({
                    [`${prefix}table-fixed`]: true,
                    [`${prefix}table-wrap-empty`]: !dataSource!.length,
                    [className!]: className,
                });
            }

            return (
                <BaseComponent
                    {...others}
                    dataSource={dataSource}
                    lockType={lockType}
                    components={components}
                    className={className}
                    prefix={prefix}
                />
            );
        }
    }
    return statics(FixedTable, BaseComponent);
}
