import React, { useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../icon';
import Button from '../../button/index';
import Step from '../index';
import { mountReact } from '../../util/__tests__/legacy/a11y/validate';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const StepItem = Step.Item;
/* eslint-disable */
describe('Step', () => {
    describe('render', () => {
        it('should support rtl', () => {
            const wrapper = mount(
                <Step current={1} rtl>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(
                wrapper.find('.next-step-circle').at(0).instance().getAttribute('dir') === 'rtl'
            );
        });
        it('should render with default props', () => {
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(wrapper.find('.next-step-circle').length === 1);
            assert(wrapper.find('.next-step-horizontal').length === 1);
        });

        it('should render with element title', () => {
            const title = <span>测试</span>;
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title={title} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(
                wrapper.find('.next-step-item-title').at(0).html() ===
                    '<div class="next-step-item-title"><span>测试</span></div>'
            );
        });

        it('should render with element content', () => {
            const content = <span>测试</span>;
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="标题1" content={content} />
                </Step>
            );

            assert(
                wrapper.find('.next-step-item-content').at(0).html() ===
                    '<div class="next-step-item-content"><span>测试</span></div>'
            );
        });

        it('should render with diffrent types', () => {
            const wrapper = mount(
                <Step current={1} shape="arrow">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper2 = mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            assert(wrapper.find('.next-step-arrow').length === 1);
            assert(wrapper2.find('.next-step-dot').length === 1);
        });

        it('should render with diffrent directions', () => {
            const wrapper = mount(
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper2 = mount(
                <Step current={1} shape="dot" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper3 = mount(
                <Step current={1} shape="arrow" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(wrapper.find('.next-step-vertical').length === 1);
            assert(wrapper2.find('.next-step-vertical').length === 1);
            assert(wrapper3.find('.next-step-vertical').length === 0);
        });

        it('should render with labelPlacement', () => {
            const wrapper = mount(
                <Step current={1} labelPlacement="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper2 = mount(
                <Step current={1} shape="dot" labelPlacement="hoz">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            assert(wrapper.find('.next-step-label-vertical').length === 1);
            assert(wrapper2.find('.next-step-label-horizontal').length === 1);
        });

        it('should render when direction and labelPlacement are both hoz', () => {
            const steps = ['知道自己不懂', '不知道自己懂', '知道自己懂了'].map((item, index) => (
                <Step.Item key={index} title={item} itemRender={() => <Icon type="smile" />} />
            ));
            const wrapper = mount(
                <Step current={1} shape="circle" direction="hoz" labelPlacement="hoz">
                    {steps}
                </Step>
            );
            assert(wrapper.find('.next-step-horizontal').length === 1);
            assert(wrapper.find('.next-step-label-horizontal').length === 1);
        });

        it('should render with icon ', () => {
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper2 = mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(wrapper.find('.next-icon-atm').length === 1);
            assert(wrapper2.find('.next-icon-atm').length === 1);
        });

        it('should render with custom node ', () => {
            function itemRender(index, status) {
                return (
                    <div className="custom-node">
                        <span>{index + 1}</span>
                    </div>
                );
            }

            const wrapper = mount(
                <Step current={1} itemRender={itemRender}>
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(wrapper.find('.custom-node').length === 3);
        });

        it('should render with progress ', () => {
            const wrapper0 = mount(
                <Step current={1}>
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper2 = mount(
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            const wrapper3 = mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            assert(wrapper0.find('.next-progress-circle.next-step-item-progress').length === 1);
            assert(wrapper2.find('.next-progress-circle.next-step-item-progress').length === 1);
            assert(wrapper3.find('.next-progress-circle.next-step-item-progress').length === 0);
        });

        it('should render step.item with itemRender', () => {
            const steps = ['one', 'two', 'three', 'four'];
            const itemRender = (index, status) => {
                return status === 'finish' ? <Icon type="good" /> : index + 1;
            };
            const wrapper = mount(
                <Step current={2} animation={false} itemRender={itemRender}>
                    {steps.map(item => (
                        <Step.Item key={item} title={item} />
                    ))}
                </Step>
            );
            assert(wrapper.find('.next-icon-good').length === 2);
        });
        it('should stretch work', () => {
            const wrapper = mount(
                <Step current={1} stretch shape="dot" labelPlacement="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            const item = wrapper.find('.next-step-item');
            assert(item.at(0).instance().style.width.startsWith('calc((100%'));
            assert(item.at(2).instance().style.width === 'auto');
        });
    });

    describe('action', () => {
        it('should click step node with transitionEnd', () => {
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            wrapper.find('.next-step-item-node').at(2).simulate('click');
            assert(
                wrapper.find('.next-step-item-node').at(2).instance().className ===
                    'next-step-item-node clicked'
            );

            wrapper.find('.next-step-item-node').at(2).simulate('transitionEnd');
            assert(
                wrapper.find('.next-step-item-node').at(2).instance().className ===
                    'next-step-item-node'
            );
        });

        it('should change current step', () => {
            const wrapper = mount(
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            assert(wrapper.props().current === 1);

            wrapper.setProps({ current: 2 });
            assert(wrapper.props().current === 2);
        });
        it('should change labelPlacement', () => {
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            assert(wrapper.find('.next-step-label-vertical').length === 1);
            wrapper.setProps({ labelPlacement: 'hoz' }, () => {
                assert(wrapper.find('.next-step-label-horizontal').length === 1);
                // 横向模式下会调整 next-step-item-tail 的宽度值
                const $tail = wrapper.find('.next-step-item-tail');
                assert(
                    $tail.length === 3 &&
                        $tail.at(0).instance().style.width !== '' &&
                        $tail.at(2).instance().style.width === ''
                );
                // 重新设置为垂直居中 应该去掉 next-step-item-tail 的宽度值
                wrapper.setProps({ labelPlacement: 'ver' }, () => {
                    assert($tail.length === 3 && $tail.at(0).instance().style.width === '');
                });
            });
        });

        it('should trigger click event', () => {
            let ret_1 = -1;
            const wrapper = mount(
                <Step current={1}>
                    <StepItem title="步骤1" onClick={index => (ret_1 = index)} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            wrapper.find('.next-step-item-first').find('.next-step-item-node').simulate('click');
            assert(ret_1 === 0);

            let ret_2 = -1;
            const wrapper2 = mount(
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" onClick={index => (ret_2 = index)} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            wrapper2
                .find('.next-step-item-first')
                .find('.next-step-item-node-placeholder')
                .simulate('click');
            assert(ret_2 === 0);
        });

        it('should resize when content changed', async () => {
            const StepContent = () => {
                const [conditions, setconditions] = useState([]);
                const createNewSelectItem = () => {
                    const newType = {
                        type: 'null',
                        fieldName: 'null',
                    };
                    const newConditions = [...conditions, newType];
                    setconditions(newConditions);
                };
                return (
                    <div>
                        {conditions &&
                            conditions.length > 0 &&
                            conditions.map((item, index) => (
                                <div
                                    key={`step-content-${index}`}
                                    id={`step-content-${index}`}
                                    style={{
                                        width: '100%',
                                        maxWidth: 200,
                                        height: 20,
                                        background: '#2196f3',
                                        margin: '10px 0',
                                    }}
                                />
                            ))}
                        <Button id="add-content-btn" onClick={createNewSelectItem}>
                            add new div
                        </Button>
                    </div>
                );
            };
            const wrapper = await mountReact(
                <Step current={1} shape="circle">
                    <StepItem title="步骤1" content={<StepContent />} />
                    <StepItem title="步骤2" icon="smile" content="this is a description" />
                    <StepItem title="步骤3" />
                </Step>
            );

            const originHeight = parseFloat(
                wrapper.find('.next-step').at(0).instance().style.height.slice(0, -2)
            );
            wrapper.find('.next-btn').simulate('click');
            assert(document.querySelectorAll('[id^="step-content-"]').length === 1);
            wrapper.find('.next-btn').simulate('click');

            assert(document.querySelectorAll('[id^="step-content-"]').length === 2);
            wrapper.setProps({ direction: 'ver' });
            wrapper.setProps({ direction: 'hoz' });
            const changedHeight = parseFloat(
                wrapper.find('.next-step').at(0).instance().style.height.slice(0, -2)
            );
            assert(changedHeight > originHeight);
            wrapper.setProps({ direction: 'ver' });
            wrapper.find('.next-btn').simulate('click');
            wrapper.setProps({ direction: 'hoz' });
            wrapper.setProps({ direction: 'ver' });
        });

        // it('should trigger keyboard event', () => {
        //     const wrapper = mount(
        //         <Step current={0}>
        //             <StepItem title="步骤1"/>
        //             <StepItem title="步骤2" />
        //             <StepItem title="步骤3" />
        //         </Step>
        //     );

        //     wrapper
        //         .find('.next-step-item-first')
        //         .simulate('keydown', {keyCode: 40});

        //     assert(wrapper.find('.next-step-item-body').at(1).instance().getAttribute('tabindex')==='0');

        //     wrapper
        //         .find('.next-step-item-first')
        //         .simulate('keydown', {keyCode: 38});
        //     assert(wrapper.find('.next-step-item-body').at(0).instance().getAttribute('tabindex')==='0');

        //     wrapper
        //         .find('.next-step-item-first')
        //         .simulate('keydown', {keyCode: 39});
        //     assert(wrapper.find('.next-step-item-body').at(1).instance().getAttribute('tabindex')==='0');

        //     wrapper
        //         .find('.next-step-item-first')
        //         .simulate('keydown', {keyCode: 37});
        //     assert(wrapper.find('.next-step-item-body').at(0).instance().getAttribute('tabindex')==='0');

        // });
    });
});
