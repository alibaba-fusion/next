import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import Html5Uploader from './html5-uploader';
import IframeUploader from './iframe-uploader';
var Uploader = /** @class */ (function (_super) {
    __extends(Uploader, _super);
    function Uploader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.state = {
            Component: Html5Uploader,
        };
        _this.saveUploaderRef = function (ref) {
            _this.uploaderRef = ref;
        };
        return _this;
    }
    Uploader.prototype.componentDidMount = function () {
        if (typeof File === 'undefined') {
            /* eslint react/no-did-mount-set-state:0 */
            this.setState({
                Component: IframeUploader,
            });
        }
    };
    Uploader.prototype.abort = function (file) {
        this.uploaderRef.abort(file);
    };
    Uploader.prototype.startUpload = function (files) {
        this.uploaderRef.startUpload(files);
    };
    Uploader.prototype.render = function () {
        var Uploader = this.state.Component;
        return React.createElement(Uploader, __assign({}, this.props, { ref: this.saveUploaderRef }));
    };
    return Uploader;
}(React.Component));
export default Uploader;
