"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var field_1 = require("@alifd/field");
var util_1 = require("../util");
var utils_1 = require("./utils");
var NextField = /** @class */ (function (_super) {
    tslib_1.__extends(NextField, _super);
    function NextField(com, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var newOptions = Object.assign({}, options, {
            afterValidateRerender: utils_1.scrollToFirstError,
            processErrorMessage: utils_1.cloneAndAddKey,
        });
        _this = _super.call(this, com, newOptions) || this;
        _this.validate = _this.validate.bind(_this);
        return _this;
    }
    NextField.useField = function (options) {
        if (options === void 0) { options = {}; }
        if (!react_1.useState || !react_1.useMemo) {
            util_1.log.warning('need react version > 16.8.0');
            return;
        }
        return this.getUseField({ useMemo: react_1.useMemo, useState: react_1.useState })(options);
    };
    NextField.useWatch = function (field, names, callback) {
        var callbackRef = (0, react_1.useRef)(callback);
        callbackRef.current = callback;
        // watch at render stage, field or names change will cause rewatch
        var unwatch = (0, react_1.useMemo)(function () {
            return field.watch(names, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof callbackRef.current === 'function') {
                    callbackRef.current.apply(callbackRef, tslib_1.__spreadArray([], tslib_1.__read(args), false));
                }
            });
        }, [field, names.join(',')]);
        (0, react_1.useEffect)(function () {
            // unwatch at uneffect stage
            return unwatch;
        }, [unwatch]);
    };
    NextField.prototype.validate = function (ns, cb) {
        this.validateCallback(ns, cb);
    };
    NextField.prototype.reset = function (ns, backToDefault) {
        if (backToDefault === void 0) { backToDefault = false; }
        if (ns === true) {
            util_1.log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        }
        else if (backToDefault === true) {
            util_1.log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        }
        else {
            this._reset(ns, false);
        }
    };
    return NextField;
}(field_1.default));
exports.default = NextField;
