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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Avatar
 */
var Avatar = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Avatar, _Component);

    function Avatar() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Avatar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            isImgExist: true
        }, _this.handleImgLoadError = function () {
            var onError = _this.props.onError;

            var errorFlag = onError ? onError() : undefined;
            if (errorFlag !== false) {
                _this.setState({ isImgExist: false });
            }
        }, _this.getIconSize = function (avatarSize) {
            return typeof avatarSize === 'number' ? avatarSize / 2 : avatarSize;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Avatar.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ isImgExist: true });
        }
    };

    Avatar.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            size = _props.size,
            icon = _props.icon,
            alt = _props.alt,
            srcSet = _props.srcSet,
            shape = _props.shape,
            src = _props.src;
        var isImgExist = this.state.isImgExist;
        var children = this.props.children;


        var others = _util.obj.pickOthers(Avatar.propTypes, this.props);

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'avatar'] = true, _classNames[prefix + 'avatar-' + shape] = !!shape, _classNames[prefix + 'avatar-image'] = src && isImgExist, _classNames[prefix + 'avatar-' + size] = typeof size === 'string', _classNames), className);

        var sizeStyle = typeof size === 'number' ? {
            width: size,
            height: size,
            lineHeight: size + 'px',
            fontSize: icon ? size / 2 : 18
        } : {};

        var iconSize = this.getIconSize(size);
        if (src) {
            if (isImgExist) {
                children = _react2.default.createElement('img', {
                    src: src,
                    srcSet: srcSet,
                    onError: this.handleImgLoadError,
                    alt: alt
                });
            } else {
                children = _react2.default.createElement(_icon2.default, { type: 'picture', size: iconSize });
            }
        } else if (typeof icon === 'string') {
            children = _react2.default.createElement(_icon2.default, { type: icon, size: iconSize });
        } else if (icon) {
            var newIconSize = 'size' in icon.props ? icon.props.size : iconSize;
            children = _react2.default.cloneElement(icon, { size: newIconSize });
        }

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({
                className: cls,
                style: (0, _extends3.default)({}, sizeStyle, style)
            }, others),
            children
        );
    };

    return Avatar;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    /**
     * 头像的大小
     */
    size: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['small', 'medium', 'large']), _propTypes2.default.number]),
    /**
     * 头像的形状
     */
    shape: _propTypes2.default.oneOf(['circle', 'square']),
    /**
     * icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactNode`
     */
    icon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    /**
     * 图片类头像的资源地址
     */
    src: _propTypes2.default.string,
    /**
     * 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为
     */
    onError: _propTypes2.default.func,
    /**
     * 图像无法显示时的 alt 替代文本
     */
    alt: _propTypes2.default.string,
    /**
     * 图片类头像响应式资源地址
     */
    srcSet: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium',
    shape: 'circle'
}, _temp2);
Avatar.displayName = 'Avatar';
exports.default = _configProvider2.default.config(Avatar);
module.exports = exports['default'];