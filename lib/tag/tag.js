'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;


var PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;

/**
 * Tag
 */
var Tag = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Tag, _Component);

    function Tag(props) {
        (0, _classCallCheck3.default)(this, Tag);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.onKeyDown = function (e) {
            // 针对无障碍化要求 添加键盘SPACE事件
            var _this$props = _this.props,
                closable = _this$props.closable,
                closeArea = _this$props.closeArea,
                onClick = _this$props.onClick,
                disabled = _this$props.disabled;

            if (e.keyCode !== _util.KEYCODE.SPACE || disabled) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            if (closable) {
                _this.handleClose(closeArea);
            } else {
                typeof onClick === 'function' && onClick(e);
            }
        };

        _this.state = {
            visible: true
        };

        bindCtx(_this, ['handleBodyClick', 'handleTailClick', 'handleAnimationInit', 'handleAnimationEnd', 'renderTailNode']);
        return _this;
    }

    Tag.prototype.componentWillUnmount = function componentWillUnmount() {
        this.__destroyed = true;
    };

    Tag.prototype.handleClose = function handleClose(from) {
        var _this2 = this;

        var _props = this.props,
            animation = _props.animation,
            onClose = _props.onClose;

        var hasAnimation = _util.support.animation && animation;

        // 先执行回调
        var result = onClose(from, this.tagNode);

        // 如果回调函数返回 false，则阻止关闭行为
        if (result !== false && !this.__destroyed) {
            this.setState({
                visible: false
            }, function () {
                // 如果没有动画，则直接执行 afterClose
                !hasAnimation && _this2.props.afterClose(_this2.tagNode);
            });
        }
    };

    // 标签体点击


    Tag.prototype.handleBodyClick = function handleBodyClick(e) {
        var _props2 = this.props,
            closable = _props2.closable,
            closeArea = _props2.closeArea,
            onClick = _props2.onClick;


        if (closable && closeArea === 'tag') {
            this.handleClose('tag');
        }

        if (typeof onClick === 'function') {
            return onClick(e);
        }
    };

    Tag.prototype.handleTailClick = function handleTailClick(e) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.handleClose('tail');
    };

    Tag.prototype.handleAnimationInit = function handleAnimationInit(node) {
        this.props.afterAppear(node);
    };

    Tag.prototype.handleAnimationEnd = function handleAnimationEnd(node) {
        this.props.afterClose(node);
    };

    Tag.prototype.renderAnimatedTag = function renderAnimatedTag(children, animationName) {
        return _react2.default.createElement(
            _animate2.default,
            {
                animation: animationName,
                afterAppear: this.handleAnimationInit,
                afterLeave: this.handleAnimationEnd
            },
            children
        );
    };

    Tag.prototype.renderTailNode = function renderTailNode() {
        var _props3 = this.props,
            prefix = _props3.prefix,
            closable = _props3.closable,
            locale = _props3.locale;


        if (!closable) {
            return null;
        }

        return _react2.default.createElement(
            'span',
            {
                className: prefix + 'tag-close-btn',
                onClick: this.handleTailClick,
                role: 'button',
                'aria-label': locale.delete
            },
            _react2.default.createElement(_icon2.default, { type: 'close' })
        );
    };

    Tag.prototype.isPresetColor = function isPresetColor() {
        var color = this.props.color;


        if (!color) {
            return false;
        }

        return PRESET_COLOR_REG.test(color);
    };

    Tag.prototype.getTagStyle = function getTagStyle() {
        var _props4 = this.props,
            _props4$color = _props4.color,
            color = _props4$color === undefined ? '' : _props4$color,
            style = _props4.style;

        var isPresetColor = this.isPresetColor();
        var customColorStyle = {
            backgroundColor: color,
            borderColor: color,
            color: '#fff'
        };

        return (0, _extends3.default)({}, color && !isPresetColor ? customColorStyle : null, style);
    };

    Tag.prototype.render = function render() {
        var _classNames,
            _this3 = this;

        var _props5 = this.props,
            prefix = _props5.prefix,
            type = _props5.type,
            size = _props5.size,
            color = _props5.color,
            _shape = _props5._shape,
            closable = _props5.closable,
            closeArea = _props5.closeArea,
            className = _props5.className,
            children = _props5.children,
            animation = _props5.animation,
            disabled = _props5.disabled,
            rtl = _props5.rtl;
        var visible = this.state.visible;

        var isPresetColor = this.isPresetColor();
        var others = _util.obj.pickOthers(Tag.propTypes, this.props);
        // eslint-disable-next-line no-unused-vars
        var style = others.style,
            otherTagProps = (0, _objectWithoutProperties3.default)(others, ['style']);

        var shape = closable ? 'closable' : _shape;
        var bodyClazz = (0, _classnames2.default)([prefix + 'tag', prefix + 'tag-' + shape, prefix + 'tag-' + size], (_classNames = {}, _classNames[prefix + 'tag-level-' + type] = !color, _classNames[prefix + 'tag-closable'] = closable, _classNames[prefix + 'tag-body-pointer'] = closable && closeArea === 'tag', _classNames[prefix + 'tag-' + color] = color && isPresetColor && type === 'primary', _classNames[prefix + 'tag-' + color + '-inverse'] = color && isPresetColor && type === 'normal', _classNames), className);

        // close btn
        var tailNode = this.renderTailNode();
        // tag node
        var tagNode = !visible ? null : _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                className: bodyClazz,
                onClick: this.handleBodyClick,
                onKeyDown: this.onKeyDown,
                tabIndex: disabled ? '' : '0',
                role: 'button',
                'aria-disabled': disabled,
                disabled: disabled,
                dir: rtl ? 'rtl' : undefined,
                ref: function ref(n) {
                    return _this3.tagNode = n;
                },
                style: this.getTagStyle()
            }, otherTagProps),
            _react2.default.createElement(
                'span',
                { className: prefix + 'tag-body' },
                children
            ),
            tailNode
        );

        if (animation && _util.support.animation) {
            return this.renderAnimatedTag(tagNode, prefix + 'tag-zoom');
        }

        // 未开启或不支持动画
        return tagNode;
    };

    return Tag;
}(_react.Component), _class.propTypes = {
    /**
     * 标签类名前缀,提供给二次开发者用
     * @default next-
     */
    prefix: _propTypes2.default.string,
    /**
     * 标签的类型
     */
    type: _propTypes2.default.oneOf(['normal', 'primary']),
    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),

    /**
     * 标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效
     */
    color: _propTypes2.default.string,
    /**
     * 是否开启动效
     */
    animation: _propTypes2.default.bool,
    closeArea: _propTypes2.default.oneOf(['tag', 'tail']),
    closable: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    afterClose: _propTypes2.default.func,
    /**
     * 标签出现动画结束后执行的回调
     */
    afterAppear: _propTypes2.default.func,
    className: _propTypes2.default.any,
    children: _propTypes2.default.node,
    /**
     * 点击回调
     */
    onClick: _propTypes2.default.func,
    _shape: _propTypes2.default.oneOf(['default', 'closable', 'checkable']),
    disabled: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'normal',
    size: 'medium',
    closeArea: 'tail',
    animation: false,
    onClose: noop,
    afterClose: noop,
    afterAppear: noop,
    onClick: noop,
    _shape: 'default',
    disabled: false,
    rtl: false,
    locale: _zhCn2.default.Tag
}, _temp);
Tag.displayName = 'Tag';
exports.default = _configProvider2.default.config(Tag);
module.exports = exports['default'];