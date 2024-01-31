import Schema from '../index';

describe('size', () => {
    it('error with min', done => {
        new Schema({
            v: {
                min: 3,
            },
            v1: {
                min: 3,
            },
        }).validate(
            {
                v: '1',
                v1: 1,
            },
            errors => {
                assert(errors);
                assert(errors.length === 2);
                assert(errors[0].message === 'v 字段数值不得小于 3');
                done();
            }
        );
    });

    it('noerror with min', done => {
        new Schema({
            v: {
                min: 3,
            },
            v1: {
                min: 3,
            },
            v2: {
                min: 3,
            },
        }).validate(
            {
                v: '4',
                v1: 4,
                v2: {},
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with max', done => {
        new Schema({
            v: {
                max: 3,
            },
            v1: {
                max: 3,
            },
        }).validate(
            {
                v: '5',
                v1: 5,
            },
            errors => {
                assert(errors);
                assert(errors.length === 2);
                assert(errors[0].message === 'v 字段数值不得大于 3');
                done();
            }
        );
    });

    it('noerror with max', done => {
        new Schema({
            v: {
                max: 3,
            },
            v1: {
                max: 3,
            },
        }).validate(
            {
                v: '1',
                v1: 1,
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with min & max', done => {
        new Schema({
            v: {
                min: 3,
                max: 30,
                message: 'must between 3 and 30',
            },
            v1: {
                min: 3,
                max: 30,
            },
        }).validate(
            {
                v: '1',
                v1: 31,
            },
            errors => {
                assert(errors);
                assert(errors.length === 2);
                assert(errors[0].message === 'must between 3 and 30');
                done();
            }
        );
    });

    it('noerror with min & max', done => {
        new Schema({
            v: {
                min: 3,
                max: 30,
                message: 'must between 3 and 30',
            },
            v1: {
                min: 3,
                max: 30,
            },
        }).validate(
            {
                v: 10,
                v1: 19,
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });
});
