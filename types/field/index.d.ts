/// <reference types="react" />

import { ValidateResults, FieldOption } from '@alifd/field';
import innerField from '@alifd/field';

export * from '@alifd/field';
export default class Field extends innerField{
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
    validate(callback?: (errors: object[], values: ValidateResults) => void): void;

    /**
     * 校验
     * @param names
     * @param callback
     */
    validate(
        names?: string[] | string,
        callback?: (errors: object[], values: ValidateResults) => void
    ): void;

    /**
     * react hooks 风格使用 Field
     * @param options
     */
    static useField(options?: FieldOption): Field;
}
