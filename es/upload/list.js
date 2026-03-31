import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Progress from '../progress';
import Icon from '../icon';
import Button from '../button';
import { func, obj, KEYCODE, env } from '../util';
import zhCN from '../locale/zh-cn';
import { previewFile } from './util';
import transform from './transform';
import Selecter from './runtime/selecter';
var isIE9 = env.ieVersion === 9;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.handleClose = function (file) {
            var _a = _this.props, onRemove = _a.onRemove, uploader = _a.uploader;
            var remove = onRemove(file);
            func.promiseCall(remove, function () {
                uploader && uploader.removeFile(file);
            });
        };
        _this.handleCancel = function (file) {
            var _a = _this.props, onCancel = _a.onCancel, uploader = _a.uploader;
            var cancel = onCancel(file);
            func.promiseCall(cancel, function () {
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
                previewFile(file.originFileObj, function (previewDataUrl) {
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
        var itemCls = classNames((_a = {},
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
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };
        return (React.createElement("div", { className: itemCls, key: file.uid || file.name },
            React.createElement("div", { className: "".concat(prefixCls, "-list-item-name-wrap") },
                React.createElement("a", { onClick: previewOnFileName ? this.onPreview.bind(this, file) : func.noop, href: downloadURL, target: "_blank", style: { pointerEvents: (downloadURL ? '' : 'none') }, className: "".concat(prefixCls, "-list-item-name") },
                    React.createElement("span", null, fileNameRender(file)),
                    !!size && (React.createElement("span", { className: "".concat(prefixCls, "-list-item-size"), dir: rtl ? 'rtl' : undefined },
                        "(",
                        size,
                        ")")),
                    React.createElement("span", { className: "".concat(prefixCls, "-extra") }, extraRender(file)))),
            file.state === 'uploading' ? (React.createElement("div", { className: "".concat(prefixCls, "-list-item-progress") },
                React.createElement(Progress, __assign({ size: "medium", percent: file.percent, textRender: func.noop, rtl: rtl }, progressProps)))) : null,
            file.state === 'error' && file.errorMsg ? (React.createElement("div", { className: "".concat(prefixCls, "-list-item-error-msg") }, file.errorMsg)) : null,
            React.createElement("span", { className: "".concat(prefixCls, "-list-item-op") },
                actionRender(file),
                this.props.closable ? (React.createElement(Icon, { type: "close", size: "large", role: "button", "aria-label": locale.upload.delete, tabIndex: 0, onClick: onClick, onKeyDown: onKeyDown })) : null)));
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
            if (e.keyCode === KEYCODE.ENTER) {
                onClick();
            }
        };
        if (file.state === 'uploading' || (file.state === 'selected' && !imgURL)) {
            img = React.createElement(Icon, { type: "picture" });
        }
        else if (file.state === 'error') {
            img = React.createElement(Icon, { type: "cry" });
        }
        else {
            /* eslint-disable no-lonely-if */
            if (typeof itemRender === 'function') {
                img = itemRender(file);
            }
            else {
                img = (React.createElement("img", { src: imgURL, onError: this.onImageError.bind(this, file), tabIndex: 0, alt: alt, onClick: this.onPreview.bind(this, file) }));
            }
        }
        return (React.createElement("div", { className: itemCls, key: file.uid || file.name },
            React.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail") }, img),
            React.createElement("span", { className: "".concat(prefixCls, "-list-item-op") },
                actionRender(file),
                this.props.closable ? (React.createElement(Icon, { type: "close", size: "large", tabIndex: 0, role: "button", onClick: onClick, onKeyDown: onKeyDown })) : null),
            React.createElement("a", { onClick: previewOnFileName ? this.onPreview.bind(this, file) : func.noop, href: downloadURL, target: "_blank", style: { pointerEvents: (downloadURL ? '' : 'none') }, className: "".concat(prefixCls, "-list-item-name") },
                React.createElement("span", null, fileNameRender(file)),
                !!size && (React.createElement("span", { className: "".concat(prefixCls, "-list-item-size"), dir: rtl ? 'rtl' : undefined },
                    "(",
                    size,
                    ")")),
                React.createElement("span", { className: "".concat(prefixCls, "-extra") }, extraRender(file))),
            file.state === 'uploading' ? (React.createElement("div", { className: "".concat(prefixCls, "-list-item-progress") },
                React.createElement(Progress, __assign({ size: "medium", percent: file.percent, textRender: func.noop }, progressProps)))) : null,
            file.state === 'error' && file.errorMsg ? (React.createElement("div", { className: "".concat(prefixCls, "-list-item-error-msg") }, file.errorMsg)) : null));
    };
    List.prototype.getPictureCardList = function (file, isPreview) {
        var _this = this;
        var _a = this.props, locale = _a.locale, progressProps = _a.progressProps, fileNameRender = _a.fileNameRender, itemRender = _a.itemRender, showDownload = _a.showDownload;
        var _b = this.getInfo(file), prefixCls = _b.prefixCls, downloadURL = _b.downloadURL, imgURL = _b.imgURL, itemCls = _b.itemCls, alt = _b.alt;
        var state = isPreview ? '' : file.state;
        var img = null;
        if (state === 'uploading' || (state === 'selected' && !imgURL)) {
            img = (React.createElement("div", { className: "".concat(prefixCls, "-list-item-handler") },
                React.createElement(Icon, { type: "picture" }),
                React.createElement(Button, { text: true, onClick: function () { return _this.handleCancel(file); } }, locale.card.cancel)));
        }
        else if (state === 'error') {
            img = (React.createElement("div", { className: "".concat(prefixCls, "-list-item-handler") },
                React.createElement(Icon, { type: "cry" })));
        }
        else {
            img = (React.createElement("img", { src: imgURL, tabIndex: 0, alt: alt, onError: this.onImageError.bind(this, file), onClick: this.onPreview.bind(this, file) }));
        }
        var onClose = function () { return _this.handleClose(file); };
        var onKeyDownClose = function (e) {
            if (e.keyCode === KEYCODE.ENTER) {
                onClose();
            }
        };
        var item = null;
        if (state === 'uploading') {
            item = [
                React.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail"), key: "img" }, img),
                React.createElement("div", { className: "".concat(prefixCls, "-list-item-progress"), key: "progress" },
                    React.createElement(Progress, __assign({ size: "medium", percent: file.percent, textRender: func.noop }, progressProps))),
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
                    React.createElement("div", { className: "".concat(prefixCls, "-list-item-thumbnail"), key: "img" }, img),
                    React.createElement("span", { key: "tool", className: "".concat(prefixCls, "-tool") },
                        state !== 'error' && showDownload && downloadURL ? (React.createElement("a", { href: downloadURL, target: "_blank", className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-download-link") },
                            React.createElement(Icon, { type: "download", "aria-label": locale.card.download, className: "".concat(prefixCls, "-tool-download-icon") }))) : null,
                        this.props.reUpload && !isPreview && !isIE9 ? (React.createElement(Selecter, { className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-reupload"), accept: UploaderProps.accept, name: UploaderProps.fileKeyName, onSelect: this.onSelect.bind(this, file) },
                            React.createElement(Icon, { type: "edit", className: "".concat(prefixCls, "-tool-reupload-icon") }))) : null,
                        this.props.closable && !isPreview ? (React.createElement("span", { className: "".concat(prefixCls, "-tool-item ").concat(prefixCls, "-tool-close") },
                            React.createElement(Icon, { type: "ashbin", "aria-label": locale.card.delete, tabIndex: 0, role: "button", onClick: onClose, onKeyDown: onKeyDownClose }))) : null),
                ];
            }
        }
        return (React.createElement("div", { className: itemCls, key: file.uid || file.name },
            React.createElement("div", { className: "".concat(prefixCls, "-list-item-wrapper") }, item),
            React.createElement("span", { className: "".concat(prefixCls, "-list-item-name") }, fileNameRender(file))));
    };
    List.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this.props, listType = _c.listType, children = _c.children, prefix = _c.prefix, rtl = _c.rtl, className = _c.className, isPreview = _c.isPreview;
        var prefixCls = "".concat(prefix, "upload");
        var list = [];
        if (isPreview) {
            var previewCls_1 = classNames((_a = {},
                _a["".concat(prefix, "form-preview")] = true,
                _a[className] = !!className,
                _a));
            list = this.props.value.map(function (file, index) {
                if (!file) {
                    return null;
                }
                var downloadURL = file.downloadURL, name = file.name;
                if (listType === 'text') {
                    return (React.createElement("div", { className: previewCls_1, key: index },
                        React.createElement("a", { href: downloadURL, target: "_blank" }, name)));
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
        var listclassNames = classNames((_b = {},
            _b["".concat(prefixCls, "-list")] = true,
            _b["".concat(prefixCls, "-list-").concat(_listType)] = true,
            _b["".concat(prefixCls, "-ie9")] = isIE9,
            _b), className);
        var others = obj.pickAttrsWith(this.props, 'data-');
        return (React.createElement("div", __assign({}, others, { className: listclassNames, dir: rtl ? 'rtl' : undefined }),
            rtl ? children : list,
            rtl ? list : children));
    };
    List.propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        listType: PropTypes.oneOf(['text', 'image', 'card']),
        value: PropTypes.array,
        closable: PropTypes.bool,
        onRemove: PropTypes.func,
        onCancel: PropTypes.func,
        onImageError: PropTypes.func,
        onPreview: PropTypes.func,
        previewOnFileName: PropTypes.bool,
        extraRender: PropTypes.func,
        actionRender: PropTypes.func,
        itemRender: PropTypes.func,
        progressProps: PropTypes.object,
        children: PropTypes.node,
        uploader: PropTypes.any,
        showDownload: PropTypes.bool,
        useDataURL: PropTypes.bool,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        fileNameRender: PropTypes.func,
    };
    List.defaultProps = {
        prefix: 'next-',
        listType: 'text',
        value: [],
        locale: zhCN.Upload,
        closable: false,
        showDownload: true,
        onRemove: func.noop,
        onCancel: func.noop,
        extraRender: func.noop,
        actionRender: func.noop,
        onImageError: func.noop,
        progressProps: {},
        fileNameRender: function (file) { return file.name; },
        previewOnFileName: false,
    };
    return List;
}(Component));
// Wrap <List> with <ConfigProvider> to avoid context missing if it is
// referenced by other internal modules.
// https://github.com/alibaba-fusion/next/blob/build/1.13.9/src/upload/upload.jsx#L521
export default ConfigProvider.config(List, {
    componentName: 'Upload',
    // @ts-expect-error 类型不匹配
    transform: transform,
});
