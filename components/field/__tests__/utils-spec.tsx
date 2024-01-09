import React from 'react';
import assert from 'power-assert';
import { cloneAndAddKey, scrollToFirstError } from '../utils';

/* eslint-disable react/jsx-filename-extension */
/* global describe it */
describe('Field Utils', () => {
    describe('cloneAndAddKey', () => {
        it('should return a cloned element with `error` key when no key set', () => {
            const el = <span>message 1</span>;
            const result = cloneAndAddKey(el);
            assert.equal(el.key, null);
            assert.equal(result.key, 'error');
            assert.equal(result.props.children, 'message 1');
        });

        it('should return a cloned element with same key value if already set', () => {
            const el = <span key="messageError">message 1</span>;
            const result = cloneAndAddKey(el);
            assert.equal(el.key, 'messageError');
            assert.equal(result.key, 'messageError');
            assert.equal(result.props.children, 'message 1');
        });
    });
});
