import assert from 'power-assert';
import * as support from '../../src/util/support';
import * as env from '../../src/util/env';

const {ieVersion} = env;

describe('src/support.js', function () {
  it('support.animation should be a object except IE9', function () {
    if (ieVersion < 10) {
      assert(!support.animation);
    } else {
      assert(typeof support.animation === 'object');
      assert(typeof support.animation.end === 'string');
    }
  });

  it('support.transition should be a object except IE9', function () {
    if (ieVersion < 10) {
      assert(!support.transition);
    } else {
      assert(typeof support.transition === 'object');
      assert(typeof support.transition.end === 'string');
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
