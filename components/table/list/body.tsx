import React, { type UIEvent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';
import type { ListBodyContext, ListBodyProps } from '../types';

export default class ListBody extends React.Component<ListBodyProps> {
    static contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
    };

    context: ListBodyContext;

    componentDidMount() {
        const { getNode } = this.context;
        getNode && getNode('body', findDOMNode(this) as HTMLElement);
    }

    onScroll = (e: UIEvent) => {
        const { onFixedScrollSync } = this.context;
        onFixedScrollSync && onFixedScrollSync(e);
    };

    render() {
        // @ts-expect-error Base 中没有 onScroll 属性
        return <BodyComponent component="div" onScroll={this.onScroll} {...this.props} />;
    }
}
