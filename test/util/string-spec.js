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

  it('string.hyphenate(str) should return empty string if arg[0] is not a string', function () {
    assert(string.hyphenate() === '');
    assert(string.hyphenate(null) === '');
    assert(string.hyphenate([]) === '');
    assert(string.hyphenate({}) === '');
    assert(string.hyphenate(function() {}) === '');
  })

  it('camelcase can restore the result of hyphenate', function () {
    assert(string.camelcase(string.hyphenate('WebkitTransition')) === 'WebkitTransition');
  });

  it('string.template(tpl, obj) should return correct string', function () {
    assert(string.template('当前{current}, 共{total}页', { total: 3, current: 1}) === '当前1, 共3页');
  });

  it('string.template(tpl, obj) should return empty string if arg[0] is not a string', function () {
    assert(string.template() === '');
    assert(string.template(null) === '');
    assert(string.template([]) === '');
    assert(string.template({}) === '');
    assert(string.template(function() {}) === '');
  })
});
