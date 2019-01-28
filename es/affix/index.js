import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { obj, events, func } from '../util';
import ConfigProvider from '../config-provider';
import { getScroll, getRect, getNodeHeight } from './util';

/** Affix */
var Affix = (_temp = _class = function (_React$Component) {
    _inherits(Affix, _React$Component);

    function Affix(props, context) {
        _classCallCheck(this, Affix);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.updatePosition = function () {
            _this._updateNodePosition();
        };

        _this._updateNodePosition = function () {
            var _this$props = _this.props,
                container = _this$props.container,
                useAbsolute = _this$props.useAbsolute;

            var affixContainer = container();

            if (!affixContainer) {
                return false;
            }
            var containerScrollTop = getScroll(affixContainer, true); // 容器在垂直位置上的滚动 offset
            var affixOffset = _this._getOffset(_this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
            var containerHeight = getNodeHeight(affixContainer); // 容器的高度
            var affixHeight = _this.affixNode.offsetHeight;
            var containerRect = getRect(affixContainer);

            var affixChildHeight = _this.affixChildNode.offsetHeight;

            var affixMode = _this.affixMode;
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
            _this.affixNode = findDOMNode(ref);
        };

        _this._affixChildNodeRefHandler = function (ref) {
            _this.affixChildNode = findDOMNode(ref);
        };

        _this.state = {
            style: null,
            containerStyle: null
        };
        _this.affixMode = _this._getAffixMode(props);
        return _this;
    }

    Affix.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var container = this.props.container;

        this._updateNodePosition();
        // wait for parent rendered
        this.timeout = setTimeout(function () {
            _this2._setEventHandlerForContainer(container);
        });
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
        events.on(container, 'scroll', this._updateNodePosition, false);
        events.on(container, 'resize', this._updateNodePosition, false);
    };

    Affix.prototype._removeEventHandlerForContainer = function _removeEventHandlerForContainer(getContainer) {
        var container = getContainer();
        if (container) {
            events.off(container, 'scroll', this._updateNodePosition);
            events.off(container, 'resize', this._updateNodePosition);
        }
    };

    Affix.prototype._getAffixMode = function _getAffixMode() {
        var _props = this.props,
            offsetTop = _props.offsetTop,
            offsetBottom = _props.offsetBottom;

        var affixMode = {
            top: false,
            bottom: false,
            offset: 0
        };

        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        } else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.offset = offsetTop;
        } else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.offset = offsetBottom;
        }

        return affixMode;
    };

    Affix.prototype._setAffixStyle = function _setAffixStyle(affixStyle) {
        var affixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (obj.shallowEqual(affixStyle, this.state.style)) {
            return;
        }

        this.setState({
            style: affixStyle
        });

        var onAffix = this.props.onAffix;


        if (affixed) {
            onAffix(true);
        } else if (!affixStyle) {
            onAffix(false);
        }
    };

    Affix.prototype._setContainerStyle = function _setContainerStyle(containerStyle) {
        if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
            return;
        }
        this.setState({ containerStyle: containerStyle });
    };

    Affix.prototype._getOffset = function _getOffset(affixNode, affixContainer) {
        var affixRect = affixNode.getBoundingClientRect(); // affix 元素 相对浏览器窗口的位置
        var containerRect = getRect(affixContainer); // affix 容器 相对浏览器窗口的位置
        var containerScrollTop = getScroll(affixContainer, true);
        var containerScrollLeft = getScroll(affixContainer, false);

        return {
            top: affixRect.top - containerRect.top + containerScrollTop,
            left: affixRect.left - containerRect.left + containerScrollLeft,
            width: affixRect.width,
            height: affixRect.height
        };
    };

    Affix.prototype.render = function render() {
        var _classnames;

        var _props2 = this.props,
            prefix = _props2.prefix,
            className = _props2.className,
            style = _props2.style,
            children = _props2.children;

        var state = this.state;
        var classNames = classnames((_classnames = {}, _classnames[prefix + 'affix'] = state.style, _classnames[prefix + 'affix-top'] = !state.style && this.affixMode.top, _classnames[prefix + 'affix-bottom'] = !state.style && this.affixMode.bottom, _classnames[className] = className, _classnames));
        var combinedStyle = _extends({}, state.containerStyle, style);

        return React.createElement(
            'div',
            { ref: this._affixNodeRefHandler, style: combinedStyle },
            React.createElement(
                'div',
                { ref: this._affixChildNodeRefHandler, className: classNames, style: state.style },
                children
            )
        );
    };

    return Affix;
}(React.Component), _class.propTypes = {
    prefix: PropTypes.string,
    /**
     * 设置 Affix 需要监听滚动事件的容器元素
     * @return {ReactElement} 目标容器元素的实例
     */
    container: PropTypes.func,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: PropTypes.number,
    /**
     * 距离窗口底部达到制定偏移量后触发
     */
    offsetBottom: PropTypes.number,
    /**
     * 当元素的样式发生固钉样式变化时触发的回调函数
     * @param {Boolean} 元素是否被固钉
     */
    onAffix: PropTypes.func,
    /**
     * 是否启用绝对布局实现 affix
     * @param {Boolean} 是否启用绝对布局
     */
    useAbsolute: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    container: function container() {
        return window;
    },
    onAffix: func.noop
}, _temp);
Affix.displayName = 'Affix';


export default ConfigProvider.config(Affix);