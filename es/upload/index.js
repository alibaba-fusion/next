import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import { errorCode } from './util';
import transform from './transform';
import Upload from './upload';
import List from './list';
import Card from './card';
import Dragger from './dragger';
import Selecter from './runtime/selecter';
import Uploader from './runtime/uploader';
import { assignSubComponent } from '../util/component';
var Core = /** @class */ (function (_super) {
    __extends(Core, _super);
    function Core(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelect = function (files) {
            _this.uploader.startUpload(files);
        };
        var _a = _this.props, action = _a.action, name = _a.name, method = _a.method, beforeUpload = _a.beforeUpload, onProgress = _a.onProgress, onError = _a.onError, withCredentials = _a.withCredentials, headers = _a.headers, data = _a.data, onSuccess = _a.onSuccess;
        _this.uploader = new Uploader({
            action: action,
            name: name,
            method: method,
            beforeUpload: beforeUpload,
            onProgress: onProgress,
            onError: onError,
            withCredentials: withCredentials,
            headers: headers,
            data: data,
            onSuccess: onSuccess,
        });
        return _this;
    }
    Core.prototype.abort = function () {
        this.uploader.abort();
    };
    Core.prototype.render = function () {
        log.deprecated('Upload.Core', 'Upload.Selecter and Upload.Uploader', 'Upload');
        var _a = this.props, action = _a.action, name = _a.name, method = _a.method, beforeUpload = _a.beforeUpload, onProgress = _a.onProgress, onError = _a.onError, withCredentials = _a.withCredentials, headers = _a.headers, data = _a.data, onSuccess = _a.onSuccess, others = __rest(_a, ["action", "name", "method", "beforeUpload", "onProgress", "onError", "withCredentials", "headers", "data", "onSuccess"]);
        var props = others;
        return React.createElement(Selecter, __assign({}, transform(props, function () { }), { onSelect: this.handleSelect }));
    };
    return Core;
}(Component));
var UploadWithSub = assignSubComponent(Upload, {
    List: List,
    Card: ConfigProvider.config(Card, { componentName: 'Upload' }),
    Dragger: ConfigProvider.config(Dragger, {
        componentName: 'Upload',
    }),
    Selecter: Selecter,
    Uploader: Uploader,
    ErrorCode: errorCode,
    // compatible with 0.x version
    ImageUpload: ConfigProvider.config(Card, {
        componentName: 'Upload',
        transform: function (props, deprecated) {
            deprecated('Upload.ImageUpload', 'Upload.Card', 'Upload');
            var newprops = transform(props, function () { });
            if (newprops.locale && newprops.locale.image) {
                newprops.locale.card = newprops.locale.image;
            }
            return newprops;
        },
    }),
    // compatible with 0.x version
    DragUpload: ConfigProvider.config(Dragger, {
        componentName: 'Upload',
        transform: function (props, deprecated) {
            deprecated('Upload.DragUpload', 'Upload.Dragger', 'Upload');
            var newprops = transform(props, function () { });
            if (!newprops.listType) {
                newprops.listType = 'card';
            }
            return newprops;
        },
    }),
    Core: Core,
    // compatible with 0.x version
    CropUpload: function () {
        log.deprecated('Upload.CropUpload', '@alife/bc-next-crop-upload', 'Upload');
        return null;
    },
});
export default ConfigProvider.config(UploadWithSub, {
    transform: transform,
});
