import { useState, useMemo, useRef, useEffect } from 'react';
import Field from '@alifd/field';

import { log } from '../util';
import { scrollToFirstError, cloneAndAddKey } from './utils';

class NextField extends Field {
    static useField(options = {}) {
        if (!useState || !useMemo) {
            log.warning('need react version > 16.8.0');
            return;
        }
        return this.getUseField({ useMemo, useState })(options);
    }

    static useWatch(field, names, callback) {
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

    constructor(com, options = {}) {
        const newOptions = Object.assign({}, options, {
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        });
        super(com, newOptions);

        this.validate = this.validate.bind(this);
    }

    validate(ns, cb) {
        this.validateCallback(ns, cb);
    }

    reset(ns, backToDefault = false) {
        if (ns === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        } else {
            this._reset(ns, false);
        }
    }
}

export default NextField;
