import ES6Promise from 'es6-promise-polyfill';
import * as func from '../func';

window.Promise = window.Promise || ES6Promise.Promise;

/* eslint-disable*/

describe('src/func.js', function () {
    describe('#func.noop', function () {
        it('noop should be a function', function () {
            assert(typeof func.noop === 'function');
        });

        it('noop() should return undefined', function () {
            assert(func.noop() === undefined);
        });
    });
    describe('#func.prevent', function () {
        it('prevent should be a function', function () {
            assert(typeof func.noop === 'function');
        });

        it('prevent() should return false', function () {
            assert(func.prevent() === false);
        });
    });

    describe('#func.makeChain', function () {
        it('makeChain should return a function', function () {
            assert(typeof func.makeChain() === 'function');
            assert(
                typeof func.makeChain(
                    (x: number) => x + 1,
                    (y: number) => y * y
                ) === 'function'
            );
        });

        it('makeChain(fn) should return fn', function () {
            const fn = () => undefined;

            assert(func.makeChain(fn) === fn);
        });

        it('makeChain should return a chained function', function () {
            let x = 0,
                y = 0;
            const fn1 = () => {
                x = x * 2;
            };
            const fn2 = () => {
                x = x * x;
            };
            const fn3 = () => {
                x = x / 3;
            };
            const fn4 = null;
            const fn5 = {};

            x = y = Math.random();
            func.makeChain(fn1, fn2, fn4, fn5)();
            assert(x === y * 2 * (y * 2));

            x = y = Math.random();
            func.makeChain(fn2, fn1)();
            assert(x === y * y * 2);

            x = y = Math.random();
            func.makeChain(fn3, fn1, fn2)();
            assert(x === (y / 3) * 2 * ((y / 3) * 2));
        });
    });

    describe('#func.bindCtx', function () {
        it('bindCtx should change function scope', function () {
            const methods = {
                key: 'METHODS-KEY',

                fn1: function () {
                    return this.key;
                },

                fn2: function () {
                    return this.key;
                },

                fn3: function () {
                    return this.key;
                },
            };
            const ctx = {
                key: 'CTX-KEY',
            };

            assert(methods.fn1() === 'METHODS-KEY');
            assert(methods.fn2() === 'METHODS-KEY');
            assert(methods.fn3() === 'METHODS-KEY');

            func.bindCtx(ctx, 'fn1', methods);
            assert(methods.fn1() === 'CTX-KEY');

            func.bindCtx(ctx, ['fn2', 'fn3'], methods);
            assert(methods.fn2() === 'CTX-KEY');
            assert(methods.fn3() === 'CTX-KEY');
        });
    });

    describe('#func.promiseCall', function () {
        it('promiseCall should trigger success callback with null value', function () {
            let succ = 0,
                fail = 0;
            func.promiseCall(
                null,
                () => succ++,
                () => fail++
            );
            func.promiseCall(
                0,
                () => succ++,
                () => fail++
            );
            func.promiseCall(undefined, () => succ++);
            func.promiseCall(
                '',
                () => succ++,
                () => fail++
            );
            assert(succ === 4);
            assert(fail === 0);
        });

        it('promiseCall should trigger failure callback with false value', function () {
            let succ = 0,
                fail = 0;
            func.promiseCall(
                false,
                () => succ++,
                () => fail++
            );
            assert(succ === 0);
            assert(fail === 1);
        });

        it('promiseCall should trigger success callback after resolve with promise', function (done) {
            let succ = 0,
                fail = 0;
            func.promiseCall(
                new Promise<void>(resolve => {
                    setTimeout(() => resolve(), 16.66667);
                }),
                () => succ++,
                () => fail++
            );
            assert(succ === 0);
            assert(fail === 0);
            setTimeout(() => {
                assert(succ === 1);
                assert(fail === 0);
                done();
            }, 60); // 这里的时间不能设置得太小，因为不同浏览器或者单测浏览器环境中，setTimeout 不一定会严格按照设置的时间执行。
        });

        // it('promiseCall should trigger failure callback after resolve(false) with promise', function (done) {
        //   let succ = 0, fail = 0;
        //   func.promiseCall(new Promise((resolve) => {
        //     setTimeout(() => resolve(false), 16.66667);
        //   }), () => succ++, () => fail++);
        //   assert(succ === 0);
        //   assert(fail === 0);
        //   setTimeout(() => {
        //     assert(succ === 0);
        //     assert(fail === 1);
        //     done();
        //   }, 60);
        // });

        it('promiseCall should trigger failure callback after reject with promise', function (done) {
            let succ = 0,
                fail = 0;
            func.promiseCall(
                new Promise((resolve, reject) => {
                    setTimeout(() => reject(), 16.66667);
                }),
                () => succ++,
                () => fail++
            );
            assert(succ === 0);
            assert(fail === 0);
            setTimeout(() => {
                assert(succ === 0);
                assert(fail === 1);
                done();
            }, 60);
        });
    });

    describe('#func.invoke', () => {
        // undefined
        [null, '', 0, undefined, {}, false].forEach(target =>
            assert(func.invoke(target, 'method') === undefined)
        );

        // 返回函数调用结果
        assert(func.invoke({ foo: (...args: unknown[]) => args.length === 1 }, 'foo', ['']));
    });
});
