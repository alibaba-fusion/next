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

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * slider arrow
 * 左右控制箭头
 */

var noop = _util.func.noop;
var Arrow = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Arrow, _Component);

    function Arrow() {
        (0, _classCallCheck3.default)(this, Arrow);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Arrow.isDisabled = function isDisabled(props) {
        var infinite = props.infinite,
            type = props.type,
            centerMode = props.centerMode,
            currentSlide = props.currentSlide,
            slideCount = props.slideCount,
            slidesToShow = props.slidesToShow;


        if (infinite) {
            return false;
        }

        // 下一个 index 大于总数？？
        // if (slideCount <= slidesToShow) {
        //     return true;
        // }

        // 向前箭头：当前是第 0 个
        if (type === 'prev') {
            return currentSlide <= 0;
        }

        if (centerMode && currentSlide >= slideCount - 1) {
            // 向后箭头：居中模式，当前 index 大于最大 index
            return true;
        } else if (currentSlide >= slideCount - slidesToShow) {
            // 向后箭头：普通模式，当前 index 大于 总数 - 下一个 index ？？？
            return true;
        }

        return false;
    };

    Arrow.prototype.handleClick = function handleClick(options, e) {
        e && e.preventDefault();

        // TODO hack
        if (options.message === 'prev') {
            options.message = 'previous';
        }

        this.props.clickHandler(options, e);
    };

    Arrow.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            arrowSize = _props.arrowSize,
            arrowPosition = _props.arrowPosition,
            arrowDirection = _props.arrowDirection,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            children = _props.children;


        var others = _util.obj.pickOthers(Arrow.propTypes, this.props);
        var iconType = Arrow.ARROW_ICON_TYPES[arrowDirection][type];
        var disabled = Arrow.isDisabled(this.props);

        var arrowClazz = (0, _classnames2.default)([prefix + 'slick-arrow', prefix + 'slick-' + type, arrowPosition, arrowSize, arrowDirection], { disabled: disabled });

        var arrowProps = (0, _extends3.default)({}, others, {
            key: type,
            'data-role': 'none',
            className: arrowClazz,
            style: { display: 'block' },
            onClick: disabled ? null : this.handleClick.bind(this, { message: type }),
            onMouseEnter: disabled ? null : onMouseEnter,
            onMouseLeave: disabled ? null : onMouseLeave
        });

        if (children) {
            return _react2.default.cloneElement(_react2.default.Children.only(children), arrowProps);
        } else {
            return _react2.default.createElement(
                'button',
                (0, _extends3.default)({ type: 'button', role: 'button' }, arrowProps),
                _react2.default.createElement(_icon2.default, { type: iconType })
            );
        }
    };

    return Arrow;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    type: _propTypes2.default.oneOf(['prev', 'next']).isRequired,
    centerMode: _propTypes2.default.bool,
    currentSlide: _propTypes2.default.number,
    infinite: _propTypes2.default.bool,
    clickHandler: _propTypes2.default.func,
    slideCount: _propTypes2.default.number,
    slidesToShow: _propTypes2.default.number,
    arrow: _propTypes2.default.element,
    arrowSize: _propTypes2.default.string,
    arrowPosition: _propTypes2.default.string,
    arrowDirection: _propTypes2.default.oneOf(['hoz', 'ver']),
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    onMouseEnter: noop,
    onMouseLeave: noop
}, _class.ARROW_ICON_TYPES = {
    hoz: { prev: 'arrow-left', next: 'arrow-right' },
    ver: { prev: 'arrow-up', next: 'arrow-down' }
}, _temp);
Arrow.displayName = 'Arrow';
exports.default = Arrow;
module.exports = exports['default'];