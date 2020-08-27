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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../../util');

var _eventHandlers = require('./mixins/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _helpers = require('./mixins/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _arrow = require('./arrow');

var _arrow2 = _interopRequireDefault(_arrow);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

var _dots = require('./dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Slider inner
 */

var noop = _util.func.noop;
var InnerSlider = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(InnerSlider, _React$Component);

    function InnerSlider(props) {
        (0, _classCallCheck3.default)(this, InnerSlider);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.state = {
            animating: false,
            dragging: false,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 'activeIndex' in props ? props.activeIndex : props.defaultActiveIndex,
            direction: 1,
            listWidth: null,
            listHeight: null,
            slideCount: null,
            slideWidth: null,
            slideHeight: null,
            swipeLeft: null,
            touchObject: {
                startX: 0,
                startY: 0,
                curX: 0,
                curY: 0
            },

            lazyLoadedList: [],

            // added for react
            initialized: false,
            edgeDragged: false,
            swiped: false, // used by swipeEvent. differentites between touch and swipe.
            trackStyle: {},
            trackWidth: 0
        };

        // this.filterProps = Object.assign({}, sliderPropTypes, InnerSlider.propTypes);

        _util.func.bindCtx(_this, ['onWindowResized', 'selectHandler', 'changeSlide', 'onInnerSliderEnter', 'onInnerSliderLeave', 'swipeStart', 'swipeMove', 'swipeEnd']);
        return _this;
    }

    InnerSlider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};

        var lazyLoad = nextProps.lazyLoad,
            children = nextProps.children,
            slidesToShow = nextProps.slidesToShow,
            activeIndex = nextProps.activeIndex;
        var currentSlide = prevState.currentSlide;

        var lazyLoadedList = [];

        if (lazyLoad) {
            for (var i = 0, j = _react2.default.Children.count(children); i < j; i++) {
                if (i >= currentSlide && i < currentSlide + slidesToShow) {
                    lazyLoadedList.push(i);

                    var pre = i - 1 < 0 ? j - 1 : i - 1;
                    var next = i + 1 >= j ? 0 : i + 1;

                    lazyLoadedList.push(pre);
                    lazyLoadedList.push(next);
                }
            }

            if (prevState.lazyLoadedList.length === 0) {
                state.lazyLoadedList = lazyLoadedList;
            }
        }

        return state;
    };

    InnerSlider.prototype.componentDidMount = function componentDidMount() {
        this.hasMounted = true;

        // TODO Hack for autoplay -- Inspect Later
        this.initialize(this.props);
        this.adaptHeight();

        if (this.props.activeIndex) {
            this.slickGoTo(this.props.activeIndex);
        }

        /* istanbul ignore if  */
        if (window) {
            // To support server-side rendering
            _util.events.on(window, 'resize', this.onWindowResized);
        }
    };

    InnerSlider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.slickGoTo(this.props.activeIndex);
        } else if (prevState.currentSlide >= this.props.children.length) {
            this.update(this.props);
            this.changeSlide({
                message: 'index',
                index: this.props.children.length - this.props.slidesToShow,
                currentSlide: this.state.currentSlide
            });
        } else {
            var others = ['children'];
            var update = !_util.obj.shallowEqual(_util.obj.pickOthers(others, prevProps), _util.obj.pickOthers(others, this.props));
            if (update) {
                this.update(this.props);
            }
        }

        this.adaptHeight();
    };

    InnerSlider.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.animationEndCallback) {
            clearTimeout(this.animationEndCallback);
        }

        _util.events.off(window, 'resize', this.onWindowResized);

        if (this.state.autoPlayTimer) {
            clearInterval(this.state.autoPlayTimer);
        }
    };

    InnerSlider.prototype.onWindowResized = function onWindowResized() {
        this.update(this.props);
        // animating state should be cleared while resizing, otherwise autoplay stops working
        this.setState({ animating: false });
        clearTimeout(this.animationEndCallback);
        delete this.animationEndCallback;
    };

    InnerSlider.prototype.slickGoTo = function slickGoTo(slide) {
        typeof slide === 'number' && this.changeSlide({
            message: 'index',
            index: slide,
            currentSlide: this.state.currentSlide
        });
    };

    InnerSlider.prototype.onEnterArrow = function onEnterArrow(msg) {
        this.arrowHoverHandler(msg);
    };

    InnerSlider.prototype.onLeaveArrow = function onLeaveArrow() {
        this.arrowHoverHandler();
    };

    InnerSlider.prototype._instanceRefHandler = function _instanceRefHandler(attr, ref) {
        this[attr] = ref;
    };

    InnerSlider.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            animation = _props.animation,
            arrows = _props.arrows,
            arrowSize = _props.arrowSize,
            arrowPosition = _props.arrowPosition,
            arrowDirection = _props.arrowDirection,
            dots = _props.dots,
            dotsClass = _props.dotsClass,
            cssEase = _props.cssEase,
            speed = _props.speed,
            infinite = _props.infinite,
            centerMode = _props.centerMode,
            centerPadding = _props.centerPadding,
            lazyLoad = _props.lazyLoad,
            dotsDirection = _props.dotsDirection,
            rtl = _props.rtl,
            slidesToShow = _props.slidesToShow,
            slidesToScroll = _props.slidesToScroll,
            variableWidth = _props.variableWidth,
            vertical = _props.vertical,
            verticalSwiping = _props.verticalSwiping,
            focusOnSelect = _props.focusOnSelect,
            children = _props.children,
            dotsRender = _props.dotsRender,
            triggerType = _props.triggerType;
        var _state = this.state,
            currentSlide = _state.currentSlide,
            lazyLoadedList = _state.lazyLoadedList,
            slideCount = _state.slideCount,
            slideWidth = _state.slideWidth,
            slideHeight = _state.slideHeight,
            trackStyle = _state.trackStyle,
            listHeight = _state.listHeight,
            dragging = _state.dragging;

        // TODO 需要精简一下

        var trackProps = {
            prefix: prefix,
            animation: animation,
            cssEase: cssEase,
            speed: speed,
            infinite: infinite,
            centerMode: centerMode,
            focusOnSelect: focusOnSelect ? this.selectHandler : null,
            currentSlide: currentSlide,
            lazyLoad: lazyLoad,
            lazyLoadedList: lazyLoadedList,
            rtl: rtl,
            slideWidth: slideWidth,
            slideHeight: slideHeight,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            slideCount: slideCount,
            trackStyle: trackStyle,
            variableWidth: variableWidth,
            vertical: vertical,
            verticalSwiping: verticalSwiping,
            triggerType: triggerType
            // clickHandler: this.changeSlide, unused
        };

        var dotsEle = void 0;

        if (dots === true && slideCount > slidesToShow) {
            var dotProps = {
                prefix: prefix,
                rtl: rtl,
                dotsClass: dotsClass,
                slideCount: slideCount,
                slidesToShow: slidesToShow,
                currentSlide: currentSlide,
                slidesToScroll: slidesToScroll,
                dotsDirection: dotsDirection,
                changeSlide: this.changeSlide,
                dotsRender: dotsRender,
                triggerType: triggerType
            };

            dotsEle = _react2.default.createElement(_dots2.default, dotProps);
        }

        var prevArrow = void 0,
            nextArrow = void 0;

        var arrowProps = {
            prefix: prefix,
            rtl: rtl,
            arrowSize: arrowSize,
            arrowPosition: arrowPosition,
            arrowDirection: arrowDirection,
            infinite: infinite,
            centerMode: centerMode,
            currentSlide: currentSlide,
            slideCount: slideCount,
            slidesToShow: slidesToShow,
            clickHandler: this.changeSlide
        };

        if (arrows) {
            prevArrow = _react2.default.createElement(
                _arrow2.default,
                (0, _extends3.default)({}, arrowProps, {
                    type: 'prev',
                    'aria-label': 'Previous',
                    ref: this._instanceRefHandler.bind(this, 'pArrow'),
                    onMouseEnter: animation ? this.onEnterArrow.bind(this, 'prev') : noop,
                    onMouseLeave: animation ? this.onLeaveArrow.bind(this, 'prev') : noop
                }),
                this.props.prevArrow
            );

            nextArrow = _react2.default.createElement(
                _arrow2.default,
                (0, _extends3.default)({}, arrowProps, {
                    type: 'next',
                    'aria-label': 'Next',
                    ref: this._instanceRefHandler.bind(this, 'nArrow'),
                    onMouseEnter: animation ? this.onEnterArrow.bind(this, 'next') : noop,
                    onMouseLeave: animation ? this.onLeaveArrow.bind(this, 'next') : noop
                }),
                this.props.nextArrow
            );
        }

        var verticalHeightStyle = vertical ? {
            height: listHeight
        } : null;

        var centerPaddingStyle = void 0;
        if (centerMode) {
            centerPaddingStyle = vertical ? { padding: centerPadding + ' 0px' } : { padding: '0px ' + centerPadding };
        }

        return _react2.default.createElement(
            'div',
            {
                className: prefix + 'slick-container ' + prefix + 'slick-initialized',
                onMouseEnter: this.onInnerSliderEnter,
                onMouseLeave: this.onInnerSliderLeave
            },
            _react2.default.createElement(
                'div',
                {
                    ref: this._instanceRefHandler.bind(this, 'list'),
                    className: prefix + 'slick-list',
                    style: (0, _extends3.default)({}, verticalHeightStyle, centerPaddingStyle),
                    onMouseDown: this.swipeStart,
                    onMouseUp: this.swipeEnd,
                    onTouchStart: this.swipeStart,
                    onTouchEnd: this.swipeEnd,
                    onMouseMove: dragging ? this.swipeMove : null,
                    onMouseLeave: dragging ? this.swipeEnd : null,
                    onTouchMove: dragging ? this.swipeMove : null,
                    onTouchCancel: dragging ? this.swipeEnd : null
                },
                _react2.default.createElement(
                    _track2.default,
                    (0, _extends3.default)({
                        ref: this._instanceRefHandler.bind(this, 'track')
                    }, trackProps),
                    children
                )
            ),
            prevArrow,
            nextArrow,
            dotsEle
        );
    };

    return InnerSlider;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    animation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    arrows: _propTypes2.default.bool,
    arrowSize: _propTypes2.default.oneOf(['medium', 'large']),
    arrowPosition: _propTypes2.default.oneOf(['inner', 'outer']),
    arrowDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
    centerPadding: _propTypes2.default.any,
    children: _propTypes2.default.any,
    centerMode: _propTypes2.default.bool,
    dots: _propTypes2.default.bool,
    dotsDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
    dotsClass: _propTypes2.default.string,
    focusOnSelect: _propTypes2.default.bool,
    cssEase: _propTypes2.default.string,
    speed: _propTypes2.default.number,
    infinite: _propTypes2.default.bool,
    defaultActiveIndex: _propTypes2.default.number,
    rtl: _propTypes2.default.bool,
    slidesToShow: _propTypes2.default.number,
    lazyLoad: _propTypes2.default.bool,
    activeIndex: _propTypes2.default.number,
    slidesToScroll: _propTypes2.default.number,
    variableWidth: _propTypes2.default.bool,
    vertical: _propTypes2.default.bool,
    verticalSwiping: _propTypes2.default.bool,
    prevArrow: _propTypes2.default.element,
    nextArrow: _propTypes2.default.element,
    dotsRender: _propTypes2.default.func,
    triggerType: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    arrowDirection: 'hoz',
    triggerType: 'click'
}, _temp);

// extend prototype

InnerSlider.displayName = 'InnerSlider';
(0, _extends3.default)(InnerSlider.prototype, _helpers2.default);
(0, _extends3.default)(InnerSlider.prototype, _eventHandlers2.default);

exports.default = (0, _reactLifecyclesCompat.polyfill)(InnerSlider);
module.exports = exports['default'];