import { __read, __spreadArray } from "tslib";
import { isPromise } from './object';
import datejs from './date';
/**
 * 一个空方法，返回入参本身或空对象
 */
export var noop = function () { };
/**
 * 一个空方法，返回 false
 */
export var prevent = function () { return false; };
/**
 * 将 N 个方法合并为一个链式调用的方法
 * @returns 合并后的方法
 * @see https://github.com/react-component/util/
 *
 * @example
 * func.makeChain(this.handleChange, this.props.onChange);
 */
export function makeChain() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function chainedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0, j = fns.length; i < j; i++) {
            var fn = fns[i];
            if (fn && fn.apply) {
                fn.apply(this, args);
            }
        }
    };
}
/**
 * 批量改变方法的上下文
 * 此方法在 react 组件中很有用，在 constructor 中批量将组件上的方法执行上下文绑定到组件本身
 * 注意：用 bind 改变函数运行的上下文只会生效一次
 * @param ctx - 方法挂载的对象以及执行的上下文
 * @param fns - 方法名列表
 *
 * @example
 * func.bindCtx(this, ['handleClick', 'handleChange']);
 */
export function bindCtx(ctx, fns, ns) {
    if (typeof fns === 'string') {
        fns = [fns];
    }
    // 方法的挂载空间，如果不传，默认与ctx相同
    ns = ns || ctx;
    fns.forEach(function (fnName) {
        // @ts-expect-error 这里不要添加空方法判断，由调用者保证正确性，否则出了问题无法排查
        ns[fnName] = ns[fnName].bind(ctx);
    });
}
/**
 * 用于执行回调方法后的逻辑
 * @param ret - 回调方法执行结果
 * @param success - 执行结果返回非 false 的回调
 * @param failure - [failure=noop] 执行结果返回 false 的回调
 */
export function promiseCall(ret, success, failure) {
    if (failure === void 0) { failure = noop; }
    if (isPromise(ret)) {
        return ret
            .then(function (result) {
            success(result);
            return result;
        })
            .catch(function (e) {
            failure(e);
            // throw e;
        });
    }
    return ret !== false ? success(ret) : failure(ret);
}
/**
 * 方法调用，如果 obj 对象中存在名为 method 的方法则调用该方法
 * @param target - 目标对象
 * @param method - 方法名
 * @param args - 函数参数列表
 * @returns 函数返回值 如果不存在返回 undefined
 */
export function invoke(target, method, args) {
    var func = target && method in target
        ? target[method]
        : undefined;
    return func && func.apply(void 0, __spreadArray([], __read((args || [])), false));
}
export function renderNode(render, defaultRender, renderProps) {
    if (renderProps === void 0) { renderProps = []; }
    var r = render !== undefined ? render : defaultRender;
    if (renderProps && !Array.isArray(renderProps)) {
        renderProps = [renderProps];
    }
    return typeof r === 'function' ? r.apply(void 0, __spreadArray([], __read(renderProps), false)) : r;
}
/**
 * 日期检验：无效值返回 null
 */
export function checkDate(value, format) {
    /**
     * 因为 datejs(undefined) 表示当前时间
     * 但是这里期望的是一个空值，即用户不输入值的时候显示为空
     */
    if (value === undefined) {
        value = null;
    }
    var date = format ? datejs(value, format) : datejs(value);
    return date.isValid() ? date : null;
}
/**
 * Range 日期检验
 * @param value - 日期值
 * @param inputType - 输入框类型：开始时间输入框/结束时间输入框
 * @param disabled - 是否禁用
 * @param strictly - 是否严格校验：严格模式下不允许开始时间大于结束时间，在显示确认按键的，用户输入过程可不严格校验
 */
export function checkRangeDate(value, inputType, disabled, strictly, format) {
    if (strictly === void 0) { strictly = true; }
    var _a = __read(Array.isArray(value)
        ? [0, 1].map(function (i) { return checkDate(value[i], format); })
        : [null, null], 2), begin = _a[0], end = _a[1];
    var _b = __read(Array.isArray(disabled) ? disabled : [disabled, disabled], 2), disabledBegin = _b[0], disabledEnd = _b[1];
    /**
     * 需要清除其中一个时间，优先清除结束时间，下面情况清除开始时间：
     * 1. 结束时间被 disabled 而开始时间没有被 disabled
     * 2. 开始时间和结束时间都没被 disabled 且当前正在输入是结束时间
     */
    if (strictly && begin && end && begin.isAfter(end)) {
        if ((!disabledBegin && disabledEnd) ||
            // 本来是 (!disabledBegin && !disabledBegin && inputType === DATE_INPUT_TYPE.END)
            (!disabledBegin && !disabledBegin && inputType === 1)) {
            return [null, end];
        }
        return [begin, null];
    }
    return [begin, end];
}
