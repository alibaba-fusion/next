import AliField from '@alifd/field';

import { cloneAndAddKey, scrollToFirstError } from './utils';

class Field extends AliField {
    constructor(com, options = {}) {
        const nextOptions = {
            processErrorMessage: cloneAndAddKey,
            afterValidateRerender: scrollToFirstError,
            ...options,
        };
        super(com, nextOptions);
    }
}

export default Field;
