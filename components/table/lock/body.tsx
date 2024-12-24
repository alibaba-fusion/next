import React, { type UIEvent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import FixedBody from '../fixed/body';
import type { LockBodyContext, LockBodyProps } from '../types';

export default class LockBody extends React.Component<LockBodyProps> {
    static propTypes = {
        ...FixedBody.propTypes,
    };

    static contextTypes = {
        ...FixedBody.contextTypes,
        getLockNode: PropTypes.func,
        onLockBodyScroll: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };

    readonly context: LockBodyContext;

    componentDidMount() {
        this.context.getLockNode('body', findDOMNode(this) as HTMLElement, this.context.lockType);
    }

    onBodyScroll = (event: UIEvent) => {
        this.context.onLockBodyScroll(event);
    };

    render() {
        const event = {
            onLockScroll: this.onBodyScroll,
        };
        return <FixedBody {...this.props} {...event} />;
    }
}
