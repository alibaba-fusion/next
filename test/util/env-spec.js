import assert from 'power-assert';
import * as env from '../../src/util/env';

describe('src/env.js', function() {
    describe('#ieVersion', function() {
        it('ieVersion should be a number or undefined', function() {
            // in chrome browser
            assert(
                env.ieVersion === undefined || typeof env.ieVersion === 'number'
            );
        });
    });

    describe('#isProduction', function() {
        it(`isProduction() should return a boolean value that be equal to ${process
            .env.NODE_ENV === 'production'}`, function() {
            assert(
                env.isProduction() === (process.env.NODE_ENV === 'production')
            );
        });
    });
});
