import React from 'react';
import * as object from '../object';

/* eslint-disable */

describe('src/object.js', function () {
    describe('#typeOf', function () {
        it('typeOf should return real type', function () {
            assert(object.typeOf([111]) === 'Array');
            assert(object.typeOf({}) === 'Object');
            assert(object.typeOf(false) === 'Boolean');
            assert(object.typeOf(1) === 'Number');
            assert(object.typeOf(new Date()) === 'Date');
            assert(object.typeOf(document.body) === 'HTMLBodyElement');
            assert(object.typeOf(NaN) === 'Number');

            if ((document as { documentMode?: number }).documentMode === 9) {
                // F2Etest 的 IE9 环境有问题，竟然会返回奇葩的数据
                // assert(object.typeOf(null) === 'Window');
                // assert(object.typeOf() === 'Window');

                assert(object.typeOf(document) === 'Document');
            } else if ((document as { documentMode?: number }).documentMode === 10) {
                assert(object.typeOf(document) === 'Document');
            } else {
                assert(object.typeOf(null) === 'Null');
                assert(object.typeOf() === 'Undefined');
                assert(object.typeOf(document) === 'HTMLDocument');
            }
        });
    });

    describe('#isArrayLike', function () {
        it('array is array like', function () {
            assert(object.isArrayLike(new Array(10)));
            assert(object.isArrayLike([1, 2]));
        });

        it('node children is array like', function () {
            const divs = document.querySelectorAll('div');
            assert(object.isArrayLike(divs));
        });

        it('arguments is array like', function () {
            assert(object.isArrayLike(arguments));
        });
    });

    describe('#isPromise', function () {
        it('native Promise is a promise', function () {
            assert(object.isPromise(Promise.resolve()));
        });
    });

    describe('#isPlainObject', function () {
        it('isPlainObject return correct result', function () {
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

    describe('#shallowEqual', function () {
        it('shallowEqual return correct result', function () {
            const obj = { foo: 'bar' };
            assert(object.shallowEqual(obj, obj));

            assert(object.shallowEqual({ foo: 'bar' }, { foo: 'bar' }));
            assert(object.shallowEqual([100, 200], [100, 200]));
            assert(!object.shallowEqual({ foo: 'bar' }, { foo: 'baz' }));
            assert(!object.shallowEqual({ foo: 'bar' }, { foo: 'baz' }));
            assert(!object.shallowEqual({ foo: 'bar' }, null));
            assert(!object.shallowEqual({ foo: 'bar' }, { goo: 'bar' }));
            assert(!object.shallowEqual({ foo: 'bar' }, {}));
            assert(!object.shallowEqual({ foo: 'bar', ary: [1] }, { foo: 'baz', ary: [1] }));
        });

        it('shallowEqual support custom compare function', function () {
            assert(
                object.shallowEqual({ foo: [100, 200] }, { foo: [100, 200] }, function (a, b) {
                    return a === b || object.shallowEqual(a, b);
                })
            );
        });
    });

    describe('#each', function () {
        it('each could traverse array', function () {
            const ary = [100, 200, 300, 400];
            let flag = 0;
            object.each(ary, function (n, i) {
                assert(n === (i + 1) * 100);
                if (i > 2) return false; // break
                flag++;
            });
            assert(flag === 3);
        });

        it('each could traverse object', function () {
            const obj = { foo: 'foozz', bar: 'barzz', goo: 'goozz' };
            let flag = 0;
            object.each(obj, function (v, k) {
                if (k === 'goo') return false; // break
                flag++;
            });
            assert(flag === 2);
        });
    });

    describe('#pickOthers', function () {
        let obj: Record<string, unknown>;

        beforeEach(() => {
            obj = { foo: '100', bar: '200', baz: 999, goo: 0.01 };
        });

        it('pickOthers support array', function () {
            const res = object.pickOthers(['foo', 'goo'], obj);
            assert(Object.keys(res).length === 2);
            assert('bar' in res);
            assert('baz' in res);
        });

        it('pickOthers support object', function () {
            const hold = { bar: 'string', baz: 'number' };
            const res = object.pickOthers(hold, obj);
            assert(Object.keys(res).length === 2);
            assert('foo' in res);
            assert('goo' in res);
        });
    });

    describe('#pickProps', function () {
        let obj: Record<string, unknown>;

        beforeEach(() => {
            obj = { foo: '100', bar: '200', baz: 999, goo: 0.01 };
        });

        it('pickProps support array', function () {
            const res = object.pickProps(['foo', 'goo'], obj);
            assert(Object.keys(res).length === 2);
            assert('foo' in res);
            assert('goo' in res);
        });

        it('pickProps support object', function () {
            const hold = { bar: 'string', baz: 'number' };
            const res = object.pickProps(hold, obj);
            assert(Object.keys(res).length === 2);
            assert('bar' in res);
            assert('bar' in res);
        });
    });

    describe('#pickAttrsWith', function () {
        it('pickAttrsWith support object', function () {
            const hold = { bar: 'string', baz: 'number', 'data-cool': 'yes' };
            const res = object.pickAttrsWith(hold, 'data-');
            assert(Object.keys(res).length === 1);
            assert('data-cool' in res);
        });
    });

    describe('#isReactFragmentElement', function () {
        it('is isReactFragmentElement', function () {
            const frag = React.Fragment;
            assert(!object.isReactFragmentElement(frag));

            const frag2 = (
                <React.Fragment>
                    <div>abc</div>
                </React.Fragment>
            );
            assert(object.isReactFragmentElement(frag2));
        });

        it('not isReactFragmentElement', function () {
            const frag = React.Component;
            const string = 'abc';
            const number = 321;
            const obj = { a: 3 };
            const arr = [1, 2, 6];
            const n = null;
            assert(!object.isReactFragmentElement(frag));
            assert(!object.isReactFragmentElement(string));
            assert(!object.isReactFragmentElement(number));
            assert(!object.isReactFragmentElement(obj));
            assert(!object.isReactFragmentElement(arr));
            assert(!object.isReactFragmentElement(n));
            assert(!object.isReactFragmentElement());
        });
    });

    describe('#isClassComponent', function () {
        it('is isClassComponent', function () {
            class Demo extends React.Component {
                render() {
                    return <div></div>;
                }
            }
            assert(object.isClassComponent(Demo));
        });

        it('not isClassComponent', function () {
            const frag = React.Fragment;
            assert(!object.isClassComponent(frag));

            const frag2 = (
                <React.Fragment>
                    <div>abc</div>
                </React.Fragment>
            );
            assert(!object.isClassComponent(frag2));

            const frag3 = () => {};
            assert(!object.isClassComponent(frag3));

            const frag4 = undefined;
            assert(!object.isClassComponent(frag4));
        });
    });

    describe('#isNil', function () {
        it('should returns `true` if passing `null` or `undefined`', function () {
            const values = [null, undefined];
            values.forEach(function (value) {
                assert(object.isNil(value) === true);
            });
        });

        it(
            'should returns `false` if passing a falsy value ' + 'except `null` or `undefined`',
            function () {
                const values = ['', 0, false, NaN];
                values.forEach(function (value) {
                    assert(object.isNil(value) === false);
                });
            }
        );

        it('should returns `false` if passing a truthy value', function () {
            const values = ['string', '0', 'false', 1, -1, Infinity, [], {}, function () {}, /.*/];
            values.forEach(function (value) {
                assert(object.isNil(value) === false);
            });
        });
    });

    describe('#deepMerge', function () {
        let obj1: Record<string, unknown>, obj2: Record<string, unknown>;

        beforeEach(() => {
            obj1 = {
                foo: '100',
                bar: '2003',
                baz: {
                    a: 'test',
                    b: {
                        a: 0,
                    },
                },
            };
            obj2 = {
                a: {
                    ds: '3',
                },
                bar: {
                    t: '2',
                },
                baz: {
                    a: {
                        sd: '3',
                    },
                    b: {
                        a: '6',
                        ad: 4,
                    },
                    c: 's',
                },
            };
        });

        it('deepMerge support edge', function () {
            const res = object.deepMerge(undefined, null, [], {}, '', NaN, 1, 'a', { a: 3 });

            assert('a' in res);
            assert(res.a === 3);
            assert(Object.keys(res).length === 1);
        });

        it('deepMerge support normal', function () {
            const res = object.deepMerge({}, { a: 'te' }, { a: 4 });
            assert(Object.keys(res).length === 1);
            assert(res.a === 4);
        });

        it('deepMerge support node', function () {
            const res = object.deepMerge({}, { a: <span>ddd</span> }, { b: 3 });
            assert(Object.keys(res).length === 2);
        });

        it('deepMerge support deep', function () {
            const res = object.deepMerge({}, { a: 'te' }, { a: { b: 3 } }) as { a: { b: number } };
            assert(Object.keys(res).length === 1);
            assert(res.a.b === 3);
        });

        it('deepMerge support with arr', function () {
            const res = object.deepMerge(
                {},
                {
                    name: 'Anon',
                    gender: 'Female',
                    hair: {
                        color: 'brown',
                        cut: 'long',
                    },
                    eyes: 'blue',
                    family: ['mom', 'dad'],
                },
                {
                    name: 'David Walsh',
                    gender: 'Male',
                    hair: {
                        cut: 'short',
                    },
                    family: ['wife', 'kids', 'dog'],
                }
            ) as Record<string, any>;

            assert(Object.keys(res).length === 5);
            assert(Object.keys(res.hair).length === 2);
            assert(res.family.length === 3);
        });

        it('deepMerge support deep', function () {
            const res = object.deepMerge({}, obj1, obj2) as Record<string, any>;
            assert(Object.keys(res).length === 4);
            assert(res.a.ds === '3');
            assert(res.foo === '100');
            assert(res.bar.t === '2');
            assert(res.baz.a.sd === '3');
            assert(res.baz.b.a === '6');
            assert(res.baz.b.ad === 4);
            assert(res.baz.c === 's');
        });
    });
});
