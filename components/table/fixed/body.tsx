import React, { type CSSProperties, type UIEvent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';
import type { FixedBodyContext, FixedBodyProps } from '../types';

export default class FixedBody extends React.Component<FixedBodyProps> {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        onLockScroll: PropTypes.func,
        tableWidth: PropTypes.number,
    };

    static contextTypes = {
        fixedHeader: PropTypes.bool,
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onFixedScrollSync: PropTypes.func,
        getNode: PropTypes.func,
    };

    context: FixedBodyContext;

    componentDidMount() {
        const { getNode } = this.context;
        getNode && getNode('body', findDOMNode(this) as HTMLElement);
    }

    onBodyScroll = (event: UIEvent) => {
        const { onFixedScrollSync } = this.context;
        // sync scroll left to header
        onFixedScrollSync && onFixedScrollSync(event);

        // sync scroll top/left to lock columns
        if ('onLockScroll' in this.props && typeof this.props.onLockScroll === 'function') {
            this.props.onLockScroll(event);
        }
    };

    render() {
        const { className, colGroup, onLockScroll, tableWidth, ...others } = this.props;
        const { maxBodyHeight, fixedHeader } = this.context;
        const style: CSSProperties = {};
        if (fixedHeader) {
            style.maxHeight = maxBodyHeight;
            style.position = 'relative';
        }
        return (
            <div style={style} className={className} onScroll={this.onBodyScroll}>
                <table style={{ width: tableWidth }}>
                    {colGroup}
                    <BodyComponent {...others} colGroup={colGroup} />
                </table>
            </div>
        );
    }
}
