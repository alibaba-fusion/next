import { __extends, __read, __spreadArray } from "tslib";
import { Component } from 'react';
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.saveUploaderRef = function (ref) {
            /* istanbul ignore if */
            if (ref && typeof ref.getInstance === 'function') {
                _this.uploaderRef = ref.getInstance();
            }
            else {
                _this.uploaderRef = ref;
            }
        };
        return _this;
    }
    /* istanbul ignore next */
    Base.prototype.abort = function (file) {
        /* istanbul ignore next */
        this.uploaderRef.abort(file);
    };
    /* istanbul ignore next */
    Base.prototype.startUpload = function () {
        /* istanbul ignore next */
        this.uploaderRef.startUpload();
    };
    /* istanbul ignore next */
    Base.prototype.isUploading = function () {
        /* istanbul ignore next */
        return this.uploaderRef.isUploading();
    };
    return Base;
}(Component));
export default Base;
