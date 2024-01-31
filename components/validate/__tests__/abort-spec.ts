import assert from 'power-assert';
import Schema from '../index';

describe('abort', () => {
    it('works with abort', done => {
        let schema = new Schema({
            v: [
                {
                    validator(rule, value, callback) {
                        setTimeout(() => {
                            callback(new Error('e3'));
                        }, 300);
                    },
                },
            ],
        });

        schema.validate(
            {
                v: 2,
            },
            errors => {
                assert('should not be here' === '');
                done();
            }
        );

        schema.abort();

        schema.validate(
            {
                v: 3,
            },
            errors => {
                assert(errors.length === 1);
                done();
            }
        );
    });
});
