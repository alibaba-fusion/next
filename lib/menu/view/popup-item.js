'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _overlay = require('../../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _util = require('../../util');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _selectableItem = require('./selectable-item');

var _selectableItem2 = _interopRequireDefault(_selectableItem);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var setStyle = _util.dom.setStyle;

var Popup = _overlay2.default.Popup;

/**
 * Menu.PopupItem
 * @order 2
 */
var PopupItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(PopupItem, _Component);

    function PopupItem(props) {
        (0, _classCallCheck3.default)(this, PopupItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        bindCtx(_this, ['handleOpen', 'handlePopupOpen', 'handlePopupClose', 'getPopup']);
        return _this;
    }

    PopupItem.prototype.getPopup = function getPopup(ref) {
        this.popup = ref;
    };

    PopupItem.prototype.getOpen = function getOpen() {
        var _props = this.props,
            _key = _props._key,
            root = _props.root;
        var openKeys = root.state.openKeys;


        return openKeys.indexOf(_key) > -1;
    };

    PopupItem.prototype.getPopupProps = function getPopupProps() {
        var popupProps = this.props.root.props.popupProps;

        if (typeof popupProps === 'function') {
            popupProps = popupProps(this.props);
        }
        return popupProps;
    };

    PopupItem.prototype.handleOpen = function handleOpen(open, triggerType, e) {
        var _props2 = this.props,
            _key = _props2._key,
            root = _props2.root;

        root.handleOpen(_key, open, triggerType, e);

        var popupProps = this.popupProps;
        popupProps.onVisibleChange && popupProps.onVisibleChange(open, triggerType, e);
    };

    PopupItem.prototype.handlePopupOpen = function handlePopupOpen() {
        var _props3 = this.props,
            root = _props3.root,
            level = _props3.level,
            align = _props3.align,
            autoWidth = _props3.autoWidth;
        var _root$props = root.props,
            rootPopupAutoWidth = _root$props.popupAutoWidth,
            rootPopupAlign = _root$props.popupAlign,
            direction = _root$props.direction;

        var popupAlign = align || rootPopupAlign;
        var popupAutoWidth = 'autoWidth' in this.props ? autoWidth : rootPopupAutoWidth;
        var itemNode = (0, _reactDom.findDOMNode)(this);
        var menuNode = itemNode.parentNode;
        this.popupNode = this.popup.getInstance().overlay.getInstance().getContentNode();
        root.popupNodes.push(this.popupNode);

        if (popupAutoWidth) {
            var targetNode = direction === 'hoz' && level === 1 ? itemNode : menuNode;

            if (targetNode.offsetWidth > this.popupNode.offsetWidth) {
                setStyle(this.popupNode, 'width', targetNode.offsetWidth + 'px');
            }
        }
        if (popupAlign === 'outside' && !(direction === 'hoz' && level === 1)) {
            setStyle(this.popupNode, 'height', menuNode.offsetHeight + 'px');
            setStyle(this.popupNode, 'overflow-y', 'scroll');
        }
        // removeClass(this.popupNode, `${prefix}hide`);

        var popupProps = this.popupProps;
        popupProps.onOpen && popupProps.onOpen();
    };

    PopupItem.prototype.handlePopupClose = function handlePopupClose() {
        var root = this.props.root;

        var popupNodes = root.popupNodes;
        var index = popupNodes.indexOf(this.popupNode);
        index > -1 && popupNodes.splice(index, 1);

        var popupProps = this.popupProps;
        popupProps.onClose && popupProps.onClose();
    };

    PopupItem.prototype.renderItem = function renderItem(selectable, children, others) {
        var _cx;

        var _props4 = this.props,
            _key = _props4._key,
            root = _props4.root,
            level = _props4.level,
            inlineLevel = _props4.inlineLevel,
            label = _props4.label,
            className = _props4.className;
        var _root$props2 = root.props,
            prefix = _root$props2.prefix,
            selectMode = _root$props2.selectMode;

        var NewItem = selectable ? _selectableItem2.default : _item2.default;
        var open = this.getOpen();

        var selectedKeys = root.state.selectedKeys;

        var isChildSelected = (0, _util2.getChildSelected)({
            _key: _key,
            root: root,
            selectMode: selectMode,
            selectedKeys: selectedKeys
        });

        var itemProps = {
            'aria-haspopup': true,
            'aria-expanded': open,
            _key: _key,
            root: root,
            level: level,
            inlineLevel: inlineLevel,
            type: 'submenu'
        };

        itemProps.className = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'opened'] = open, _cx[prefix + 'child-selected'] = isChildSelected, _cx[className] = !!className, _cx));

        return _react2.default.createElement(
            NewItem,
            (0, _extends3.default)({}, itemProps, others),
            _react2.default.createElement(
                'span',
                { className: prefix + 'menu-item-text' },
                label
            ),
            children
        );
    };

    PopupItem.prototype.renderPopup = function renderPopup(trigger, triggerType, positionProps, children) {
        var _this2 = this;

        var _props5 = this.props,
            root = _props5.root,
            level = _props5.level,
            selectable = _props5.selectable;
        var direction = root.props.direction;

        this.popupProps = this.getPopupProps();
        var open = this.getOpen();

        if (direction === 'hoz' && level === 1 && selectable) {
            positionProps.target = function () {
                return (0, _reactDom.findDOMNode)(_this2);
            };
        }

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({
                ref: this.getPopup
            }, positionProps, this.popupProps, {
                canCloseByEsc: false,
                trigger: trigger,
                triggerType: triggerType,
                visible: open,
                onVisibleChange: this.handleOpen,
                onOpen: this.handlePopupOpen,
                onClose: this.handlePopupClose
            }),
            children
        );
    };

    PopupItem.prototype.render = function render() {
        var _this3 = this;

        var _props6 = this.props,
            root = _props6.root,
            level = _props6.level,
            hasSubMenu = _props6.hasSubMenu,
            selectableFromProps = _props6.selectable,
            children = _props6.children,
            triggerType = _props6.triggerType,
            align = _props6.align,
            noIcon = _props6.noIcon,
            rtl = _props6.rtl;

        var others = _util.obj.pickOthers(Object.keys(PopupItem.propTypes), this.props);
        var _root$props3 = root.props,
            prefix = _root$props3.prefix,
            selectMode = _root$props3.selectMode,
            direction = _root$props3.direction,
            rootPopupAlign = _root$props3.popupAlign,
            rootTriggerType = _root$props3.triggerType;

        var popupAlign = align || rootPopupAlign;
        var newTriggerType = triggerType || (hasSubMenu ? rootTriggerType : 'hover');
        var newChildren = Array.isArray(children) ? children[0] : children;
        // let newChildren = Array.isArray(children) ? children[0] : children;
        // newChildren = cloneElement(newChildren, {
        //     className: cx({
        //         [`${prefix}menu-popup-content`]: true,
        //         [newChildren.props.className]: !!newChildren.props.className,
        //         [`${prefix}hide`]: popupAutoWidth || popupAlign === 'outside'
        //     })
        // });
        var selectable = selectMode && selectableFromProps;
        var triggerIsIcon = selectable && newTriggerType === 'click';
        var open = this.getOpen();

        var positionProps = {};
        var arrowProps = void 0;

        if (direction === 'hoz' && level === 1) {
            var _cx2;

            positionProps.align = 'tl bl';
            positionProps.offset = [0, 0];

            arrowProps = {
                type: 'arrow-down',
                className: (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'menu-hoz-icon-arrow'] = true, _cx2[prefix + 'open'] = open, _cx2))
            };
        } else {
            if (popupAlign === 'outside') {
                positionProps.target = function () {
                    return (0, _reactDom.findDOMNode)(root);
                };
                positionProps.align = 'tl tr';

                rtl ? positionProps.offset = [-2, 0] : positionProps.offset = [2, 0];
            } else {
                if (triggerIsIcon) {
                    positionProps.target = function () {
                        return (0, _reactDom.findDOMNode)(_this3);
                    };
                }
                positionProps.align = 'tl tr';

                rtl ? positionProps.offset = [2, -8] : positionProps.offset = [-2, -8];
            }

            arrowProps = {
                type: 'arrow-right',
                className: prefix + 'menu-icon-arrow'
            };
        }

        var arrow = _react2.default.createElement(_icon2.default, arrowProps);
        var trigger = triggerIsIcon ? arrow : this.renderItem(selectable, noIcon ? null : arrow, others);
        var popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
        return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
    };

    return PopupItem;
}(_react.Component), _class.menuChildType = 'submenu', _class.propTypes = {
    _key: _propTypes2.default.string,
    root: _propTypes2.default.object,
    level: _propTypes2.default.number,
    hasSubMenu: _propTypes2.default.bool,
    noIcon: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    selectable: _propTypes2.default.bool,
    /**
     * 标签内容
     */
    label: _propTypes2.default.node,
    /**
     * 自定义弹层内容
     */
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    triggerType: _propTypes2.default.oneOf(['click', 'hover']),
    align: _propTypes2.default.oneOf(['outside', 'follow']),
    autoWidth: _propTypes2.default.bool
}, _class.defaultProps = {
    selectable: false,
    noIcon: false
}, _temp);
PopupItem.displayName = 'PopupItem';
exports.default = PopupItem;
module.exports = exports['default'];