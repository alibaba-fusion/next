/**
 * 框架工具混入单元测试
 *
 * @author gaofeng.gf
 */

const path = require('path');
const Sassaby = require('sassaby-next');

// Test mixin
describe('../../src/core/util/_mixin.scss', function () {
    const file = path.join(__dirname, '../../src/core/util/_mixin.scss');
    const sassaby = new Sassaby(file, {
        dependencies: [path.join(__dirname, '../../src/core/util/_function.scss')],
    });

    describe('#size (快捷设置元素 width, height 的混入)', function () {
        it('应该在传参"2em"调用时宽高均为"2em"', function () {
            sassaby.includedMixin('size').calledWithArgs('2em').hasNumDeclarations(2);
            sassaby.includedMixin('size').calledWithArgs('2em').declares('width', '2em');
            sassaby.includedMixin('size').calledWithArgs('2em').declares('height', '2em');
        });

        it('应该在传参"2em 1em"调用时宽为"2em",高为"1em"', function () {
            sassaby.includedMixin('size').calledWithArgs('2em 1em').hasNumDeclarations(2);
            sassaby.includedMixin('size').calledWithArgs('2em 1em').declares('width', '2em');
            sassaby.includedMixin('size').calledWithArgs('2em 1em').declares('height', '1em');
        });
    });

    describe('#position (快捷设置元素postion的混入)', function () {
        it('应该在不传参调用时返回默认定位 `position: relative;`', function () {
            sassaby.includedMixin('position').called().hasNumDeclarations(1);
            sassaby.includedMixin('position').called().declares('position', 'relative');
        });

        it('应该在传参`absolute, 2em`调用时返回绝对定位且四个方向的距离值都是2em', function () {
            sassaby
                .includedMixin('position')
                .calledWithArgs('absolute')
                .declares('position', 'absolute');
            sassaby
                .includedMixin('position')
                .calledWithArgs('absolute', '2em')
                .declares('top', '2em');
            sassaby
                .includedMixin('position')
                .calledWithArgs('absolute', '2em')
                .equals(
                    'position: absolute; ' +
                        'top: 2em; ' +
                        'right: 2em; ' +
                        'bottom: 2em; ' +
                        'left: 2em;'
                );
        });
    });

    describe('#triangle (三角型生成器)', function () {
        it('应该在生成"向下"三角形时不含有下边框的规则声明, 且上边框颜色不透明', function () {
            sassaby
                .includedMixin('triangle')
                .calledWithArgs('10px, #333, down')
                .doesNotDeclare('border-bottom', '5px solid #333');
            sassaby
                .includedMixin('triangle')
                .calledWithArgs('10px, #333, down')
                .declares('border-top', '5px solid #333');
        });

        it('应该在生成"向上"三角形时不含有上边框的规则声明, 且下边框颜色不透明', function () {
            sassaby
                .includedMixin('triangle')
                .calledWithArgs('10px, #333, up')
                .doesNotDeclare('border-top', '5px solid transparent');
            sassaby
                .includedMixin('triangle')
                .calledWithArgs('10px, #333, up')
                .declares('border-bottom', '5px solid #333');
        });
    });

    describe('#clearfix (清除浮动)', function () {
        it('应该含有"clear:both"', function () {
            sassaby.includedMixin('clearfix').called().declares('clear', 'both');
        });
    });

    describe('#hide-text (隐藏文字)', function () {
        it('应该含有"clear:both"', function () {
            sassaby.includedMixin('hide-text').called().hasNumDeclarations(3);
        });
    });

    describe('#ellipsis (单行截取溢出字符)', function () {
        it('应该在传入指定400px宽度时最大宽度 "400px"', function () {
            sassaby
                .includedMixin('ellipsis')
                .calledWithArgs('400px')
                .declares('max-width', '400px');
        });

        it('应该在不传入宽度时默认最大宽度 "100%"', function () {
            sassaby.includedMixin('ellipsis').called().declares('max-width', '100%');
        });
    });

    describe('#multi-line-ellipsis (多行截取溢出字符)', function () {
        it('直接调用时默认值应该生效', function () {
            sassaby.includedMixin('multi-line-ellipsis').called().declares('line-height', '1.2em');
            sassaby.includedMixin('multi-line-ellipsis').called().declares('max-height', '2.4em');
            sassaby.includedMixin('multi-line-ellipsis').called().declares('background', '#fff');
        });
    });

    describe('#center-tl (居中元素, transform版本)', function () {
        it('直接调用时应该水平垂直居中', function () {
            sassaby
                .includedMixin('center-tl')
                .called()
                .declares('transform', 'translate(-50%,-50%)');
            sassaby.includedMixin('center-tl').called().declares('top', '50%');
            sassaby.includedMixin('center-tl').called().declares('left', '50%');
        });

        it('$horizontal: false; 调用时应该垂直居中', function () {
            sassaby
                .includedMixin('center-tl')
                .calledWithArgs('".inner", false')
                .declares('transform', 'translateY(-50%)');
            sassaby
                .includedMixin('center-tl')
                .calledWithArgs('".inner", false')
                .declares('top', '50%');
        });
    });

    describe('#center-td (居中元素, table版本)', function () {
        it('直接调用时应该水平垂直居中', function () {
            sassaby.includedMixin('center-td').called().declares('display', 'table');
            sassaby.includedMixin('center-td').called().declares('text-align', 'center');
        });

        it('$horizontal: false; 调用时应该垂直居中', function () {
            sassaby
                .includedMixin('center-td')
                .calledWithArgs('".inner", false')
                .doesNotDeclare('text-align', 'center');
        });
    });
});
