import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { dom } from '../util';
import ListHeader from './list-header';
import ListFooter from './list-footer';
import RowComponent from './list/row';
import BodyComponent from './list/body';
import HeaderComponent from './fixed/header';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';

export default function list(BaseComponent) {
    class ListTable extends React.Component {
        static ListHeader = ListHeader;
        static ListFooter = ListFooter;
        static ListRow = RowComponent;
        static ListBody = BodyComponent;
        static propTypes = {
            ...BaseComponent.propTypes,
        };
        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        static childContextTypes = {
            listHeader: PropTypes.any,
            listFooter: PropTypes.any,
            rowSelection: PropTypes.object,
            getNode: PropTypes.func,
            onFixedScrollSync: PropTypes.func,
        };

        state = {};

        getChildContext() {
            return {
                listHeader: this.listHeader,
                listFooter: this.listFooter,
                rowSelection: this.rowSelection,
                onFixedScrollSync: this.onFixedScrollSync,
                getNode: this.getNode,
            };
        }

        getNode = (type, node, lockType) => {
            lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
            this[`${type}${lockType}Node`] = node;
        };

        getTableNode() {
            const table = this.tableInc;
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table.tableEl);
            } catch (error) {
                return null;
            }
        }

        onFixedScrollSync = (current = { currentTarget: {} }) => {
            const currentTarget = current.currentTarget || {},
                headerNode = this.headerNode,
                bodyNode = this.bodyNode;

            const { scrollLeft, scrollWidth, clientWidth } = currentTarget;
            const scrollToRightEnd = !(scrollLeft < scrollWidth - clientWidth);
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

        normalizeDataSource(dataSource) {
            const ret = [];
            const loop = function(dataSource, level) {
                dataSource.forEach(item => {
                    const itemCopy = { ...item };
                    itemCopy.__level = level;
                    ret.push(itemCopy);
                    if (itemCopy.children) {
                        loop(itemCopy.children, level + 1);
                    }
                });
            };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        }

        render() {
            /* eslint-disable prefer-const */
            let { components, children, className, prefix, lockType, ...others } = this.props;
            let isList = false,
                ret = [];
            Children.forEach(children, child => {
                if (child) {
                    if (['function', 'object'].indexOf(typeof child.type) > -1) {
                        if (child.type._typeMark === 'listHeader') {
                            this.listHeader = child.props;
                            isList = true;
                        } else if (child.type._typeMark === 'listFooter') {
                            this.listFooter = child.props;
                        } else {
                            ret.push(child);
                        }
                    } else {
                        ret.push(child);
                    }
                }
            });
            this.rowSelection = this.props.rowSelection;
            if (isList) {
                components = { ...components };
                components.Row = components.Row || RowComponent;
                components.Body = components.Body || BodyComponent;
                components.Header = components.Header || HeaderComponent;
                components.Wrapper = components.Wrapper || WrapperComponent;
                className = classnames({
                    [`${prefix}table-group`]: true,
                    [className]: className,
                });
            }
            return (
                <BaseComponent
                    {...others}
                    components={components}
                    lockType={lockType}
                    children={ret.length > 0 ? ret : undefined}
                    className={className}
                    prefix={prefix}
                />
            );
        }
    }
    statics(ListTable, BaseComponent);
    return ListTable;
}
