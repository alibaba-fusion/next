import { __extends, __read, __spreadArray } from "tslib";
import { Component } from 'react';
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
}(Component));
export default Base;
