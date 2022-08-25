'use strict';

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function Track(_ref) {
    var _classNames;

    var prefix = _ref.prefix;

    var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range-track'] = true, _classNames));
    return _react2.default.createElement('div', { className: classes });
};

Track.propTypes = {
    prefix: _propTypes2.default.string
};

Track.defaultProps = {
    prefix: 'next-'
};

exports.default = Track;
module.exports = exports['default'];