import { __assign } from "tslib";
import { func, obj } from '../../util';
import { uid, errorCode } from '../util';
import defaultRequest from './request';
var noop = func.noop;
var Uploader = /** @class */ (function () {
    function Uploader(options) {
        this.options = __assign({ beforeUpload: noop, onProgress: noop, onSuccess: noop, onError: noop, data: {}, name: 'file', method: 'post' }, options);
        this.reqs = {};
    }
    Uploader.prototype.setOptions = function (options) {
        Object.assign(this.options, options);
    };
    Uploader.prototype.startUpload = function (files) {
        var _this = this;
        var filesArr = Array.isArray(files) ? Array.prototype.slice.call(files) : [files];
        filesArr.forEach(function (file) {
            file.uid = file.uid || uid();
            _this.upload(file);
        });
    };
    Uploader.prototype.abort = function (file) {
        var reqs = this.reqs;
        if (file) {
            var uid_1 = file;
            if (file && file.uid) {
                uid_1 = file.uid;
            }
            if (reqs[uid_1] && reqs[uid_1].abort) {
                reqs[uid_1].abort();
            }
            delete reqs[uid_1];
        }
        else {
            Object.keys(reqs).forEach(function (uid) {
                if (reqs[uid] && reqs[uid].abort) {
                    reqs[uid].abort();
                }
                delete reqs[uid];
            });
        }
    };
    Uploader.prototype.upload = function (file) {
        var _this = this;
        var _a = this.options, beforeUpload = _a.beforeUpload, action = _a.action, name = _a.name, headers = _a.headers, timeout = _a.timeout, withCredentials = _a.withCredentials, method = _a.method, data = _a.data;
        var before = beforeUpload(file, {
            action: action,
            name: name,
            headers: headers,
            timeout: timeout,
            withCredentials: withCredentials,
            method: method,
            data: data,
        });
        func.promiseCall(before, function (options) {
            if (options === false) {
                var err = new Error(errorCode.BEFOREUPLOAD_REJECT);
                err.code = errorCode.BEFOREUPLOAD_REJECT;
                return _this.options.onError(err, null, file);
            }
            _this.post(file, obj.isPlainObject(options) ? options : undefined);
        }, function (error) {
            var err;
            if (error) {
                err = error;
            }
            else {
                err = new Error(errorCode.BEFOREUPLOAD_REJECT);
                err.code = errorCode.BEFOREUPLOAD_REJECT;
            }
            _this.options.onError(err, null, file);
        });
    };
    Uploader.prototype.post = function (file, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var requestOptions = __assign(__assign({}, this.options), options);
        var action = requestOptions.action, name = requestOptions.name, headers = requestOptions.headers, timeout = requestOptions.timeout, withCredentials = requestOptions.withCredentials, onProgress = requestOptions.onProgress, onSuccess = requestOptions.onSuccess, onError = requestOptions.onError, method = requestOptions.method;
        var data = requestOptions.data;
        if (typeof data === 'function') {
            data = data(file);
        }
        var uid = file.uid;
        var request = typeof requestOptions.request === 'function' ? requestOptions.request : defaultRequest;
        this.reqs[uid] = request({
            action: action,
            filename: name,
            file: file,
            data: data,
            timeout: timeout,
            headers: headers,
            withCredentials: withCredentials,
            method: method,
            onProgress: function (e) {
                onProgress(e, file);
            },
            onSuccess: function (ret) {
                delete _this.reqs[uid];
                onSuccess(ret, file);
            },
            onError: function (err, ret) {
                delete _this.reqs[uid];
                onError(err, ret, file);
            },
        });
    };
    return Uploader;
}());
export default Uploader;
