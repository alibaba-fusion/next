'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _findNode = require('./utils/find-node');

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeChain = _util.func.makeChain;


var getContainerNode = function getContainerNode(props) {
    var targetNode = (0, _findNode2.default)(props.target);
    return (0, _findNode2.default)(props.container, targetNode);
};

var Gateway = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Gateway, _Component);

    function Gateway(props) {
        (0, _classCallCheck3.default)(this, Gateway);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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
            return (0, _reactDom.findDOMNode)(this.child);
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

        var child = children ? _react.Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = _react2.default.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref)
        });

        return (0, _reactDom.createPortal)(child, containerNode);
    };

    return Gateway;
}(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    container: _propTypes2.default.any,
    target: _propTypes2.default.any
}, _class.defaultProps = {
    container: function container() {
        return document.body;
    }
}, _temp);
Gateway.displayName = 'Gateway';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Gateway);
module.exports = exports['default'];