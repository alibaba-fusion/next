import assert from 'power-assert';
import * as object from '../../src/util/object';

describe('src/object.js', function() {
    describe('#typeOf', function() {
        it('typeOf should return real type', function() {
            assert(object.typeOf([111]) === 'Array');
            assert(object.typeOf({}) === 'Object');
            assert(object.typeOf(false) === 'Boolean');
            assert(object.typeOf(1) === 'Number');
            assert(object.typeOf(new Date()) === 'Date');
            assert(object.typeOf(document.body) === 'HTMLBodyElement');
            assert(object.typeOf(NaN) === 'Number');

            if (document.documentMode === 9) {
                // F2Etest 的 IE9 环境有问题，竟然会返回奇葩的数据
                // assert(object.typeOf(null) === 'Window');
                // assert(object.typeOf() === 'Window');

                assert(object.typeOf(document) === 'Document');
            } else if (document.documentMode === 10) {
                assert(object.typeOf(document) === 'Document');
            } else {
                assert(object.typeOf(null) === 'Null');
                assert(object.typeOf() === 'Undefined');
                assert(object.typeOf(document) === 'HTMLDocument');
            }
        });
    });

    describe('#isArrayLike', function() {
        it('array is array like', function() {
            assert(object.isArrayLike(new Array(10)));
            assert(object.isArrayLike([1, 2]));
        });

        it('node children is array like', function() {
            const divs = document.querySelectorAll('div');
            assert(object.isArrayLike(divs));
        });

        it('arguments is array like', function() {
            assert(object.isArrayLike(arguments));
        });
    });

    describe('#isPromise', function() {
        it('native Promise is a promise', function() {
            assert(object.isPromise(Promise.resolve()));
        });
    });

    describe('#isPlainObject', function() {
        it('isPlainObject return correct result', function() {
            assert(!object.isPlainObject());
            assert(!object.isPlainObject(['foo', 'bar']));
            assert(!object.isPlainObject([]));
            assert(!object.isPlainObject(100));
            assert(!object.isPlainObject(null));
            assert(!object.isPlainObject(new Date()));
            assert(!object.isPlainObject(Object.create(null)));
            assert(!object.isPlainObject(window));
            assert(!object.isPlainObject(document.body));

            assert(object.isPlainObject({ foo: 'bar' }));
            assert(object.isPlainObject({ foo: 'bar' }));
            assert(object.isPlainObject(Object.create(Object.prototype)));
            assert(object.isPlainObject({}));
        });
    });

    describe('#shallowEqual', function() {
        it('shallowEqual return correct result', function() {
            const obj = { foo: 'bar' };
            assert(object.shallowEqual(obj, obj));

            assert(object.shallowEqual({ foo: 'bar' }, { foo: 'bar' }));
            assert(object.shallowEqual([100, 200], [100, 200]));
            assert(!object.shallowEqual({ foo: 'bar' }, { foo: 'baz' }));
            assert(!object.shallowEqual({ foo: 'bar' }, { foo: 'baz' }));
            assert(!object.shallowEqual({ foo: 'bar' }, null));
            assert(!object.shallowEqual({ foo: 'bar' }, { goo: 'bar' }));
            assert(!object.shallowEqual({ foo: 'bar' }, {}));
            assert(
                !object.shallowEqual(
                    { foo: 'bar', ary: [1] },
                    { foo: 'baz', ary: [1] }
                )
            );
        });

        it('shallowEqual support custom compare function', function() {
            assert(
                object.shallowEqual(
                    { foo: [100, 200] },
                    { foo: [100, 200] },
                    function(a, b) {
                        return a === b || object.shallowEqual(a, b);
                    }
                )
            );
        });
    });

    describe('#each', function() {
        it('each could traverse array', function() {
            const ary = [100, 200, 300, 400];
            let flag = 0;
            object.each(ary, function(n, i) {
                assert(n === (i + 1) * 100);
                if (i > 2) return false; // break
                flag++;
            });
            assert(flag === 3);
        });

        it('each could traverse object', function() {
            const obj = { foo: 'foozz', bar: 'barzz', goo: 'goozz' };
            let flag = 0;
            object.each(obj, function(v, k) {
                if (k === 'goo') return false; // break
                flag++;
            });
            assert(flag === 2);
        });
    });

    describe('#pickOthers', function() {
        let obj;

        beforeEach(() => {
            obj = { foo: '100', bar: '200', baz: 999, goo: 0.01 };
        });

        it('pickOthers support array', function() {
            const res = object.pickOthers(['foo', 'goo'], obj);
            assert(Object.keys(res).length === 2);
            assert('bar' in res);
            assert('baz' in res);
        });

        it('pickOthers support object', function() {
            const hold = { bar: 'string', baz: 'number' };
            const res = object.pickOthers(hold, obj);
            assert(Object.keys(res).length === 2);
            assert('foo' in res);
            assert('goo' in res);
        });
    });
    describe('#pickAttrsWith', function() {
        it('pickAttrsWith support object', function() {
            const hold = { bar: 'string', baz: 'number', 'data-cool': 'yes' };
            const res = object.pickAttrsWith(hold, 'data-');
            assert(Object.keys(res).length === 1);
            assert('data-cool' in res);
        });
    });
});
