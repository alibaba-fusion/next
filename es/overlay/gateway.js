import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component, Children } from 'react';
import { findDOMNode, createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { func } from '../util';
import findNode from './utils/find-node';

var makeChain = func.makeChain;


var getContainerNode = function getContainerNode(props) {
    var targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
};

var Gateway = (_temp = _class = function (_Component) {
    _inherits(Gateway, _Component);

    function Gateway(props) {
        _classCallCheck(this, Gateway);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.saveChildRef = function (ref) {
            _this.child = ref;
        };

        _this.state = {
            containerNode: null
        };
        return _this;
    }

    Gateway.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
        return {
            containerNode: getContainerNode(nextProps)
        };
    };

    Gateway.prototype.componentDidMount = function componentDidMount() {
        this.forceUpdate();
    };

    Gateway.prototype.getChildNode = function getChildNode() {
        try {
            return findDOMNode(this.child);
        } catch (err) {
            return null;
        }
    };

    Gateway.prototype.render = function render() {
        var containerNode = this.state.containerNode;


        if (!containerNode) {
            return null;
        }

        var children = this.props.children;

        var child = children ? Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = React.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref)
        });

        return createPortal(child, containerNode);
    };

    return Gateway;
}(Component), _class.propTypes = {
    children: PropTypes.node,
    container: PropTypes.any,
    target: PropTypes.any
}, _class.defaultProps = {
    container: function container() {
        return document.body;
    }
}, _temp);
Gateway.displayName = 'Gateway';


export default polyfill(Gateway);