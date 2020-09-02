import * as React from 'react';
import { error } from './log';

const { useState } = React;

export const createModel = Model => {
    return () => {
        try {
            const model = new Model();
            const result = {};
            Object.keys(model).forEach(key => {
                const [value, setter] = useState(model[key]);
                let nextValue = value;
                const { configurable, enumerable } = Object.getOwnPropertyDescriptor(model, key);
                Object.defineProperty(result, key, {
                    configurable,
                    enumerable,
                    get: () => nextValue,
                    set: v => {
                        setter(v);
                        nextValue = v;
                    },
                });
            });
            return result;
        } catch (e) {
            error(e);
            throw new Error('Failed to create model in cabala hooks. Please check the format of model is correct.');
        }
    };
};
