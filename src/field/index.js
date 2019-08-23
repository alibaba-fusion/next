import { useState, useMemo } from 'react';
import Field from '@alifd/field';

import { scrollToFirstError, cloneAndAddKey } from './utils';

class NextField extends Field {
    static useField(options = {}) {
        return this.getUseField({ useMemo, useState })(options);
    }

    constructor(com, options = {}) {
        const newOptions = Object.assign({}, options, {
            afterValidateRerender: scrollToFirstError,
            processErrorMessage: cloneAndAddKey,
        });
        super(com, newOptions);
    }

    validate(ns, cb) {
        this.validateCallback(ns, cb);
    }
}

export default NextField;
