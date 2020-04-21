'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Card.CollaspeContent
 * @order 3
 */
var CardCollaspeContent = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CardCollaspeContent, _Component);

    function CardCollaspeContent(props, context) {
        (0, _classCallCheck3.default)(this, CardCollaspeContent);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

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

    CardCollaspeContent.prototype.componentDidMount = function componentDidMount() {
        this._setNeedMore();
        this._setContentHeight();
    };

    CardCollaspeContent.prototype.componentDidUpdate = function componentDidUpdate() {
        this._setContentHeight();
    };

    // 是否展示 More 按钮
    CardCollaspeContent.prototype._setNeedMore = function _setNeedMore() {
        var contentHeight = this.props.contentHeight;

        var childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight
        });
    };

    // 设置 Body 的高度


    CardCollaspeContent.prototype._setContentHeight = function _setContentHeight() {
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

    CardCollaspeContent.prototype._getNodeChildrenHeight = function _getNodeChildrenHeight(node) {
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

    CardCollaspeContent.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            children = _props.children,
            locale = _props.locale;
        var _state = this.state,
            needMore = _state.needMore,
            expand = _state.expand;


        return _react2.default.createElement(
            'div',
            { className: prefix + 'card-body' },
            _react2.default.createElement(
                'div',
                {
                    className: prefix + 'card-content',
                    ref: this._contentRefHandler
                },
                children
            ),
            needMore ? _react2.default.createElement(
                'div',
                {
                    className: prefix + 'card-footer',
                    ref: this.saveFooter,
                    onClick: this.handleToggle
                },
                _react2.default.createElement(
                    _button2.default,
                    { text: true, type: 'primary' },
                    expand ? locale.fold : locale.expand,
                    _react2.default.createElement(_icon2.default, {
                        type: 'arrow-down',
                        size: 'xs',
                        className: expand ? 'expand' : ''
                    })
                )
            ) : null
        );
    };

    return CardCollaspeContent;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 内容区域的固定高度
     */
    contentHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    locale: _propTypes2.default.object,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-',
    contentHeight: 120,
    locale: _zhCn2.default.Card
}, _temp);
CardCollaspeContent.displayName = 'CardCollaspeContent';
exports.default = _configProvider2.default.config(CardCollaspeContent, {
    componentName: 'Card'
});
module.exports = exports['default'];