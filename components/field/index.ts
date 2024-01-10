import { useState, useMemo, useRef, useEffect } from 'react';
import Field, { FieldOption, WatchCallback } from '@alifd/field';

import { log } from '../util';
import { scrollToFirstError, cloneAndAddKey } from './utils';
import { FieldExtend, ValidateCallback } from './types';

class NextField extends Field implements FieldExtend {
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
        const newOptions = Object.assign({}, options, {
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        });
        super(com, newOptions);

        this.validate = this.validate.bind(this);
    }

    validate(a?: ValidateCallback | string[] | string, b?: object | ValidateCallback) {
        this.validateCallback(a as string, b as ValidateCallback);
    }

    reset(ns?: string[] | string | undefined | boolean, backToDefault = false) {
        if (ns === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns as string[]);
        } else {
            // @ts-expect-error _reset method is not exposed
            this._reset(ns, false);
        }
    }
}

export default NextField;
