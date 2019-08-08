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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

var _zhCn = require('../locale/zh-cn.js');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Upload.Dragger
 * @description IE10+ 支持。继承 Upload 的 API，除非特别说明
 */
var Dragger = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Dragger, _React$Component);

    function Dragger() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Dragger);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            dragOver: false
        }, _this.onDragOver = function (e) {
            if (!_this.state.dragOver) {
                _this.setState({
                    dragOver: true
                });
            }

            _this.props.onDragOver(e);
        }, _this.onDragLeave = function (e) {
            _this.setState({
                dragOver: false
            });
            _this.props.onDragLeave(e);
        }, _this.onDrop = function (e) {
            _this.setState({
                dragOver: false
            });
            _this.props.onDrop(e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Dragger.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            className = _props.className,
            style = _props.style,
            shape = _props.shape,
            locale = _props.locale,
            prefix = _props.prefix,
            listType = _props.listType,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'style', 'shape', 'locale', 'prefix', 'listType']);

        var prefixCls = prefix + 'upload-drag';
        var cls = (0, _classnames2.default)((_classNames = {}, _classNames['' + prefixCls] = true, _classNames[prefixCls + '-over'] = this.state.dragOver, _classNames[className] = !!className, _classNames));

        var children = this.props.children || _react2.default.createElement(
            'div',
            { className: cls },
            _react2.default.createElement(
                'p',
                { className: prefixCls + '-icon' },
                _react2.default.createElement(_icon2.default, { size: 'large', className: prefixCls + '-upload-icon' })
            ),
            _react2.default.createElement(
                'p',
                { className: prefixCls + '-text' },
                locale.drag.text
            ),
            _react2.default.createElement(
                'p',
                { className: prefixCls + '-hint' },
                locale.drag.hint
            )
        );

        return _react2.default.createElement(
            _upload2.default,
            (0, _extends3.default)({}, others, {
                prefix: prefix,
                shape: shape,
                listType: listType,
                dragable: true,
                style: style,
                onDragOver: this.onDragOver,
                onDragLeave: this.onDragLeave,
                onDrop: this.onDrop,
                ref: this.saveUploaderRef
            }),
            children
        );
    };

    return Dragger;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    shape: _propTypes2.default.string,
    onDragOver: _propTypes2.default.func,
    onDragLeave: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    limit: _propTypes2.default.number,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    defaultValue: _propTypes2.default.array,
    children: _propTypes2.default.node,
    listType: _propTypes2.default.string,
    timeout: _propTypes2.default.number
}, _class.defaultProps = {
    prefix: 'next-',
    onDragOver: _util.func.noop,
    onDragLeave: _util.func.noop,
    onDrop: _util.func.noop,
    locale: _zhCn2.default.Upload
}, _temp2);
Dragger.displayName = 'Dragger';
exports.default = Dragger;
module.exports = exports['default'];