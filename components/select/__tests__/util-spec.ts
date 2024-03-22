import assert from 'power-assert';
import { isSingle, isNull } from '../util';

/**
 * util spec test
 * @create 2017/11
 */

describe('util.js', () => {
    it('#isSingle should works correct', () => {
        assert(isSingle());
        assert(isSingle('single'));
        assert(!isSingle('tag'));
        assert(!isSingle('multiple'));
    });

    it('#isNull should works correct', () => {
        assert(isNull());
        assert(isNull(null));
        assert(!isNull(0));
        assert(!isNull(''));
        assert(!isNull(false));
    });
});
