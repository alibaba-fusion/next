import assert from 'power-assert';
import Schema from '../index';

describe('unknow usage', () => {
    it('works with unknow rule', done => {
        new Schema({
            v: {
                unknow: 'number',
            },
        }).validate(
            {
                v: '1',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('noerror with required with other unknow rules', done => {
        new Schema({
            v: {
                required: true,
                unknow: 'number',
            },
        }).validate(
            {
                v: '1',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with required with other unknow rules', done => {
        new Schema({
            v: {
                required: true,
                unknow: 'number',
            },
        }).validate(
            {
                v: '',
            },
            errors => {
                assert(errors.length === 1);
                assert(errors[0].message === 'v 是必填字段');
                done();
            }
        );
    });

    it('noerror with required and other rule', done => {
        new Schema({
            v: {
                required: true,
                format: 'number',
            },
        }).validate(
            {
                v: '1',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('error with required and other rules', done => {
        new Schema({
            v: {
                required: true,
                format: 'number',
                message: 'haha',
            },
        }).validate(
            {
                v: 'abcd',
            },
            errors => {
                assert(errors.length === 1);
                assert(errors[0].message === 'haha');
                done();
            }
        );
    });

    it('error with no rules', done => {
        new Schema({}).validate(
            {
                v: 'abcd',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });
});
