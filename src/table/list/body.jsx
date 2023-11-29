import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';

export default class ListBody extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
    };

    componentDidMount() {
        const { getNode } = this.context;
        getNode && getNode('body', findDOMNode(this));
    }

    onBodyScroll = event => {
        const { onFixedScrollSync } = this.context;
        // sync scroll left to header
        onFixedScrollSync && onFixedScrollSync(event);

        // sync scroll top/left to lock columns
        if ('onLockScroll' in this.props && typeof this.props.onLockScroll === 'function') {
            this.props.onLockScroll(event);
        }
    };

    render() {
        const { className, ...others } = this.props;
        const style = {};

        return (
            <div style={style} className={className} onScroll={this.onBodyScroll}>
                <BodyComponent component="div" {...others} />
            </div>
        );
    }
}
