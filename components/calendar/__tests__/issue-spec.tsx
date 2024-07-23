import React from 'react';
import moment from 'moment';
import Calendar from '../index';
import '../style';

moment.locale('zh-cn');
const defaultVal = moment('2024-05-13', 'YYYY-MM-DD', true);

describe('Calendar issues', () => {
    // Fix: https://github.com/alibaba-fusion/next/issues/4782
    describe('should fix #4782', () => {
        it('should not have switch button when shape is panel and showOtherMonth is false', () => {
            cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
            cy.get('.next-calendar-panel-header > button').should('have.length', 0);
        });
        it('should not have mode switch button when shape is fullscreen and showOtherMonth is false', () => {
            cy.mount(<Calendar shape="fullscreen" showOtherMonth={false} />);
            cy.get('.next-radio-group').should('have.length', 0);
        });

        describe('action', () => {
            it('should not change mode to month when showOtherMonth is false and shape is panel', () => {
                cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
                cy.get('.next-calendar-btn').eq(0).click();
                cy.get('.next-calendar-month').should('have.length', 0);
            });

            it('should not change mode to year when showOtherMonth is false and shape is panel', () => {
                cy.mount(<Calendar shape="panel" showOtherMonth={false} />);
                cy.get('.next-calendar-btn').eq(1).click();
                cy.get('.next-calendar-year').should('have.length', 0);
            });

            it('should not change year when showOtherMonth is false and shape is fullscreen', () => {
                cy.mount(
                    <Calendar shape="fullscreen" showOtherMonth={false} defaultValue={defaultVal} />
                );
                cy.get('.next-select').eq(0).click();
                cy.get('.next-menu-item').should('have.length', 0);
            });
            it('should not change month when showOtherMonth is false and shape is card', () => {
                cy.mount(
                    <Calendar shape="card" showOtherMonth={false} defaultValue={defaultVal} />
                );
                cy.get('.next-select').eq(1).click();
                cy.get('.next-menu-item').should('have.length', 0);
            });
        });
    });
});
