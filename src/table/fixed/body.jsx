import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';

/* eslint-disable react/prefer-stateless-function */
export default class FixedBody extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        onScroll: PropTypes.func,
    };

    static defaultProps = {
        onScroll: () => {},
    };

    static contextTypes = {
        fixedHeader: PropTypes.bool,
        maxBodyHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        onBodyScroll: PropTypes.func,
        getNode: PropTypes.func,
    };

    componentDidMount() {
        const { getNode } = this.context;
        getNode && getNode('body', findDOMNode(this));
    }

    onBodyScroll = () => {
        const { onBodyScroll } = this.context;
        onBodyScroll && onBodyScroll();
        this.props.onScroll();
    };

    render() {
        const { className, colGroup, ...others } = this.props;
        const { maxBodyHeight, fixedHeader } = this.context;
        const style = {};
        if (fixedHeader) {
            style.maxHeight = maxBodyHeight;
        }
        return (
            <div
                style={style}
                className={className}
                onScroll={this.onBodyScroll}
            >
                <table>
                    {colGroup}
                    <BodyComponent {...others} colGroup={colGroup} />
                </table>
            </div>
        );
    }
}
