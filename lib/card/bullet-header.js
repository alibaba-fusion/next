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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Card.BulletHeader
 * @order 2
 */
var CardBulletHeader = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(CardBulletHeader, _Component);

    function CardBulletHeader() {
        (0, _classCallCheck3.default)(this, CardBulletHeader);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    CardBulletHeader.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            title = _props.title,
            subTitle = _props.subTitle,
            extra = _props.extra,
            showTitleBullet = _props.showTitleBullet;


        if (!title) return null;

        var headCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'card-head'] = true, _classNames[prefix + 'card-head-show-bullet'] = showTitleBullet, _classNames));

        var headExtra = extra ? _react2.default.createElement(
            'div',
            { className: prefix + 'card-extra' },
            extra
        ) : null;

        return _react2.default.createElement(
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
        );
    };

    return CardBulletHeader;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
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
     * 标题区域的用户自定义内容
     */
    extra: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-',
    showTitleBullet: true
}, _temp);
CardBulletHeader.displayName = 'CardBulletHeader';
exports.default = _configProvider2.default.config(CardBulletHeader, {
    componentName: 'Card'
});
module.exports = exports['default'];