import Schema from '../index';

describe('length', () => {
    it('error with minLength', done => {
        new Schema({
            v: {
                minLength: 3,
            },
            v1: {
                minLength: 3,
            },
            v2: {
                minLength: 3,
            },
        }).validate(
            {
                v: '1',
                v1: 1,
                v2: ['1'],
            },
            errors => {
                assert(errors);
                assert(errors.length === 3);
                assert(errors[0].message === 'v 字段字符长度不得少于 3');
                assert(errors[1].message === 'v1 字段字符长度不得少于 3');
                assert(errors[2].message === 'v2 个数不得少于 3');
                done();
            }
        );
    });

    it('noerror with minLength', done => {
        new Schema({
            v: {
                minLength: 3,
            },
            v1: {
                minLength: 3,
            },
            v2: {
                minLength: 3,
            },
        }).validate(
            {
                v: '4000',
                v1: 4000,
                v2: {},
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with maxLength', done => {
        new Schema({
            v: {
                maxLength: 3,
            },
            v1: {
                maxLength: 3,
            },
        }).validate(
            {
                v: '5000',
                v1: 5000,
            },
            errors => {
                assert(errors);
                assert(errors.length === 2);
                assert(errors[0].message === 'v 字段字符长度不得超过 3');
                done();
            }
        );
    });

    it('noerror with maxLength', done => {
        new Schema({
            v: {
                maxLength: 3,
            },
            v1: {
                maxLength: 3,
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

    it('error with minLength & maxLength', done => {
        new Schema({
            v: {
                minLength: 3,
                maxLength: 30,
                message: 'must between 3 and 30',
            },
            v1: {
                minLength: 3,
                maxLength: 30,
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

    it('noerror with minLength & maxLength', done => {
        new Schema({
            v: {
                minLength: 3,
                maxLength: 30,
                message: 'must between 3 and 30',
            },
            v1: {
                minLength: 3,
                maxLength: 30,
            },
        }).validate(
            {
                v: 1000,
                v1: '19000000000',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with length', done => {
        new Schema({
            v: {
                length: 10,
                message: '长度必须是10',
            },
            v1: {
                length: 10,
            },
        }).validate(
            {
                v: '1000000',
                v1: 3100000,
            },
            errors => {
                assert(errors);
                assert(errors.length === 2);
                assert(errors[0].message === '长度必须是10');
                done();
            }
        );
    });

    it('noerror with length', done => {
        new Schema({
            v: {
                length: 10,
                message: '长度必须是10',
            },
            v1: {
                length: 10,
            },
        }).validate(
            {
                v: '1000000000',
                v1: 3100000000,
            },
            errors => {
                assert(errors === null);

                done();
            }
        );
    });
});
