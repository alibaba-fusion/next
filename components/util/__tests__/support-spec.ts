import * as support from '../support';
import * as env from '../env';

const ieVersion = typeof env.ieVersion === 'number' ? env.ieVersion : NaN;

describe('src/support.js', function () {
    it('support.animation should be a object except IE9', function () {
        if (ieVersion < 10) {
            assert(!support.animation);
        } else {
            assert(typeof support.animation === 'object');
            assert(typeof (support.animation as { end: string }).end === 'string');
        }
    });

    it('support.transition should be a object except IE9', function () {
        if (ieVersion < 10) {
            assert(!support.transition);
        } else {
            assert(typeof support.transition === 'object');
            assert(typeof (support.transition as { end: string }).end === 'string');
        }
    });

    it('support.flex should be true except IE9', function () {
        if (ieVersion < 10) {
            assert(!support.flex);
        } else {
            assert(support.flex);
        }
    });
});
