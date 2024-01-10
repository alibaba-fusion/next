import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ConfigProvider from '../../config-provider';
import Timeline from '../index';
import enUS from '../../locale/en-us';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const Item = Timeline.Item;

const TimelineItem = Item;

/* eslint-disable */
describe('Timeline', () => {
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
                    <Item timeLeft="2017-10-23" content="2016-10-03" state="process" title="签收" />
                    <Item timeLeft="2017-10-23" content="2016-10-02" title="发货" />
                    <Item timeLeft="2017-10-23" content="2016-10-01" title="下单" />
                </Timeline>
            );
            assert(wrapper.find('.next-timeline-item-has-left-content').length === 3);
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

        it('should render a alternate timeline', () => {
            const wrapper = mount(
                <Timeline mode="alternate">
                    <Item content="2016-10-06" />
                    <Item content="2016-10-05" />
                    <Item content="2016-10-04" />
                    <Item content="2016-10-03" />
                    <Item content="2016-10-02" />
                    <Item content="2016-10-01" />
                </Timeline>
            );
            assert(
                wrapper.find('.next-timeline-item-left').length ===
                    wrapper.find('.next-timeline-item-right').length
            );
        });
    });

    describe('i18n', () => {
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

        it('should support i18n using ConfigProvider', () => {
            wrapper = mount(
                <ConfigProvider locale={enUS}>
                    <Timeline
                        fold={[
                            { foldArea: [1, 2], foldShow: false },
                            { foldArea: [5], foldShow: false },
                        ]}
                    >
                        <TimelineItem
                            title="Sign"
                            content="[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again"
                            time={'2016-06-10 10:30:00'}
                            state="process"
                        />
                        <TimelineItem
                            title="Delivery"
                            content="[Hangzhou]Express has reached Hangzhou Hangzhou Binjiang Company"
                            time={'2016-06-10 09:30:00'}
                        />
                        <TimelineItem
                            title="Delivery"
                            content="[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you"
                            time={'2016-06-10 09:03:00'}
                        />
                        <TimelineItem
                            title="Transport"
                            content="[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued"
                            time={'2016-06-10 06:10:00'}
                        />
                        <TimelineItem
                            title="Transport"
                            content="[Dongguan City] Guangdong Dongguan Transshipment Center has been issued"
                            time={'2016-06-09 18:00:00'}
                        />
                        <TimelineItem
                            title="Processing"
                            content="[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province"
                            time={'2016-06-09 16:12:00'}
                        />
                        <TimelineItem
                            title="Processing"
                            content="[Dongguan City] The merchant is informing the express company to insert"
                            time={'2016-06-09 14:00:00'}
                        />
                        <TimelineItem
                            title="Processing"
                            content="[Dongguan City] Your order to be picked"
                            time={'2016-06-09 10:12:19'}
                        />
                        <TimelineItem
                            title="Processing"
                            content="[Dongguan] Your order starts processing"
                            time={'2016-06-09 10:01:09'}
                        />
                    </Timeline>
                </ConfigProvider>,
                { attachTo: parent }
            );
            assert(wrapper.find('.next-btn-helper').at(0).text() === 'Expand');
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
