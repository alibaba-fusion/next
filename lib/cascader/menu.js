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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CascaderMenu = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CascaderMenu, _Component);

    function CascaderMenu() {
        (0, _classCallCheck3.default)(this, CascaderMenu);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    CascaderMenu.prototype.componentDidMount = function componentDidMount() {
        var prefix = this.props.prefix;

        var itemSelector = '.' + prefix + 'menu-item';
        var menu = (0, _reactDom.findDOMNode)(this.refs.menu);
        var targetItem = menu.querySelector(itemSelector + '.' + prefix + 'expanded, ' + itemSelector + '.' + prefix + 'selected');
        if (targetItem) {
            menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
        }
    };

    CascaderMenu.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'children']);

        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'cascader-menu'] = true, _cx[className] = !!className, _cx));

        return _react2.default.createElement(
            _menu2.default,
            (0, _extends3.default)({ labelToggleChecked: false, className: newClassName, ref: 'menu', role: 'listbox' }, others),
            children
        );
    };

    return CascaderMenu;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    children: _propTypes2.default.node
}, _temp);
CascaderMenu.displayName = 'CascaderMenu';
exports.default = CascaderMenu;
module.exports = exports['default'];