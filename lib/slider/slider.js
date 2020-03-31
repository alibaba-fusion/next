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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../util');

var _innerSlider = require('./slick/inner-slider');

var _innerSlider2 = _interopRequireDefault(_innerSlider);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Slider
 */
var Slider = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.resize = function () {
      // export api
      _this.innerSlider.onWindowResized();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefix = _props.prefix,
        arrowPosition = _props.arrowPosition,
        slideDirection = _props.slideDirection,
        style = _props.style,
        className = _props.className,
        children = _props.children;


    var globalProps = {};
    Object.keys(_configProvider2.default.propTypes).forEach(function (key) {
      globalProps[key] = _this2.props[key];
    });

    var sliderProps = _util.obj.pickOthers(['className', 'style', 'slideDirection'], this.props);
    var slideCount = _react2.default.Children.count(children);

    if (slideCount === 0) {
      // 没有 item 时不显示 slider
      return null;
    } else if (slideCount === 1) {
      // 单个 item 时不显示箭头和控制器
      sliderProps.arrows = false;
      sliderProps.autoplay = false;
      sliderProps.draggable = false;
    }

    var clazz = (0, _classnames2.default)([prefix + 'slick', prefix + 'slick-' + arrowPosition, prefix + 'slick-' + slideDirection], className);

    if (slideDirection === 'ver') {
      // 向下传递时使用 vertical 属性
      sliderProps.vertical = true;
      sliderProps.verticalSwiping = true;
    }

    return _react2.default.createElement(
      _configProvider2.default,
      (0, _extends3.default)({}, globalProps, { rtl: false }),
      _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          dir: 'ltr',
          className: clazz,
          style: style
        }, _util.obj.pickOthers((0, _extends3.default)({}, Slider.propTypes, _innerSlider2.default.propTypes), sliderProps)),
        _react2.default.createElement(_innerSlider2.default, (0, _extends3.default)({
          ref: function ref(InnerSlider) {
            return _this2.innerSlider = InnerSlider;
          }
        }, sliderProps))
      )
    );
  };

  return Slider;
}(_react.Component), _class.propTypes = {
  prefix: _propTypes2.default.string,
  rtl: _propTypes2.default.bool,
  /**
   * 自定义传入的样式
   */
  className: _propTypes2.default.any,
  /**
   * 是否使用自适应高度
   */
  adaptiveHeight: _propTypes2.default.bool,
  /**
   * 动效类型，默认是'slide'
   */
  animation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  /**
   * 是否显示箭头
   */
  arrows: _propTypes2.default.bool,
  /**
   * 导航箭头大小 可选值: 'medium', 'large'
   */
  arrowSize: _propTypes2.default.oneOf(['medium', 'large']),
  /**
   * 导航箭头位置 可选值: 'inner', 'outer'
   */
  arrowPosition: _propTypes2.default.oneOf(['inner', 'outer']),
  /**
   * 导航箭头的方向 可选值: 'hoz', 'ver'
   */
  arrowDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
  /**
   * 是否自动播放
   */
  autoplay: _propTypes2.default.bool,
  /**
   * 自动播放的速度
   */
  autoplaySpeed: _propTypes2.default.number,
  /**
   * 向后箭头
   */
  nextArrow: _propTypes2.default.element,
  /**
   * 向前箭头
   */
  prevArrow: _propTypes2.default.element,
  /**
   * 是否启用居中模式
   */
  centerMode: _propTypes2.default.bool,
  /**
   * 是否显示导航锚点
   */
  dots: _propTypes2.default.bool,
  /**
   * 导航锚点位置
   */
  dotsDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
  dotsClass: _propTypes2.default.string,
  /**
   * 自定义导航锚点
   */
  dotRender: _propTypes2.default.func,
  /**
   * 是否可拖拽
   */
  draggable: _propTypes2.default.bool,
  /**
   * 是否使用无穷循环模式
   */
  infinite: _propTypes2.default.bool,
  /**
   * 初始被激活的轮播图
   */
  defaultActiveIndex: _propTypes2.default.number,
  /**
   * 是否启用懒加载
   */
  lazyLoad: _propTypes2.default.bool,
  slide: _propTypes2.default.string,
  /**
   * 轮播方向
   */
  slideDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
  /**
   * 同时展示的图片数量
   */
  slidesToShow: _propTypes2.default.number,
  /**
   * 同时滑动的图片数量
   */
  slidesToScroll: _propTypes2.default.number,
  /**
   * 轮播速度
   */
  speed: _propTypes2.default.number,
  /**
   * 跳转到指定的轮播图（受控）
   */
  activeIndex: _propTypes2.default.number,
  /**
   * 锚点导航触发方式
   */
  triggerType: _propTypes2.default.oneOf(['click', 'hover']),
  /**
   * 轮播切换的回调函数
   * @param {Number} index 幻灯片的索引
   */
  onChange: _propTypes2.default.func,
  onBeforeChange: _propTypes2.default.func, // 兼容 0.x onBeforeChange
  children: _propTypes2.default.any,
  /**
   * 自定义传入的class
   */
  style: _propTypes2.default.object,
  /**
   * Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览
   */
  centerPadding: _propTypes2.default.string,
  /**
   * CSS3 Animation Easing,默认‘ease’
   */
  cssEase: _propTypes2.default.string, // used
  edgeFriction: _propTypes2.default.number, // 非无限轮播滑动到边缘时的阻力
  /**
   * 多图轮播时，点击选中后自动居中
   */
  focusOnSelect: _propTypes2.default.bool,
  pauseOnHover: _propTypes2.default.bool, // 鼠标经过时停止播放
  swipe: _propTypes2.default.bool,
  swipeToSlide: _propTypes2.default.bool,
  touchMove: _propTypes2.default.bool,
  touchThreshold: _propTypes2.default.number,
  useCSS: _propTypes2.default.bool,
  variableWidth: _propTypes2.default.bool, // used
  waitForAnimate: _propTypes2.default.bool,
  edgeEvent: _propTypes2.default.any,
  swipeEvent: _propTypes2.default.any
}, _class.defaultProps = {
  prefix: 'next-',
  animation: 'slide',
  arrowSize: 'medium',
  arrowPosition: 'inner',
  vertical: false,
  verticalSwiping: false,
  dots: true,
  dotsDirection: 'hoz',
  arrows: true,
  arrowDirection: 'hoz',
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 600,
  adaptiveHeight: false,
  centerMode: false,
  centerPadding: '50px', // Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览
  cssEase: 'ease',
  draggable: true,
  edgeFriction: 0.35,
  focusOnSelect: false,
  defaultActiveIndex: 0,
  lazyLoad: false,
  pauseOnHover: false,
  rtl: false,
  slide: 'div',
  slideDirection: 'hoz',
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: false, // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
  touchMove: true, // 移动端touch
  touchThreshold: 5,
  useCSS: true,
  variableWidth: false,
  waitForAnimate: true,
  onChange: function onChange() {},
  onBeforeChange: function onBeforeChange() {},
  edgeEvent: null,
  swipeEvent: null,
  nextArrow: null, // nextArrow, prevArrow are react components
  prevArrow: null,
  style: null,
  dotsRender: null,
  triggerType: 'click'
}, _temp2);
Slider.displayName = 'Slider';
exports.default = Slider;
module.exports = exports['default'];