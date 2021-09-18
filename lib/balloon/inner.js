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

var _util = require('../util');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _alignMap = require('./alignMap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by xiachi on 17/2/10.
 */

var noop = _util.func.noop;
var BalloonInner = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(BalloonInner, _React$Component);

    function BalloonInner() {
        (0, _classCallCheck3.default)(this, BalloonInner);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    BalloonInner.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            closable = _props.closable,
            className = _props.className,
            style = _props.style,
            isTooltip = _props.isTooltip,
            align = _props.align,
            title = _props.title,
            type = _props.type,
            onClose = _props.onClose,
            alignEdge = _props.alignEdge,
            children = _props.children,
            rtl = _props.rtl,
            locale = _props.locale,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'closable', 'className', 'style', 'isTooltip', 'align', 'title', 'type', 'onClose', 'alignEdge', 'children', 'rtl', 'locale']);


        var alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var _prefix = prefix;

        if (isTooltip) {
            _prefix = _prefix + 'balloon-tooltip';
        } else {
            _prefix = _prefix + 'balloon';
        }

        var closableInTitle = closable && title !== undefined;
        var closableInContent = closable && title === undefined;

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames['' + _prefix] = true, _classNames[_prefix + '-' + type] = type, _classNames[_prefix + '-medium'] = true, _classNames[_prefix + '-' + alignMap[align].arrow] = alignMap[align], _classNames[_prefix + '-closable'] = closableInContent, _classNames[className] = className, _classNames));

        var titleCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'balloon-title'] = true, _classNames2[_prefix + '-closable'] = closableInTitle, _classNames2));

        var closeIcon = _react2.default.createElement(
            'a',
            { role: 'button', 'aria-label': locale.close, tabIndex: '0', className: _prefix + '-close', onClick: onClose },
            _react2.default.createElement(_icon2.default, { type: 'close', size: 'small' })
        );

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                role: 'tooltip',
                'aria-live': 'polite',
                dir: rtl ? 'rtl' : undefined,
                className: classes,
                style: style
            }, _util.obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            _react2.default.createElement(
                'div',
                { className: prefix + 'balloon-arrow' },
                _react2.default.createElement('div', { className: prefix + 'balloon-arrow-content' })
            ),
            title && _react2.default.createElement(
                'div',
                { className: titleCls },
                title,
                closableInTitle && closeIcon
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'balloon-content' },
                children
            ),
            closableInContent && closeIcon
        );
    };

    return BalloonInner;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    closable: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    title: _propTypes2.default.node,
    className: _propTypes2.default.string,
    alignEdge: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    style: _propTypes2.default.any,
    align: _propTypes2.default.string,
    type: _propTypes2.default.string,
    isTooltip: _propTypes2.default.bool,
    locale: _propTypes2.default.object,
    pure: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closable: true,
    onClose: noop,
    locale: _zhCn2.default.Balloon,
    align: 'b',
    type: 'normal',
    alignEdge: false,
    pure: false
}, _temp);
BalloonInner.displayName = 'BalloonInner';
exports.default = BalloonInner;
module.exports = exports['default'];