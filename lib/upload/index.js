'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _util2 = require('./util');

var _transform2 = require('./transform');

var _transform3 = _interopRequireDefault(_transform2);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _dragger = require('./dragger');

var _dragger2 = _interopRequireDefault(_dragger);

var _selecter = require('./runtime/selecter');

var _selecter2 = _interopRequireDefault(_selecter);

var _uploader = require('./runtime/uploader');

var _uploader2 = _interopRequireDefault(_uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_upload2.default.Card = _configProvider2.default.config(_card2.default, { componentName: 'Upload' });
_upload2.default.Dragger = _configProvider2.default.config(_dragger2.default, { componentName: 'Upload' });
_upload2.default.Selecter = _selecter2.default;
_upload2.default.Uploader = _uploader2.default;
_upload2.default.ErrorCode = _util2.errorCode;

// compatible with 0.x version
_upload2.default.ImageUpload = _configProvider2.default.config(_card2.default, {
    componentName: 'Upload',
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        deprecated('Upload.ImageUpload', 'Upload.Card', 'Upload');
        var newprops = (0, _transform3.default)(props, function () {});
        if (newprops.locale && newprops.locale.image) {
            newprops.locale.card = newprops.locale.image;
        }

        return newprops;
    }
});

// compatible with 0.x version
_upload2.default.DragUpload = _configProvider2.default.config(_dragger2.default, {
    componentName: 'Upload',
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        deprecated('Upload.DragUpload', 'Upload.Dragger', 'Upload');
        var newprops = (0, _transform3.default)(props, function () {});
        if (!newprops.listType) {
            newprops.listType = 'card';
        }

        return newprops;
    }
});

// compatible with 0.x version
/* istanbul ignore next */
_upload2.default.Core = function (_React$Component) {
    (0, _inherits3.default)(Core, _React$Component);

    function Core(props) {
        (0, _classCallCheck3.default)(this, Core);

        // eslint-disable-next-line
        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.handleSelect = function (files) {
            _this.uploader.startUpload(files);
        };

        var _this$props = _this.props,
            action = _this$props.action,
            name = _this$props.name,
            method = _this$props.method,
            beforeUpload = _this$props.beforeUpload,
            onProgress = _this$props.onProgress,
            onError = _this$props.onError,
            withCredentials = _this$props.withCredentials,
            headers = _this$props.headers,
            data = _this$props.data,
            onSuccess = _this$props.onSuccess;


        _this.uploader = new _uploader2.default({
            action: action,
            name: name,
            method: method,
            beforeUpload: beforeUpload,
            onProgress: onProgress,
            onError: onError,
            withCredentials: withCredentials,
            headers: headers,
            data: data,
            onSuccess: onSuccess
        });
        return _this;
    }

    Core.prototype.abort = function abort() {
        this.uploader.abort();
    };

    Core.prototype.render = function render() {
        _util.log.deprecated('Upload.Core', 'Upload.Selecter and Upload.Uploader', 'Upload');

        // eslint-disable-next-line
        var _props = this.props,
            action = _props.action,
            name = _props.name,
            method = _props.method,
            beforeUpload = _props.beforeUpload,
            onProgress = _props.onProgress,
            onError = _props.onError,
            withCredentials = _props.withCredentials,
            headers = _props.headers,
            data = _props.data,
            onSuccess = _props.onSuccess,
            others = (0, _objectWithoutProperties3.default)(_props, ['action', 'name', 'method', 'beforeUpload', 'onProgress', 'onError', 'withCredentials', 'headers', 'data', 'onSuccess']);


        var props = others;

        return _react2.default.createElement(_selecter2.default, (0, _extends3.default)({}, (0, _transform3.default)(props, function () {}), {
            onSelect: this.handleSelect
        }));
    };

    return Core;
}(_react2.default.Component);

_upload2.default.List = _list2.default;

// compatible with 0.x version
/* istanbul ignore next */
_upload2.default.CropUpload = function () {
    _util.log.deprecated('Upload.CropUpload', '@alife/bc-next-crop-upload', 'Upload');
    return null;
};

exports.default = _configProvider2.default.config(_upload2.default, {
    transform: _transform3.default
});
module.exports = exports['default'];