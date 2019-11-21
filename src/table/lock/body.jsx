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
        onLockBodyWheel: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };

    componentDidMount() {
        this.context.getLockNode(
            'body',
            findDOMNode(this),
            this.context.lockType
        );
    }

    onBodyScroll = () => {
        this.context.onLockBodyScroll();
    };

    onBodyWheel = e => {
        this.context.onLockBodyWheel(e);
    };

    render() {
        const { lockType } = this.context;

        const events = lockType
            ? {
                  onWheel: this.onBodyWheel,
              }
            : {
                  onScroll: this.onBodyScroll,
              };
        return <FixedBody {...this.props} {...events} />;
    }
}
