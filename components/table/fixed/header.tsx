import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import HeaderComponent from '../base/header';
import type { FixedHeaderContext, FixedHeaderProps } from '../types';

export default class FixedHeader extends React.Component<FixedHeaderProps> {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        tableWidth: PropTypes.number,
    };

    static contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };

    context: FixedHeaderContext;

    componentDidMount() {
        this.context.getNode('header', findDOMNode(this) as HTMLElement);
    }

    // 这里的 style={{overflow: 'unset'}} 可以删掉，只是为了解决用户 js 升级但是样式没升级的情况
    // 这里的 style={{position: 'absolute', right: 0}} 也可以删掉，是为了兼容用户 js 升级但是样式没升级的情况
    render() {
        const { prefix, className, colGroup, tableWidth, ...others } = this.props;
        const { onFixedScrollSync, lockType } = this.context;

        return (
            <div className={className} onScroll={onFixedScrollSync}>
                <div className={`${prefix}table-header-inner`} style={{ overflow: 'unset' }}>
                    <table style={{ width: tableWidth }}>
                        {colGroup}
                        <HeaderComponent {...others} prefix={prefix} />
                    </table>
                </div>
                {!lockType && (
                    <div
                        className={`${prefix}table-header-fixer`}
                        style={{ position: 'absolute', right: 0 }}
                    />
                )}
            </div>
        );
    }
}
