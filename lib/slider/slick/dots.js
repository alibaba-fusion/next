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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * slider dots
 * 导航锚点
 */

var noop = _util.func.noop;
var Dots = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Dots, _React$Component);

    function Dots() {
        (0, _classCallCheck3.default)(this, Dots);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Dots.prototype.handleChangeSlide = function handleChangeSlide(options, e) {
        e.preventDefault();

        this.props.changeSlide(options);
    };

    Dots.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            slideCount = _props.slideCount,
            slidesToScroll = _props.slidesToScroll,
            currentSlide = _props.currentSlide,
            dotsClass = _props.dotsClass,
            dotsDirection = _props.dotsDirection,
            dotsRender = _props.dotsRender,
            triggerType = _props.triggerType,
            rtl = _props.rtl;


        var dotsClazz = (0, _classnames2.default)(prefix + 'slick-dots', dotsDirection, dotsClass);
        var dotCount = Math.ceil(slideCount / slidesToScroll);
        var children = [];

        for (var i = 0; i < dotCount; i++) {
            var _handleProp;

            var leftBound = i * slidesToScroll;
            var rightBound = leftBound + slidesToScroll - 1;
            var itemClazz = (0, _classnames2.default)(prefix + 'slick-dots-item', {
                active: currentSlide >= leftBound && currentSlide <= rightBound
            });
            var dotOptions = {
                message: 'dots',
                index: i,
                slidesToScroll: slidesToScroll,
                currentSlide: currentSlide
            };
            // 除非设置为hover，默认使用click触发
            var handleProp = (_handleProp = {}, _handleProp[triggerType.toLowerCase() === 'hover' ? 'onMouseEnter' : 'onClick'] = this.handleChangeSlide.bind(this, dotOptions), _handleProp);

            var docIndex = i;
            var currentSlideIndex = i;
            if (rtl) {
                docIndex = dotCount - 1 - i;
                currentSlideIndex = dotCount - 1 - currentSlide;
            }

            children.push(_react2.default.createElement(
                'li',
                (0, _extends3.default)({ key: i, className: itemClazz }, handleProp),
                dotsRender instanceof Function ? _react2.default.createElement(
                    'span',
                    null,
                    dotsRender(docIndex, currentSlideIndex)
                ) :
                // Slider is navigated by right and left arrow buttons so the dots are not required functionality
                _react2.default.createElement('button', { tabIndex: '-1' })
            ));
        }

        return _react2.default.createElement(
            'ul',
            { className: dotsClazz, 'aria-hidden': 'true' },
            children
        );
    };

    return Dots;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    currentSlide: _propTypes2.default.number,
    changeSlide: _propTypes2.default.func,
    dotsClass: _propTypes2.default.string,
    slideCount: _propTypes2.default.number,
    slidesToScroll: _propTypes2.default.number,
    dotsDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
    dotsRender: _propTypes2.default.func,
    triggerType: _propTypes2.default.string
}, _class.defaultProps = {
    changeSlide: noop
}, _temp);
Dots.displayName = 'Dots';
exports.default = Dots;
module.exports = exports['default'];