import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Button from '../../button';
import Balloon from '../index';

Enzyme.configure({ adapter: new Adapter() });

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('Balloon', () => {
    let defaultWrapper = null;

    beforeEach(function() {
        defaultWrapper = mount(
            <Balloon closable={false} type="normal" trigger={defaultTrigger} triggerType="click">
                i am balloon content
            </Balloon>
        );
    });

    afterEach(function() {
        defaultWrapper.unmount();
    });

    describe('closable', () => {
        it('closable: true', () => {
            defaultWrapper.setProps({
                visible: true,
                closable: true,
            });
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
        it('safeNode', () => {
            function Demo(props) {
                return (
                    <div>
                        <button id="safe" className="safeButton">
                            safeButton
                        </button>
                        <Balloon
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
            assert(document.querySelector('.next-balloon') !== null);
        });
    });
    describe('type', () => {
        it('type: normal', () => {
            defaultWrapper.setProps({
                type: 'normal',
                visible: true,
            });
            assert(document.querySelector('.next-balloon-normal') !== null);
        });
        it('type: primary', () => {
            defaultWrapper.setProps({
                type: 'primary',
                visible: true,
            });
            assert(document.querySelector('.next-balloon-primary') !== null);
        });
    });
    describe('trigger ,triggerType', () => {
        it('should has the trigger element', () => {
            assert(defaultWrapper.find('.triggerSpan').text() === 'trigger');
        });
        it('triggerType can set click', () => {
            defaultWrapper.setProps({
                triggerType: 'click',
            });
            defaultWrapper.find('span').simulate('click');
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

        // it('trigger is disabled button, hover enter and leave, popup should resolve', async () => {
        //     defaultWrapper.setProps({
        //         trigger: (
        //             <Button disabled id="balloon-btn" style={{ color: 'red' }}>
        //                 button
        //             </Button>
        //         ),
        //         triggerType: 'hover',
        //     });
        //     // hover on the <span> which is specially added for disabled pattern
        //     defaultWrapper.find('span').at(0).simulate('mouseenter');
        //     await delay(500);
        //     defaultWrapper.update();
        //     assert(document.querySelector('.next-balloon') !== null);

        //     defaultWrapper.find('span').at(0).simulate('mouseleave');
        //     await delay(600);
        //     defaultWrapper.update();
        //     assert(document.querySelector('.next-balloon') === null);
        // });

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
            const wrapper = mount(<Balloon triggerType="click">trigger</Balloon>);
            assert(wrapper.find('span').length === 1);
        });
    });

    describe('align', () => {
        it('balloon align', () => {
            //top
            const wrapperT = mount(
                <Balloon trigger={<span>trigger</span>} align="t" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperT.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-bottom') !== null);

            const wrapperTL = mount(
                <Balloon trigger={<span>trigger</span>} align="tl" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperTL.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-bottom-right') !== null);

            const wrapperTR = mount(
                <Balloon trigger={<span>trigger</span>} align="tr" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperTR.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-bottom-left') !== null);

            //bottom
            const wrapperB = mount(
                <Balloon trigger={<span>trigger</span>} align="b" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperB.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-top') !== null);

            const wrapperBL = mount(
                <Balloon trigger={<span>trigger</span>} align="bl" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperBL.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-top-right') !== null);

            const wrapperBR = mount(
                <Balloon trigger={<span>trigger</span>} align="br" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperBR.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-top-left') !== null);

            //left
            const wrapperL = mount(
                <Balloon trigger={<span>trigger</span>} align="l" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperL.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-right') !== null);

            const wrapperLT = mount(
                <Balloon trigger={<span>trigger</span>} align="lt" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperLT.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-right-bottom') !== null);
            const wrapperLB = mount(
                <Balloon trigger={<span>trigger</span>} align="lb" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperLB.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-right-top') !== null);
            //right
            const wrapperR = mount(
                <Balloon trigger={<span>trigger</span>} align="r" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperR.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-left') !== null);

            const wrapperRT = mount(
                <Balloon trigger={<span>trigger</span>} align="rt" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperRT.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-left-bottom') !== null);
            const wrapperRB = mount(
                <Balloon trigger={<span>trigger</span>} align="rb" triggerType="click">
                    i am balloon content
                </Balloon>
            );
            wrapperRB.find('span').simulate('click');
            assert(document.querySelector('.next-balloon-left-top') !== null);
        });
    });
});

describe('Balloon onClose ComponentWillReceiveProps closeIcon', () => {
    it('onClose ComponentWillReceiveProps closeIcon', async () => {
        //function afterCloseCallback(e){//afterClose无法测
        //    time++;
        //}
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    visible: false,
                };
            }

            hide() {
                this.setState({
                    visible: false,
                });
            }
            handleVisibleChange(visible) {
                this.setState({ visible });
            }

            onClose() {}

            afterClose() {}

            render() {
                const visibleTrigger = (
                    <Button className="trigger-btn" type="primary">
                        点击弹出卡片
                    </Button>
                );

                const content = (
                    <div>
                        点击按钮操作
                        <br />
                        <a style={{ right: 0 }} onClick={this.hide.bind(this)}>
                            确认
                        </a>
                        <a style={{ marginLeft: '4px' }} onClick={this.hide.bind(this)}>
                            关闭
                        </a>
                    </div>
                );
                return (
                    <div>
                        <Balloon
                            trigger={visibleTrigger}
                            triggerType="click"
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange.bind(this)}
                            afterClose={this.afterClose.bind(this)}
                            onClose={this.onClose.bind(this)}
                        >
                            {content}
                        </Balloon>
                    </div>
                );
            }
        }
        const wrapper = mount(<App />);
        // console.log(wrapper.find('.trigger-btn').debug());
        wrapper.find('button').simulate('click');
        assert(document.querySelectorAll('.next-balloon') !== null);
        document.querySelector('.next-balloon-close').click();
        await delay(1000);
        assert(document.querySelector('.next-balloon') === null);
    });
});

describe('balloon delay', () => {
    it('add mouseEnterDelay and mouseLeaveDelay, with higher priority than delay.', async () => {
        const wrapper = mount(
            <Balloon trigger={<div>trigger1111111</div>} delay={500} mouseEnterDelay={1000} mouseLeaveDelay={1000} triggerType="hover">
                trigger
            </Balloon>
        );

        wrapper.find('div').simulate('mouseenter');
        await delay(500);
        assert(document.querySelector('.next-balloon') === null);

        await delay(550);
        assert(document.querySelector('.next-balloon') !== null);

        wrapper.find('div').simulate('mouseleave');

        await delay(550);
        assert(document.querySelector('.next-balloon') !== null);

        await delay(1000);
        assert(document.querySelector('.next-balloon') === null);

    });
})
