import type { ConfigType, OptionType, Dayjs } from 'dayjs';
import { isPromise } from './object';
import datejs from './date';

export interface AnyFunction<Result = unknown> {
    (...args: unknown[]): Result;
}

/**
 * 一个空方法，返回入参本身或空对象
 */
export const noop = () => {};

/**
 * 一个空方法，返回 false
 */
export const prevent = () => false;

export function makeChain<F extends AnyFunction | { apply?: AnyFunction } | undefined | null>(
    ...fns: [F]
): F;
export function makeChain(
    ...fns: Array<AnyFunction | { apply?: AnyFunction } | undefined | null>
): AnyFunction;
/**
 * 将 N 个方法合并为一个链式调用的方法
 * @returns 合并后的方法
 * @see https://github.com/react-component/util/
 *
 * @example
 * func.makeChain(this.handleChange, this.props.onChange);
 */
export function makeChain(
    ...fns: ({ apply?: AnyFunction } | undefined | null)[]
): AnyFunction | { apply?: AnyFunction } | undefined | null {
    if (fns.length === 1) {
        return fns[0];
    }

    return function chainedFunction(...args: unknown[]) {
        for (let i = 0, j = fns.length; i < j; i++) {
            const fn = fns[i];
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
export function bindCtx(ctx: object, fns: string | string[], ns?: object) {
    if (typeof fns === 'string') {
        fns = [fns];
    }

    // 方法的挂载空间，如果不传，默认与ctx相同
    ns = ns || ctx;

    fns.forEach(fnName => {
        // @ts-expect-error 这里不要添加空方法判断，由调用者保证正确性，否则出了问题无法排查
        ns[fnName] = ns[fnName].bind(ctx);
    });
}

export function promiseCall<Value>(
    ret: Promise<Value>,
    success: (value: Value) => void,
    failure?: (reason: unknown) => void
): Promise<Value>;
export function promiseCall<SuccessResult = unknown, FailureResult = unknown>(
    ret: false,
    success: (data: false) => SuccessResult,
    failure?: (reason: false) => FailureResult
): FailureResult;
export function promiseCall<Value = unknown, SuccessResult = unknown, FailureResult = unknown>(
    ret: Value,
    success: (data: Value) => SuccessResult,
    failure?: (reason: unknown) => FailureResult
): SuccessResult;
/**
 * 用于执行回调方法后的逻辑
 * @param ret - 回调方法执行结果
 * @param success - 执行结果返回非 false 的回调
 * @param failure - [failure=noop] 执行结果返回 false 的回调
 */
export function promiseCall(
    ret: unknown,
    success: (data: any) => unknown,
    failure: (data: any) => unknown = noop
) {
    if (isPromise(ret)) {
        return ret
            .then(result => {
                success(result);
                return result;
            })
            .catch(e => {
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
export function invoke<Result = unknown>(
    target: unknown,
    method: string,
    args?: unknown[]
): Result | undefined {
    const func =
        target && method in (target as any)
            ? (target as { [key: typeof method]: (...args: unknown[]) => Result })[method]
            : undefined;
    return func && func(...(args || []));
}

export function renderNode<Result = unknown>(
    render: AnyFunction<Result> | undefined,
    defaultRender: AnyFunction<Result> | undefined,
    renderProps: unknown[] = []
): Result | undefined {
    const r = render !== undefined ? render : defaultRender;

    if (renderProps && !Array.isArray(renderProps)) {
        renderProps = [renderProps];
    }
    return typeof r === 'function' ? r(...renderProps) : r;
}

/**
 * 日期检验：无效值返回 null
 */
export function checkDate(value: ConfigType, format?: OptionType): Dayjs | null {
    /**
     * 因为 datejs(undefined) 表示当前时间
     * 但是这里期望的是一个空值，即用户不输入值的时候显示为空
     */
    if (value === undefined) {
        value = null;
    }

    const date = format ? datejs(value, format) : datejs(value);
    return date.isValid() ? date : null;
}

/**
 * Range 日期检验
 * @param value - 日期值
 * @param inputType - 输入框类型：开始时间输入框/结束时间输入框
 * @param disabled - 是否禁用
 * @param strictly - 是否严格校验：严格模式下不允许开始时间大于结束时间，在显示确认按键的，用户输入过程可不严格校验
 */
export function checkRangeDate(
    value: ConfigType,
    inputType: number,
    disabled?: boolean,
    strictly: boolean = true,
    format?: OptionType
): [Dayjs | null, Dayjs | null] {
    const [begin, end] = Array.isArray(value)
        ? [0, 1].map(i => checkDate(value[i], format))
        : [null, null];
    const [disabledBegin, disabledEnd] = Array.isArray(disabled) ? disabled : [disabled, disabled];

    /**
     * 需要清除其中一个时间，优先清除结束时间，下面情况清除开始时间：
     * 1. 结束时间被 disabled 而开始时间没有被 disabled
     * 2. 开始时间和结束时间都没被 disabled 且当前正在输入是结束时间
     */
    if (strictly && begin && end && begin.isAfter(end)) {
        if (
            (!disabledBegin && disabledEnd) ||
            // 本来是 (!disabledBegin && !disabledBegin && inputType === DATE_INPUT_TYPE.END)
            (!disabledBegin && !disabledBegin && inputType === 1)
        ) {
            return [null, end];
        }

        return [begin, null];
    }

    return [begin, end];
}
