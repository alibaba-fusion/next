import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';

export default class ListBody extends React.Component {
    static contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
    };

    componentDidMount() {
        const { getNode } = this.context;
        getNode && getNode('body', findDOMNode(this));
    }

    onScroll = e => {
        const { onFixedScrollSync } = this.context;
        onFixedScrollSync && onFixedScrollSync(e);
    };

    render() {
        return <BodyComponent component="div" onScroll={this.onScroll} {...this.props} />;
    }
}
