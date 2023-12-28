import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { func } from '../../util';
import Uploader from './uploader';
import Selecter from './selecter';
var Html5Uploader = /** @class */ (function (_super) {
    __extends(Html5Uploader, _super);
    function Html5Uploader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        this.uploader = new Uploader(options);
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
        var _a = this.props, accept = _a.accept, multiple = _a.multiple, webkitdirectory = _a.webkitdirectory, children = _a.children, id = _a.id, disabled = _a.disabled, dragable = _a.dragable, style = _a.style, className = _a.className, onSelect = _a.onSelect, onDragOver = _a.onDragOver, onDragLeave = _a.onDragLeave, onDrop = _a.onDrop, name = _a.name, others = __rest(_a, ["accept", "multiple", "webkitdirectory", "children", "id", "disabled", "dragable", "style", "className", "onSelect", "onDragOver", "onDragLeave", "onDrop", "name"]);
        return (React.createElement(Selecter, __assign({}, others, { id: id, accept: accept, multiple: multiple, webkitdirectory: webkitdirectory, dragable: dragable, disabled: disabled, className: className, style: style, onSelect: onSelect, onDragOver: onDragOver, onDragLeave: onDragLeave, onDrop: onDrop, name: name }), children));
    };
    Html5Uploader.propTypes = __assign(__assign({}, Selecter.propTypes), { 
        /**
         * 上传的地址
         */
        action: PropTypes.string, 
        /**
         * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
         */
        accept: PropTypes.string, 
        /**
         * 上传额外传参
         */
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]), 
        /**
         * 设置上传的请求头部
         */
        headers: PropTypes.object, 
        /**
         * 是否允许请求携带 cookie
         */
        withCredentials: PropTypes.bool, 
        /**
         * 上传文件之前
         * @param {Object} file 文件对象
         * @return {Boolean} `false` 停止上传
         */
        beforeUpload: PropTypes.func, 
        /**
         * 正在上传文件的钩子，参数为上传的事件以及文件
         */
        onProgress: PropTypes.func, 
        /**
         * 上传成功回调函数，参数为请求下响应信息以及文件
         */
        onSuccess: PropTypes.func, 
        /**
         * 上传失败回调函数，参数为上传失败的信息、响应信息以及文件
         */
        onError: PropTypes.func, children: PropTypes.node, 
        /**
         * 上传超时,单位ms
         */
        timeout: PropTypes.number, 
        /**
         * 上传方法
         */
        method: PropTypes.oneOf(['post', 'put']), request: PropTypes.func });
    Html5Uploader.defaultProps = __assign(__assign({}, Selecter.defaultProps), { name: 'file', multiple: false, withCredentials: true, beforeUpload: func.noop, onSelect: func.noop, onDragOver: func.noop, onDragLeave: func.noop, onDrop: func.noop, onProgress: func.noop, onSuccess: func.noop, onError: func.noop, onAbort: func.noop, method: 'post' });
    return Html5Uploader;
}(Component));
export default Html5Uploader;
