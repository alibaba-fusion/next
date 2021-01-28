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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;

/**
 * MenuButton
 */

var MenuButton = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(MenuButton, _React$Component);

    function MenuButton(props, context) {
        (0, _classCallCheck3.default)(this, MenuButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.clickMenuItem = function (key) {
            var _this$props;

            for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                others[_key - 1] = arguments[_key];
            }

            var selectMode = _this.props.selectMode;


            (_this$props = _this.props).onItemClick.apply(_this$props, [key].concat(others));

            if (selectMode === 'multiple') {
                return;
            }

            _this.onPopupVisibleChange(false, 'menuSelect');
        };

        _this.selectMenu = function (keys) {
            var _this$props2;

            for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                others[_key2 - 1] = arguments[_key2];
            }

            if (!('selectedKeys' in _this.props)) {
                _this.setState({
                    selectedKeys: keys
                });
            }
            (_this$props2 = _this.props).onSelect.apply(_this$props2, [keys].concat(others));
        };

        _this.onPopupOpen = function () {
            var button = (0, _reactDom.findDOMNode)(_this);
            if (_this.props.autoWidth && button && _this.menu) {
                _this.menu.style.width = button.offsetWidth + 'px';
            }
        };

        _this.onPopupVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible
                });
            }
            _this.props.onVisibleChange(visible, type);
        };

        _this._menuRefHandler = function (ref) {
            _this.menu = (0, _reactDom.findDOMNode)(ref);

            var refFn = _this.props.menuProps.ref;
            if (typeof refFn === 'function') {
                refFn(ref);
            }
        };

        _this.state = {
            selectedKeys: props.defaultSelectedKeys,
            visible: props.defaultVisible
        };
        return _this;
    }

    MenuButton.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var st = {};

        if ('visible' in props) {
            st.visible = props.visible;
        }

        if ('selectedKeys' in props) {
            st.selectedKeys = props.selectedKeys;
        }

        return st;
    };

    MenuButton.prototype.render = function render() {
        var _classnames, _classnames2;

        var _props = this.props,
            prefix = _props.prefix,
            style = _props.style,
            className = _props.className,
            label = _props.label,
            popupTriggerType = _props.popupTriggerType,
            popupContainer = _props.popupContainer,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            followTrigger = _props.followTrigger,
            selectMode = _props.selectMode,
            menuProps = _props.menuProps,
            children = _props.children,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'style', 'className', 'label', 'popupTriggerType', 'popupContainer', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'selectMode', 'menuProps', 'children']);


        var state = this.state;

        var classNames = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'menu-btn'] = true, _classnames[prefix + 'expand'] = state.visible, _classnames.opened = state.visible, _classnames), className);

        var popupClassNames = (0, _classnames4.default)((_classnames2 = {}, _classnames2[prefix + 'menu-btn-popup'] = true, _classnames2), popupClassName);

        var trigger = _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({
                style: style,
                className: classNames
            }, _util.obj.pickOthers(MenuButton.propTypes, others)),
            label,
            ' ',
            _react2.default.createElement(_icon2.default, { type: 'arrow-down', className: prefix + 'menu-btn-arrow' })
        );

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({}, popupProps, {
                followTrigger: followTrigger,
                visible: state.visible,
                onVisibleChange: this.onPopupVisibleChange,
                trigger: trigger,
                triggerType: popupTriggerType,
                container: popupContainer,
                onOpen: this.onPopupOpen,
                style: popupStyle,
                className: popupClassNames
            }),
            _react2.default.createElement(
                _menu2.default,
                (0, _extends3.default)({}, menuProps, {
                    ref: this._menuRefHandler,
                    selectedKeys: state.selectedKeys,
                    selectMode: selectMode,
                    onSelect: this.selectMenu,
                    onItemClick: this.clickMenuItem
                }),
                children
            )
        );
    };

    return MenuButton;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 按钮上的文本内容
     */
    label: _propTypes2.default.node,
    /**
     * 弹层是否与按钮宽度相同
     */
    autoWidth: _propTypes2.default.bool,
    /**
     * 弹层触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层容器
     */
    popupContainer: _propTypes2.default.any,
    /**
     * 弹层展开状态
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否展开
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层在显示和隐藏触发的事件
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层属性透传
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     */
    defaultSelectedKeys: _propTypes2.default.array,
    /**
     * 激活的菜单项（用法同 Menu 受控）
     */
    selectedKeys: _propTypes2.default.array,
    /**
     * 菜单的选择模式，同 Menu
     */
    selectMode: _propTypes2.default.oneOf(['single', 'multiple']),
    /**
     * 点击菜单项后的回调，同 Menu
     */
    onItemClick: _propTypes2.default.func,
    /**
     * 选择菜单后的回调，同 Menu
     */
    onSelect: _propTypes2.default.func,
    /**
     * 菜单属性透传
     */
    menuProps: _propTypes2.default.object,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    children: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    autoWidth: true,
    popupTriggerType: 'click',
    onVisibleChange: _util.func.noop,
    onItemClick: _util.func.noop,
    onSelect: _util.func.noop,
    defaultSelectedKeys: [],
    menuProps: {}
}, _temp);
MenuButton.displayName = 'MenuButton';


MenuButton.Item = _menu2.default.Item;
MenuButton.Group = _menu2.default.Group;
MenuButton.Divider = _menu2.default.Divider;

exports.default = (0, _reactLifecyclesCompat.polyfill)(MenuButton);
module.exports = exports['default'];