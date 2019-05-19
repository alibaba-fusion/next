import React from 'react';
import assert from 'power-assert';
import {getErrorStrs} from '../../src/field/utils';

/* eslint-disable react/jsx-filename-extension */
/* global describe it */
describe('Field Utils', () => {
    
    describe('getErrorStrs', () => {
        it('should return `undefined` when given no errors', () => {
            assert(getErrorStrs() === undefined);
        });

        it('should return array of strings when given error objects', () => {
            const errors = [
                { message: 'error 1' },
                { message: 'error 2' }
            ];
            assert.deepEqual(getErrorStrs(errors), ['error 1', 'error 2']);
        });

        it('should return array of strings when given string errors', () => {
            const errors = [
                'error 1',
                'error 2'
            ];
            assert.deepEqual(getErrorStrs(errors), ['error 1', 'error 2']);
        });

        it('should return array of React elements with `error` key when no key set', () => {
            const errors = [
                { message: <span>message 1</span> }
            ];
            const result = getErrorStrs(errors);
            assert.equal(result[0].key, 'error');
        });

        it('should accept React Elements in `message` key', () => {
            const errors = [
                { message: <span>message 1</span> },
                { message: <span>message 2</span> }
            ];
            const result = getErrorStrs(errors);
            assert.deepEqual(result[0].props.children, 'message 1');
            assert.deepEqual(result[1].props.children, 'message 2');
        });

        it('should accept React Elements', () => {
            const errors = [
                <span key="1">message 1</span>,
                <span key="2">message 2</span>
            ];
            const result = getErrorStrs(errors);
            assert.deepEqual(result[0].props.children, 'message 1');
            assert.deepEqual(result[1].props.children, 'message 2');
        });
    })
});
