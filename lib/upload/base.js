'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_Component) {
    (0, _inherits3.default)(Base, _Component);

    function Base() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Base);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveUploaderRef = function (ref) {
            /* istanbul ignore if */
            if (ref && typeof ref.getInstance === 'function') {
                _this.uploaderRef = ref.getInstance();
            } else {
                _this.uploaderRef = ref;
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* istanbul ignore next */
    Base.prototype.abort = function abort(file) {
        /* istanbul ignore next */
        this.uploaderRef.abort(file);
    };
    /* istanbul ignore next */


    Base.prototype.startUpload = function startUpload() {
        /* istanbul ignore next */
        this.uploaderRef.startUpload();
    };

    /* istanbul ignore next */
    Base.prototype.isUploading = function isUploading() {
        /* istanbul ignore next */
        return this.uploaderRef.isUploading();
    };

    return Base;
}(_react.Component);

Base.displayName = 'Base';
exports.default = Base;
module.exports = exports['default'];