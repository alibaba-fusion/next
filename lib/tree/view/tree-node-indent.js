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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNodeIndent = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TreeNodeIndent, _Component);

    function TreeNodeIndent() {
        (0, _classCallCheck3.default)(this, TreeNodeIndent);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    TreeNodeIndent.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            level = _props.level,
            isLastChild = _props.isLastChild,
            showLine = _props.showLine;

        var indents = [];

        for (var i = 1; i < level; i++) {
            var _cx;

            var classNames = (0, _classnames2.default)(prefix + 'tree-node-indent-unit', (_cx = {}, _cx[prefix + 'line'] = !isLastChild[i - 1] && showLine, _cx));

            indents.push(_react2.default.createElement('span', { className: classNames, key: i - 1 }));
        }

        return indents;
    };

    return TreeNodeIndent;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    level: _propTypes2.default.number,
    isLastChild: _propTypes2.default.arrayOf(_propTypes2.default.bool),
    showLine: _propTypes2.default.bool
}, _class.defaultProps = {
    isLastChild: []
}, _temp);
TreeNodeIndent.displayName = 'TreeNodeIndent';
exports.default = TreeNodeIndent;
module.exports = exports['default'];