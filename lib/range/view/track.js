'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Track, _React$Component);

    function Track() {
        (0, _classCallCheck3.default)(this, Track);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Track.prototype.render = function render() {
        var _classNames;

        var prefix = this.props.prefix;

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-track'] = true, _classNames));

        return _react2.default.createElement('div', { className: classes });
    };

    return Track;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Track.displayName = 'Track';
exports.default = Track;
module.exports = exports['default'];