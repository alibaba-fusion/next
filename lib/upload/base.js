"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var Base = /** @class */ (function (_super) {
    tslib_1.__extends(Base, _super);
    function Base() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.saveUploaderRef = function (ref) {
            if (ref && typeof ref.getInstance === 'function') {
                _this.uploaderRef = ref.getInstance();
            }
            else {
                _this.uploaderRef = ref;
            }
        };
        return _this;
    }
    Base.prototype.abort = function (file) {
        this.uploaderRef.abort(file);
    };
    Base.prototype.startUpload = function () {
        this.uploaderRef.startUpload();
    };
    Base.prototype.isUploading = function () {
        return this.uploaderRef.isUploading();
    };
    return Base;
}(react_1.Component));
exports.default = Base;
