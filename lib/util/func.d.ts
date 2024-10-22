import type { ConfigType, OptionType, Dayjs } from 'dayjs';
export interface AnyFunction<Result = unknown> {
    (...args: unknown[]): Result;
}
/**
 * 一个空方法，返回入参本身或空对象
 */
export declare const noop: () => void;
/**
 * 一个空方法，返回 false
 */
export declare const prevent: () => boolean;
export declare function makeChain<F extends AnyFunction | {
    apply?: AnyFunction;
} | undefined | null>(...fns: [F]): F;
export declare function makeChain(...fns: Array<AnyFunction | {
    apply?: AnyFunction;
} | undefined | null>): AnyFunction;
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
export declare function bindCtx(ctx: object, fns: string | string[], ns?: object): void;
export declare function promiseCall<Value>(ret: Promise<Value>, success: (value: Value) => void, failure?: (reason: unknown) => void): Promise<Value>;
export declare function promiseCall<SuccessResult = unknown, FailureResult = unknown>(ret: false, success: (data: false) => SuccessResult, failure?: (reason: false) => FailureResult): FailureResult;
export declare function promiseCall<Value = unknown, SuccessResult = unknown, FailureResult = unknown>(ret: Value, success: (data: Value) => SuccessResult, failure?: (reason: unknown) => FailureResult): SuccessResult;
/**
 * 方法调用，如果 obj 对象中存在名为 method 的方法则调用该方法
 * @param target - 目标对象
 * @param method - 方法名
 * @param args - 函数参数列表
 * @returns 函数返回值 如果不存在返回 undefined
 */
export declare function invoke<Result = unknown>(target: unknown, method: string, args?: unknown[]): Result | undefined;
export declare function renderNode<Result = unknown>(render: AnyFunction<Result> | Result | undefined, defaultRender: AnyFunction<Result> | Result | undefined, renderProps?: unknown): Result | undefined;
/**
 * 日期检验：无效值返回 null
 */
export declare function checkDate(value: ConfigType, format?: OptionType): Dayjs | null;
/**
 * Range 日期检验
 * @param value - 日期值
 * @param inputType - 输入框类型：开始时间输入框/结束时间输入框
 * @param disabled - 是否禁用
 * @param strictly - 是否严格校验：严格模式下不允许开始时间大于结束时间，在显示确认按键的，用户输入过程可不严格校验
 */
export declare function checkRangeDate(value: ConfigType | ConfigType[], inputType: number, disabled?: boolean | boolean[], strictly?: boolean, format?: OptionType): [Dayjs | null, Dayjs | null];
