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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _animate = require('../../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _selectableItem = require('./selectable-item');

var _selectableItem2 = _interopRequireDefault(_selectableItem);

var _popupItem = require('./popup-item');

var _popupItem2 = _interopRequireDefault(_popupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expand = _animate2.default.Expand;
var bindCtx = _util.func.bindCtx;

/**
 * Menu.SubMenu
 * @order 1
 */

var SubMenu = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(SubMenu, _Component);

    function SubMenu(props) {
        (0, _classCallCheck3.default)(this, SubMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        bindCtx(_this, ['handleMouseEnter', 'handleMouseLeave', 'handleClick', 'handleOpen', 'afterLeave']);
        return _this;
    }

    SubMenu.prototype.componentDidMount = function componentDidMount() {
        this.itemNode = (0, _reactDom.findDOMNode)(this);
    };

    SubMenu.prototype.afterLeave = function afterLeave() {
        var _props = this.props,
            focused = _props.focused,
            root = _props.root;
        var focusable = root.props.focusable;

        if (focusable && focused) {
            this.itemNode.focus();
        }
    };

    SubMenu.prototype.getOpen = function getOpen() {
        var _props2 = this.props,
            _key = _props2._key,
            root = _props2.root;
        var openKeys = root.state.openKeys;


        return openKeys.indexOf(_key) > -1;
    };

    SubMenu.prototype.handleMouseEnter = function handleMouseEnter(e) {
        this.handleOpen(true);

        this.props.onMouseEnter && this.props.onMouseEnter(e);
    };

    SubMenu.prototype.handleMouseLeave = function handleMouseLeave(e) {
        this.handleOpen(false);

        this.props.onMouseLeave && this.props.onMouseLeave(e);
    };

    SubMenu.prototype.handleClick = function handleClick(e) {
        var _props3 = this.props,
            root = _props3.root,
            selectable = _props3.selectable;
        var selectMode = root.props.selectMode;

        if (selectMode && selectable) {
            e.stopPropagation();
        }

        var open = this.getOpen();
        this.handleOpen(!open);
    };

    SubMenu.prototype.handleOpen = function handleOpen(open, triggerType, e) {
        var _props4 = this.props,
            _key = _props4._key,
            root = _props4.root;

        root.handleOpen(_key, open, triggerType, e);
    };

    SubMenu.prototype.passParentToChildren = function passParentToChildren(children) {
        var _this2 = this;

        var _props5 = this.props,
            mode = _props5.mode,
            root = _props5.root;


        return _react.Children.map(children, function (child) {
            return (0, _react.cloneElement)(child, {
                parent: _this2,
                parentMode: mode || root.props.mode
            });
        });
    };

    SubMenu.prototype.renderInline = function renderInline() {
        var _cx, _cx2, _cx3;

        var _props6 = this.props,
            _key = _props6._key,
            level = _props6.level,
            root = _props6.root,
            className = _props6.className,
            selectableFromProps = _props6.selectable,
            label = _props6.label,
            children = _props6.children,
            subMenuContentClassName = _props6.subMenuContentClassName,
            propsTriggerType = _props6.triggerType,
            parentMode = _props6.parentMode;
        var _root$props = root.props,
            prefix = _root$props.prefix,
            selectMode = _root$props.selectMode,
            rootTriggerType = _root$props.triggerType,
            inlineArrowDirection = _root$props.inlineArrowDirection,
            expandAnimation = _root$props.expandAnimation;

        var triggerType = propsTriggerType || rootTriggerType;
        var open = this.getOpen();
        var others = _util.obj.pickOthers(Object.keys(SubMenu.propTypes), this.props);

        var liProps = {
            className: (0, _classnames2.default)((_cx = {}, _cx[prefix + 'menu-sub-menu-wrapper'] = true, _cx[className] = !!className, _cx))
        };
        var itemProps = {
            'aria-expanded': open,
            _key: _key,
            level: level,
            root: root,
            type: 'submenu',
            component: 'div',
            parentMode: parentMode
        };
        var arrorProps = {
            type: inlineArrowDirection === 'right' ? 'arrow-right' : 'arrow-down',
            className: (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'menu-icon-arrow'] = true, _cx2[prefix + 'menu-icon-arrow-down'] = inlineArrowDirection === 'down', _cx2[prefix + 'menu-icon-arrow-right'] = inlineArrowDirection === 'right', _cx2[prefix + 'open'] = open, _cx2))
        };

        var selectable = !!selectMode && selectableFromProps;
        var NewItem = selectable ? _selectableItem2.default : _item2.default;

        if (triggerType === 'hover') {
            liProps.onMouseEnter = this.handleMouseEnter;
            liProps.onMouseLeave = this.handleMouseLeave;
        } else if (selectable) {
            arrorProps.onClick = this.handleClick;
        } else {
            itemProps.onClick = this.handleClick;
        }
        if (open) {
            itemProps.className = prefix + 'opened';
        }

        var newSubMenuContentClassName = (0, _classnames2.default)((_cx3 = {}, _cx3[prefix + 'menu-sub-menu'] = true, _cx3[subMenuContentClassName] = !!subMenuContentClassName, _cx3));

        var subMenu = open ? _react2.default.createElement(
            'ul',
            { role: 'menu', ref: 'subMenu', className: newSubMenuContentClassName },
            this.passParentToChildren(children)
        ) : null;

        return _react2.default.createElement(
            'li',
            (0, _extends3.default)({}, others, liProps),
            _react2.default.createElement(
                NewItem,
                itemProps,
                _react2.default.createElement(
                    'span',
                    { className: prefix + 'menu-item-text' },
                    label
                ),
                _react2.default.createElement(_icon2.default, arrorProps)
            ),
            expandAnimation ? _react2.default.createElement(
                Expand,
                { animationAppear: false, afterLeave: this.afterLeave },
                subMenu
            ) : subMenu
        );
    };

    SubMenu.prototype.renderPopup = function renderPopup() {
        var _cx4;

        var _props7 = this.props,
            children = _props7.children,
            subMenuContentClassName = _props7.subMenuContentClassName,
            others = (0, _objectWithoutProperties3.default)(_props7, ['children', 'subMenuContentClassName']);

        var root = this.props.root;
        var _root$props2 = root.props,
            prefix = _root$props2.prefix,
            popupClassName = _root$props2.popupClassName,
            popupStyle = _root$props2.popupStyle;


        var newClassName = (0, _classnames2.default)((_cx4 = {}, _cx4[prefix + 'menu'] = true, _cx4[prefix + 'ver'] = true, _cx4[popupClassName] = !!popupClassName, _cx4[subMenuContentClassName] = !!subMenuContentClassName, _cx4));

        return _react2.default.createElement(
            _popupItem2.default,
            (0, _extends3.default)({}, others, { hasSubMenu: true }),
            _react2.default.createElement(
                'ul',
                { role: 'menu', className: newClassName, style: popupStyle },
                this.passParentToChildren(children)
            )
        );
    };

    SubMenu.prototype.render = function render() {
        var _props8 = this.props,
            mode = _props8.mode,
            root = _props8.root;

        var newMode = mode || root.props.mode;

        return newMode === 'popup' ? this.renderPopup() : this.renderInline();
    };

    return SubMenu;
}(_react.Component), _class.menuChildType = 'submenu', _class.propTypes = {
    _key: _propTypes2.default.string,
    root: _propTypes2.default.object,
    level: _propTypes2.default.number,
    groupIndent: _propTypes2.default.number,
    /**
     * 标签内容
     */
    label: _propTypes2.default.node,
    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     */
    selectable: _propTypes2.default.bool,
    /**
     * 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性
     * @default Menu 的 mode 属性值
     */
    mode: _propTypes2.default.oneOf(['inline', 'popup']),
    /**
     * 菜单项或下一级子菜单
     */
    children: _propTypes2.default.node,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    subMenuContentClassName: _propTypes2.default.string,
    triggerType: _propTypes2.default.oneOf(['click', 'hover']),
    align: _propTypes2.default.oneOf(['outside', 'follow']),
    parentMode: _propTypes2.default.oneOf(['inline', 'popup'])
}, _class.defaultProps = {
    groupIndent: 0,
    selectable: false
}, _temp);
SubMenu.displayName = 'SubMenu';
exports.default = SubMenu;
module.exports = exports['default'];