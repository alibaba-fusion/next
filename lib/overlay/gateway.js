"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var find_node_1 = tslib_1.__importDefault(require("./utils/find-node"));
var makeChain = util_1.func.makeChain;
var getContainerNode = function (props) {
    var targetNode = (0, find_node_1.default)(props.target);
    return (0, find_node_1.default)(props.container, targetNode);
};
var Gateway = /** @class */ (function (_super) {
    tslib_1.__extends(Gateway, _super);
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
            return (0, react_dom_1.findDOMNode)(this.child);
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
        var child = children ? react_1.Children.only(children) : null;
        if (!child) {
            return null;
        }
        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = (0, react_1.cloneElement)(child, {
            ref: makeChain(this.saveChildRef, child.ref),
        });
        return (0, react_dom_1.createPortal)(child, containerNode);
    };
    Gateway.displayName = 'Gateway';
    Gateway.propTypes = {
        children: prop_types_1.default.node,
        container: prop_types_1.default.any,
        target: prop_types_1.default.any,
    };
    Gateway.defaultProps = {
        container: function () { return document.body; },
    };
    return Gateway;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Gateway);
