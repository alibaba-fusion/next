'use strict';

exports.__esModule = true;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nav.Group
 * @description 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档
 */
var Group = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Group, _Component);

    function Group() {
        (0, _classCallCheck3.default)(this, Group);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _classNames;

        var _context = this.context,
            prefix = _context.prefix,
            iconOnly = _context.iconOnly;
        var _props = this.props,
            className = _props.className,
            children = _props.children,
            label = _props.label,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'label']);


        var newLabel = label;
        if (iconOnly) {
            // TODO: add a group icon ?
            newLabel = [_react2.default.createElement(
                'span',
                { key: 'label' },
                label
            )];
        }

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'nav-group-label'] = true, _classNames[className] = !!className, _classNames));

        return _react2.default.createElement(
            _menu2.default.Group,
            (0, _extends3.default)({ className: cls, label: newLabel }, others),
            children
        );
    };

    return Group;
}(_react.Component), _class.menuChildType = 'group', _class.propTypes = {
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 标签内容
     */
    label: _propTypes2.default.node,
    /**
     * 导航项和子导航
     */
    children: _propTypes2.default.node
}, _class.contextTypes = {
    prefix: _propTypes2.default.string,
    iconOnly: _propTypes2.default.bool
}, _temp);
Group.displayName = 'Group';
exports.default = Group;
module.exports = exports['default'];