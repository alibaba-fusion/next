import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import snion from 'sinon';
import assert from 'power-assert';
import Button from '../../src/button';
import Balloon from '../../src/balloon/index';

Enzyme.configure({ adapter: new Adapter() });

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('Balloon v2', () => {
    let defaultWrapper = null;

    beforeEach(function() {
        defaultWrapper = mount(
            <Balloon v2
                closable={false}
                type="normal"
                trigger={defaultTrigger}
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
    });

    afterEach(function() {
        defaultWrapper.unmount();
        const nodeListArr = [].slice.call(
            document.querySelectorAll('.next-balloon')
        );
        nodeListArr.forEach((node, index) => {
            node.parentNode.removeChild(node);
        });
    });
    describe('closable', () => {
        it('closable: true', async () => {
            defaultWrapper.setProps({
                visible: true,
                closable: true,
            });
            await delay(20)
            assert(document.querySelector('.next-balloon-close') !== null);
        });

        it('closable: false', () => {
            defaultWrapper.setProps({
                visible: true,
                closable: false,
            });
            assert(document.querySelector('.next-balloon-close') === null);
        });
    });

    describe('safeNode', () => {
        it('safeNode', async () => {
            function Demo(props) {
                return (
                    <div>
                        <button id="safe" className="safeButton">
                            safeButton
                        </button>
                        <Balloon v2
                            trigger={<span className="balloon">trigger</span>}
                            id="balloon"
                            safeNode="safe"
                            triggerType="click"
                        >
                            i am balloon content
                        </Balloon>
                    </div>
                );
            }
            const wrapper = mount(<Demo />);
            wrapper.find('.balloon').simulate('click');
            wrapper.find('.safeButton').simulate('click');
            await delay(20)
            assert(document.querySelector('.next-balloon') !== null);
        });
    });
    describe('type', () => {
        it('type: normal', async () => {
            defaultWrapper.setProps({
                type: 'normal',
                visible: true,
            });
            await delay(20);
            assert(document.querySelector('.next-balloon-normal') !== null);
        });
        it('type: primary', async () => {
            defaultWrapper.setProps({
                type: 'primary',
                visible: true,
            });
            await delay(20);
            assert(document.querySelector('.next-balloon-primary') !== null);
        });
    });
    describe('trigger ,triggerType', () => {
        it('should has the trigger element', () => {
            assert(defaultWrapper.find('.triggerSpan').text() === 'trigger');
        });
        it('triggerType can set click', async () => {
            defaultWrapper.setProps({
                triggerType: 'click',
            });
            defaultWrapper.find('span').simulate('click');
            await delay(20);
            assert(document.querySelector('.next-balloon') !== null);
        });

        //此处异步验证
        it('triggerType can set hover', async () => {
            defaultWrapper.setProps({
                triggerType: 'hover',
            });
            defaultWrapper.find('span').simulate('mouseenter');
            await delay(500);
            assert(document.querySelector('.next-balloon') !== null);
        });

        it('trigger can be string', async () => {
            defaultWrapper.setProps({
                trigger: 'trigger',
                triggerType: 'hover',
            });
            defaultWrapper.find('span').simulate('mouseenter');
            await delay(300);
            assert(document.querySelector('.next-balloon') !== null);
        });

        // trigger不传,默认用空的<span></span>填充
        it('trigger default is span', () => {
            const wrapper = mount(
                <Balloon v2 triggerType="click">trigger</Balloon>
            );
            assert(wrapper.find('span').length === 1);
        });
    });
});

describe('balloon v2', () => {
    // 弹窗的关键就是要清理掉遗留的元素
    afterEach(function() {
        const nodeListArr = [].slice.call(
            document.querySelectorAll('.next-balloon')
        );
        nodeListArr.forEach((node, index) => {
            node && node.parentNode && node.parentNode.removeChild(node);
        });
    });
    it('balloon align', async () => {
        //top
        const wrapperT = mount(
            <Balloon v2
                autoAdjust={false}
                trigger={<span>trigger</span>}
                align="t"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperT.find('span').simulate('click');
        await delay(20);
        assert(document.querySelector('.next-balloon-bottom') !== null);

        const wrapperTL = mount(
            <Balloon v2
                autoAdjust={false}
                trigger={<span>trigger</span>}
                align="tl"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperTL.find('span').simulate('click');
        await delay(20);
        console.log(document.querySelectorAll('.next-balloon'))
        assert(
            document.querySelector('.next-balloon-bottom-left') !== null
        );

        const wrapperTR = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="tr"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperTR.find('span').simulate('click');
        await delay(20);

        assert(
            document.querySelector('.next-balloon-bottom-right') !== null
        );

        //bottom
        const wrapperB = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="b"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperB.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-top') !== null);

        const wrapperBL = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="bl"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperBL.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-top-left') !== null);

        const wrapperBR = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="br"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperBR.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-top-right') !== null);

        //left
        const wrapperL = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="l"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperL.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-right') !== null);

        const wrapperLT = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="lt"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperLT.find('span').simulate('click');
        await delay(20);

        assert(
            document.querySelector('.next-balloon-right-top') !== null
        );
        const wrapperLB = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="lb"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperLB.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-right-bottom') !== null);
        //right
        const wrapperR = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="r"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperR.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-left') !== null);

        const wrapperRT = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="rt"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperRT.find('span').simulate('click');
        await delay(20);

        assert(
            document.querySelector('.next-balloon-left-top') !== null
        );
        const wrapperRB = mount(
            <Balloon v2 autoAdjust={false}
                trigger={<span>trigger</span>}
                align="rb"
                triggerType="click"
            >
                i am balloon content
            </Balloon>
        );
        wrapperRB.find('span').simulate('click');
        await delay(20);

        assert(document.querySelector('.next-balloon-left-bottom') !== null);
    });
    it('onClose shuld be called with closeIcon', async () => {
        const onClose = snion.spy();
        const wrapper = mount(
            <Balloon v2 
                trigger={<button>trigger</button>}
                align="rb"
                triggerType="click"
                onClose={onClose}
            >
                i am balloon content
            </Balloon>
        );
        wrapper.find('button').simulate('click');
        await delay(20);
        assert(document.querySelector('.next-balloon') !== null);
        document.querySelector('.next-balloon-close').click();
        await delay(20);
        assert(onClose.calledOnce);
    });
});
