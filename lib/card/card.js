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

var _class, _temp; /* eslint-disable valid-jsdoc */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _bulletHeader = require('./bullet-header');

var _bulletHeader2 = _interopRequireDefault(_bulletHeader);

var _collapseContent = require('./collapse-content');

var _collapseContent2 = _interopRequireDefault(_collapseContent);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;

/**
 * Card
 * @order 0
 */

var Card = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3.default)(this, Card);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Card.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            title = _props.title,
            subTitle = _props.subTitle,
            extra = _props.extra,
            showTitleBullet = _props.showTitleBullet,
            showHeadDivider = _props.showHeadDivider,
            children = _props.children,
            rtl = _props.rtl,
            contentHeight = _props.contentHeight,
            free = _props.free,
            actions = _props.actions,
            media = _props.media;


        var cardCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'card'] = true, _classNames[prefix + 'card-free'] = free, _classNames[prefix + 'card-show-divider'] = showHeadDivider, _classNames[prefix + 'card-hide-divider'] = !showHeadDivider, _classNames), className);

        var others = pickOthers(Object.keys(Card.propTypes), this.props);

        others.dir = rtl ? 'rtl' : undefined;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: cardCls }),
            media && _react2.default.createElement(
                _media2.default,
                null,
                media
            ),
            _react2.default.createElement(_bulletHeader2.default, {
                title: title,
                subTitle: subTitle,
                extra: extra,
                showTitleBullet: showTitleBullet
            }),
            free ? children : _react2.default.createElement(
                _collapseContent2.default,
                { contentHeight: contentHeight },
                children
            ),
            actions && _react2.default.createElement(
                _actions2.default,
                null,
                actions
            )
        );
    };

    return Card;
}(_react2.default.Component), _class.displayName = 'Card', _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 卡片的上的图片 / 视频
     */
    media: _propTypes2.default.node,
    /**
     * 卡片的标题
     */
    title: _propTypes2.default.node,
    /**
     * 卡片的副标题
     */
    subTitle: _propTypes2.default.node,
    /**
     * 卡片操作组，位置在卡片底部
     */
    actions: _propTypes2.default.node,
    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet: _propTypes2.default.bool,
    /**
     * 是否展示头部的分隔线
     */
    showHeadDivider: _propTypes2.default.bool,
    /**
     * 内容区域的固定高度
     */
    contentHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 标题区域的用户自定义内容
     */
    extra: _propTypes2.default.node,
    /**
     * 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效
     */
    free: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    children: _propTypes2.default.node
}), _class.defaultProps = {
    prefix: 'next-',
    free: false,
    showTitleBullet: true,
    showHeadDivider: true,
    contentHeight: 120
}, _temp);
Card.displayName = 'Card';
exports.default = Card;
module.exports = exports['default'];