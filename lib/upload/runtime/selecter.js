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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../../util');

var _util2 = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop;

/**
 * Upload.Selecter
 * @description [底层能力] 可自定义样式的文件选择器
 */

var Selecter = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Selecter, _React$Component);

    function Selecter() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Selecter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onSelect = function (e) {
            var files = e.target.files;
            var filesArr = files.length ? Array.prototype.slice.call(files) : [files];

            filesArr.forEach(function (file) {
                file.uid = (0, _util2.uid)();
            });

            _this.props.onSelect(filesArr);
        }, _this.onClick = function () {
            var el = _this.fileRef;
            if (!el) {
                return;
            }
            // NOTE: 在 IE 下，el.value = '' 在 el.click() 之后，会触发 input[type=file] 两次 onChange
            el.value = '';
            el.click();
        }, _this.onKeyDown = function (e) {
            if (e.key === 'Enter') {
                _this.onClick();
            }
        }, _this.onDrop = function (e) {
            e.preventDefault();

            var files = e.dataTransfer.files;
            var filesArr = Array.prototype.slice.call(files);

            _this.props.onDrop(filesArr);
        }, _this.onDragOver = function (e) {
            e.preventDefault();
            _this.props.onDragOver(e);
        }, _this.saveFileRef = function (ref) {
            _this.fileRef = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /**
     * 点击上传按钮
     * @return {void}
     */


    /**
     * 键盘事件
     * @param  {SyntheticEvent} e
     * @return {void}
     */


    /**
     * 拖拽
     * @param  {SyntheticEvent} e
     * @return {void}
     */


    Selecter.prototype.render = function render() {
        var _props = this.props,
            accept = _props.accept,
            multiple = _props.multiple,
            children = _props.children,
            id = _props.id,
            disabled = _props.disabled,
            dragable = _props.dragable,
            style = _props.style,
            className = _props.className,
            name = _props.name;


        var events = {};
        if (!disabled) {
            events = (0, _extends3.default)({
                onClick: this.onClick,
                onKeyDown: this.onKeyDown,
                tabIndex: '0'
            }, dragable ? {
                onDrop: this.onDrop,
                onDragOver: this.onDragOver,
                onDragLeave: this.props.onDragLeave
            } : {});
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                role: 'application',
                style: style,
                className: className
            }, events),
            _react2.default.createElement('input', {
                type: 'file',
                name: name,
                id: id,
                ref: this.saveFileRef,
                style: { display: 'none' },
                accept: accept,
                'aria-hidden': true,
                multiple: multiple,
                onChange: this.onSelect,
                disabled: disabled
            }),
            children
        );
    };

    return Selecter;
}(_react2.default.Component), _class.propTypes = {
    id: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    /**
     * 是否禁用上传功能
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
     */
    multiple: _propTypes2.default.bool,
    /**
     * 是否支持拖拽上传，`ie10+` 支持。
     */
    dragable: _propTypes2.default.bool,
    /**
     * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     */
    accept: _propTypes2.default.string,
    /**
     * 文件选择回调
     */
    onSelect: _propTypes2.default.func,
    /**
     * 拖拽经过回调
     */
    onDragOver: _propTypes2.default.func,
    /**
     * 拖拽离开回调
     */
    onDragLeave: _propTypes2.default.func,
    /**
     * 拖拽完成回调
     */
    onDrop: _propTypes2.default.func,
    children: _propTypes2.default.node,
    name: _propTypes2.default.string
}, _class.defaultProps = {
    name: 'file',
    multiple: false,
    onSelect: noop,
    onDragOver: noop,
    onDragLeave: noop,
    onDrop: noop
}, _temp2);
Selecter.displayName = 'Selecter';
exports.default = Selecter;
module.exports = exports['default'];