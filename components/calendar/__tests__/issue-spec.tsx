import React from 'react';
import moment from 'moment';
import Calendar from '../index';
import '../style';

moment.locale('zh-cn');
const defaultVal = moment('2024-05-13', 'YYYY-MM-DD', true);

describe('Calendar issues', () => {
    // Fix: https://github.com/alibaba-fusion/next/issues/4782
    describe('should fix #4782', () => {
        it('should not have switch button when panel mode is date and showOtherMonth is false', () => {
            cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
            cy.get('.next-calendar-panel-header > button').should('have.length', 0);
        });
        it('should not have switch button when panel mode is year and showOtherMonth is false', () => {
            cy.mount(<Calendar shape="panel" showOtherMonth={false} mode="year" />);
            cy.get('.next-calendar-panel-header > button').should('have.length', 0);
        });
        it('should not have switch button when panel mode is month and showOtherMonth is false', () => {
            cy.mount(<Calendar shape="panel" showOtherMonth={false} mode="year" />);
            cy.get('.next-calendar-panel-header > button').should('have.length', 0);
        });

        describe('action', () => {
            it('should not change panel mode to month when showOtherMonth is false', () => {
                cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
                cy.get('.next-calendar-btn').eq(0).click();
                cy.get('.next-calendar-month').should('have.length', 0);
            });

            it('should not change panel mode to year when showOtherMonth is false', () => {
                cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
                cy.get('.next-calendar-btn').eq(1).click();
                cy.get('.next-calendar-year').should('have.length', 0);
            });

            it('should not change year range when showOtherMonth is false', () => {
                cy.mount(
                    <Calendar
                        shape="panel"
                        mode="year"
                        showOtherMonth={false}
                        defaultVisibleMonth={() => defaultVal}
                    />
                );
                cy.get('.next-calendar-btn').eq(0).click();
                cy.get('.next-calendar-panel-header button[title="2020-2029"]').should(
                    'have.length',
                    1
                );
            });
        });
    });
});
