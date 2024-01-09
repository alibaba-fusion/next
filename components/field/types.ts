/// <reference types="react" />

import { FieldOption, WatchCallback } from '@alifd/field';
import innerField from '@alifd/field';

export * from '@alifd/field';
export default class Field extends innerField {
    /**
     *
     * @param contextComp 传入调用class的this
     * @param options 一些事件配置
     */
    constructor(contextComp: any, options?: FieldOption);

    /**
     * 校验
     * @param callback
     */
    validate(callback?: (errors: object[], values: object) => void): void;

    /**
     * 校验
     * @param names
     * @param callback
     */
    validate(
        names?: string[] | string,
        callback?: (errors: object[], values: object) => void
    ): void;

    /**
     * react hooks 风格使用 Field
     * @param options
     */
    static useField(options?: FieldOption): Field;

    /**
     * react hooks 风格使用 watch
     * @param field 指定 field
     * @param names 需要监听的字段 name 列表（name 需要在 field 内注册才能生效）
     * @param callback 字段值发生变化回调
     */
    static useWatch(field: Field, names: string[], callback: WatchCallback): void;
}
