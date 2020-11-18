'use strict';

exports.__esModule = true;
exports.default = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _virtualList = require('../virtual-list');

var _virtualList2 = _interopRequireDefault(_virtualList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CascaderMenu = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(CascaderMenu, _Component);

    function CascaderMenu() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CascaderMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveMenuRef = function (ref) {
            _this.menuEl = ref;
        }, _this.saveVirtualRef = function (ref) {
            _this.virtualEl = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    CascaderMenu.prototype.componentDidMount = function componentDidMount() {
        this.scrollToSelectedItem();
    };

    CascaderMenu.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
        var _props = this.props,
            prefix = _props.prefix,
            useVirtual = _props.useVirtual,
            children = _props.children;

        if (!children || children.length === 0) {
            return;
        }
        var selectedIndex = children.findIndex(function (item) {
            return !!item.props.checked || !!item.props.selected || !!item.props.expanded;
        });

        if (selectedIndex === -1) {
            return;
        }

        if (useVirtual) {
            var instance = this.virtualEl.getInstance();
            setTimeout(function () {
                return instance.scrollTo(selectedIndex);
            }, 0);
        } else {
            var itemSelector = '.' + prefix + 'menu-item';
            var menu = (0, _reactDom.findDOMNode)(this.menuEl);
            var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
            if (targetItem) {
                menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
            }
        }
    };

    CascaderMenu.prototype.renderMenu = function renderMenu(items, ref, props) {
        var _this2 = this;

        return _react2.default.createElement(
            _menu2.default,
            (0, _extends3.default)({ ref: ref, role: 'listbox' }, props),
            items.map(function (node) {
                if (_react2.default.isValidElement(node) && node.type.menuChildType === 'item') {
                    return _react2.default.cloneElement(node, {
                        menu: _this2
                    });
                }

                return node;
            })
        );
    };

    CascaderMenu.prototype.render = function render() {
        var _this3 = this;

        var _props2 = this.props,
            prefix = _props2.prefix,
            useVirtual = _props2.useVirtual,
            className = _props2.className,
            style = _props2.style,
            children = _props2.children,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'useVirtual', 'className', 'style', 'children']);

        var menuProps = (0, _extends3.default)({
            labelToggleChecked: false,
            className: prefix + 'cascader-menu'
        }, others);
        return _react2.default.createElement(
            'div',
            {
                ref: this.saveMenuRef,
                className: prefix + 'cascader-menu-wrapper ' + (className ? className : ''),
                style: style
            },
            useVirtual ? _react2.default.createElement(
                _virtualList2.default,
                {
                    ref: this.saveVirtualRef,
                    itemsRenderer: function itemsRenderer(items, ref) {
                        return _this3.renderMenu(items, ref, menuProps);
                    }
                },
                children
            ) : this.renderMenu(children, undefined, menuProps)
        );
    };

    return CascaderMenu;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    useVirtual: _propTypes2.default.bool,
    children: _propTypes2.default.node
}, _temp2);
CascaderMenu.displayName = 'CascaderMenu';
exports.default = CascaderMenu;
module.exports = exports['default'];