import assert from 'power-assert';
import * as string from '../../src/util/string';

describe('src/string.js', function() {

  it('string.camelcase(str) should return correct string', function() {
    assert(string.camelcase('') === '');
    assert(string.camelcase('-webkit-transition-end') === 'WebkitTransitionEnd');
    assert(string.camelcase('animation-duration') === 'animationDuration');
  });

  it('string.hyphenate(str) should return correct string', function () {
    assert(string.hyphenate('') === '');
    assert(string.hyphenate('WebkitTransition') === '-webkit-transition');
    assert(string.hyphenate('transitionDelay') === 'transition-delay');
  });

  it('camelcase can restore the result of hyphenate', function () {
    assert(string.camelcase(string.hyphenate('WebkitTransition')) === 'WebkitTransition');
  });

});
