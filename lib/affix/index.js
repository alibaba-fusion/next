'use strict';

exports.__esModule = true;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactDom = require('react-dom');

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Affix */
var Affix = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Affix, _React$Component);

    Affix._getAffixMode = function _getAffixMode(nextProps) {
        var affixMode = {
            top: false,
            bottom: false,
            offset: 0
        };
        if (!nextProps) {
            return affixMode;
        }
        var offsetTop = nextProps.offsetTop,
            offsetBottom = nextProps.offsetBottom;


        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        } else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.bottom = false;
            affixMode.offset = offsetTop;
        } else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.top = false;
            affixMode.offset = offsetBottom;
        }

        return affixMode;
    };

    function Affix(props, context) {
        (0, _classCallCheck3.default)(this, Affix);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.updatePosition = function () {
            _this._updateNodePosition();
        };

        _this._updateNodePosition = function () {
            var affixMode = _this.state.affixMode;
            var _this$props = _this.props,
                container = _this$props.container,
                useAbsolute = _this$props.useAbsolute;

            var affixContainer = container();

            if (!affixContainer || !_this.affixNode) {
                return false;
            }
            var containerScrollTop = (0, _util2.getScroll)(affixContainer, true); // 容器在垂直位置上的滚动 offset
            var affixOffset = _this._getOffset(_this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
            var containerHeight = (0, _util2.getNodeHeight)(affixContainer); // 容器的高度
            var affixHeight = _this.affixNode.offsetHeight;
            var containerRect = (0, _util2.getRect)(affixContainer);

            var affixChildHeight = _this.affixChildNode.offsetHeight;

            var affixStyle = {
                width: affixOffset.width
            };
            var containerStyle = {
                width: affixOffset.width,
                height: affixChildHeight
            };
            if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
                // affix top
                if (useAbsolute) {
                    affixStyle.position = 'absolute';
                    affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
                    containerStyle.position = 'relative';
                } else {
                    affixStyle.position = 'fixed';
                    affixStyle.top = affixMode.offset + containerRect.top;
                }
                _this._setAffixStyle(affixStyle, true);
                _this._setContainerStyle(containerStyle);
            } else if (affixMode.bottom && containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
                // affix bottom
                affixStyle.height = affixHeight;
                if (useAbsolute) {
                    affixStyle.position = 'absolute';
                    affixStyle.top = containerScrollTop - (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
                    containerStyle.position = 'relative';
                } else {
                    affixStyle.position = 'fixed';
                    affixStyle.bottom = affixMode.offset;
                }
                _this._setAffixStyle(affixStyle, true);
                _this._setContainerStyle(containerStyle);
            } else {
                _this._setAffixStyle(null);
                _this._setContainerStyle(null);
            }
        };

        _this._affixNodeRefHandler = function (ref) {
            _this.affixNode = (0, _reactDom.findDOMNode)(ref);
        };

        _this._affixChildNodeRefHandler = function (ref) {
            _this.affixChildNode = (0, _reactDom.findDOMNode)(ref);
        };

        _this.state = {
            style: null,
            containerStyle: null,
            affixMode: Affix._getAffixMode(props)
        };
        return _this;
    }

    Affix.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('offsetTop' in nextProps || 'offsetBottom' in nextProps) {
            return {
                affixMode: Affix._getAffixMode(nextProps)
            };
        }
        return null;
    };

    Affix.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var container = this.props.container;

        this._updateNodePosition();
        // wait for parent rendered
        this.timeout = setTimeout(function () {
            _this2._setEventHandlerForContainer(container);
        });
    };

    Affix.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(this._updateNodePosition);
    };

    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        var container = this.props.container;

        this._removeEventHandlerForContainer(container);
    };

    Affix.prototype._setEventHandlerForContainer = function _setEventHandlerForContainer(getContainer) {
        var container = getContainer();
        if (!container) {
            return;
        }
        _util.events.on(container, 'scroll', this._updateNodePosition, false);
        _util.events.on(container, 'resize', this._updateNodePosition, false);
    };

    Affix.prototype._removeEventHandlerForContainer = function _removeEventHandlerForContainer(getContainer) {
        var container = getContainer();
        if (container) {
            _util.events.off(container, 'scroll', this._updateNodePosition);
            _util.events.off(container, 'resize', this._updateNodePosition);
        }
    };

    Affix.prototype._setAffixStyle = function _setAffixStyle(affixStyle) {
        var affixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (_util.obj.shallowEqual(affixStyle, this.state.style)) {
            return;
        }

        this.setState({
            style: affixStyle
        });

        var onAffix = this.props.onAffix;


        if (affixed) {
            setTimeout(function () {
                return onAffix(true);
            });
        } else if (!affixStyle) {
            setTimeout(function () {
                return onAffix(false);
            });
        }
    };

    Affix.prototype._setContainerStyle = function _setContainerStyle(containerStyle) {
        if (_util.obj.shallowEqual(containerStyle, this.state.containerStyle)) {
            return;
        }
        this.setState({ containerStyle: containerStyle });
    };

    Affix.prototype._getOffset = function _getOffset(affixNode, affixContainer) {
        var affixRect = affixNode.getBoundingClientRect(); // affix 元素 相对浏览器窗口的位置
        var containerRect = (0, _util2.getRect)(affixContainer); // affix 容器 相对浏览器窗口的位置
        var containerScrollTop = (0, _util2.getScroll)(affixContainer, true);
        var containerScrollLeft = (0, _util2.getScroll)(affixContainer, false);

        return {
            top: affixRect.top - containerRect.top + containerScrollTop,
            left: affixRect.left - containerRect.left + containerScrollLeft,
            width: affixRect.width,
            height: affixRect.height
        };
    };

    Affix.prototype.render = function render() {
        var _classnames;

        var affixMode = this.state.affixMode;
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            children = _props.children;

        var state = this.state;
        var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'affix'] = state.style, _classnames[prefix + 'affix-top'] = !state.style && affixMode.top, _classnames[prefix + 'affix-bottom'] = !state.style && affixMode.bottom, _classnames[className] = className, _classnames));
        var combinedStyle = (0, _extends3.default)({}, state.containerStyle, style);

        return _react2.default.createElement(
            'div',
            { ref: this._affixNodeRefHandler, style: combinedStyle },
            _react2.default.createElement(
                'div',
                {
                    ref: this._affixChildNodeRefHandler,
                    className: classNames,
                    style: state.style
                },
                children
            )
        );
    };

    return Affix;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 设置 Affix 需要监听滚动事件的容器元素
     * @return {ReactElement} 目标容器元素的实例
     */
    container: _propTypes2.default.func,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: _propTypes2.default.number,
    /**
     * 距离窗口底部达到制定偏移量后触发
     */
    offsetBottom: _propTypes2.default.number,
    /**
     * 当元素的样式发生固钉样式变化时触发的回调函数
     * @param {Boolean} affixed 元素是否被固钉
     */
    onAffix: _propTypes2.default.func,
    /**
     * 是否启用绝对布局实现 affix
     * @param {Boolean} 是否启用绝对布局
     */
    useAbsolute: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-',
    container: function container() {
        return window;
    },
    onAffix: _util.func.noop
}, _temp);
Affix.displayName = 'Affix';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Affix));
module.exports = exports['default'];