import assert from 'power-assert';
import * as env from '../../src/util/env';

describe('src/env.js', function () {
  describe('#ieVersion', function () {
    it('ieVersion should be a number or undefined', function () {
      // in chrome browser
      assert(env.ieVersion === undefined || typeof env.ieVersion === 'number');
    });
  });
});
