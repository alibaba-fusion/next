"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var html5_uploader_1 = tslib_1.__importDefault(require("./html5-uploader"));
var iframe_uploader_1 = tslib_1.__importDefault(require("./iframe-uploader"));
var Uploader = /** @class */ (function (_super) {
    tslib_1.__extends(Uploader, _super);
    function Uploader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            Component: html5_uploader_1.default,
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
                Component: iframe_uploader_1.default,
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
        return react_1.default.createElement(Uploader, tslib_1.__assign({}, this.props, { ref: this.saveUploaderRef }));
    };
    return Uploader;
}(react_1.default.Component));
exports.default = Uploader;
