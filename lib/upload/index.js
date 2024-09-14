"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var util_2 = require("./util");
var transform_1 = tslib_1.__importDefault(require("./transform"));
var upload_1 = tslib_1.__importDefault(require("./upload"));
var list_1 = tslib_1.__importDefault(require("./list"));
var card_1 = tslib_1.__importDefault(require("./card"));
var dragger_1 = tslib_1.__importDefault(require("./dragger"));
var selecter_1 = tslib_1.__importDefault(require("./runtime/selecter"));
var uploader_1 = tslib_1.__importDefault(require("./runtime/uploader"));
var component_1 = require("../util/component");
var Core = /** @class */ (function (_super) {
    tslib_1.__extends(Core, _super);
    function Core(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelect = function (files) {
            _this.uploader.startUpload(files);
        };
        var _a = _this.props, action = _a.action, name = _a.name, method = _a.method, beforeUpload = _a.beforeUpload, onProgress = _a.onProgress, onError = _a.onError, withCredentials = _a.withCredentials, headers = _a.headers, data = _a.data, onSuccess = _a.onSuccess;
        _this.uploader = new uploader_1.default({
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
        util_1.log.deprecated('Upload.Core', 'Upload.Selecter and Upload.Uploader', 'Upload');
        var _a = this.props, action = _a.action, name = _a.name, method = _a.method, beforeUpload = _a.beforeUpload, onProgress = _a.onProgress, onError = _a.onError, withCredentials = _a.withCredentials, headers = _a.headers, data = _a.data, onSuccess = _a.onSuccess, others = tslib_1.__rest(_a, ["action", "name", "method", "beforeUpload", "onProgress", "onError", "withCredentials", "headers", "data", "onSuccess"]);
        var props = others;
        return react_1.default.createElement(selecter_1.default, tslib_1.__assign({}, (0, transform_1.default)(props, function () { }), { onSelect: this.handleSelect }));
    };
    return Core;
}(react_1.Component));
var UploadWithSub = (0, component_1.assignSubComponent)(upload_1.default, {
    List: list_1.default,
    Card: config_provider_1.default.config(card_1.default, { componentName: 'Upload' }),
    Dragger: config_provider_1.default.config(dragger_1.default, {
        componentName: 'Upload',
    }),
    Selecter: selecter_1.default,
    Uploader: uploader_1.default,
    ErrorCode: util_2.errorCode,
    // compatible with 0.x version
    ImageUpload: config_provider_1.default.config(card_1.default, {
        componentName: 'Upload',
        transform: function (props, deprecated) {
            deprecated('Upload.ImageUpload', 'Upload.Card', 'Upload');
            var newprops = (0, transform_1.default)(props, function () { });
            if (newprops.locale && newprops.locale.image) {
                newprops.locale.card = newprops.locale.image;
            }
            return newprops;
        },
    }),
    // compatible with 0.x version
    DragUpload: config_provider_1.default.config(dragger_1.default, {
        componentName: 'Upload',
        transform: function (props, deprecated) {
            deprecated('Upload.DragUpload', 'Upload.Dragger', 'Upload');
            var newprops = (0, transform_1.default)(props, function () { });
            if (!newprops.listType) {
                newprops.listType = 'card';
            }
            return newprops;
        },
    }),
    Core: Core,
    // compatible with 0.x version
    CropUpload: function () {
        util_1.log.deprecated('Upload.CropUpload', '@alife/bc-next-crop-upload', 'Upload');
        return null;
    },
});
exports.default = config_provider_1.default.config(UploadWithSub, {
    transform: transform_1.default,
});
