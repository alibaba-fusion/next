'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNodeInput = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TreeNodeInput, _Component);

    function TreeNodeInput() {
        (0, _classCallCheck3.default)(this, TreeNodeInput);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    TreeNodeInput.prototype.componentDidMount = function componentDidMount() {
        var inputWrapperNode = (0, _reactDom.findDOMNode)(this);
        inputWrapperNode.querySelector('input').focus();
    };

    TreeNodeInput.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix']);


        return _react2.default.createElement(_input2.default, (0, _extends3.default)({
            size: 'small',
            className: prefix + 'tree-node-input'
        }, others));
    };

    return TreeNodeInput;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string
}, _temp);
TreeNodeInput.displayName = 'TreeNodeInput';
exports.default = TreeNodeInput;
module.exports = exports['default'];