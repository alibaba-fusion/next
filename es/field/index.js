import { __extends, __read, __spreadArray } from "tslib";
import { useState, useMemo, useRef, useEffect } from 'react';
import Field from '@alifd/field';
import { log } from '../util';
import { scrollToFirstError, cloneAndAddKey } from './utils';
var NextField = /** @class */ (function (_super) {
    __extends(NextField, _super);
    function NextField(com, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var newOptions = Object.assign({}, options, {
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        });
        _this = _super.call(this, com, newOptions) || this;
        _this.validate = _this.validate.bind(_this);
        return _this;
    }
    NextField.useField = function (options) {
        if (options === void 0) { options = {}; }
        if (!useState || !useMemo) {
            log.warning('need react version > 16.8.0');
            return;
        }
        return this.getUseField({ useMemo: useMemo, useState: useState })(options);
    };
    NextField.useWatch = function (field, names, callback) {
        var callbackRef = useRef(callback);
        callbackRef.current = callback;
        // watch at render stage, field or names change will cause rewatch
        var unwatch = useMemo(function () {
            return field.watch(names, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof callbackRef.current === 'function') {
                    callbackRef.current.apply(callbackRef, __spreadArray([], __read(args), false));
                }
            });
        }, [field, names.join(',')]);
        useEffect(function () {
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
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        }
        else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        }
        else {
            this._reset(ns, false);
        }
    };
    return NextField;
}(Field));
export default NextField;
