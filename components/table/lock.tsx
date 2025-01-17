import React, { Children, type ReactElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shallowElementEquals from 'shallow-element-equals';
import { dom, log, obj, events, env } from '../util';
import LockRow from './lock/row';
import LockBody from './lock/body';
import LockHeader from './lock/header';
import LockWrapper from './fixed/wrapper';
import { statics } from './util';
import type Base from './base';
import type {
    LockTableProps,
    NormalizedColumnProps,
    RecordItem,
    RowLike,
    WrapperLike,
} from './types';

// Fixme: 实现很简陋的 deepCopy，应用 lodash 替换
function deepCopy(arr: NormalizedColumnProps[]) {
    const copy = (arr: NormalizedColumnProps[]) => {
        return arr.map(item => {
            const newItem = { ...item };
            if (item.children) {
                item.children = copy(item.children);
            }
            return newItem;
        });
    };
    return copy(arr) as NormalizedColumnProps[];
}

const { ieVersion } = env;
export default function lock(BaseComponent: typeof Base) {
    /** Table */
    class LockTable extends React.Component<LockTableProps> {
        static LockRow = LockRow;
        static LockBody = LockBody;
        static LockHeader = LockHeader;
        static propTypes = {
            scrollToCol: PropTypes.number,
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        static childContextTypes = {
            getTableInstance: PropTypes.func,
            getLockNode: PropTypes.func,
            onLockBodyScroll: PropTypes.func,
            onRowMouseEnter: PropTypes.func,
            onRowMouseLeave: PropTypes.func,
        };
        _isLock: boolean;
        innerHeaderNode: HTMLDivElement | null;
        lockLeftChildren: NormalizedColumnProps[];
        lockRightChildren: NormalizedColumnProps[];
        lastScrollTop: number;
        lockLeftEl: InstanceType<typeof Base> | null;
        lockRightEl: InstanceType<typeof Base> | null;
        _notNeedAdjustLockLeft: boolean;
        _notNeedAdjustLockRight: boolean;

        constructor(props: LockTableProps) {
            super(props);
            this.lockLeftChildren = [];
            this.lockRightChildren = [];
        }

        state = {};

        getChildContext() {
            return {
                getTableInstance: this.getTableInstance,
                getLockNode: this.getNode,
                onLockBodyScroll: this.onLockBodyScroll,
                onRowMouseEnter: this.onRowMouseEnter,
                onRowMouseLeave: this.onRowMouseLeave,
            };
        }

        componentDidMount() {
            events.on(window, 'resize', this.adjustSize);

            this.scroll();
            this.adjustSize();
            this.forceUpdate();
        }

        shouldComponentUpdate(nextProps: LockTableProps, nextState: unknown, nextContext: unknown) {
            if (nextProps.pure) {
                const isEqual = shallowElementEquals(nextProps, this.props);
                return !(isEqual && obj.shallowEqual(nextContext, this.context));
            }

            return true;
        }

        componentDidUpdate() {
            this.adjustSize();
            this._isLock = false;
        }

        componentWillUnmount() {
            events.off(window, 'resize', this.adjustSize);
        }

        [tableKey: `table${string}Inc`]: InstanceType<typeof Base> | null;
        [nodeKey: `${string}${'header' | 'body'}${'Left' | 'Right' | ''}Node`]: HTMLElement | null;

        normalizeChildrenState(props: LockTableProps) {
            const columns = this.normalizeChildren(props);
            const splitChildren = this.splitFromNormalizeChildren(columns);
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            return {
                lockLeftChildren,
                lockRightChildren,
                children: this.mergeFromSplitLockChildren(splitChildren),
            };
        }

        // 将 React 结构化数据提取 props 转换成数组
        normalizeChildren(props: LockTableProps) {
            const { children, columns } = props;
            let isLock = false,
                ret;
            const checkLock = (col: NormalizedColumnProps) => {
                if ([true, 'left', 'right'].indexOf(col.lock!) > -1) {
                    if (!('width' in col)) {
                        log.warning(
                            `Should config width for lock column named [ ${col.dataIndex} ].`
                        );
                    }
                    isLock = true;
                }
            };
            if (columns && !children) {
                ret = columns;

                const getColumns = (cols: NonNullable<LockTableProps['columns']>) => {
                    cols.forEach((col = {}) => {
                        checkLock(col);

                        if (col.children) {
                            getColumns(col.children);
                        }
                    });
                };

                getColumns(columns);
            } else {
                const getChildren = (children: LockTableProps['children']) => {
                    const ret: NormalizedColumnProps[] = [];
                    Children.forEach(children, (child: ReactElement) => {
                        if (child) {
                            const props = { ...child.props };
                            checkLock(props);
                            ret.push(props);
                            if (child.props.children) {
                                props.children = getChildren(child.props.children);
                            }
                        }
                    });
                    return ret;
                };

                ret = getChildren(children);
            }

            ret.forEach(child => {
                // 为自定义的列特殊处理
                if (child.__normalized && isLock) {
                    // users can set lock type for column selection now, so its origin lock type comes first
                    child.lock = child.lock || 'left';
                    delete child.__normalized;
                }
            });
            this._isLock = isLock;
            return ret;
        }

        //从数组中分离出 lock 的列和正常的列
        splitFromNormalizeChildren(children: NormalizedColumnProps[]) {
            const originChildren = deepCopy(children);
            const lockLeftChildren = deepCopy(children);
            const lockRightChildren = deepCopy(children);
            const loop = (
                lockChildren: NormalizedColumnProps[],
                condition: (child: NormalizedColumnProps) => string | boolean | undefined
            ) => {
                const ret: NormalizedColumnProps[] = [];
                lockChildren.forEach(child => {
                    if (child.children) {
                        const res = loop(child.children, condition);
                        if (!res.length) {
                            ret.push(child);
                        }
                    } else {
                        const order = condition(child);
                        if (!order) {
                            ret.push(child);
                        }
                    }
                });
                ret.forEach(res => {
                    const index = lockChildren.indexOf(res);
                    lockChildren.splice(index, 1);
                });
                return lockChildren;
            };
            loop(lockLeftChildren, child => {
                if (child.lock === true || child.lock === 'left') {
                    return 'left';
                }
            });
            loop(lockRightChildren, child => {
                if (child.lock === 'right') {
                    return 'right';
                }
            });
            loop(originChildren, child => {
                return child.lock !== true && child.lock !== 'left' && child.lock !== 'right';
            });
            return {
                lockLeftChildren,
                lockRightChildren,
                originChildren,
            };
        }

        //将左侧的锁列树和中间的普通树及右侧的锁列树进行合并
        mergeFromSplitLockChildren(splitChildren: {
            lockLeftChildren: NormalizedColumnProps[];
            lockRightChildren: NormalizedColumnProps[];
            originChildren: NormalizedColumnProps[];
        }) {
            const { lockLeftChildren, lockRightChildren } = splitChildren;
            let { originChildren } = splitChildren;
            Array.prototype.unshift.apply(originChildren, lockLeftChildren);
            originChildren = originChildren.concat(lockRightChildren);
            return originChildren;
        }

        getTableInstance = (type: string, instance: InstanceType<typeof Base> | null) => {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            this[`table${type}Inc` as const] = instance;
        };

        getNode = (type: 'header' | 'body', node: HTMLElement, lockType: string) => {
            lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
            this[`${type}${lockType as 'Left' | 'Right' | ''}Node`] = node;
            if (type === 'header' && !this.innerHeaderNode && !lockType) {
                this.innerHeaderNode = this.headerNode!.querySelector('div');
            }
        };

        onRowMouseEnter = (record: RecordItem, index: number) => {
            if (this.isLock()) {
                const row = this.getRowNode(index);
                const leftRow = this.getRowNode(index, 'left');
                const rightRow = this.getRowNode(index, 'right');
                [row, leftRow, rightRow].forEach(row => {
                    row && dom.addClass(row, 'hovered');
                });
            }
        };

        onRowMouseLeave = (record: RecordItem, index: number) => {
            if (this.isLock()) {
                const row = this.getRowNode(index);
                const leftRow = this.getRowNode(index, 'left');
                const rightRow = this.getRowNode(index, 'right');
                [row, leftRow, rightRow].forEach(row => {
                    row && dom.removeClass(row, 'hovered');
                });
            }
        };

        scroll() {
            const { scrollToCol = 0, scrollToRow = 0 } = this.props;
            if ((!scrollToCol && !scrollToRow) || !this.bodyNode) {
                return;
            }
            const colCellNode = this.getCellNode(0, scrollToCol);
            const rowCellNode = this.getCellNode(scrollToRow, 0);
            const bodyNodeOffset = this.bodyNode.getBoundingClientRect() || {};
            if (colCellNode) {
                const cellNodeoffset = colCellNode.getBoundingClientRect();
                const scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
                this.bodyNode.scrollLeft = scrollLeft;
            }
            if (rowCellNode) {
                const cellNodeoffset = rowCellNode.getBoundingClientRect();
                const scrollTop = cellNodeoffset.top - bodyNodeOffset.top;
                this.bodyNode.scrollTop = scrollTop;
            }
        }

        onLockBodyScrollTop = (event: {
            currentTarget?: HTMLElement;
            target?: HTMLElement;
            [key: string]: unknown;
        }) => {
            // set scroll top for lock columns & main body
            const target = event.target;
            if (event.currentTarget !== target) {
                return;
            }
            const distScrollTop = target!.scrollTop;

            if (this.isLock() && distScrollTop !== this.lastScrollTop) {
                const lockRightBody = this.bodyRightNode,
                    lockLeftBody = this.bodyLeftNode,
                    bodyNode = this.bodyNode;

                const arr = [lockLeftBody, lockRightBody, bodyNode];

                arr.forEach(node => {
                    if (node && node.scrollTop !== distScrollTop) {
                        node.scrollTop = distScrollTop;
                    }
                });

                this.lastScrollTop = distScrollTop;
            }
        };

        onLockBodyScrollLeft = () => {
            // add shadow class for lock columns
            if (this.isLock()) {
                const { rtl } = this.props;
                const lockRightTable = rtl
                        ? this.getWrapperNode('left')
                        : this.getWrapperNode('right'),
                    lockLeftTable = rtl
                        ? this.getWrapperNode('right')
                        : this.getWrapperNode('left'),
                    shadowClassName = 'shadow';

                const x = this.bodyNode!.scrollLeft;

                if (x === 0) {
                    lockLeftTable && dom.removeClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                } else if (x === this.bodyNode!.scrollWidth - this.bodyNode!.clientWidth) {
                    lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.removeClass(lockRightTable, shadowClassName);
                } else {
                    lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
                    lockRightTable && dom.addClass(lockRightTable, shadowClassName);
                }
            }
        };

        onLockBodyScroll = (event: { currentTarget?: HTMLElement; [key: string]: unknown }) => {
            this.onLockBodyScrollTop(event);
            this.onLockBodyScrollLeft();
        };

        // Table 处理过后真实的 lock 状态
        isLock() {
            return this.lockLeftChildren.length || this.lockRightChildren.length;
        }

        // 用户设置的 lock 状态
        isOriginLock() {
            return this._isLock;
        }

        adjustSize = () => {
            if (!this.adjustIfTableNotNeedLock()) {
                this.adjustHeaderSize();
                this.adjustBodySize();
                this.adjustRowHeight();
                this.onLockBodyScrollLeft();
            }
        };

        removeLockTable() {
            const lockLeftLen = this.lockLeftChildren.length;
            const lockRightLen = this.lockRightChildren.length;

            if (lockLeftLen) {
                this._notNeedAdjustLockLeft = true;
            }
            if (lockRightLen) {
                this._notNeedAdjustLockRight = true;
            }
            if (lockRightLen || lockLeftLen) {
                this.forceUpdate();
                return true;
            }
        }

        adjustIfTableNotNeedLock() {
            if (this.isOriginLock()) {
                const widthObj = this.tableInc!.flatChildren.map((item, index) => {
                    const cell = this.getCellNode(0, index) || ({} as HTMLElement);
                    const headerCell = this.getHeaderCellNode(0, index) || ({} as HTMLElement);

                    // fix https://codesandbox.io/s/fusion-next-template-d9bu8
                    // close #1832
                    try {
                        return {
                            cellWidths: parseFloat(getComputedStyle(cell).width) || 0,
                            headerWidths: parseFloat(getComputedStyle(headerCell).width) || 0,
                        };
                    } catch (error) {
                        return {
                            cellWidths: cell.clientWidth || 0,
                            headerWidths: headerCell.clientWidth || 0,
                        };
                    }
                }).reduce(
                    (a, b) => {
                        return {
                            cellWidths: a.cellWidths + b.cellWidths,
                            headerWidths: a.headerWidths + b.headerWidths,
                        };
                    },
                    {
                        cellWidths: 0,
                        headerWidths: 0,
                    }
                );

                let node, width;

                try {
                    node = findDOMNode(this) as HTMLElement;
                    width = node!.clientWidth;
                } catch (err) {
                    node = null;
                    width = 0;
                }

                // if the table doesn't exist, there is no need to adjust
                if (width === 0) {
                    return true;
                }

                const configWidths =
                    // @ts-expect-error 这里用 parseInt 只是想取整，后续应该换成 math 相关
                    parseInt(widthObj.cellWidths) || parseInt(widthObj.headerWidths);

                if (configWidths <= width && configWidths > 0) {
                    this.removeLockTable();
                } else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    this.forceUpdate();
                } else {
                    this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
                    return false;
                }
            }

            return false;
        }

        adjustBodySize() {
            const { rtl, hasHeader } = this.props;
            const header = this.headerNode;
            const paddingName = rtl ? 'paddingLeft' : 'paddingRight';
            const marginName = rtl ? 'marginLeft' : 'marginRight';
            const scrollBarSize = +dom.scrollbar().width || 0;
            const style: Partial<
                Record<
                    typeof paddingName | typeof marginName | 'marginBottom' | 'paddingBottom',
                    unknown
                >
            > = {
                [paddingName]: scrollBarSize,
                [marginName]: scrollBarSize,
            };
            const body = this.bodyNode,
                hasVerScroll = body && body.scrollHeight > body.clientHeight;

            if (this.isLock()) {
                const lockLeftBody = this.bodyLeftNode,
                    lockRightBody = this.bodyRightNode,
                    lockRightBodyWrapper = this.getWrapperNode('right'),
                    bodyHeight = body!.offsetHeight,
                    width = hasVerScroll ? scrollBarSize : 0,
                    lockBodyHeight = bodyHeight - scrollBarSize;

                if (!hasVerScroll) {
                    style[paddingName] = 0;
                    style[marginName] = 0;
                }
                if (+scrollBarSize) {
                    style.marginBottom = -scrollBarSize;
                    style.paddingBottom = scrollBarSize;
                } else {
                    style.marginBottom = -20;
                    style.paddingBottom = 20;
                }

                const lockStyle: Partial<Record<'max-height' | typeof marginName, unknown>> = {
                    'max-height': lockBodyHeight,
                };
                if (!hasHeader && !+scrollBarSize) {
                    lockStyle[marginName] = 0;
                }
                if (+scrollBarSize) {
                    lockStyle[marginName] = -scrollBarSize;
                }
                lockLeftBody && dom.setStyle(lockLeftBody, lockStyle);
                lockRightBody && dom.setStyle(lockRightBody, lockStyle);
                lockRightBodyWrapper &&
                    +scrollBarSize &&
                    dom.setStyle(lockRightBodyWrapper, rtl ? 'left' : 'right', `${width}px`);
            } else {
                style.marginBottom = -scrollBarSize;
                style.paddingBottom = scrollBarSize;
                style[marginName] = 0;
                if (!hasVerScroll) {
                    style[paddingName] = 0;
                }
            }

            header && dom.setStyle(header, style);
        }

        adjustHeaderSize() {
            if (this.isLock()) {
                this.tableInc!.groupChildren.forEach((child, index) => {
                    const lastIndex = this.tableInc!.groupChildren[index].length - 1;
                    const headerRightRow = this.getHeaderCellNode(index, lastIndex),
                        headerLeftRow = this.getHeaderCellNode(index, 0),
                        headerRightLockRow = this.getHeaderCellNode(index, 0, 'right'),
                        headerLeftLockRow = this.getHeaderCellNode(index, 0, 'left');

                    if (headerRightRow && headerRightLockRow) {
                        const maxRightRowHeight = headerRightRow.offsetHeight;

                        dom.setStyle(headerRightLockRow, 'height', maxRightRowHeight);

                        setTimeout(() => {
                            const affixRef = this.tableRightInc!.affixRef;
                            // if rendered then update position of affix
                            return (
                                affixRef &&
                                affixRef.getInstance() &&
                                affixRef.getInstance().updatePosition()
                            );
                        });
                    }

                    if (headerLeftRow && headerLeftLockRow) {
                        const maxLeftRowHeight = headerLeftRow.offsetHeight;

                        dom.setStyle(headerLeftLockRow, 'height', maxLeftRowHeight);

                        setTimeout(() => {
                            const affixRef = this.tableLeftInc!.affixRef;
                            // if rendered then update postion of affix
                            return (
                                affixRef &&
                                affixRef.getInstance() &&
                                affixRef.getInstance().updatePosition()
                            );
                        });
                    }
                });
            }
        }

        adjustRowHeight() {
            if (this.isLock()) {
                this.tableInc!.props.dataSource.forEach((item, index) => {
                    // record may be a string
                    const rowIndex = `${
                        typeof item === 'object' && '__rowIndex' in item ? item.__rowIndex : index
                    }${item.__expanded ? '_expanded' : ''}`;

                    // 同步左侧的锁列
                    this.setRowHeight(rowIndex, 'left');
                    // 同步右侧的锁列
                    this.setRowHeight(rowIndex, 'right');
                });
            }
        }

        setRowHeight(rowIndex: number | string, dir: string) {
            const lockRow = this.getRowNode(rowIndex, dir),
                row = this.getRowNode(rowIndex),
                rowHeight =
                    (ieVersion
                        ? row && row.offsetHeight
                        : row && parseFloat(getComputedStyle(row).height)) || 'auto',
                lockHeight =
                    (ieVersion
                        ? lockRow && lockRow.offsetHeight
                        : lockRow && parseFloat(getComputedStyle(lockRow).height)) || 'auto';

            if (lockRow && rowHeight !== lockHeight) {
                dom.setStyle(lockRow, 'height', rowHeight);
            }
        }

        getWrapperNode(type: string) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(this[`lock${type as 'Left' | 'Right'}El`]) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        // remove this in next major version, keep this for temperary incase of using it
        // getFirstNormalCellNode(index) {
        //     let i = 0;
        //     let row;
        //     do {
        //         row = this.getCellNode(index, i);
        //         i++;
        //     } while (
        //         (!row || (row && row.rowSpan && row.rowSpan > 1)) &&
        //         this.tableInc.flatChildren.length > i
        //     );

        //     return row;
        // }

        getRowNode(index: number | string, type?: string) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.getRowRef(index)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        getHeaderCellNode(index: number, i: number, type?: string) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.getHeaderCellRef(index, i)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        getCellNode(index: number, i: number, type?: string) {
            type = type ? type.charAt(0).toUpperCase() + type.substr(1) : '';
            const table = this[`table${type}Inc`];

            try {
                // in case of finding an unmounted component due to cached data
                // need to clear refs of table when dataSource Changed
                // use try catch for temporary
                return findDOMNode(table!.getCellRef(index, i)) as HTMLElement;
            } catch (error) {
                return null;
            }
        }

        getFlatenChildrenLength = (children: NormalizedColumnProps[] = []) => {
            const loop = (arr: NormalizedColumnProps[]) => {
                const newArray: NormalizedColumnProps[] = [];
                arr.forEach(child => {
                    if (child && child.children) {
                        newArray.push(...loop(child.children));
                    } else {
                        newArray.push(child);
                    }
                });
                return newArray;
            };

            return loop(children).length;
        };

        saveLockLeftRef = (ref: InstanceType<typeof Base> | null) => {
            this.lockLeftEl = ref;
        };

        saveLockRightRef = (ref: InstanceType<typeof Base> | null) => {
            this.lockRightEl = ref;
        };

        render() {
            /* eslint-disable no-unused-vars, prefer-const */
            let {
                children,
                columns,
                prefix,
                components,
                className,
                dataSource,
                tableWidth,
                ...others
            } = this.props;
            let {
                lockLeftChildren,
                lockRightChildren,
                children: normalizedChildren,
            } = this.normalizeChildrenState(this.props);

            const leftLen = this.getFlatenChildrenLength(lockLeftChildren);
            const rightLen = this.getFlatenChildrenLength(lockRightChildren);
            const originLen = this.getFlatenChildrenLength(normalizedChildren);

            const lengths = {
                left: leftLen,
                right: rightLen,
                origin: originLen,
            };
            if (this._notNeedAdjustLockLeft) {
                lockLeftChildren = [];
            }
            if (this._notNeedAdjustLockRight) {
                lockRightChildren = [];
            }
            this.lockLeftChildren = lockLeftChildren;
            this.lockRightChildren = lockRightChildren;

            if (this.isOriginLock()) {
                components = { ...components };
                components.Body = components.Body || LockBody;
                components.Header = components.Header || LockHeader;
                components.Wrapper = components.Wrapper || (LockWrapper as WrapperLike);
                components.Row = components.Row || (LockRow as RowLike);
                className = classnames({
                    [`${prefix}table-lock`]: true,
                    [`${prefix}table-wrap-empty`]: !dataSource!.length,
                    [className!]: className,
                });
                const content = [
                    <BaseComponent
                        {...others}
                        dataSource={dataSource}
                        key="lock-left"
                        columns={lockLeftChildren}
                        className={`${prefix}table-lock-left`}
                        lengths={lengths}
                        prefix={prefix}
                        lockType="left"
                        components={components}
                        ref={this.saveLockLeftRef}
                        loading={false}
                        aria-hidden
                    />,
                    <BaseComponent
                        {...others}
                        dataSource={dataSource}
                        key="lock-right"
                        columns={lockRightChildren}
                        className={`${prefix}table-lock-right`}
                        lengths={lengths}
                        prefix={prefix}
                        lockType="right"
                        components={components}
                        ref={this.saveLockRightRef}
                        loading={false}
                        aria-hidden
                    />,
                ];
                return (
                    <BaseComponent
                        {...others}
                        tableWidth={tableWidth}
                        dataSource={dataSource}
                        columns={normalizedChildren}
                        prefix={prefix}
                        lengths={lengths}
                        wrapperContent={content}
                        components={components}
                        className={className}
                    />
                );
            }
            return <BaseComponent {...this.props} />;
        }
    }
    return statics(LockTable, BaseComponent);
}
