"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var progress_1 = tslib_1.__importDefault(require("../progress"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var button_1 = tslib_1.__importDefault(require("../button"));
var util_1 = require("../util");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_2 = require("./util");
var transform_1 = tslib_1.__importDefault(require("./transform"));
var selecter_1 = tslib_1.__importDefault(require("./runtime/selecter"));
var isIE9 = util_1.env.ieVersion === 9;
var List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.handleClose = function (file) {
            var _a = _this.props, onRemove = _a.onRemove, uploader = _a.uploader;
            var remove = onRemove(file);
            util_1.func.promiseCall(remove, function () {
                uploader && uploader.removeFile(file);
            });
        };
        _this.handleCancel = function (file) {
            var _a = _this.props, onCancel = _a.onCancel, uploader = _a.uploader;
            var cancel = onCancel(file);
            util_1.func.promiseCall(cancel, function () {
                uploader && uploader.abort(file);
            });
        };
        _this.onImageError = function (file, obj) {
            obj.onerror = null;
            _this.props.onImageError(obj, file);
        };
        _this.onSelect = function (oldfile, files) {
            var uploader = _this.props.uploader;
            uploader && files.length && uploader.replaceWithNewFile(oldfile, files[0]);
        };
        return _this;
    }
    List.prototype.componentDidUpdate = function () {
        var _this = this;
        var _a = this.props, listType = _a.listType, useDataURL = _a.useDataURL, value = _a.value;
        if (listType !== 'image' && listType !== 'card') {
            return;
        }
        useDataURL &&
            value.forEach(function (file) {
                if (typeof document === 'undefined' ||
                    typeof window === 'undefined' ||
                    !window.FileReader ||
                    !window.File ||
                    !(file.originFileObj instanceof File) ||
                    file.imgURL !== undefined) {
                    return;
                }
                file.imgURL = '';
                (0, util_2.previewFile)(file.originFileObj, function (previewDataUrl) {
                    file.imgURL = previewDataUrl;
                    _this.forceUpdate();
                });
            });
    };
    List.prototype.onPreview = function (file, e) {
        var onPreview = this.props.onPreview;
        if (!onPreview) {
            return;
        }
        // e.preventDefault();
        return onPreview(file, e);
    };
    List.prototype.getInfo = function (file) {
        var _a;
        var prefixCls = "".concat(this.props.prefix, "upload");
        var downloadURL = file.downloadURL || file.url;
        var imgURL = file.imgURL || file.url;
        var size = this.sizeCaculator(file.size);
        var itemCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefixCls, "-list-item")] = true,
            _a["".concat(prefixCls, "-list-item-").concat(file.state)] = file.state,
            _a["".concat(prefixCls, "-list-item-error-with-msg")] = file.state === 'error' && file.errorMsg,
            _a));
        var alt = file.name || file.alt;
        return { prefixCls: prefixCls, downloadURL: downloadURL, imgURL: imgURL, size: size, itemCls: itemCls, alt: alt };
    };
    // transfer size from number to xx K/ XxxM / xxG
    List.prototype.sizeCaculator = function (size) {
        var fileSize = parseFloat(size);
        // fileSize 为浮点数 用 < 0.000001 替代 === 0
        if (isNaN(fileSize) || fileSize < 0.0000001) {
            return 0;
        }
        var SIZE_SUFFIX = ['B', 'K', 'M', 'G', 'T', 'P'];
        var suffixIndex = 0;
        // 在Mac上实验发现 取1024造成显示的大小和实际大小不一致
        // 因为单位制不同 见 https://superuser.com/questions/938234/size-of-files-in-windows-os-its-kb-or-kb
        var BIT_NUMBER_SYSTEM = 1024;
        while (fileSize >= BIT_NUMBER_SYSTEM && suffixIndex < SIZE_SUFFIX.length) {
            suffixIndex++;
            fileSize /= BIT_NUMBER_SYSTEM;
        }
        var suffix = SIZE_SUFFIX[suffixIndex];
        fileSize = fileSize.toFixed(2);
        return "".concat(fileSize).concat(suffix);
    };
    List.prototype.getTextList = function (file) {
        var _this = this;
        var _a = this.props, locale = _a.locale, extraRender = _a.extraRender, actionRender = _a.actionRender, progressProps = _a.progressProps, rtl = _a.rtl, fileNameRender = _a.fileNameRender, previewOnFileName = _a.previewOnFileName;
        var _b = this.getInfo(file), prefixCls = _b.prefixCls, downloadURL = _b.downloadURL, size = _b.size, itemCls = _b.itemCls;
        var onClick = function () {
            return file.state === 'uploading' ? _this.handleCancel(file) : _this.handleClose(file);
        };
        var onKeyDown = function (e) {
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                onClick();
            }
        };
        return (react_1.default.createElement("div", { className: itemCls, key: file.uid || file.name },
            react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-name-wrap") },
                react_1.default.createElement("a", { onClick: previewOnFileName ? this.onPreview.bind(this, file) : util_1.func.noop, href: downloadURL, target: "_blank", style: { pointerEvents: (downloadURL ? '' : 'none') }, className: "".concat(prefixCls, "-list-item-name") },
                    react_1.default.createElement("span", null, fileNameRender(file)),
                    !!size && (react_1.default.createElement("span", { className: "".concat(prefixCls, "-list-item-size"), dir: rtl ? 'rtl' : undefined },
                        "(",
                        size,
                        ")")),
                    react_1.default.createElement("span", { className: "".concat(prefixCls, "-extra") }, extraRender(file)))),
            file.state === 'uploading' ? (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-progress") },
                react_1.default.createElement(progress_1.default, tslib_1.__assign({ size: "medium", percent: file.percent, textRender: util_1.func.noop, rtl: rtl }, progressProps)))) : null,
            file.state === 'error' && file.errorMsg ? (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-error-msg") }, file.errorMsg)) : null,
            react_1.default.createElement("span", { className: "".concat(prefixCls, "-list-item-op") },
                actionRender(file),
                this.props.closable ? (react_1.default.createElement(icon_1.default, { type: "close", size: "large", role: "button", "aria-label": locale.upload.delete, tabIndex: 0, onClick: onClick, onKeyDown: onKeyDown })) : null)));
    };
    List.prototype.getImageList = function (file) {
        var _this = this;
        var _a = this.props, extraRender = _a.extraRender, actionRender = _a.actionRender, progressProps = _a.progressProps, rtl = _a.rtl, fileNameRender = _a.fileNameRender, previewOnFileName = _a.previewOnFileName, itemRender = _a.itemRender;
        var _b = this.getInfo(file), prefixCls = _b.prefixCls, downloadURL = _b.downloadURL, imgURL = _b.imgURL, size = _b.size, itemCls = _b.itemCls, alt = _b.alt;
        var img = null;
        var onClick = function () {
            return file.state === 'uploading' ? _this.handleCancel(file) : _this.handleClose(file);
        };
        var onKeyDown = function (e) {
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                onClick();
            }
        };
        if (file.state === 'uploading' || (file.state === 'selected' && !imgURL)) {
            img = react_1.default.createElement(icon_1.default, { type: "picture" });
        }
        else if (file.state === 'error') {
            img = react_1.default.createElement(icon_1.default, { type: "cry" });
        }
        else {
            /* eslint-disable no-lonely-if */
            if (typeof itemRender === 'function') {
                img = itemRender(file);
            }
            else {
                img = (react_1.default.createElement("img", { src: imgURL, onError: this.onImageError.bind(this, file), tabIndex: 0, alt: alt, onClick: this.onPreview.bind(this, file) }));
            }
        }
        return (react_1.default.createElement("div", { className: itemCls, key: file.uid || file.name },
            react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail") }, img),
            react_1.default.createElement("span", { className: "".concat(prefixCls, "-list-item-op") },
                actionRender(file),
                this.props.closable ? (react_1.default.createElement(icon_1.default, { type: "close", size: "large", tabIndex: 0, role: "button", onClick: onClick, onKeyDown: onKeyDown })) : null),
            react_1.default.createElement("a", { onClick: previewOnFileName ? this.onPreview.bind(this, file) : util_1.func.noop, href: downloadURL, target: "_blank", style: { pointerEvents: (downloadURL ? '' : 'none') }, className: "".concat(prefixCls, "-list-item-name") },
                react_1.default.createElement("span", null, fileNameRender(file)),
                !!size && (react_1.default.createElement("span", { className: "".concat(prefixCls, "-list-item-size"), dir: rtl ? 'rtl' : undefined },
                    "(",
                    size,
                    ")")),
                react_1.default.createElement("span", { className: "".concat(prefixCls, "-extra") }, extraRender(file))),
            file.state === 'uploading' ? (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-progress") },
                react_1.default.createElement(progress_1.default, tslib_1.__assign({ size: "medium", percent: file.percent, textRender: util_1.func.noop }, progressProps)))) : null,
            file.state === 'error' && file.errorMsg ? (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-error-msg") }, file.errorMsg)) : null));
    };
    List.prototype.getPictureCardList = function (file, isPreview) {
        var _this = this;
        var _a = this.props, locale = _a.locale, progressProps = _a.progressProps, fileNameRender = _a.fileNameRender, itemRender = _a.itemRender, showDownload = _a.showDownload;
        var _b = this.getInfo(file), prefixCls = _b.prefixCls, downloadURL = _b.downloadURL, imgURL = _b.imgURL, itemCls = _b.itemCls, alt = _b.alt;
        var state = isPreview ? '' : file.state;
        var img = null;
        if (state === 'uploading' || (state === 'selected' && !imgURL)) {
            img = (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-handler") },
                react_1.default.createElement(icon_1.default, { type: "picture" }),
                react_1.default.createElement(button_1.default, { text: true, onClick: function () { return _this.handleCancel(file); } }, locale.card.cancel)));
        }
        else if (state === 'error') {
            img = (react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-handler") },
                react_1.default.createElement(icon_1.default, { type: "cry" })));
        }
        else {
            img = (react_1.default.createElement("img", { src: imgURL, tabIndex: 0, alt: alt, onError: this.onImageError.bind(this, file), onClick: this.onPreview.bind(this, file) }));
        }
        var onClose = function () { return _this.handleClose(file); };
        var onKeyDownClose = function (e) {
            if (e.keyCode === util_1.KEYCODE.ENTER) {
                onClose();
            }
        };
        var item = null;
        if (state === 'uploading') {
            item = [
                react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail"), key: "img" }, img),
                react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-progress"), key: "progress" },
                    react_1.default.createElement(progress_1.default, tslib_1.__assign({ size: "medium", percent: file.percent, textRender: util_1.func.noop }, progressProps))),
            ];
        }
        else {
            /* eslint-disable no-lonely-if */
            if (typeof itemRender === 'function') {
                // 不处理上传态和选择态，太过复杂
                item = itemRender(file, { remove: onClose });
            }
            else {
                var Uploader = this.props.uploader || { props: {} };
                var UploaderProps = Uploader.props;
                // TODO: 2.x 中逻辑会修改为，只要有 showDownload，那就有下载按钮（不管有没有 downloadURL）
                item = [
                    react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail"), key: "img" }, img),
                    react_1.default.createElement("span", { key: "tool", className: "".concat(prefixCls, "-tool") },
                        state !== 'error' && showDownload && downloadURL ? (react_1.default.createElement("a", { href: downloadURL, target: "_blank", className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-download-link") },
                            react_1.default.createElement(icon_1.default, { type: "download", "aria-label": locale.card.download, className: "".concat(prefixCls, "-tool-download-icon") }))) : null,
                        this.props.reUpload && !isPreview && !isIE9 ? (react_1.default.createElement(selecter_1.default, { className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-reupload"), accept: UploaderProps.accept, name: UploaderProps.fileKeyName, onSelect: this.onSelect.bind(this, file) },
                            react_1.default.createElement(icon_1.default, { type: "edit", className: "".concat(prefixCls, "-tool-reupload-icon") }))) : null,
                        this.props.closable && !isPreview ? (react_1.default.createElement("span", { className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-close") },
                            react_1.default.createElement(icon_1.default, { type: "ashbin", "aria-label": locale.card.delete, tabIndex: 0, role: "button", onClick: onClose, onKeyDown: onKeyDownClose }))) : null),
                ];
            }
        }
        return (react_1.default.createElement("div", { className: itemCls, key: file.uid || file.name },
            react_1.default.createElement("div", { className: "".concat(prefixCls, "-list-item-wrapper") }, item),
            react_1.default.createElement("span", { className: "".concat(prefixCls, "-list-item-name") }, fileNameRender(file))));
    };
    List.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, listType = _c.listType, children = _c.children, prefix = _c.prefix, rtl = _c.rtl, className = _c.className, isPreview = _c.isPreview;
        var prefixCls = "".concat(prefix, "upload");
        var list = [];
        if (isPreview) {
            var previewCls_1 = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "form-preview")] = true,
                _a[className] = !!className,
                _a));
            list = this.props.value.map(function (file, index) {
                if (!file) {
                    return null;
                }
                var downloadURL = file.downloadURL, name = file.name;
                if (listType === 'text') {
                    return (react_1.default.createElement("div", { className: previewCls_1, key: index },
                        react_1.default.createElement("a", { href: downloadURL, target: "_blank" }, name)));
                }
                else if (listType === 'image' || listType === 'card') {
                    return _this.getPictureCardList(file, true);
                }
                return null;
            });
        }
        else {
            list = this.props.value.map(function (file) {
                if (!file) {
                    return null;
                }
                if (listType === 'text') {
                    return _this.getTextList(file);
                }
                else if (listType === 'image') {
                    return _this.getImageList(file);
                }
                else if (listType === 'card') {
                    return _this.getPictureCardList(file);
                }
                return null;
            });
        }
        if (rtl && listType === 'card' && Array.isArray(list)) {
            list = list.reverse();
        }
        var _listType = isPreview && listType === 'image' ? 'card' : this.props.listType;
        var listclassNames = (0, classnames_1.default)((_b = {},
            _b["".concat(prefixCls, "-list")] = true,
            _b["".concat(prefixCls, "-list-").concat(_listType)] = true,
            _b["".concat(prefixCls, "-ie9")] = isIE9,
            _b), className);
        var others = util_1.obj.pickAttrsWith(this.props, 'data-');
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: listclassNames, dir: rtl ? 'rtl' : undefined }),
            rtl ? children : list,
            rtl ? list : children));
    };
    List.propTypes = {
        prefix: prop_types_1.default.string,
        locale: prop_types_1.default.object,
        listType: prop_types_1.default.oneOf(['text', 'image', 'card']),
        value: prop_types_1.default.array,
        closable: prop_types_1.default.bool,
        onRemove: prop_types_1.default.func,
        onCancel: prop_types_1.default.func,
        onImageError: prop_types_1.default.func,
        onPreview: prop_types_1.default.func,
        previewOnFileName: prop_types_1.default.bool,
        extraRender: prop_types_1.default.func,
        actionRender: prop_types_1.default.func,
        itemRender: prop_types_1.default.func,
        progressProps: prop_types_1.default.object,
        children: prop_types_1.default.node,
        uploader: prop_types_1.default.any,
        showDownload: prop_types_1.default.bool,
        useDataURL: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        isPreview: prop_types_1.default.bool,
        fileNameRender: prop_types_1.default.func,
    };
    List.defaultProps = {
        prefix: 'next-',
        listType: 'text',
        value: [],
        locale: zh_cn_1.default.Upload,
        closable: false,
        showDownload: true,
        onRemove: util_1.func.noop,
        onCancel: util_1.func.noop,
        extraRender: util_1.func.noop,
        actionRender: util_1.func.noop,
        onImageError: util_1.func.noop,
        progressProps: {},
        fileNameRender: function (file) { return file.name; },
        previewOnFileName: false,
    };
    return List;
}(react_1.Component));
// Wrap <List> with <ConfigProvider> to avoid context missing if it is
// referenced by other internal modules.
// https://github.com/alibaba-fusion/next/blob/build/1.13.9/src/upload/upload.jsx#L521
exports.default = config_provider_1.default.config(List, {
    componentName: 'Upload',
    // @ts-expect-error 类型不匹配
    transform: transform_1.default,
});
