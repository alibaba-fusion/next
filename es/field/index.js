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
        // scrollToFirstError 选项的默认值设置放在 next field 里处理
        var _a = options.scrollToFirstError, scrollToFirstErrorOption = _a === void 0 ? true : _a;
        var newOptions = Object.assign({}, options, {
            scrollToFirstError: scrollToFirstErrorOption,
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        });
        _this = _super.call(this, com, newOptions) || this;
        _this.validate = _this.validate.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }
    NextField.useField = function (options) {
        if (options === void 0) { options = {}; }
        if (!useState || !useMemo) {
            log.warning('need react version > 16.8.0');
            // @ts-expect-error 在缺少对应 hook 的情况下应抛出异常，直接 return 会导致类型问题：useField 返回值可能为空，消费时类型很麻烦
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
    /**
     * 校验 - callback version
     */
    NextField.prototype.validate = function (names, callback) {
        if (typeof names === 'function') {
            return this.validateCallback(names);
        }
        return this.validateCallback(names, callback);
    };
    NextField.prototype.reset = function (names, backToDefault) {
        if (backToDefault === void 0) { backToDefault = false; }
        if (names === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        }
        else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(names || undefined);
        }
        else {
            _super.prototype.reset.call(this, names || undefined);
        }
    };
    return NextField;
}(Field));
export * from './types';
export default NextField;
