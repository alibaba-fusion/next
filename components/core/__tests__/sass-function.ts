/**
 * 框架工具函数单元测试
 *
 * @author gaofeng.gf
 */

const path = require('path');
const Sassaby = require('sassaby-next');

// Test function
describe('../../src/core/util/_function.scss', function () {
    const file = path.join(__dirname, '../../src/core/util/_function.scss');
    const sassaby = new Sassaby(file);

    describe('#strip-units', function () {
        it('应该去除所有数值的单位', function () {
            sassaby.func('strip-units').calledWithArgs('1px').equals(1);
            sassaby.func('strip-units').calledWithArgs('20em').equals(20);
            sassaby.func('strip-units').calledWithArgs('100%').equals(100);
        });
    });

    describe('#is-length', function () {
        it('应该检查一个值是否为合法的CSS长度', function () {
            sassaby.func('is-length').calledWithArgs('1px').isTrue();
            sassaby.func('is-length').calledWithArgs(0).isTrue();
            sassaby.func('is-length').calledWithArgs(1).isFalse();
        });

        it('应该检查`0或auto或initial或inherit`为合法的CSS长度', function () {
            sassaby.func('is-length').calledWithArgs(0).isTrue();
            sassaby.func('is-length').calledWithArgs('auto').isTrue();
            sassaby.func('is-length').calledWithArgs('inherit').isTrue();
            sassaby.func('is-length').calledWithArgs('initial').isTrue();
        });

        it('应该识别`calc()`方法调用为CSS长度', function () {
            sassaby.func('is-length').calledWithArgs('calc(100% - 20em)').isTrue();
        });
    });

    describe('#em', function () {
        it('应该将长度的pixel单位转换为em单位', function () {
            sassaby.func('em').calledWithArgs('24px', '12px').equals('2em');
            sassaby.func('em').calledWithArgs('36', '12px').equals('3em');
            sassaby.func('em').calledWithArgs('12', '12').equals('1em');
        });
    });

    describe('#unpack', function () {
        it('应该在输入1个长度值时返回相同的四个方位值', function () {
            sassaby.func('unpack').calledWithArgs('1em').equals('1em 1em 1em 1em');
        });

        it('应该在输入2个长度值时返回两两相同的四个方位值', function () {
            sassaby.func('unpack').calledWithArgs('1em 2em').equals('1em 2em 1em 2em');
        });

        it('应该在输入3个长度值时返回左右相同上下不同的四个方位值', function () {
            sassaby.func('unpack').calledWithArgs('1em 3em 2em').equals('1em 3em 2em 3em');
        });
    });
});
