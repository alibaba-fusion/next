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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warning = _util.log.warning;


var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

/**
 * Card.Media
 * @order 1
 */
var CardMedia = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CardMedia, _Component);

    function CardMedia() {
        (0, _classCallCheck3.default)(this, CardMedia);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    CardMedia.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            style = _props.style,
            className = _props.className,
            Component = _props.component,
            image = _props.image,
            src = _props.src,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'style', 'className', 'component', 'image', 'src']);


        if (!('children' in others || Boolean(image || src))) {
            warning('either `children`, `image` or `src` prop must be specified.');
        }

        var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
        var composedStyle = !isMediaComponent && image ? (0, _extends3.default)({ backgroundImage: 'url("' + image + '")' }, style) : style;

        return _react2.default.createElement(Component, (0, _extends3.default)({}, others, {
            style: composedStyle,
            className: (0, _classnames2.default)(prefix + 'card-media', className),
            src: isMediaComponent ? image || src : undefined
        }));
    };

    return CardMedia;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.elementType,
    /**
     * 背景图片地址
     */
    image: _propTypes2.default.string,
    /**
     * 媒体源文件地址
     */
    src: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    component: 'div',
    style: {}
}, _temp);
CardMedia.displayName = 'CardMedia';
exports.default = _configProvider2.default.config(CardMedia);
module.exports = exports['default'];