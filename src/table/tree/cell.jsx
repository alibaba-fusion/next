import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import { KEYCODE } from '../../util';
import CellComponent from '../base/cell';

const generateIndents = ({ prefix, isLastChild, level }) => {
    const indents = [];
    for (let i = 0; i < level; i++) {
        if (!isLastChild[i]) {
            const classNames = cx(`${prefix}table-tree-node-indent-unit`, `${prefix}line`);
            indents.push(<span className={classNames} style={{ left: `${(i + 1) * 20}px` }} key={`unit-${i}`} />);
        }
        // const classNames = cx(`${prefix}table-tree-node-indent-unit`, {
        //     [`${prefix}line`]: !isLastChild[i]
        // });

        // indents.push(<span className={classNames} style={{left: `${level}`}} key={`unit-${i}`} />);
    }
    return indents;
};

export default class TreeCell extends React.Component {
    static propTypes = {
        indent: PropTypes.number,
        locale: PropTypes.object,
        ...CellComponent.propTypes,
    };

    static defaultProps = {
        ...CellComponent.defaultProps,
        component: 'td',
        indent: 20,
    };

    static contextTypes = {
        openTreeRowKeys: PropTypes.array,
        indent: PropTypes.number,
        onTreeNodeClick: PropTypes.func,
        isTree: PropTypes.bool,
        showLine: PropTypes.bool,
        rowSelection: PropTypes.object,
    };

    onTreeNodeClick = (record, e) => {
        e.stopPropagation();
        this.context.onTreeNodeClick(record);
    };

    expandedKeydown = (record, e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.keyCode === KEYCODE.ENTER) {
            this.onTreeNodeClick(record, e);
        }
    };

    renderRightAngle = () => {
        const { prefix, record } = this.props;
        const isRoot = record.__level === 0;
        return !isRoot ? <span className={`${prefix}table-tree-right-angle`} /> : null;
    };

    renderNoopSwitcher = () => {
        const { prefix, record } = this.props;
        const isRoot = record.__level === 0;

        const className = cx({
            [`${prefix}table-tree-switcher`]: true,
            [`${prefix}table-noop-line`]: true,
            [`${prefix}table-noop-line-noroot`]: !isRoot,
        });

        return <span className={className}>{this.renderRightAngle()}</span>;
    };

    renderSwitcher = () => {
        const { prefix, record, primaryKey } = this.props;
        const { openTreeRowKeys: openRowKeys } = this.context;
        const className = cx({
            [`${prefix}table-tree-switcher`]: true,
            [`${prefix}line`]: true,
        });
        const hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;
        const iconType = hasExpanded ? 'minus' : 'add';
        const iconCls = cx({
            [`${prefix}table-tree-switcher-icon`]: true,
        });

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <span
                className={className}
                onClick={e => this.onTreeNodeClick(record, e)}
                onKeyDown={e => this.expandedKeydown(record, e)}
            >
                {this.renderRightAngle()}
                <Icon className={iconCls} type={iconType} />
            </span>
        );
    };

    render() {
        const { colIndex, record, prefix, primaryKey, locale, rtl, children, className } = this.props;
        const { openTreeRowKeys: openRowKeys, indent, isTree, showLine, rowSelection } = this.context;
        const treeArrowNodeIndex = rowSelection ? 1 : 0;

        const cls = cx(className, {
            [`${prefix}table-tree-net`]: colIndex === treeArrowNodeIndex,
        });

        let firstCellStyle, treeArrowNode, firstCellPlaceholder, switcher;
        if (colIndex === treeArrowNodeIndex) {
            let treeArrowType;
            if (isTree) {
                if (showLine) {
                    firstCellPlaceholder = generateIndents({
                        prefix,
                        isLastChild: record.__isLastChild,
                        level: record.__level,
                    });
                    switcher = record.__isLeaf ? this.renderNoopSwitcher() : this.renderSwitcher();
                }

                const paddingType = rtl ? 'paddingRight' : 'paddingLeft';
                firstCellStyle = {
                    [paddingType]: 20 * (record.__level + 1),
                };

                treeArrowNode = <Icon size="xs" rtl={rtl} className={`${prefix}table-tree-placeholder`} />;
                if (record.children && record.children.length) {
                    const hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;

                    treeArrowType = hasExpanded ? 'arrow-down' : 'arrow-right';

                    treeArrowNode = (
                        <Icon
                            className={`${prefix}table-tree-arrow`}
                            type={treeArrowType}
                            size="xs"
                            rtl={rtl}
                            onClick={e => this.onTreeNodeClick(record, e)}
                            onKeyDown={e => this.expandedKeydown(record, e)}
                            role="button"
                            tabIndex="0"
                            aria-expanded={hasExpanded}
                            aria-label={hasExpanded ? locale.expanded : locale.folded}
                        />
                    );
                }
            }
        }

        return (
            <CellComponent {...this.props} className={cls} innerStyle={firstCellStyle} isIconLeft={!!treeArrowNode}>
                {firstCellPlaceholder}
                {switcher}
                {children}
                {!showLine && treeArrowNode}
            </CellComponent>
        );
    }
}
