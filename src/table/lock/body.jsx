import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import FixedBody from '../fixed/body';

/* eslint-disable react/prefer-stateless-function */
export default class LockBody extends React.Component {
    static propTypes = {
        ...FixedBody.propTypes,
    };

    static contextTypes = {
        ...FixedBody.contextTypes,
        getLockNode: PropTypes.func,
        onLockBodyScroll: PropTypes.func,
        onLockBodyLRScroll: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };

    componentDidMount() {
        this.context.getLockNode(
            'body',
            findDOMNode(this),
            this.context.lockType
        );
    }

    onBodyScroll = event => {
        this.context.onLockBodyScroll(event);
    };

    onBodyLRScroll = event => {
        const { lockType } = this.context;
        this.context.onLockBodyLRScroll(event, lockType);
    };

    render() {
        const { lockType } = this.context;
        const event = {
            onScroll: lockType ? this.onBodyLRScroll : this.onBodyScroll,
        };
        return <FixedBody {...this.props} {...event} />;
    }
}
