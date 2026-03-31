import { __extends } from "tslib";
import { Component, Children, cloneElement } from 'react';
import { findDOMNode, createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { func } from '../util';
import findNode from './utils/find-node';
var makeChain = func.makeChain;
var getContainerNode = function (props) {
    var targetNode = findNode(props.target);
    return findNode(props.container, targetNode);
};
var Gateway = /** @class */ (function (_super) {
    __extends(Gateway, _super);
    function Gateway(props) {
        var _this = _super.call(this, props) || this;
        _this.updateContainer = function () {
            var containerNode = getContainerNode(_this.props);
            if (containerNode !== _this.state.containerNode) {
                // eslint-disable-next-line
                _this.setState({
                    containerNode: containerNode,
                });
            }
        };
        _this.saveChildRef = function (ref) {
            _this.child = ref;
        };
        _this.state = {
            containerNode: null,
        };
        return _this;
    }
    Gateway.prototype.componentDidMount = function () {
        this.updateContainer();
    };
    Gateway.prototype.componentDidUpdate = function () {
        this.updateContainer();
    };
    Gateway.prototype.getChildNode = function () {
        try {
            return findDOMNode(this.child);
        }
        catch (err) {
            return null;
        }
    };
    Gateway.prototype.render = function () {
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
        child = cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref),
        });
        return createPortal(child, containerNode);
    };
    Gateway.displayName = 'Gateway';
    Gateway.propTypes = {
        children: PropTypes.node,
        container: PropTypes.any,
        target: PropTypes.any,
    };
    Gateway.defaultProps = {
        container: function () { return document.body; },
    };
    return Gateway;
}(Component));
export default polyfill(Gateway);
