import Field, { type WatchCallback } from '@alifd/field';
import type { FieldOption, ValidateCallback } from './types';
declare class NextField extends Field {
    static useField(options?: FieldOption): NextField;
    static useWatch(field: Field, names: string[], callback: WatchCallback): void;
    constructor(com: unknown, options?: FieldOption);
    /**
     * 校验全部字段 - callback 模式
     * @param callback - 校验结果的回调函数
     */
    validate(callback?: ValidateCallback): void;
    /**
     * 校验指定字段 - callback 模式
     * @param names - 字段名或字段名列表
     * @param callback - 校验结果回调函数
     */
    validate(names?: string | string[], callback?: ValidateCallback): void;
    /**
     * 重置全部字段
     * @param backToDefault - 是否重置为默认值，默认 false
     * @deprecated 使用 resetToDefault() 代替 reset(true)
     */
    reset(backToDefault?: boolean): void;
    /**
     * 重置指定字段
     * @param names - 字段名
     * @param backToDefault - 是否重置为默认值，默认为 false
     * @deprecated 使用 resetToDefault(names) 代替 reset(names, true)
     */
    reset(names?: string | string[], backToDefault?: boolean): void;
    /**
     * 重置指定字段
     * @param names - 字段名
     */
    reset(names?: string | string[]): void;
}
export * from './types';
export default NextField;
