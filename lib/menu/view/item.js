'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;
var Item = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Item, _Component);

    function Item(props) {
        (0, _classCallCheck3.default)(this, Item);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        bindCtx(_this, ['handleClick', 'handleKeyDown']);
        return _this;
    }

    Item.prototype.componentDidMount = function componentDidMount() {
        this.itemNode = (0, _reactDom.findDOMNode)(this);

        var _props = this.props,
            parentMode = _props.parentMode,
            root = _props.root,
            menu = _props.menu;

        if (menu) {
            this.menuNode = (0, _reactDom.findDOMNode)(menu);
        } else if (parentMode === 'popup') {
            this.menuNode = this.itemNode.parentNode;
        } else {
            this.menuNode = (0, _reactDom.findDOMNode)(root);
            var _root$props = root.props,
                prefix = _root$props.prefix,
                header = _root$props.header,
                footer = _root$props.footer;

            if (header || footer) {
                this.menuNode = this.menuNode.querySelector('.' + prefix + 'menu-content');
            }
        }

        this.setFocus();
    };

    Item.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setFocus();
    };

    Item.prototype.focusable = function focusable() {
        var _props2 = this.props,
            root = _props2.root,
            type = _props2.type,
            disabled = _props2.disabled;
        var focusable = root.props.focusable;

        return focusable && (type === 'submenu' || !disabled);
    };

    Item.prototype.getFocused = function getFocused() {
        var _props3 = this.props,
            _key = _props3._key,
            root = _props3.root;
        var focusedKey = root.state.focusedKey;

        return focusedKey === _key;
    };

    Item.prototype.setFocus = function setFocus() {
        var focused = this.getFocused();
        if (focused) {
            if (this.focusable()) {
                this.itemNode.focus({ preventScroll: true });
            }
            if (this.menuNode && this.menuNode.scrollHeight > this.menuNode.clientHeight) {
                var scrollBottom = this.menuNode.clientHeight + this.menuNode.scrollTop;
                var itemBottom = this.itemNode.offsetTop + this.itemNode.offsetHeight;
                if (itemBottom > scrollBottom) {
                    this.menuNode.scrollTop = itemBottom - this.menuNode.clientHeight;
                } else if (this.itemNode.offsetTop < this.menuNode.scrollTop) {
                    this.menuNode.scrollTop = this.itemNode.offsetTop;
                }
            }
        }
    };

    Item.prototype.handleClick = function handleClick(e) {
        e.stopPropagation();

        var _props4 = this.props,
            _key = _props4._key,
            root = _props4.root,
            disabled = _props4.disabled;


        if (!disabled) {
            root.handleItemClick(_key, this, e);

            this.props.onClick && this.props.onClick(e);
        } else {
            e.preventDefault();
        }
    };

    Item.prototype.handleKeyDown = function handleKeyDown(e) {
        var _props5 = this.props,
            _key = _props5._key,
            root = _props5.root,
            type = _props5.type;


        if (this.focusable()) {
            root.handleItemKeyDown(_key, type, this, e);

            switch (e.keyCode) {
                case _util.KEYCODE.ENTER:
                    {
                        if (!(type === 'submenu')) {
                            this.handleClick(e);
                        }
                        break;
                    }
            }
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    };

    Item.prototype.getTitle = function getTitle(children) {
        var labelString = '';

        var loop = function loop(children) {
            _react.Children.forEach(children, function (child) {
                if ((0, _react.isValidElement)(child) && child.props.children) {
                    loop(child.props.children);
                } else if (typeof child === 'string') {
                    labelString += child;
                }
            });
        };

        loop(children);

        return labelString;
    };

    Item.prototype.render = function render() {
        var _cx;

        var _props6 = this.props,
            inlineLevel = _props6.inlineLevel,
            root = _props6.root,
            replaceClassName = _props6.replaceClassName,
            groupIndent = _props6.groupIndent,
            component = _props6.component,
            disabled = _props6.disabled,
            className = _props6.className,
            children = _props6.children,
            needIndent = _props6.needIndent,
            parentMode = _props6.parentMode,
            _key = _props6._key;

        var others = pickOthers(Object.keys(Item.propTypes), this.props);

        var _root$props2 = root.props,
            prefix = _root$props2.prefix,
            focusable = _root$props2.focusable,
            inlineIndent = _root$props2.inlineIndent,
            itemClassName = _root$props2.itemClassName,
            rtl = _root$props2.rtl;

        var focused = this.getFocused();

        var newClassName = replaceClassName ? className : (0, _classnames2.default)((_cx = {}, _cx[prefix + 'menu-item'] = true, _cx[prefix + 'disabled'] = disabled, _cx[prefix + 'focused'] = !focusable && focused, _cx[itemClassName] = !!itemClassName, _cx[className] = !!className, _cx));
        if (disabled) {
            others['aria-disabled'] = true;
            others['aria-hidden'] = true;
        }

        others.tabIndex = root.state.tabbableKey === _key ? '0' : '-1';

        if (parentMode === 'inline' && inlineLevel > 1 && inlineIndent > 0 && needIndent) {
            var _extends2;

            var paddingProp = rtl ? 'paddingRight' : 'paddingLeft';
            others.style = (0, _extends4.default)({}, others.style || {}, (_extends2 = {}, _extends2[paddingProp] = inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent + 'px', _extends2));
        }
        var TagName = component;

        var role = 'menuitem';
        if ('selectMode' in root.props) {
            role = 'option';
        }

        return _react2.default.createElement(
            TagName,
            (0, _extends4.default)({
                role: role,
                title: this.getTitle(children)
            }, others, {
                className: newClassName,
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown
            }),
            _react2.default.createElement(
                'div',
                { className: prefix + 'menu-item-inner' },
                children
            )
        );
    };

    return Item;
}(_react.Component), _class.propTypes = {
    _key: _propTypes2.default.string,
    level: _propTypes2.default.number,
    inlineLevel: _propTypes2.default.number,
    groupIndent: _propTypes2.default.number,
    root: _propTypes2.default.object,
    menu: _propTypes2.default.any,
    parent: _propTypes2.default.object,
    parentMode: _propTypes2.default.oneOf(['inline', 'popup']),
    type: _propTypes2.default.oneOf(['submenu', 'item']),
    component: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    needIndent: _propTypes2.default.bool,
    replaceClassName: _propTypes2.default.bool
}, _class.defaultProps = {
    component: 'li',
    groupIndent: 0,
    replaceClassName: false,
    needIndent: true
}, _temp);
Item.displayName = 'Item';
exports.default = Item;
module.exports = exports['default'];