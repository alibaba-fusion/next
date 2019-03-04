import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Timeline from '../../src/timeline/index';
import '../../src/timeline/style.js';

Enzyme.configure({ adapter: new Adapter() });

const Item = Timeline.Item;

/* eslint-disable */
describe('Button', () => {
    describe('render', () => {
        it('should render a timeline', () => {
            const wrapper = mount(
                <Timeline>
                    <Item content="2016-10-03" state="process" title="签收" />
                    <Item content="2016-10-02" title="发货" />
                    <Item content="2016-10-01" title="下单" />
                </Timeline>
            );
            assert(wrapper.find('.next-timeline').length === 1);
        });

        it('should render a timeline with timeLeft', () => {
            // 涉及到子组件的渲染，不能用shallow，改用mount
            const wrapper = mount(
                <Timeline>
                    <Item
                        timeLeft="2017-10-23"
                        content="2016-10-03"
                        state="process"
                        title="签收"
                    />
                    <Item
                        timeLeft="2017-10-23"
                        content="2016-10-02"
                        title="发货"
                    />
                    <Item
                        timeLeft="2017-10-23"
                        content="2016-10-01"
                        title="下单"
                    />
                </Timeline>
            );
            assert(
                wrapper.find('.next-timeline-item-has-left-content').length ===
                    3
            );
        });

        it('should render a fold timeline', () => {
            const wrapper = mount(
                <Timeline
                    fold={[
                        { foldArea: [1, 2], foldShow: false },
                        { foldArea: [4], foldShow: false },
                    ]}
                >
                    <Item content="2016-10-06" state="process" />
                    <Item content="2016-10-05" />
                    <Item content="2016-10-04" />
                    <Item content="2016-10-03" />
                    <Item content="2016-10-02" />
                    <Item content="2016-10-01" />
                </Timeline>
            );
            assert(wrapper.find('.next-timeline-item-folder').length === 2);
        });
    });

    describe('action', () => {
        let wrapper, parent;

        beforeEach(() => {
            parent = document.createElement('div');
            document.body.appendChild(parent);
        });

        afterEach(() => {
            wrapper.unmount();
            document.body.removeChild(parent);
            parent = null;
            wrapper = null;
        });

        it('should trigger fold', () => {
            wrapper = mount(
                <Timeline fold={[{ foldArea: [4], foldShow: false }]}>
                    <Item content="2016-10-06" state="process" />
                    <Item content="2016-10-05" />
                    <Item content="2016-10-04" />
                    <Item content="2016-10-03" />
                    <Item content="2016-10-02" />
                    <Item content="2016-10-01" />
                </Timeline>,
                { attachTo: parent }
            );

            wrapper.find('.next-btn').simulate('click');
            assert(wrapper.find('.next-icon-arrow-up').length === 1);
        });
    });
});
