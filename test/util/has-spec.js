import assert from 'power-assert';
import has from '../../src/util/has';

describe('src/has.js', function() {
    it('has() will return a boolean', function() {
        assert(typeof has() === 'boolean');
    });

    it('has({a : 1}, "b") will return false', function() {
        assert(has({ a: 1 }, "b") === false);
    });

    it('has({a : 1}, "a") will return true', function() {
      assert(has({ a: 1 }, "a") === true);
  });

});
