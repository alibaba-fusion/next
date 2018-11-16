'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _html5Uploader = require('./html5-uploader');

var _html5Uploader2 = _interopRequireDefault(_html5Uploader);

var _iframeUploader = require('./iframe-uploader');

var _iframeUploader2 = _interopRequireDefault(_iframeUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Uploader = function (_React$Component) {
    (0, _inherits3.default)(Uploader, _React$Component);

    function Uploader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Uploader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            Component: _html5Uploader2.default
        }, _this.saveUploaderRef = function (ref) {
            _this.uploaderRef = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Uploader.prototype.componentDidMount = function componentDidMount() {
        if (typeof File === 'undefined') {
            /* eslint react/no-did-mount-set-state:0 */
            this.setState({
                Component: _iframeUploader2.default
            });
        }
    };

    Uploader.prototype.abort = function abort(file) {
        this.uploaderRef.abort(file);
    };

    Uploader.prototype.startUpload = function startUpload(files) {
        this.uploaderRef.startUpload(files);
    };

    Uploader.prototype.render = function render() {
        var Uploader = this.state.Component;
        return _react2.default.createElement(Uploader, (0, _extends3.default)({}, this.props, { ref: this.saveUploaderRef }));
    };

    return Uploader;
}(_react2.default.Component);

Uploader.displayName = 'Uploader';
exports.default = Uploader;
module.exports = exports['default'];