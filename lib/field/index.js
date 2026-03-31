"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var field_1 = tslib_1.__importDefault(require("@alifd/field"));
var util_1 = require("../util");
var utils_1 = require("./utils");
var NextField = /** @class */ (function (_super) {
    tslib_1.__extends(NextField, _super);
    function NextField(com, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        // scrollToFirstError 选项的默认值设置放在 next field 里处理
        var _a = options.scrollToFirstError, scrollToFirstErrorOption = _a === void 0 ? true : _a;
        var newOptions = Object.assign({}, options, {
            scrollToFirstError: scrollToFirstErrorOption,
            afterValidateRerender: utils_1.scrollToFirstError,
            processErrorMessage: utils_1.cloneAndAddKey,
        });
        _this = _super.call(this, com, newOptions) || this;
        _this.validate = _this.validate.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }
    NextField.useField = function (options) {
        if (options === void 0) { options = {}; }
        if (!react_1.useState || !react_1.useMemo) {
            util_1.log.warning('need react version > 16.8.0');
            // @ts-expect-error 在缺少对应 hook 的情况下应抛出异常，直接 return 会导致类型问题：useField 返回值可能为空，消费时类型很麻烦
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
            util_1.log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        }
        else if (backToDefault === true) {
            util_1.log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(names || undefined);
        }
        else {
            _super.prototype.reset.call(this, names || undefined);
        }
    };
    return NextField;
}(field_1.default));
tslib_1.__exportStar(require("./types"), exports);
exports.default = NextField;
