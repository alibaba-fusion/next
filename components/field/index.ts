import { useState, useMemo, useRef, useEffect } from 'react';
import Field, { type WatchCallback } from '@alifd/field';
import { log } from '../util';
import { scrollToFirstError, cloneAndAddKey } from './utils';
import type { FieldOption } from './types';

class NextField extends Field {
    static useField(options: FieldOption = {}): NextField {
        if (!useState || !useMemo) {
            log.warning('need react version > 16.8.0');
            // @ts-expect-error ...
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
        });
        super(com, newOptions);

        this.validate = this.validate.bind(this);
        this.reset = this.reset.bind(this);
    }

    /**
     * 校验 - callback version
     */
    validate = this.validateCallback;

    /**
     * 重置全部字段
     * @param backToDefault - 是否重置为默认值，默认 false
     */
    reset(backToDefault?: boolean): void;
    /**
     * 重置指定字段
     * @param names - 字段名
     * @param backToDefault - 是否重置为默认值，默认为 false
     */
    reset(names: string | string[], backToDefault?: boolean): void;
    reset(ns?: string[] | string | boolean, backToDefault = false) {
        if (ns === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns as string[]);
        } else {
            super.reset(ns as string | string[]);
        }
    }
}

export * from './types';
export default NextField;
