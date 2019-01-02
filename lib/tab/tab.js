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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('../util');

var _nav = require('./tabs/nav');

var _nav2 = _interopRequireDefault(_nav);

var _content = require('./tabs/content');

var _content2 = _interopRequireDefault(_content);

var _tabItem = require('./tabs/tab-item');

var _tabItem2 = _interopRequireDefault(_tabItem);

var _utils = require('./tabs/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

/** Tab */
var Tab = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Tab, _Component);

    function Tab(props, context) {
        (0, _classCallCheck3.default)(this, Tab);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this.handleTriggerEvent = function (eventType, key) {
            var _this$props = _this.props,
                triggerType = _this$props.triggerType,
                onClick = _this$props.onClick,
                onChange = _this$props.onChange;

            if (triggerType === eventType) {
                onClick(key);
                _this.setActiveKey(key);
                if (_this.state.activeKey !== key) {
                    onChange(key);
                }
            }
        };

        _this.onNavKeyDown = function (e) {
            var keyCode = e.keyCode;
            if (keyCode >= _util.KEYCODE.LEFT && keyCode <= _util.KEYCODE.DOWN) {
                e.preventDefault();
            }
            var newKey = void 0;
            if (keyCode === _util.KEYCODE.RIGHT || keyCode === _util.KEYCODE.DOWN) {
                newKey = _this.getNextActiveKey(true);
                _this.handleTriggerEvent(_this.props.triggerType, newKey);
            } else if (keyCode === _util.KEYCODE.LEFT || keyCode === _util.KEYCODE.UP) {
                newKey = _this.getNextActiveKey(false);
                _this.handleTriggerEvent(_this.props.triggerType, newKey);
            }
        };

        _this.state = {
            activeKey: _this.getDefaultActiveKey(props)
        };
        return _this;
    }

    Tab.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.activeKey && this.state.activeKey !== nextProps.activeKey) {
            this.setState({
                activeKey: nextProps.activeKey
            });
        }
    };

    Tab.prototype.getDefaultActiveKey = function getDefaultActiveKey(props) {
        var activeKey = props.activeKey || props.defaultActiveKey;
        if (!activeKey) {
            _react2.default.Children.forEach(props.children, function (child, index) {
                if (_react2.default.isValidElement(child)) {
                    /* eslint-disable eqeqeq */
                    if (activeKey == undefined && !child.props.disabled) {
                        activeKey = child.key || index;
                    }
                }
            });
        }
        return activeKey;
    };

    Tab.prototype.getNextActiveKey = function getNextActiveKey(isNext) {
        var _this2 = this;

        var children = [];
        _react2.default.Children.forEach(this.props.children, function (child) {
            if (_react2.default.isValidElement(child)) {
                if (!child.props.disabled) {
                    if (isNext) {
                        children.push(child);
                    } else {
                        children.unshift(child);
                    }
                }
            }
        });

        var length = children.length;
        var key = length && children[0].key;
        children.forEach(function (child, i) {
            if (child.key === _this2.state.activeKey) {
                if (i === length - 1) {
                    key = children[0].key;
                } else {
                    key = children[i + 1].key;
                }
            }
        });
        return key;
    };

    Tab.prototype.setActiveKey = function setActiveKey(key) {
        var activeKey = this.state.activeKey;

        // 如果 key 没变，或者受控状态下，则跳过

        if (key === activeKey || 'activeKey' in this.props) {
            return;
        }
        this.setState({
            activeKey: key
        });
    };

    Tab.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            animation = _props.animation,
            shape = _props.shape,
            size = _props.size,
            extra = _props.extra,
            excessMode = _props.excessMode,
            tabPosition = _props.tabPosition,
            tabRender = _props.tabRender,
            triggerType = _props.triggerType,
            lazyLoad = _props.lazyLoad,
            unmountInactiveTabs = _props.unmountInactiveTabs,
            popupProps = _props.popupProps,
            navStyle = _props.navStyle,
            navClassName = _props.navClassName,
            contentStyle = _props.contentStyle,
            contentClassName = _props.contentClassName,
            className = _props.className,
            onClose = _props.onClose,
            children = _props.children,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'animation', 'shape', 'size', 'extra', 'excessMode', 'tabPosition', 'tabRender', 'triggerType', 'lazyLoad', 'unmountInactiveTabs', 'popupProps', 'navStyle', 'navClassName', 'contentStyle', 'contentClassName', 'className', 'onClose', 'children']);
        var activeKey = this.state.activeKey;


        var tabs = (0, _utils.toArray)(children);

        var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'tabs'] = true, _classnames[prefix + 'tabs-' + shape] = shape, _classnames[prefix + 'tabs-vertical'] = shape === 'wrapped' && ['left', 'right'].indexOf(tabPosition) >= 0, _classnames[prefix + 'tabs-' + tabPosition] = shape === 'wrapped', _classnames['' + (prefix + size)] = size, _classnames), className);

        var navProps = {
            prefix: prefix,
            animation: animation,
            activeKey: activeKey,
            excessMode: excessMode,
            extra: extra,
            tabs: tabs,
            tabPosition: tabPosition,
            tabRender: tabRender,
            triggerType: triggerType,
            popupProps: popupProps,
            onClose: onClose,
            onTriggerEvent: this.handleTriggerEvent,
            onKeyDown: this.onNavKeyDown,
            style: navStyle,
            className: navClassName
        };

        var contentProps = {
            prefix: prefix,
            activeKey: activeKey,
            lazyLoad: lazyLoad,
            unmountInactiveTabs: unmountInactiveTabs,
            style: contentStyle,
            className: contentClassName
        };

        var tabChildren = [_react2.default.createElement(_nav2.default, (0, _extends3.default)({ key: 'tab-nav' }, navProps)), _react2.default.createElement(
            _content2.default,
            (0, _extends3.default)({ key: 'tab-content' }, contentProps),
            tabs
        )];

        if (tabPosition === 'bottom') {
            tabChildren.reverse();
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: classNames }, _util.obj.pickOthers(Tab.propTypes, others)),
            tabChildren
        );
    };

    return Tab;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 被激活的选项卡的 key
     */
    activeKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 初始化时被激活的选项卡的 key
     */
    defaultActiveKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * 外观形态
     */
    shape: _propTypes2.default.oneOf(['pure', 'wrapped', 'text', 'capsule']),
    /**
     * 是否开启动效
     */
    animation: _propTypes2.default.bool,
    /**
     * 选项卡过多时的滑动模式
     */
    excessMode: _propTypes2.default.oneOf(['slide', 'dropdown']),
    /**
     * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
     */
    tabPosition: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),
    /**
     * 尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /**
     * 激活选项卡的触发方式
     */
    triggerType: _propTypes2.default.oneOf(['hover', 'click']),
    /**
     * 是否提前渲染好所有 TabPane 的内容
     */
    lazyLoad: _propTypes2.default.bool,
    /**
     * 是否自动卸载未处于激活状态的选项卡
     */
    unmountInactiveTabs: _propTypes2.default.bool,
    /**
     * 导航条的自定义样式
     */
    navStyle: _propTypes2.default.object,
    /**
     * 导航条的自定义样式类
     */
    navClassName: _propTypes2.default.string,
    /**
     * 内容区容器的自定义样式
     */
    contentStyle: _propTypes2.default.object,
    /**
     * 内容区容器的自定义样式类
     */
    contentClassName: _propTypes2.default.string,
    /**
     * 导航栏附加内容
     */
    extra: _propTypes2.default.node,
    /**
     * 点击单个选项卡时触发的回调
     */
    onClick: _propTypes2.default.func,
    /**
     * 选项卡发生切换时的事件回调
     * @param {String|Number} key 改变后的 key
     */
    onChange: _propTypes2.default.func,
    /**
     * 选项卡被关闭时的事件回调
     * @param {String|Number} key   关闭的选项卡的 key
     */
    onClose: _propTypes2.default.func,
    /**
     * 自定义选项卡模板渲染函数
     * @param {String} key 当前 Tab.Item 的 key 值
     * @param {Object} props 传给 Tab.Item 的所有属性键值对
     * @return {ReactNode} 返回自定义组件
     */
    tabRender: _propTypes2.default.func,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    shape: 'pure',
    size: 'medium',
    animation: true,
    tabPosition: 'top',
    excessMode: 'slide',
    triggerType: 'click',
    lazyLoad: true,
    unmountInactiveTabs: false,
    onClick: noop,
    onChange: noop,
    onClose: noop
}, _temp);
Tab.displayName = 'Tab';
exports.default = Tab;


Tab.Item = _tabItem2.default;
module.exports = exports['default'];