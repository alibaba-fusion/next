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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;

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
            closable = _props3.closable;


        if (!closable) {
            return null;
        }

        return _react2.default.createElement(
            'span',
            {
                className: prefix + 'tag-close-btn',
                onClick: this.handleTailClick
            },
            _react2.default.createElement(_icon2.default, { type: 'close' })
        );
    };

    Tag.prototype.render = function render() {
        var _classNames,
            _this3 = this;

        var _props4 = this.props,
            prefix = _props4.prefix,
            type = _props4.type,
            size = _props4.size,
            _shape = _props4._shape,
            closable = _props4.closable,
            closeArea = _props4.closeArea,
            className = _props4.className,
            children = _props4.children,
            animation = _props4.animation,
            disabled = _props4.disabled,
            rtl = _props4.rtl;
        var visible = this.state.visible;

        var others = _util.obj.pickOthers(Tag.propTypes, this.props);
        var shape = closable ? 'closable' : _shape;
        var bodyClazz = (0, _classnames2.default)([prefix + 'tag', prefix + 'tag-' + shape, prefix + 'tag-level-' + type, prefix + 'tag-' + size], (_classNames = {}, _classNames[prefix + 'tag-closable'] = closable, _classNames[prefix + 'tag-body-pointer'] = closable && closeArea === 'tag', _classNames), className);
        // close btn
        var tailNode = this.renderTailNode();
        // tag node
        var tagNode = !visible ? null : _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                className: bodyClazz,
                onClick: this.handleBodyClick,
                onKeyDown: this.onKeyDown,
                tabIndex: '0',
                role: 'button',
                'aria-disabled': disabled,
                disabled: disabled,
                dir: rtl ? 'rtl' : undefined,
                ref: function ref(n) {
                    return _this3.tagNode = n;
                }
            }, others),
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

    closable: _propTypes2.default.bool,
    /**
     * 是否开启动效
     */
    animation: _propTypes2.default.bool,
    closeArea: _propTypes2.default.oneOf(['tag', 'tail']),
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
    rtl: _propTypes2.default.bool
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
    rtl: false
}, _temp);
Tag.displayName = 'Tag';
exports.default = Tag;
module.exports = exports['default'];