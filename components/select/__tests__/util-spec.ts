import { isSingle, isNull } from '../util';

/**
 * util spec test
 * created at 2017/11
 */

describe('util.js', () => {
    it('#isSingle should works correct', () => {
        expect(isSingle()).to.be.true;
        expect(isSingle('single')).to.be.true;
        expect(!isSingle('tag')).to.be.true;
        expect(!isSingle('multiple')).to.be.true;
    });

    it('#isNull should works correct', () => {
        expect(isNull()).to.be.true;
        expect(isNull(null)).to.be.true;
        expect(!isNull(0)).to.be.true;
        expect(!isNull('')).to.be.true;
        expect(!isNull(false)).to.be.true;
    });
});
