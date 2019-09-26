'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Menu.Group
 * @order 5
 */
var Group = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Group, _Component);

    function Group() {
        (0, _classCallCheck3.default)(this, Group);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            root = _props.root,
            className = _props.className,
            label = _props.label,
            children = _props.children,
            parentMode = _props.parentMode,
            others = (0, _objectWithoutProperties3.default)(_props, ['root', 'className', 'label', 'children', 'parentMode']);
        var prefix = root.props.prefix;


        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'menu-group-label'] = true, _cx[className] = !!className, _cx));

        var newChildren = children.map(function (child) {
            var _cx2;

            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && (typeof child === 'undefined' ? 'undefined' : (0, _typeof3.default)(child)) !== 'object') {
                return child;
            }
            var className = child.props.className;

            var newChildClassName = (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'menu-group-item'] = true, _cx2[className] = !!className, _cx2));

            return (0, _react.cloneElement)(child, {
                parentMode: parentMode,
                className: newChildClassName
            });
        });

        return [_react2.default.createElement(
            _item2.default,
            (0, _extends3.default)({
                key: 'menu-group-label',
                className: newClassName,
                replaceClassName: true,
                root: root,
                parentMode: parentMode
            }, others),
            label
        )].concat(newChildren);
    };

    return Group;
}(_react.Component), _class.menuChildType = 'group', _class.propTypes = {
    root: _propTypes2.default.object,
    className: _propTypes2.default.string,
    /**
     * 标签内容
     */
    label: _propTypes2.default.node,
    /**
     * 菜单项
     */
    children: _propTypes2.default.node,
    parentMode: _propTypes2.default.oneOf(['inline', 'popup'])
}, _temp);
Group.displayName = 'Group';
exports.default = Group;
module.exports = exports['default'];