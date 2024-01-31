import assert from 'power-assert';
import Schema from '../index';

describe('validator', () => {
    it('works', done => {
        new Schema({
            v: [
                {
                    validator(rule, value, callback) {
                        callback(new Error('e1'));
                    },
                },
                {
                    validator(rule, value, callback) {
                        callback(new Error('e2'));
                    },
                },
            ],
            v2: [
                {
                    validator(rule, value, callback) {
                        callback(new Error('e3'));
                    },
                },
            ],
        }).validate(
            {
                v: 2,
            },
            errors => {
                assert(errors.length === 2);
                assert(errors[0].message === 'e1');
                assert(errors[1].message === 'e3');
                done();
            }
        );
    });

    it('first works', done => {
        new Schema(
            {
                v: [
                    {
                        validator(rule, value, callback) {
                            callback(new Error('e1'));
                        },
                    },
                    {
                        validator(rule, value, callback) {
                            callback(new Error('e2'));
                        },
                    },
                ],
                v2: [
                    {
                        validator(rule, value, callback) {
                            callback(new Error('e3'));
                        },
                    },
                ],
            },
            { first: true }
        ).validate(
            {
                v: 2,
                v2: 1,
            },
            errors => {
                assert(errors.length === 1);
                assert(errors[0].message === 'e1');
                done();
            }
        );
    });
});

describe('promise validator', () => {
    it('works', done => {
        new Schema({
            v: [
                {
                    validator(rule, value) {
                        return Promise.reject(new Error('e1'));
                    },
                },
                {
                    validator(rule, value) {
                        return Promise.reject(new Error('e2'));
                    },
                },
            ],
            v2: [
                {
                    validator(rule, value) {
                        return Promise.reject(new Error('e3'));
                    },
                },
            ],
        }).validate(
            {
                v: 2,
            },
            errors => {
                assert(errors.length === 2);
                assert(errors[0].message === 'e1');
                assert(errors[1].message === 'e3');
                done();
            }
        );
    });

    it('first works', done => {
        new Schema(
            {
                v: [
                    {
                        validator(rule, value) {
                            return Promise.reject(new Error('e1'));
                        },
                    },
                    {
                        validator(rule, value) {
                            return Promise.reject(new Error('e2'));
                        },
                    },
                ],
                v2: [
                    {
                        validator(rule, value) {
                            return Promise.reject(new Error('e3'));
                        },
                    },
                ],
            },
            { first: true }
        ).validate(
            {
                v: 2,
                v2: 1,
            },
            errors => {
                assert(errors.length === 1);
                assert(errors[0].message === 'e1');
                done();
            }
        );
    });
});
