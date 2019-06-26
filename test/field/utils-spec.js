import React from 'react';
import assert from 'power-assert';
import {getErrorStrs, getIn, setIn, deleteIn} from '../../src/field/utils';

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

    describe('getIn', () => {
        it('should return state when state is falsy', () => {
            assert(getIn(undefined, 'a') === undefined);
        });

        it('should return undefind when no name', () => {
            assert(getIn({a: 1}, '') === undefined);
        });

        it('should return undefind when value for name', () => {
            assert(getIn({a: 1}, 'b') === undefined);
        });

        it('should get top level element', () => {
            assert(getIn({a: 1}, 'a') === 1);
        });

        it('should get deep level element', () => {
            assert(getIn({a: {b: {c: 1}}}, 'a.b.c') === 1);
        });

        it('should get array element with dot notation', () => {
            assert(getIn({a: [1, 2]}, 'a.1') === 2);
        });

        it('should get array element with bracket notation', () => {
            assert(getIn({a: [1, 2]}, 'a[1]') === 2);
        });

        it('should get element that is deep array combination', () => {
            assert(getIn({a: [1, {b: {c: 2}}]}, 'a[1].b.c') === 2);
        });
    });

    describe('setIn', () => {
        it('should initialize state with object when it is falsy and path is NaN', () => {
            assert(setIn(undefined, 'a', 5).a === 5);
        });

        it('should initialize state with array when it is falsy and path is NaN', () => {
            assert(setIn(undefined, '1', 5)[1] === 5);
        });

        it('should initialize state with whole path', () => {
            assert(setIn(undefined, 'a.b.c', 5).a.b.c === 5);
        });

        it('should not modify state when setting new value', () => {
            const state = {a: {b: { c: 1}}};
            setIn(state, 'a.b.c', 5);
            assert(state.a.b.c === 1);
        });

        it('should duplicate state with new value', () => {
            const state = {a: {b: { c: 1}}};
            const newState = setIn(state, 'a.b.c', 5);
            assert(newState.a.b.c === 5);
        });

        it('should handle array dot notation', () => {
            const state = {a: {b: [1, 2]}};
            const newState = setIn(state, 'a.b.1', 5);
            assert(newState.a.b[1] === 5);
        });

        it('should handle array bracket notation', () => {
            const state = {a: {b: [1, 2]}};
            const newState = setIn(state, 'a.b[1]', 5);
            assert(newState.a.b[1] === 5);
        });

        it('should add to existing nested object', () => {
            const state = {a: {b: 1 }};
            const newState = setIn(state, 'a.c.d', 5);
            assert(newState.a.c.d === 5);
        });

        it('should add to empty object', () => {
            const newState = setIn({}, 'a.b.c', 5);
            assert(newState.a.b.c === 5);
        });
    });

    describe('deleteIn', () => {
        it('should do nothing when name is not present', () => {
            assert.deepEqual(deleteIn({a: { b: 1}}, 'x'), { a: { b: 1 }});
        });

        it('should do nothing given empty object', () => {
            assert.deepEqual(deleteIn({}, 'x'), {});
        });

        it('should delete nested element, but leave object', () => {
            assert.deepEqual(deleteIn({a : { b: 1}}, 'a.b'), {a: {}});
        });

        it('should delete top level element, but leave object', () => {
            assert.deepEqual(deleteIn({a : { b: 1}}, 'a'), {});
        });

        it('should delete array element, but not change later indices', () => {
            // eslint-disable-next-line no-sparse-arrays
            assert.deepEqual(deleteIn({a : { b: [1, 2, 3]}}, 'a.b.0'), {a : { b: [, 2, 3]}}); 
        });
    });
});
