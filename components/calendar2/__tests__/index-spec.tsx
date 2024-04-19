import React from 'react';
import dayjs from 'dayjs';
import Calendar2, { type CalendarProps } from '../index';
import '../style';

dayjs.locale('zh-cn');
const defaultVal = dayjs('2017-10-01', 'YYYY-MM-DD', true);

describe('Calendar2', () => {
    describe('render', () => {
        it('should render with default value', () => {
            cy.mount(<Calendar2 defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-calendar2-cell-selected');
        });

        it('should render calendar panel', () => {
            cy.mount(<Calendar2 shape="panel" />);
            cy.get('.next-calendar2-panel').should('have.length', 1);
        });

        it('should render calendar card', () => {
            cy.mount(<Calendar2 shape="card" />);
            cy.get('.next-calendar2-card').should('have.length', 1);
        });

        it('should render uncontrolled calendar', () => {
            cy.mount(<Calendar2 defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-calendar2-cell-selected');
            cy.get('td[title="2017-10-02"]').should('exist');
            cy.get('td[title="2017-10-02"]').click();
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-calendar2-cell-selected');
        });

        it('should render controlled calendar', () => {
            cy.mount(<Calendar2 value={defaultVal} />).as('Demo');
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-calendar2-cell-selected');
            cy.rerender('Demo', { value: defaultVal.clone().add(1, 'days') });
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-calendar2-cell-selected');
        });

        it('should render controlled calendar with mode', () => {
            cy.mount(<Calendar2 shape="panel" mode="year" />).as('Demo');
            cy.get('.next-calendar2-cell').should('have.length', 12);
        });

        it('should render with disabled dates', () => {
            const disabledDateHandler = cy.spy().as('disabledDateHandler');
            const disabledDate: CalendarProps['disabledDate'] = (date, view) => {
                disabledDateHandler(view);
                return date.valueOf() > defaultVal.valueOf();
            };
            cy.mount(<Calendar2 disabledDate={disabledDate} defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-calendar2-cell-disabled');
            cy.get('@disabledDateHandler').should('be.calledWith', 'date');
        });

        it('should render custom content', () => {
            const dateCellRender: CalendarProps['dateCellRender'] = date => {
                const dateNum = date.date();
                if (defaultVal.month() !== date.month()) {
                    return dateNum;
                }

                if (dateNum === 1) {
                    return <div className="test">hello world</div>;
                }
            };
            cy.mount(<Calendar2 dateCellRender={dateCellRender} defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-01"] div.test').should('have.length', 1);
        });
    });

    describe('action', () => {
        it('should change mode', () => {
            const onModeChange = cy.spy().as('onModeChange');
            cy.mount(<Calendar2 onPanelChange={onModeChange} defaultValue={defaultVal} />);
            cy.get('.next-radio-wrapper input').eq(1).check({ force: true });
            cy.get('td').should('have.length', 12);
            cy.get('td[title="2017-01"]').should('have.length', 1);
            cy.get('@onModeChange').should('be.calledOnce');
        });

        it('should change panel mode to month', () => {
            cy.mount(<Calendar2 shape="panel" defaultValue={defaultVal} />);
            cy.get('.next-calendar2-header-text-field button').eq(1).click();
            cy.get('.next-calendar2-cell').should('have.length', 12);
            cy.get('.next-calendar2-header-text-field button').eq(0).click();
            cy.get('.next-calendar2-header-text-field').should('have.text', '2010-2019');
        });

        it('should change panel mode to year', () => {
            cy.mount(<Calendar2 shape="panel" defaultValue={defaultVal} />);
            cy.get('.next-calendar2-header-text-field button').eq(0).click();
            cy.get('.next-calendar2-cell').should('have.length', 12);
            cy.get('.next-calendar2-cell').eq(0).should('have.text', '2009');
        });

        it('should change visible month', () => {
            cy.mount(<Calendar2 shape="panel" defaultValue={defaultVal} />);
            cy.get('.next-calendar2-header-right-btn').eq(0).click();
            cy.get('.next-calendar2-header-text-field button').eq(1).should('have.text', '11月');
            cy.get('.next-calendar2-header-left-btn').eq(1).click();
            cy.get('.next-calendar2-header-text-field button').eq(1).should('have.text', '10月');
        });

        it('should change visible month by year', () => {
            cy.mount(<Calendar2 shape="panel" defaultValue={defaultVal} />);
            cy.get('.next-calendar2-header-right-btn').eq(1).click();
            cy.get('.next-calendar2-header-text-field button').eq(0).should('have.text', '2018年');
            cy.get('.next-calendar2-header-left-btn').eq(0).click();
            cy.get('.next-calendar2-header-text-field button').eq(0).should('have.text', '2017年');
        });

        it('should change decade', () => {
            cy.mount(<Calendar2 shape="panel" panelMode="decade" defaultValue={defaultVal} />);
            cy.get('.next-calendar2-header-left-btn').click();
            cy.get('.next-calendar2-header-text-field').should('have.text', '1900-1999');
            cy.get('.next-calendar2-header-right-btn').click();
            cy.get('.next-calendar2-header-text-field').should('have.text', '2000-2099');
        });

        it('should select date', () => {
            const onSelectHandler = cy.spy().as('onSelectHandler');
            const onSelect: CalendarProps['onSelect'] = val => {
                onSelectHandler(val.format('YYYY-MM-DD'));
            };
            cy.mount(<Calendar2 shape="panel" onSelect={onSelect} defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-02"]').click();
            cy.get('@onSelectHandler').should('be.calledWith', '2017-10-02');
        });

        it('should render fullscreen calendar with header', () => {
            cy.mount(
                <Calendar2 shape="fullscreen" showTitle defaultValue={defaultVal} mode="month" />
            );

            cy.get('.next-calendar2-header-title').should('exist');
        });
    });
});
