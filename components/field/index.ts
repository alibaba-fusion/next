import { useState, useMemo, useRef, useEffect } from 'react';
import Field, { type WatchCallback, type FieldOption as OriginalFieldOption } from '@alifd/field';
import { log } from '../util';
import { scrollToFirstError, cloneAndAddKey } from './utils';
import type { FieldOption, ValidateCallback } from './types';

class NextField extends Field {
    static useField(options: FieldOption = {}): NextField {
        if (!useState || !useMemo) {
            log.warning('need react version > 16.8.0');
            // @ts-expect-error 在缺少对应 hook 的情况下应抛出异常，直接 return 会导致类型问题：useField 返回值可能为空，消费时类型很麻烦
            return;
        }
        return this.getUseField({ useMemo, useState })(options) as NextField;
    }

    static useWatch(field: Field, names: string[], callback: WatchCallback) {
        const callbackRef = useRef(callback);
        callbackRef.current = callback;

        // watch at render stage, field or names change will cause rewatch
        const unwatch = useMemo(() => {
            return field.watch(names, (...args) => {
                if (typeof callbackRef.current === 'function') {
                    callbackRef.current(...args);
                }
            });
        }, [field, names.join(',')]);

        useEffect(() => {
            // unwatch at uneffect stage
            return unwatch;
        }, [unwatch]);
    }

    constructor(com: unknown, options: FieldOption = {}) {
        // scrollToFirstError 选项的默认值设置放在 next field 里处理
        const { scrollToFirstError: scrollToFirstErrorOption = true } = options;
        const newOptions = Object.assign({}, options, {
            scrollToFirstError: scrollToFirstErrorOption,
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        }) as unknown as OriginalFieldOption;
        super(com, newOptions);

        this.validate = this.validate.bind(this);
        this.reset = this.reset.bind(this);
    }

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
     * 校验 - callback version
     */
    validate(names?: string | string[] | ValidateCallback, callback?: ValidateCallback) {
        if (typeof names === 'function') {
            return this.validateCallback(names);
        }
        return this.validateCallback(names, callback);
    }

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
    reset(names?: string[] | string | boolean, backToDefault = false) {
        if (names === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(names || undefined);
        } else {
            super.reset(names || undefined);
        }
    }
}

export * from './types';
export default NextField;
