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

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */

/** Loading */
var Loading = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Loading, _React$Component);

    function Loading() {
        (0, _classCallCheck3.default)(this, Loading);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Loading.prototype.render = function render() {
        var _classNames2, _classNames3, _classNames4;

        var _props = this.props,
            tip = _props.tip,
            visible = _props.visible,
            children = _props.children,
            className = _props.className,
            style = _props.style,
            indicator = _props.indicator,
            color = _props.color,
            prefix = _props.prefix,
            fullScreen = _props.fullScreen,
            onVisibleChange = _props.onVisibleChange,
            tipAlign = _props.tipAlign,
            size = _props.size,
            inline = _props.inline,
            rtl = _props.rtl;


        var indicatorDom = null;
        var dotCls = prefix + 'loading-dot';

        if (indicator) {
            indicatorDom = indicator;
        } else {
            var _classNames;

            var backgroundColor = color;
            var fusionReactorCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'loading-fusion-reactor'] = true, _classNames[prefix + 'loading-medium-fusion-reactor'] = size === 'medium', _classNames));
            indicatorDom = _react2.default.createElement(
                'div',
                { className: fusionReactorCls, dir: rtl ? 'rtl' : undefined },
                _react2.default.createElement('span', { className: dotCls, style: { backgroundColor: backgroundColor } }),
                _react2.default.createElement('span', { className: dotCls, style: { backgroundColor: backgroundColor } }),
                _react2.default.createElement('span', { className: dotCls, style: { backgroundColor: backgroundColor } }),
                _react2.default.createElement('span', { className: dotCls, style: { backgroundColor: backgroundColor } })
            );
        }

        var loadingCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'loading'] = true, _classNames2[prefix + 'open'] = visible, _classNames2[prefix + 'loading-inline'] = inline, _classNames2[className] = className, _classNames2));

        var tipCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'loading-tip'] = true, _classNames3[prefix + 'loading-tip-fullscreen'] = fullScreen, _classNames3[prefix + 'loading-right-tip'] = tipAlign === 'right', _classNames3));

        var others = _util.obj.pickOthers(Loading.propTypes, this.props);

        var contentCls = (0, _classnames2.default)((_classNames4 = {}, _classNames4[prefix + 'loading-component'] = visible, _classNames4[prefix + 'loading-wrap'] = true, _classNames4));

        return fullScreen ? [children, _react2.default.createElement(
            _overlay2.default,
            (0, _extends3.default)({
                key: 'overlay',
                hasMask: true,
                align: 'cc cc'
            }, others, {
                className: className,
                style: style,
                visible: visible,
                onRequestClose: onVisibleChange
            }),
            _react2.default.createElement(
                'div',
                { className: tipCls },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-indicator' },
                    indicatorDom
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-tip-content' },
                    tip
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-tip-placeholder' },
                    tip
                )
            )
        )] : _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: loadingCls, style: style }, others),
            visible ? _react2.default.createElement(
                'div',
                { className: tipCls },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-indicator' },
                    indicatorDom
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-tip-content' },
                    tip
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'loading-tip-placeholder' },
                    tip
                )
            ) : null,
            _react2.default.createElement(
                'div',
                { className: contentCls },
                visible ? _react2.default.createElement('div', { className: prefix + 'loading-masker' }) : null,
                children
            )
        );
    };

    return Loading;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 自定义内容
     */
    tip: _propTypes2.default.any,
    /**
     * 自定义内容位置
     * @enumdesc 出现在动画右边, 出现在动画下面
     */
    tipAlign: _propTypes2.default.oneOf(['right', 'bottom']),
    /**
     * loading 状态, 默认 true
     */
    visible: _propTypes2.default.bool,
    onVisibleChange: _propTypes2.default.func,
    /**
     * 自定义class
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    /**
     * 设置动画尺寸
     * @description 仅仅对默认动画效果起作用
     * @enumdesc 大号, 中号
     */
    size: _propTypes2.default.oneOf(['large', 'medium']),
    /**
     * 自定义动画
     */
    indicator: _propTypes2.default.any,
    /**
     * 动画颜色
     */
    color: _propTypes2.default.string,
    /**
     * 全屏展示
     */
    fullScreen: _propTypes2.default.bool,
    /**
     * 子元素
     */
    children: _propTypes2.default.any,
    /**
     * should loader be displayed inline
     */
    inline: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    visible: true,
    onVisibleChange: _util.func.noop,
    animate: null,
    tipAlign: 'bottom',
    size: 'large',
    inline: true
}, _temp);
Loading.displayName = 'Loading';
exports.default = _configProvider2.default.config(Loading);
module.exports = exports['default'];