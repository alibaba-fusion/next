import React from 'react';
import ConfigProvider from '../../config-provider';
import Timeline from '../index';
import enUS from '../../locale/en-us';
import '../style';

const Item = Timeline.Item;

const TimelineItem = Item;

describe('Timeline', () => {
    describe('render', () => {
        it('should render a timeline', () => {
            cy.mount(
                <Timeline>
                    <Item content="2016-10-03" state="process" title="签收" />
                    <Item content="2016-10-02" title="发货" />
                    <Item content="2016-10-01" title="下单" />
                </Timeline>
            );
            cy.get('.next-timeline').should('exist');
        });

        it('should render a timeline with timeLeft', () => {
            // 涉及到子组件的渲染，不能用 shallow，改用 mount
            cy.mount(
                <Timeline>
                    <Item timeLeft="2017-10-23" content="2016-10-03" state="process" title="签收" />
                    <Item timeLeft="2017-10-23" content="2016-10-02" title="发货" />
                    <Item timeLeft="2017-10-23" content="2016-10-01" title="下单" />
                </Timeline>
            );
            cy.get('.next-timeline-item-has-left-content').should('have.length', 3);
        });

        it('should render a fold timeline', () => {
            cy.mount(
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
            cy.get('.next-timeline-item-folder').should('have.length', 2);
        });

        it('should render a alternate timeline', () => {
            cy.mount(
                <Timeline mode="alternate">
                    <Item content="2016-10-06" />
                    <Item content="2016-10-05" />
                    <Item content="2016-10-04" />
                    <Item content="2016-10-03" />
                    <Item content="2016-10-02" />
                    <Item content="2016-10-01" />
                </Timeline>
            );
            // left 和 right 应该相等
            cy.get('.next-timeline-item-left').should('have.length', 3);
            cy.get('.next-timeline-item-right').should('have.length', 3);
        });
    });

    describe('i18n', () => {
        it('should support i18n using ConfigProvider', () => {
            cy.mount(
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
                </ConfigProvider>
            );
            cy.get('.next-btn-helper').eq(0).should('have.text', 'Expand');
        });
    });

    describe('action', () => {
        it('should trigger fold', () => {
            cy.mount(
                <Timeline fold={[{ foldArea: [4], foldShow: false }]}>
                    <Item content="2016-10-06" state="process" />
                    <Item content="2016-10-05" />
                    <Item content="2016-10-04" />
                    <Item content="2016-10-03" />
                    <Item content="2016-10-02" />
                    <Item content="2016-10-01" />
                </Timeline>
            );
            cy.get('.next-btn').click();
            cy.get('.next-icon-arrow-up').should('exist');
        });
    });
});
