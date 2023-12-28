"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var util_1 = require("../../util");
var uploader_1 = require("./uploader");
var selecter_1 = require("./selecter");
var Html5Uploader = /** @class */ (function (_super) {
    tslib_1.__extends(Html5Uploader, _super);
    function Html5Uploader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.getUploadOptions = function (props) { return ({
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
            request: props.request,
        }); };
        return _this;
    }
    Html5Uploader.prototype.componentDidMount = function () {
        var props = this.props;
        var options = this.getUploadOptions(props);
        this.uploader = new uploader_1.default(options);
    };
    Html5Uploader.prototype.componentDidUpdate = function (prevProps) {
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
    Html5Uploader.prototype.componentWillUnmount = function () {
        this.abort();
    };
    Html5Uploader.prototype.abort = function (file) {
        this.uploader.abort(file);
    };
    Html5Uploader.prototype.startUpload = function (fileList) {
        this.uploader.startUpload(fileList);
    };
    Html5Uploader.prototype.render = function () {
        var _a = this.props, accept = _a.accept, multiple = _a.multiple, webkitdirectory = _a.webkitdirectory, children = _a.children, id = _a.id, disabled = _a.disabled, dragable = _a.dragable, style = _a.style, className = _a.className, onSelect = _a.onSelect, onDragOver = _a.onDragOver, onDragLeave = _a.onDragLeave, onDrop = _a.onDrop, name = _a.name, others = tslib_1.__rest(_a, ["accept", "multiple", "webkitdirectory", "children", "id", "disabled", "dragable", "style", "className", "onSelect", "onDragOver", "onDragLeave", "onDrop", "name"]);
        return (react_1.default.createElement(selecter_1.default, tslib_1.__assign({}, others, { id: id, accept: accept, multiple: multiple, webkitdirectory: webkitdirectory, dragable: dragable, disabled: disabled, className: className, style: style, onSelect: onSelect, onDragOver: onDragOver, onDragLeave: onDragLeave, onDrop: onDrop, name: name }), children));
    };
    Html5Uploader.propTypes = tslib_1.__assign(tslib_1.__assign({}, selecter_1.default.propTypes), { 
        /**
         * 上传的地址
         */
        action: prop_types_1.default.string, 
        /**
         * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
         */
        accept: prop_types_1.default.string, 
        /**
         * 上传额外传参
         */
        data: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]), 
        /**
         * 设置上传的请求头部
         */
        headers: prop_types_1.default.object, 
        /**
         * 是否允许请求携带 cookie
         */
        withCredentials: prop_types_1.default.bool, 
        /**
         * 上传文件之前
         * @param {Object} file 文件对象
         * @return {Boolean} `false` 停止上传
         */
        beforeUpload: prop_types_1.default.func, 
        /**
         * 正在上传文件的钩子，参数为上传的事件以及文件
         */
        onProgress: prop_types_1.default.func, 
        /**
         * 上传成功回调函数，参数为请求下响应信息以及文件
         */
        onSuccess: prop_types_1.default.func, 
        /**
         * 上传失败回调函数，参数为上传失败的信息、响应信息以及文件
         */
        onError: prop_types_1.default.func, children: prop_types_1.default.node, 
        /**
         * 上传超时,单位ms
         */
        timeout: prop_types_1.default.number, 
        /**
         * 上传方法
         */
        method: prop_types_1.default.oneOf(['post', 'put']), request: prop_types_1.default.func });
    Html5Uploader.defaultProps = tslib_1.__assign(tslib_1.__assign({}, selecter_1.default.defaultProps), { name: 'file', multiple: false, withCredentials: true, beforeUpload: util_1.func.noop, onSelect: util_1.func.noop, onDragOver: util_1.func.noop, onDragLeave: util_1.func.noop, onDrop: util_1.func.noop, onProgress: util_1.func.noop, onSuccess: util_1.func.noop, onError: util_1.func.noop, onAbort: util_1.func.noop, method: 'post' });
    return Html5Uploader;
}(react_1.Component));
exports.default = Html5Uploader;
