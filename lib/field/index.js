'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _field = require('@alifd/field');

var _field2 = _interopRequireDefault(_field);

var _util = require('../util');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextField = function (_Field) {
    (0, _inherits3.default)(NextField, _Field);

    NextField.useField = function useField() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!_react.useState || !_react.useMemo) {
            _util.log.warning('need react version > 16.8.0');
            return;
        }
        return this.getUseField({ useMemo: _react.useMemo, useState: _react.useState })(options);
    };

    function NextField(com) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, NextField);

        var newOptions = (0, _extends3.default)({}, options, {
            afterValidateRerender: _utils.scrollToFirstError,
            processErrorMessage: _utils.cloneAndAddKey
        });

        var _this = (0, _possibleConstructorReturn3.default)(this, _Field.call(this, com, newOptions));

        _this.validate = _this.validate.bind(_this);
        return _this;
    }

    NextField.prototype.validate = function validate(ns, cb) {
        this.validateCallback(ns, cb);
    };

    NextField.prototype.reset = function reset(ns) {
        var backToDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (ns === true) {
            _util.log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            _util.log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        } else {
            this._reset(ns, false);
        }
    };

    return NextField;
}(_field2.default);

exports.default = NextField;
module.exports = exports['default'];