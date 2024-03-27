import Schema from '../index';

describe('abort', () => {
    it('works with abort', done => {
        const callback = cy.spy();
        const schema = new Schema({
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
            () => {
                callback();
            }
        );

        schema.abort();

        schema.validate(
            {
                v: 3,
            },
            errors => {
                assert(!callback.called);
                assert(errors);
                assert(errors.length === 1);
                done();
            }
        );
    });
});
