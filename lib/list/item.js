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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List.Item
 */
var ListItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ListItem, _Component);

    function ListItem() {
        (0, _classCallCheck3.default)(this, ListItem);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    ListItem.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            title = _props.title,
            description = _props.description,
            media = _props.media,
            extra = _props.extra,
            className = _props.className,
            children = _props.children,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'title', 'description', 'media', 'extra', 'className', 'children']);


        var classes = (0, _classnames2.default)(prefix + 'list-item', className);

        return _react2.default.createElement(
            'li',
            (0, _extends3.default)({}, others, { className: classes }),
            media ? _react2.default.createElement(
                'div',
                { className: prefix + 'list-item-media' },
                media
            ) : null,
            _react2.default.createElement(
                'div',
                { className: prefix + 'list-item-content' },
                title ? _react2.default.createElement(
                    'div',
                    { className: prefix + 'list-item-title' },
                    title
                ) : null,
                description ? _react2.default.createElement(
                    'div',
                    { className: prefix + 'list-item-description' },
                    description
                ) : null,
                children
            ),
            extra ? _react2.default.createElement(
                'div',
                { className: prefix + 'list-item-extra' },
                extra
            ) : null
        );
    };

    return ListItem;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 列表元素的标题
     */
    title: _propTypes2.default.node,
    /**
     * 列表元素的描述内容
     */
    description: _propTypes2.default.node,
    /**
     * 列表元素的头像 / 图标 / 图片内容
     */
    media: _propTypes2.default.node,
    /**
     * 额外内容
     */
    extra: _propTypes2.default.node,
    className: _propTypes2.default.any
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
ListItem.displayName = 'ListItem';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(ListItem));
module.exports = exports['default'];