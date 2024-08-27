"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var icon_1 = tslib_1.__importDefault(require("../icon"));
var base_1 = tslib_1.__importDefault(require("./base"));
var index_1 = tslib_1.__importDefault(require("./runtime/index"));
var html5_uploader_1 = tslib_1.__importDefault(require("./runtime/html5-uploader"));
var list_1 = tslib_1.__importDefault(require("./list"));
var util_2 = require("./util");
var noop = util_1.func.noop;
var Upload = /** @class */ (function (_super) {
    tslib_1.__extends(Upload, _super);
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
                var objFile = (0, util_2.fileToObject)(file);
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
                var err = new Error(util_2.errorCode.EXCEED_LIMIT);
                err.code = util_2.errorCode.EXCEED_LIMIT;
                _this.onError(err, null, file);
            });
            if (!autoUpload) {
                uploadFiles.forEach(function (file) {
                    var isPassed = afterSelect(file);
                    util_1.func.promiseCall(isPassed, util_1.func.noop, function (error) {
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
            var newFile = (0, util_2.fileToObject)(current);
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
            var targetItem = (0, util_2.getFileItem)(file, value);
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
                e.code = util_2.errorCode.RESPONSE_FAIL;
                return _this.onError(e, response, file);
            }
            if (response.success === false) {
                var err = new Error(response.message || util_2.errorCode.RESPONSE_FAIL);
                err.code = util_2.errorCode.RESPONSE_FAIL;
                return _this.onError(err, response, file);
            }
            var value = _this.state.value;
            var targetItem = (0, util_2.getFileItem)(file, value);
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
            var targetItem = (0, util_2.getFileItem)(file, value);
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
            var targetItem = (0, util_2.getFileItem)(file, fileList);
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
            var targetItem = (0, util_2.getFileItem)(file, fileList);
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
        var targetItem = (0, util_2.getFileItem)(old, this.state.value);
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
        var _e = this.props, listType = _e.listType, prefix = _e.prefix, dragable = _e.dragable, shape = _e.shape, className = _e.className, style = _e.style, useDataURL = _e.useDataURL, disabled = _e.disabled, limit = _e.limit, closable = _e.closable, beforeUpload = _e.beforeUpload, readonly = _e.readonly, onRemove = _e.onRemove, onCancel = _e.onCancel, onPreview = _e.onPreview, list = _e.list, extraRender = _e.extraRender, progressProps = _e.progressProps, rtl = _e.rtl, isPreview = _e.isPreview, renderPreview = _e.renderPreview, name = _e.name, _f = _e.fileKeyName, fileKeyName = _f === void 0 ? name : _f, fileNameRender = _e.fileNameRender, actionRender = _e.actionRender, previewOnFileName = _e.previewOnFileName, itemRender = _e.itemRender, others = tslib_1.__rest(_e, ["listType", "prefix", "dragable", "shape", "className", "style", "useDataURL", "disabled", "limit", "closable", "beforeUpload", "readonly", "onRemove", "onCancel", "onPreview", "list", "extraRender", "progressProps", "rtl", "isPreview", "renderPreview", "name", "fileKeyName", "fileNameRender", "actionRender", "previewOnFileName", "itemRender"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "upload")] = true,
            _a["".concat(prefix, "upload-dragable")] = dragable,
            _a["".concat(prefix, "disabled")] = disabled,
            _a["".concat(prefix, "readonly")] = readonly,
            _a[className] = className,
            _a));
        var isExceedLimit = this.state.value.length >= limit;
        var innerCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "upload-inner")] = true,
            _b["".concat(prefix, "hidden")] = isExceedLimit,
            _b));
        var children = this.props.children;
        if (shape === 'card') {
            var cardCls = (0, classnames_1.default)((_c = {},
                _c["".concat(prefix, "upload-card")] = true,
                _c["".concat(prefix, "disabled")] = disabled,
                _c));
            children = (react_1.default.createElement("div", { className: cardCls },
                react_1.default.createElement(icon_1.default, { size: "large", type: "add", className: "".concat(prefix, "upload-add-icon") }),
                react_1.default.createElement("div", { tabIndex: 0, role: "button", className: "".concat(prefix, "upload-text") }, children)));
        }
        if (isPreview) {
            if (typeof renderPreview === 'function') {
                var previewCls = (0, classnames_1.default)((_d = {},
                    _d["".concat(prefix, "form-preview")] = true,
                    _d[className] = !!className,
                    _d));
                return (react_1.default.createElement("div", { style: style, className: previewCls }, renderPreview(this.state.value, this.props)));
            }
            if (listType) {
                return (react_1.default.createElement(list_1.default, { isPreview: true, listType: listType, style: style, className: className, value: this.state.value, onPreview: onPreview }));
            }
            return null;
        }
        // disabled 状态下把 remove 函数替换成禁止 remove 的函数
        var onRemoveFunc = disabled ? util_1.func.prevent : onRemove;
        var otherAttributes = util_1.obj.pickAttrsWith(this.props, 'data-');
        return (react_1.default.createElement("div", tslib_1.__assign({ className: cls, style: style }, otherAttributes),
            react_1.default.createElement(index_1.default, tslib_1.__assign({}, others, { name: fileKeyName, beforeUpload: beforeUpload, dragable: dragable, disabled: disabled || isExceedLimit, className: innerCls, onSelect: this.onSelect, onDrop: this.onDrop, onProgress: this.onProgress, onSuccess: this.onSuccess, onError: this.onError, ref: this.saveUploaderRef }), children),
            (listType && listType !== 'none') || list ? (react_1.default.createElement(list_1.default, { useDataURL: useDataURL, fileNameRender: fileNameRender, actionRender: actionRender, uploader: this, listType: listType, value: this.state.value, closable: closable, onRemove: onRemoveFunc, progressProps: progressProps, onCancel: onCancel, onPreview: onPreview, extraRender: extraRender, rtl: rtl, previewOnFileName: previewOnFileName, itemRender: itemRender })) : null));
    };
    Upload.displayName = 'Upload';
    Upload.propTypes = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, html5_uploader_1.default.propTypes), list_1.default.propTypes), { prefix: prop_types_1.default.string.isRequired, action: prop_types_1.default.string, value: prop_types_1.default.array, defaultValue: prop_types_1.default.array, shape: prop_types_1.default.oneOf(['card']), listType: prop_types_1.default.oneOf(['text', 'image', 'card', 'none']), list: prop_types_1.default.any, name: prop_types_1.default.string, data: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]), formatter: prop_types_1.default.func, limit: prop_types_1.default.number, timeout: prop_types_1.default.number, dragable: prop_types_1.default.bool, closable: prop_types_1.default.bool, useDataURL: prop_types_1.default.bool, disabled: prop_types_1.default.bool, onSelect: prop_types_1.default.func, onProgress: prop_types_1.default.func, onChange: prop_types_1.default.func, onSuccess: prop_types_1.default.func, afterSelect: prop_types_1.default.func, onRemove: prop_types_1.default.func, onError: prop_types_1.default.func, beforeUpload: prop_types_1.default.func, onDrop: prop_types_1.default.func, className: prop_types_1.default.string, style: prop_types_1.default.object, children: prop_types_1.default.node, autoUpload: prop_types_1.default.bool, request: prop_types_1.default.func, progressProps: prop_types_1.default.object, rtl: prop_types_1.default.bool, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, fileKeyName: prop_types_1.default.string, fileNameRender: prop_types_1.default.func, actionRender: prop_types_1.default.func, previewOnFileName: prop_types_1.default.bool });
    Upload.defaultProps = tslib_1.__assign(tslib_1.__assign({}, html5_uploader_1.default.defaultProps), { prefix: 'next-', limit: Infinity, autoUpload: true, closable: true, onSelect: noop, onProgress: noop, onChange: noop, onSuccess: noop, onRemove: noop, onError: noop, onDrop: noop, beforeUpload: noop, afterSelect: noop, previewOnFileName: false });
    return Upload;
}(base_1.default));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Upload);
