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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;

/** Card */

var Card = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Card, _React$Component);

    function Card(props, context) {
        (0, _classCallCheck3.default)(this, Card);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.handleToggle = function () {
            _this.setState(function (prevState) {
                return {
                    expand: !prevState.expand
                };
            });
        };

        _this._contentRefHandler = function (ref) {
            _this.content = ref;
        };

        _this.saveFooter = function (ref) {
            _this.footer = ref;
        };

        _this.state = {
            needMore: false,
            expand: false,
            contentHeight: 'auto'
        };
        return _this;
    }

    Card.prototype.componentDidMount = function componentDidMount() {
        this._setNeedMore();
        this._setContentHeight();
    };

    Card.prototype.componentDidUpdate = function componentDidUpdate() {
        this._setContentHeight();
    };

    // 是否展示 More 按钮
    Card.prototype._setNeedMore = function _setNeedMore() {
        var contentHeight = this.props.contentHeight;

        var childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight
        });
    };

    // 设置 Body 的高度


    Card.prototype._setContentHeight = function _setContentHeight() {
        if (this.state.expand) {
            var childrenHeight = this._getNodeChildrenHeight(this.content);
            this.content.style.height = childrenHeight + 'px'; // get the real height
        } else {
            var el = _reactDom2.default.findDOMNode(this.footer);
            var height = this.props.contentHeight;

            if (el) {
                height = height - el.getBoundingClientRect().height;
            }

            this.content.style.height = height + 'px';
        }
    };

    Card.prototype._getNodeChildrenHeight = function _getNodeChildrenHeight(node) {
        if (!node) {
            return 0;
        }

        var contentChildNodes = node.childNodes;
        var length = contentChildNodes.length;

        if (!length) {
            return 0;
        }

        var lastNode = contentChildNodes[length - 1];

        return lastNode.offsetTop + lastNode.offsetHeight;
    };

    Card.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            title = _props.title,
            subTitle = _props.subTitle,
            extra = _props.extra,
            showTitleBullet = _props.showTitleBullet,
            showHeadDivider = _props.showHeadDivider,
            children = _props.children,
            locale = _props.locale;
        var _state = this.state,
            needMore = _state.needMore,
            expand = _state.expand;


        var cardCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'card'] = true, _classNames[prefix + 'card-show-divider'] = showHeadDivider, _classNames[prefix + 'card-hide-divider'] = !showHeadDivider, _classNames), className);

        var headCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'card-head'] = true, _classNames2[prefix + 'card-head-show-bullet'] = showTitleBullet, _classNames2));

        var others = pickOthers(Object.keys(Card.propTypes), this.props);

        var headExtra = extra ? _react2.default.createElement(
            'div',
            { className: prefix + 'card-extra' },
            extra
        ) : null;

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: cardCls }),
            title ? _react2.default.createElement(
                'div',
                { className: headCls },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'card-head-main' },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'card-title' },
                        title,
                        subTitle ? _react2.default.createElement(
                            'span',
                            { className: prefix + 'card-subtitle' },
                            subTitle
                        ) : null
                    ),
                    headExtra
                )
            ) : null,
            _react2.default.createElement(
                'div',
                { className: prefix + 'card-body' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'card-content', ref: this._contentRefHandler },
                    children
                ),
                needMore ? _react2.default.createElement(
                    'div',
                    { className: prefix + 'card-footer', ref: this.saveFooter, onClick: this.handleToggle },
                    _react2.default.createElement(
                        _button2.default,
                        { text: true, type: 'primary' },
                        expand ? locale.fold : locale.expand,
                        _react2.default.createElement(_icon2.default, { type: 'arrow-down', size: 'xs', className: expand ? 'expand' : '' })
                    )
                ) : null
            )
        );
    };

    return Card;
}(_react2.default.Component), _class.displayName = 'Card', _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 卡片的标题
     */
    title: _propTypes2.default.node,
    /**
     * 卡片的副标题
     */
    subTitle: _propTypes2.default.node,
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
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    showTitleBullet: true,
    showHeadDivider: true,
    contentHeight: 120,
    locale: _zhCn2.default.Card
}, _temp);
Card.displayName = 'Card';
exports.default = Card;
module.exports = exports['default'];