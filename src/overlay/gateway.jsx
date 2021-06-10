import React, { Component, Children } from 'react';
import { findDOMNode, createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { func } from '../util';
import findNode from './utils/find-node';

const { makeChain } = func;

const getContainerNode = props => {
    const targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
};

class Gateway extends Component {
    static propTypes = {
        children: PropTypes.node,
        container: PropTypes.any,
        target: PropTypes.any,
    };

    static defaultProps = {
        container: () => document.body,
    };

    constructor(props) {
        super(props);

        this.state = {
            containerNode: null,
        };
    }

    componentDidMount() {
        this.updateContainer();
    }

    componentDidUpdate() {
        this.updateContainer();
    }

    updateContainer = () => {
        const containerNode = getContainerNode(this.props);

        if (containerNode !== this.state.containerNode) {
            // eslint-disable-next-line
            this.setState({
                containerNode,
            });
        }
    };

    getChildNode() {
        try {
            return findDOMNode(this.child);
        } catch (err) {
            return null;
        }
    }

    saveChildRef = ref => {
        this.child = ref;
    };

    render() {
        const { containerNode } = this.state;

        if (!containerNode) {
            return null;
        }

        const { children } = this.props;
        let child = children ? Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = React.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref),
        });

        return createPortal(child, containerNode);
    }
}

export default polyfill(Gateway);
