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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;

/**
 * SplitButton
 */

var SplitButton = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(SplitButton, _React$Component);

    function SplitButton(props, context) {
        (0, _classCallCheck3.default)(this, SplitButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.selectMenuItem = function (keys) {
            var _this$props;

            for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                others[_key - 1] = arguments[_key];
            }

            if (!('selectedKeys' in _this.props)) {
                _this.setState({
                    selectedKeys: keys
                });
            }
            (_this$props = _this.props).onSelect.apply(_this$props, [keys].concat(others));
        };

        _this.clickMenuItem = function (key) {
            var _this$props2;

            for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                others[_key2 - 1] = arguments[_key2];
            }

            (_this$props2 = _this.props).onItemClick.apply(_this$props2, [key].concat(others));
            _this.onVisibleChange(false, 'menuSelect');
        };

        _this.onPopupOpen = function () {
            if (_this.props.autoWidth && _this.wrapper && _this.menu) {
                _util.dom.setStyle(_this.menu, {
                    width: _this.wrapper.offsetWidth
                });
            }
        };

        _this.onVisibleChange = function (visible, reason) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible
                });
            }
            _this.props.onVisibleChange(visible, reason);
        };

        _this._menuRefHandler = function (ref) {
            _this.menu = (0, _reactDom.findDOMNode)(ref);

            var refFn = _this.props.menuProps.ref;
            if (typeof refFn === 'function') {
                refFn(ref);
            }
        };

        _this._wrapperRefHandler = function (ref) {
            _this.wrapper = (0, _reactDom.findDOMNode)(ref);
        };

        _this.state = {
            selectedKeys: props.defaultSelectedKeys,
            visible: props.defaultVisible
        };
        return _this;
    }

    SplitButton.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
        var st = {};

        if ('visible' in props) {
            st.visible = props.visible;
        }

        if ('selectedKeys' in props) {
            st.selectedKeys = props.selectedKeys;
        }

        return st;
    };

    SplitButton.prototype.componentDidMount = function componentDidMount() {
        // 由于定位目标是 wrapper，如果弹层默认展开，wrapper 还未渲染，didMount 后强制再渲染一次，弹层重新定位
        if (this.state.visible) {
            this.forceUpdate();
        }
    };

    SplitButton.prototype.render = function render() {
        var _classnames,
            _classnames2,
            _classnames3,
            _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            label = _props.label,
            size = _props.size,
            type = _props.type,
            component = _props.component,
            ghost = _props.ghost,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            triggerProps = _props.triggerProps,
            popupAlign = _props.popupAlign,
            popupTriggerType = _props.popupTriggerType,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            followTrigger = _props.followTrigger,
            selectMode = _props.selectMode,
            menuProps = _props.menuProps,
            leftButtonProps = _props.leftButtonProps,
            disabled = _props.disabled,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'label', 'size', 'type', 'component', 'ghost', 'className', 'style', 'children', 'triggerProps', 'popupAlign', 'popupTriggerType', 'popupStyle', 'popupClassName', 'popupProps', 'followTrigger', 'selectMode', 'menuProps', 'leftButtonProps', 'disabled']);


        var state = this.state;

        var classNames = (0, _classnames5.default)((_classnames = {}, _classnames[prefix + 'split-btn'] = true, _classnames), className);

        var sharedBtnProps = {
            type: type,
            size: size,
            component: component,
            ghost: ghost,
            disabled: disabled
        };

        var triggerClassNames = (0, _classnames5.default)((_classnames2 = {}, _classnames2[prefix + 'split-btn-trigger'] = true, _classnames2[prefix + 'expand'] = state.visible, _classnames2.opened = state.visible, _classnames2));

        var iconCls = (0, _classnames5.default)((_classnames3 = {}, _classnames3[prefix + 'split-btn-symbol-fold'] = true, _classnames3));

        var trigger = _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({}, triggerProps, sharedBtnProps, {
                className: triggerClassNames
            }),
            _react2.default.createElement(_icon2.default, { type: 'arrow-down', className: iconCls })
        );

        return _react2.default.createElement(
            _button2.default.Group,
            (0, _extends3.default)({}, _util.obj.pickOthers(SplitButton.propTypes, others), {
                className: classNames,
                style: style,
                size: size,
                ref: this._wrapperRefHandler
            }),
            _react2.default.createElement(
                _button2.default,
                (0, _extends3.default)({}, sharedBtnProps, leftButtonProps),
                label
            ),
            _react2.default.createElement(
                Popup,
                (0, _extends3.default)({}, popupProps, {
                    followTrigger: followTrigger,
                    visible: state.visible,
                    onVisibleChange: this.onVisibleChange,
                    trigger: trigger,
                    triggerType: popupTriggerType,
                    align: popupAlign,
                    target: function target() {
                        return _this2.wrapper;
                    },
                    style: popupStyle,
                    shouldUpdatePosition: true,
                    className: popupClassName,
                    onOpen: this.onPopupOpen
                }),
                _react2.default.createElement(
                    _menu2.default,
                    (0, _extends3.default)({}, menuProps, {
                        selectMode: selectMode,
                        selectedKeys: state.selectedKeys,
                        onSelect: this.selectMenuItem,
                        onItemClick: this.clickMenuItem,
                        ref: this._menuRefHandler
                    }),
                    children
                )
            )
        );
    };

    return SplitButton;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 按钮的类型
     */
    type: _propTypes2.default.oneOf(['normal', 'primary', 'secondary']),
    /**
     * 按钮组的尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 主按钮的文案
     */
    label: _propTypes2.default.node,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.oneOf(['button', 'a']),
    /**
     * 是否为幽灵按钮
     */
    ghost: _propTypes2.default.oneOf(['light', 'dark', false, true]),
    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     */
    defaultSelectedKeys: _propTypes2.default.array,
    /**
     * 激活的菜单项（用法同 Menu 受控）
     */
    selectedKeys: _propTypes2.default.array,
    /**
     * 菜单的选择模式
     */
    selectMode: _propTypes2.default.oneOf(['single', 'multiple']),
    /**
     * 选择菜单项时的回调，参考 Menu
     */
    onSelect: _propTypes2.default.func,
    /**
     * 点击菜单项时的回调，参考 Menu
     */
    onItemClick: _propTypes2.default.func,
    /**
     * 触发按钮的属性（支持 Button 的所有属性透传）
     */
    triggerProps: _propTypes2.default.object,
    /**
     * 弹层菜单的宽度是否与按钮组一致
     */
    autoWidth: _propTypes2.default.bool,
    /**
     * 弹层是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层显示状态变化时的回调函数
     * @param {Boolean} visible 弹层显示状态
     * @param {String} type 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹层的触发方式
     */
    popupTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 弹层对齐方式, 详情见Overlay align
     */
    popupAlign: _propTypes2.default.string,
    /**
     * 弹层自定义样式
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层自定义样式类
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 透传给弹层的属性
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 透传给 Menu 的属性
     */
    menuProps: _propTypes2.default.object,
    /**
     * 透传给 左侧按钮 的属性
     */
    leftButtonProps: _propTypes2.default.object,
    className: _propTypes2.default.string,
    children: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'normal',
    size: 'medium',
    autoWidth: true,
    popupTriggerType: 'click',
    onVisibleChange: _util.func.noop,
    onItemClick: _util.func.noop,
    onSelect: _util.func.noop,
    defaultSelectedKeys: [],
    menuProps: {},
    leftButtonProps: {}
}, _temp);
SplitButton.displayName = 'SplitButton';


SplitButton.Item = _menu2.default.Item;
SplitButton.Divider = _menu2.default.Divider;
SplitButton.Group = _menu2.default.Group;

exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(SplitButton));
module.exports = exports['default'];