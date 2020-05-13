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

var _uploader = require('./uploader');

var _uploader2 = _interopRequireDefault(_uploader);

var _selecter = require('./selecter');

var _selecter2 = _interopRequireDefault(_selecter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html5Uploader = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Html5Uploader, _Component);

    function Html5Uploader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Html5Uploader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getUploadOptions = function (props) {
            return {
                action: props.action,
                name: props.name,
                timeout: props.timeout,
                method: props.method,
                beforeUpload: props.beforeUpload,
                onProgress: props.onProgress,
                onSuccess: props.onSuccess,
                onError: props.onError,
                withCredentials: props.withCredentials,
                headers: props.headers,
                data: props.data,
                request: props.request
            };
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Html5Uploader.prototype.componentDidMount = function componentDidMount() {
        var props = this.props;

        var options = this.getUploadOptions(props);
        this.uploader = new _uploader2.default(options);
    };

    Html5Uploader.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var preOptions = this.getUploadOptions(prevProps);
        var options = this.getUploadOptions(this.props);

        var keys = Object.keys(options);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (options[key] !== preOptions[key]) {
                this.uploader.setOptions(options);
                return;
            }
        }
    };

    Html5Uploader.prototype.componentWillUnmount = function componentWillUnmount() {
        this.abort();
    };

    Html5Uploader.prototype.abort = function abort(file) {
        this.uploader.abort(file);
    };

    Html5Uploader.prototype.startUpload = function startUpload(fileList) {
        this.uploader.startUpload(fileList);
    };

    Html5Uploader.prototype.render = function render() {
        var _props = this.props,
            accept = _props.accept,
            multiple = _props.multiple,
            children = _props.children,
            id = _props.id,
            disabled = _props.disabled,
            dragable = _props.dragable,
            style = _props.style,
            className = _props.className,
            onSelect = _props.onSelect,
            onDragOver = _props.onDragOver,
            onDragLeave = _props.onDragLeave,
            onDrop = _props.onDrop,
            name = _props.name;


        return _react2.default.createElement(
            _selecter2.default,
            {
                id: id,
                accept: accept,
                multiple: multiple,
                dragable: dragable,
                disabled: disabled,
                className: className,
                style: style,
                onSelect: onSelect,
                onDragOver: onDragOver,
                onDragLeave: onDragLeave,
                onDrop: onDrop,
                name: name
            },
            children
        );
    };

    return Html5Uploader;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _selecter2.default.propTypes, {
    /**
     * 上传的地址
     */
    action: _propTypes2.default.string,
    /**
     * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     */
    accept: _propTypes2.default.string,
    /**
     * 上传额外传参
     */
    data: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    /**
     * 设置上传的请求头部
     */
    headers: _propTypes2.default.object,
    /**
     * 是否允许请求携带 cookie
     */
    withCredentials: _propTypes2.default.bool,
    /**
     * 上传文件之前
     * @param {Object} file 文件对象
     * @return {Boolean} `false` 停止上传
     */
    beforeUpload: _propTypes2.default.func,
    /**
     * 正在上传文件的钩子，参数为上传的事件以及文件
     */
    onProgress: _propTypes2.default.func,
    /**
     * 上传成功回调函数，参数为请求下响应信息以及文件
     */
    onSuccess: _propTypes2.default.func,
    /**
     * 上传失败回调函数，参数为上传失败的信息、响应信息以及文件
     */
    onError: _propTypes2.default.func,
    children: _propTypes2.default.node,
    /**
     * 上传超时,单位ms
     */
    timeout: _propTypes2.default.number,
    /**
     * 上传方法
     */
    method: _propTypes2.default.oneOf(['post', 'put']),
    request: _propTypes2.default.func
}), _class.defaultProps = (0, _extends3.default)({}, _selecter2.default.defaultProps, {
    name: 'file',
    multiple: false,
    withCredentials: true,
    beforeUpload: _util.func.noop,
    onSelect: _util.func.noop,
    onDragOver: _util.func.noop,
    onDragLeave: _util.func.noop,
    onDrop: _util.func.noop,
    onProgress: _util.func.noop,
    onSuccess: _util.func.noop,
    onError: _util.func.noop,
    onAbort: _util.func.noop,
    method: 'post'
}), _temp2);
Html5Uploader.displayName = 'Html5Uploader';
exports.default = Html5Uploader;
module.exports = exports['default'];