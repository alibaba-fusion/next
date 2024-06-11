import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { func, dom, events } from '../util';
import position from './utils/position';
import findNode from './utils/find-node';
import { warning } from '../util/log';

var noop = func.noop,
    bindCtx = func.bindCtx;
var getStyle = dom.getStyle;

var place = position.place;
// Follow react NESTED_UPDATE_LIMIT = 50
var MAX_UPDATE_COUNT = 50;

var Position = (_temp = _class = function (_Component) {
    _inherits(Position, _Component);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.updateCount = 0;

        _this.observe = function () {
            var contentNode = _this.getContentNode();
            contentNode && _this.resizeObserver.observe(contentNode);
        };

        _this.unobserve = function () {
            _this.resizeObserver.disconnect();
        };

        _this.shouldIgnorePosition = function () {
            var node = _this.getContentNode();
            if (!node) {
                return true;
            }
            // 从文档中移除
            if (!node.parentNode) {
                return true;
            }
            // 元素隐藏

            var _getComputedStyle = getComputedStyle(node),
                position = _getComputedStyle.position,
                display = _getComputedStyle.display,
                visibility = _getComputedStyle.visibility;

            if (!node.offsetParent && position !== 'fixed') {
                return true;
            }
            // Firefox offsetParent 会返回 body，这里兼容处理
            if (display === 'none' || visibility === 'hidden') {
                return true;
            }
            // 兜底处理，同步进程里连续更新多次，强制中断
            _this.updateCount++;
            Promise.resolve().then(function () {
                _this.updateCount = 0;
            });
            if (_this.updateCount > MAX_UPDATE_COUNT - 10) {
                warning('Over maximum times to adjust position at one task, it is recommended to use v2.');
                return true;
            }
            return false;
        };

        bindCtx(_this, ['handleResize']);

        _this.resizeObserver = new ResizeObserver(_this.handleResize);
        return _this;
    }

    Position.prototype.componentDidMount = function componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            events.on(window, 'resize', this.handleResize);
            this.observe();
        }
    };

    Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;


        if ('align' in props && props.align !== prevProps.align || props.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }

        if (this.shouldUpdatePosition) {
            clearTimeout(this.resizeTimeout);

            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    };

    Position.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.needListenResize) {
            events.off(window, 'resize', this.handleResize);
            this.unobserve();
        }

        clearTimeout(this.resizeTimeout);
    };

    Position.prototype.setPosition = function setPosition() {
        var _props = this.props,
            align = _props.align,
            offset = _props.offset,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            needAdjust = _props.needAdjust,
            container = _props.container,
            rtl = _props.rtl,
            pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed,
            autoFit = _props.autoFit;


        if (this.shouldIgnorePosition()) {
            return;
        }

        beforePosition();

        var contentNode = this.getContentNode();
        var targetNode = this.getTargetNode();

        if (contentNode && targetNode) {
            var resultAlign = place({
                pinElement: contentNode,
                baseElement: targetNode,
                pinFollowBaseElementWhenFixed: pinFollowBaseElementWhenFixed,
                align: align,
                offset: offset,
                autoFit: autoFit,
                container: container,
                needAdjust: needAdjust,
                isRtl: rtl
            });
            var top = getStyle(contentNode, 'top');
            var left = getStyle(contentNode, 'left');

            onPosition({
                align: resultAlign.split(' '),
                top: top,
                left: left
            }, contentNode);
        }
    };

    Position.prototype.getContentNode = function getContentNode() {
        try {
            return findDOMNode(this);
        } catch (err) {
            return null;
        }
    };

    Position.prototype.getTargetNode = function getTargetNode() {
        var target = this.props.target;


        return target === position.VIEWPORT ? position.VIEWPORT : findNode(target, this.props);
    };

    Position.prototype.handleResize = function handleResize() {
        var _this2 = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            _this2.setPosition();
        }, 200);
    };

    Position.prototype.render = function render() {
        return Children.only(this.props.children);
    };

    return Position;
}(Component), _class.VIEWPORT = position.VIEWPORT, _class.propTypes = {
    children: PropTypes.node,
    target: PropTypes.any,
    container: PropTypes.any,
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    offset: PropTypes.array,
    beforePosition: PropTypes.func,
    onPosition: PropTypes.func,
    needAdjust: PropTypes.bool,
    autoFit: PropTypes.bool,
    needListenResize: PropTypes.bool,
    shouldUpdatePosition: PropTypes.bool,
    rtl: PropTypes.bool,
    pinFollowBaseElementWhenFixed: PropTypes.bool
}, _class.defaultProps = {
    align: 'tl bl',
    offset: [0, 0],
    beforePosition: noop,
    onPosition: noop,
    needAdjust: true,
    autoFit: false,
    needListenResize: true,
    shouldUpdatePosition: false,
    rtl: false
}, _temp);
Position.displayName = 'Position';
export { Position as default };