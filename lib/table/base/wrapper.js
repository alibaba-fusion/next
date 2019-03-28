'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var Wrapper = function (_Component) {
    (0, _inherits3.default)(Wrapper, _Component);

    function Wrapper() {
        (0, _classCallCheck3.default)(this, Wrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Wrapper.prototype.render = function render() {
        var _props = this.props,
            colGroup = _props.colGroup,
            children = _props.children,
            Tag = _props.component;

        return _react2.default.createElement(
            Tag,
            { role: 'table' },
            colGroup,
            children
        );
    };

    return Wrapper;
}(_react.Component);

Wrapper.displayName = 'Wrapper';
exports.default = Wrapper;


Wrapper.defaultProps = {
    component: 'table'
};

Wrapper.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    colGroup: _propTypes2.default.any,
    component: _propTypes2.default.string
};
module.exports = exports['default'];