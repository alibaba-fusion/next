'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('../../util');

var _util2 = require('../util');

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop;

var Uploader = function () {
    function Uploader(options) {
        (0, _classCallCheck3.default)(this, Uploader);

        this.options = (0, _extends3.default)({
            beforeUpload: noop,
            onProgress: noop,
            onSuccess: noop,
            onError: noop,
            data: {},
            name: 'file',
            method: 'post'
        }, options);
        this.reqs = {};
    }

    Uploader.prototype.setOptions = function setOptions(options) {
        (0, _extends3.default)(this.options, options);
    };

    Uploader.prototype.startUpload = function startUpload(files) {
        var _this = this;

        var filesArr = files.length ? Array.prototype.slice.call(files) : [files];
        filesArr.forEach(function (file) {
            file.uid = file.uid || (0, _util2.uid)();
            _this.upload(file);
        });
    };

    Uploader.prototype.abort = function abort(file) {
        var reqs = this.reqs;

        if (file) {
            var _uid = file;
            if (file && file.uid) {
                _uid = file.uid;
            }
            if (reqs[_uid]) {
                reqs[_uid].abort();
                delete reqs[_uid];
            }
        } else {
            Object.keys(reqs).forEach(function (uid) {
                if (reqs[uid]) {
                    reqs[uid].abort();
                }
                delete reqs[uid];
            });
        }
    };

    Uploader.prototype.upload = function upload(file) {
        var _this2 = this;

        var _options = this.options,
            beforeUpload = _options.beforeUpload,
            action = _options.action,
            name = _options.name,
            headers = _options.headers,
            timeout = _options.timeout,
            withCredentials = _options.withCredentials,
            method = _options.method,
            data = _options.data;

        var before = beforeUpload(file, {
            action: action,
            name: name,
            headers: headers,
            timeout: timeout,
            withCredentials: withCredentials,
            method: method,
            data: data
        });

        _util.func.promiseCall(before, function (options) {
            if (options === false) {
                var err = new Error(_util2.errorCode.BEFOREUPLOAD_REJECT);
                err.code = _util2.errorCode.BEFOREUPLOAD_REJECT;
                return _this2.options.onError(err, null, file);
            }
            _this2.post(file, _util.obj.isPlainObject(options) ? options : undefined);
        }, function (error) {
            var err = void 0;
            if (error) {
                err = error;
            } else {
                err = new Error(_util2.errorCode.BEFOREUPLOAD_REJECT);
                err.code = _util2.errorCode.BEFOREUPLOAD_REJECT;
            }
            _this2.options.onError(err, null, file);
        });
    };

    Uploader.prototype.post = function post(file) {
        var _this3 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var requestOptions = (0, _extends3.default)({}, this.options, options);
        var action = requestOptions.action,
            name = requestOptions.name,
            headers = requestOptions.headers,
            timeout = requestOptions.timeout,
            withCredentials = requestOptions.withCredentials,
            _onProgress = requestOptions.onProgress,
            _onSuccess = requestOptions.onSuccess,
            _onError = requestOptions.onError,
            method = requestOptions.method;


        var data = requestOptions.data;
        if (typeof data === 'function') {
            data = data(file);
        }

        var uid = file.uid;


        var request = typeof requestOptions.request === 'function' ? requestOptions.request : _request2.default;
        this.reqs[uid] = request({
            action: action,
            filename: name,
            file: file,
            data: data,
            timeout: timeout,
            headers: headers,
            withCredentials: withCredentials,
            method: method,
            onProgress: function onProgress(e) {
                _onProgress(e, file);
            },
            onSuccess: function onSuccess(ret) {
                delete _this3.reqs[uid];
                _onSuccess(ret, file);
            },
            onError: function onError(err, ret) {
                delete _this3.reqs[uid];
                _onError(err, ret, file);
            }
        });
    };

    return Uploader;
}();

exports.default = Uploader;
module.exports = exports['default'];