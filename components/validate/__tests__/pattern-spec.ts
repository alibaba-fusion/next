import Schema from '../index';

describe('pattern', () => {
    it('works for non-required empty string', done => {
        new Schema({
            v: {
                pattern: /^\d+$/,
                message: 'haha',
            },
        }).validate(
            {
                // useful for web, input's value defaults to ''
                v: '',
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('work for non-required empty string with string regexp', done => {
        new Schema({
            v: {
                pattern: '^\\d+$',
                message: 'haha',
            },
        }).validate(
            {
                // useful for web, input's value defaults to ''
                v: 's',
            },
            errors => {
                assert(errors);
                assert(errors.length === 1);
                assert(errors[0].message === 'haha');
                done();
            }
        );
    });

    it('works for required empty string', done => {
        new Schema({
            v: {
                pattern: /^\d+$/,
                message: 'haha',
                required: true,
            },
        }).validate(
            {
                // useful for web, input's value defaults to ''
                v: '',
            },
            errors => {
                assert(errors);
                assert(errors.length === 1);
                assert(errors[0].message === 'haha');
                done();
            }
        );
    });

    it('works for non-required null', done => {
        new Schema({
            v: {
                pattern: /^\d+$/,
                message: 'haha',
            },
        }).validate(
            {
                v: null,
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('works for non-required undefined', done => {
        new Schema({
            v: {
                pattern: /^\d+$/,
                message: 'haha',
            },
        }).validate(
            {
                v: undefined,
            },
            errors => {
                assert(errors === null);
                done();
            }
        );
    });

    it('works', done => {
        new Schema({
            v: {
                pattern: /^\d+$/,
                message: 'haha',
            },
        }).validate(
            {
                v: ' ',
            },
            errors => {
                assert(errors);
                assert(errors.length === 1);
                assert(errors[0].message === 'haha');
                done();
            }
        );
    });
});
