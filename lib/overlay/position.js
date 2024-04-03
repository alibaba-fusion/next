'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _util = require('../util');

var _position = require('./utils/position');

var _position2 = _interopRequireDefault(_position);

var _findNode = require('./utils/find-node');

var _findNode2 = _interopRequireDefault(_findNode);

var _log = require('../util/log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;
var getStyle = _util.dom.getStyle;

var place = _position2.default.place;
// Follow react NESTED_UPDATE_LIMIT = 50
var MAX_UPDATE_COUNT = 50;

var Position = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Position, _Component);

    function Position(props) {
        (0, _classCallCheck3.default)(this, Position);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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
                (0, _log.warning)('Over maximum times to adjust position at one task, it is recommended to use v2.');
                return true;
            }
            return false;
        };

        bindCtx(_this, ['handleResize']);

        _this.resizeObserver = new _resizeObserverPolyfill2.default(_this.handleResize);
        return _this;
    }

    Position.prototype.componentDidMount = function componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            _util.events.on(window, 'resize', this.handleResize);
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
            _util.events.off(window, 'resize', this.handleResize);
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
            return (0, _reactDom.findDOMNode)(this);
        } catch (err) {
            return null;
        }
    };

    Position.prototype.getTargetNode = function getTargetNode() {
        var target = this.props.target;


        return target === _position2.default.VIEWPORT ? _position2.default.VIEWPORT : (0, _findNode2.default)(target, this.props);
    };

    Position.prototype.handleResize = function handleResize() {
        var _this2 = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            _this2.setPosition();
        }, 200);
    };

    Position.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return Position;
}(_react.Component), _class.VIEWPORT = _position2.default.VIEWPORT, _class.propTypes = {
    children: _propTypes2.default.node,
    target: _propTypes2.default.any,
    container: _propTypes2.default.any,
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    offset: _propTypes2.default.array,
    beforePosition: _propTypes2.default.func,
    onPosition: _propTypes2.default.func,
    needAdjust: _propTypes2.default.bool,
    autoFit: _propTypes2.default.bool,
    needListenResize: _propTypes2.default.bool,
    shouldUpdatePosition: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    pinFollowBaseElementWhenFixed: _propTypes2.default.bool
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
exports.default = Position;
module.exports = exports.default;
module.exports.default = exports.default;