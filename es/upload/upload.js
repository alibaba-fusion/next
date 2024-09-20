import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { func, obj } from '../util';
import Icon from '../icon';
import Base from './base';
import Uploader from './runtime/index';
import html5Uploader from './runtime/html5-uploader';
import List from './list';
import { fileToObject, getFileItem, errorCode } from './util';
var noop = func.noop;
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelect = function (files) {
            var _a = _this.props, autoUpload = _a.autoUpload, afterSelect = _a.afterSelect, onSelect = _a.onSelect, limit = _a.limit;
            // 总数
            var total = _this.state.value.length + files.length;
            // 差额
            var less = limit - _this.state.value.length;
            if (less <= 0) {
                // 差额不足 则不上传
                return;
            }
            var fileList = files.map(function (file) {
                var objFile = fileToObject(file);
                objFile.state = 'selected';
                return objFile;
            });
            // 默认全量上传
            var uploadFiles = fileList;
            var discardFiles = [];
            if (total > limit) {
                // 全量上传总数会超过 limit 但是 还有差额
                uploadFiles = fileList.slice(0, less);
                discardFiles = fileList.slice(less);
            }
            var value = _this.state.value.concat(fileList);
            /* eslint-disable-next */
            // @ts-expect-error 无法为“value”赋值，因为它是只读属性。
            _this.state.value = value;
            if (autoUpload) {
                _this.uploadFiles(uploadFiles);
            }
            onSelect(uploadFiles, value);
            discardFiles.forEach(function (file) {
                // 丢弃的文件
                var err = new Error(errorCode.EXCEED_LIMIT);
                err.code = errorCode.EXCEED_LIMIT;
                _this.onError(err, null, file);
            });
            if (!autoUpload) {
                uploadFiles.forEach(function (file) {
                    var isPassed = afterSelect(file);
                    func.promiseCall(isPassed, func.noop, function (error) {
                        _this.onError(error, null, file);
                    });
                });
                _this.onChange(value, uploadFiles);
            }
        };
        _this.onDrop = function (files) {
            _this.onSelect(files);
            _this.props.onDrop(files);
        };
        // 替换掉队列里面的文件
        _this.replaceWithNewFile = function (old, current) {
            var newFile = fileToObject(current);
            newFile.state = 'selected';
            var matchKey = old.uid !== undefined ? 'uid' : 'name';
            var fileList = _this.state.value;
            for (var i = 0; i < fileList.length; i++) {
                var item = fileList[i];
                if (item[matchKey] === old[matchKey]) {
                    fileList.splice(i, 1, newFile);
                    break;
                }
            }
            _this.uploadFiles([newFile]);
            return newFile;
        };
        _this.onProgress = function (e, file) {
            //@ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
            _this.state.uploading = true;
            var value = _this.state.value;
            var targetItem = getFileItem(file, value);
            if (!targetItem) {
                return;
            }
            Object.assign(targetItem, {
                state: 'uploading',
                percent: e.percent,
            });
            _this.setState({
                value: value,
            });
            _this.props.onProgress(value, targetItem);
        };
        _this.onSuccess = function (response, file) {
            var formatter = _this.props.formatter;
            if (formatter) {
                response = formatter(response, file);
            }
            try {
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }
            }
            catch (e) {
                e.code = errorCode.RESPONSE_FAIL;
                return _this.onError(e, response, file);
            }
            if (response.success === false) {
                var err = new Error(response.message || errorCode.RESPONSE_FAIL);
                err.code = errorCode.RESPONSE_FAIL;
                return _this.onError(err, response, file);
            }
            var value = _this.state.value;
            var targetItem = getFileItem(file, value);
            if (!targetItem) {
                return;
            }
            Object.assign(targetItem, {
                state: 'done',
                response: response,
                url: response.url,
                downloadURL: response.downloadURL || response.url, // 下载地址 (可选)
            });
            if (!_this.props.useDataURL) {
                targetItem.imgURL = response.imgURL || response.url; // 缩略图地址 (可选)
            }
            _this.updateUploadingState();
            _this.onChange(value, targetItem);
            _this.props.onSuccess(targetItem, value);
        };
        _this.onError = function (err, response, file) {
            var value = _this.state.value;
            var targetItem = getFileItem(file, value);
            if (!targetItem) {
                return;
            }
            Object.assign(targetItem, {
                state: 'error',
                error: err,
                response: response,
            });
            _this.updateUploadingState();
            _this.onChange(value, targetItem);
            _this.props.onError(targetItem, value);
        };
        /**
         * 删除文件
         */
        _this.removeFile = function (file) {
            file.state = 'removed';
            _this.uploaderRef.abort(file); // 删除组件时调用组件的 `abort` 方法中断上传
            var fileList = _this.state.value;
            var targetItem = getFileItem(file, fileList);
            var index = fileList.indexOf(targetItem);
            if (index !== -1) {
                fileList.splice(index, 1);
                _this.onChange(fileList, targetItem);
            }
        };
        _this.updateUploadingState = function () {
            var inProgress = _this.state.value.some(function (i) { return i.state === 'uploading'; });
            if (!inProgress) {
                // @ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
                _this.state.uploading = false;
            }
        };
        /**
         * 取消上传
         */
        _this.abort = function (file) {
            var fileList = _this.state.value;
            var targetItem = getFileItem(file, fileList);
            var index = fileList.indexOf(targetItem);
            if (index !== -1) {
                fileList.splice(index, 1);
                _this.onChange(fileList, targetItem);
            }
            _this.uploaderRef.abort(file); // 取消上传时调用组件的 `abort` 方法中断上传
        };
        _this.onChange = function (value, file) {
            _this.setState({
                value: value,
            });
            _this.props.onChange(value, file);
        };
        var value;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = props.defaultValue;
        }
        _this.state = {
            value: !Array.isArray(value) ? [] : value,
            uploading: false,
        };
        return _this;
    }
    Upload.getDerivedStateFromProps = function (nextProps, prevState) {
        // 上传中不允许做受控修改
        if ('value' in nextProps && nextProps.value !== prevState.value && !prevState.uploading) {
            return {
                value: !Array.isArray(nextProps.value) ? [] : nextProps.value,
            };
        }
        return null;
    };
    /**
     * 对外暴露 API, 添加文件
     */
    Upload.prototype.selectFiles = function (files) {
        var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
        this.onSelect(filesArr);
    };
    Upload.prototype.uploadFiles = function (files) {
        // NOTE: drag 上传，当鼠标松开的时候回执行 onDrop，但此时 onChange 还没出发所以 value=[], 必须提前标识上传中
        // @ts-expect-error 无法为“uploading”赋值，因为它是只读属性。
        this.state.uploading = true;
        var fileList = files
            .filter(function (file) {
            if (file.state === 'selected' || file.state === 'error') {
                file.state = 'uploading';
                return true;
            }
            return false;
        })
            .map(function (file) {
            return file.originFileObj;
        });
        fileList.length && this.uploaderRef.startUpload(fileList);
    };
    /**
     * 对外暴露 api，控制文件上传
     */
    Upload.prototype.startUpload = function () {
        this.uploadFiles(this.state.value);
    };
    Upload.prototype.replaceFiles = function (old, current) {
        var targetItem = getFileItem(old, this.state.value);
        if (!targetItem) {
            return;
        }
        current.uid = old.uid;
        targetItem.originFileObj = current;
    };
    Upload.prototype.isUploading = function () {
        return this.state.uploading;
    };
    Upload.prototype.render = function () {
        var _a, _b, _c, _d;
        var _e = this.props, listType = _e.listType, prefix = _e.prefix, dragable = _e.dragable, shape = _e.shape, className = _e.className, style = _e.style, useDataURL = _e.useDataURL, disabled = _e.disabled, limit = _e.limit, closable = _e.closable, beforeUpload = _e.beforeUpload, readonly = _e.readonly, onRemove = _e.onRemove, onCancel = _e.onCancel, onPreview = _e.onPreview, list = _e.list, extraRender = _e.extraRender, progressProps = _e.progressProps, rtl = _e.rtl, isPreview = _e.isPreview, renderPreview = _e.renderPreview, name = _e.name, _f = _e.fileKeyName, fileKeyName = _f === void 0 ? name : _f, fileNameRender = _e.fileNameRender, actionRender = _e.actionRender, previewOnFileName = _e.previewOnFileName, itemRender = _e.itemRender, others = __rest(_e, ["listType", "prefix", "dragable", "shape", "className", "style", "useDataURL", "disabled", "limit", "closable", "beforeUpload", "readonly", "onRemove", "onCancel", "onPreview", "list", "extraRender", "progressProps", "rtl", "isPreview", "renderPreview", "name", "fileKeyName", "fileNameRender", "actionRender", "previewOnFileName", "itemRender"]);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "upload")] = true,
            _a["".concat(prefix, "upload-dragable")] = dragable,
            _a["".concat(prefix, "disabled")] = disabled,
            _a["".concat(prefix, "readonly")] = readonly,
            _a[className] = className,
            _a));
        var isExceedLimit = this.state.value.length >= limit;
        var innerCls = classNames((_b = {},
            _b["".concat(prefix, "upload-inner")] = true,
            _b["".concat(prefix, "hidden")] = isExceedLimit,
            _b));
        var children = this.props.children;
        if (shape === 'card') {
            var cardCls = classNames((_c = {},
                _c["".concat(prefix, "upload-card")] = true,
                _c["".concat(prefix, "disabled")] = disabled,
                _c));
            children = (React.createElement("div", { className: cardCls },
                React.createElement(Icon, { size: "large", type: "add", className: "".concat(prefix, "upload-add-icon") }),
                React.createElement("div", { tabIndex: 0, role: "button", className: "".concat(prefix, "upload-text") }, children)));
        }
        if (isPreview) {
            if (typeof renderPreview === 'function') {
                var previewCls = classNames((_d = {},
                    _d["".concat(prefix, "form-preview")] = true,
                    _d[className] = !!className,
                    _d));
                return (React.createElement("div", { style: style, className: previewCls }, renderPreview(this.state.value, this.props)));
            }
            if (listType) {
                return (React.createElement(List, { isPreview: true, listType: listType, style: style, className: className, value: this.state.value, onPreview: onPreview }));
            }
            return null;
        }
        // disabled 状态下把 remove 函数替换成禁止 remove 的函数
        var onRemoveFunc = disabled ? func.prevent : onRemove;
        var otherAttributes = obj.pickAttrsWith(this.props, 'data-');
        return (React.createElement("div", __assign({ className: cls, style: style }, otherAttributes),
            React.createElement(Uploader, __assign({}, others, { name: fileKeyName, beforeUpload: beforeUpload, dragable: dragable, disabled: disabled || isExceedLimit, className: innerCls, onSelect: this.onSelect, onDrop: this.onDrop, onProgress: this.onProgress, onSuccess: this.onSuccess, onError: this.onError, ref: this.saveUploaderRef }), children),
            (listType && listType !== 'none') || list ? (React.createElement(List, { useDataURL: useDataURL, fileNameRender: fileNameRender, actionRender: actionRender, uploader: this, listType: listType, value: this.state.value, closable: closable, onRemove: onRemoveFunc, progressProps: progressProps, onCancel: onCancel, onPreview: onPreview, extraRender: extraRender, rtl: rtl, previewOnFileName: previewOnFileName, itemRender: itemRender })) : null));
    };
    Upload.displayName = 'Upload';
    Upload.propTypes = __assign(__assign(__assign({}, html5Uploader.propTypes), List.propTypes), { prefix: PropTypes.string.isRequired, action: PropTypes.string, value: PropTypes.array, defaultValue: PropTypes.array, shape: PropTypes.oneOf(['card']), listType: PropTypes.oneOf(['text', 'image', 'card', 'none']), list: PropTypes.any, name: PropTypes.string, data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]), formatter: PropTypes.func, limit: PropTypes.number, timeout: PropTypes.number, dragable: PropTypes.bool, closable: PropTypes.bool, useDataURL: PropTypes.bool, disabled: PropTypes.bool, onSelect: PropTypes.func, onProgress: PropTypes.func, onChange: PropTypes.func, onSuccess: PropTypes.func, afterSelect: PropTypes.func, onRemove: PropTypes.func, onError: PropTypes.func, beforeUpload: PropTypes.func, onDrop: PropTypes.func, className: PropTypes.string, style: PropTypes.object, children: PropTypes.node, autoUpload: PropTypes.bool, request: PropTypes.func, progressProps: PropTypes.object, rtl: PropTypes.bool, isPreview: PropTypes.bool, renderPreview: PropTypes.func, fileKeyName: PropTypes.string, fileNameRender: PropTypes.func, actionRender: PropTypes.func, previewOnFileName: PropTypes.bool });
    Upload.defaultProps = __assign(__assign({}, html5Uploader.defaultProps), { prefix: 'next-', limit: Infinity, autoUpload: true, closable: true, onSelect: noop, onProgress: noop, onChange: noop, onSuccess: noop, onRemove: noop, onError: noop, onDrop: noop, beforeUpload: noop, afterSelect: noop, previewOnFileName: false });
    return Upload;
}(Base));
export default polyfill(Upload);
