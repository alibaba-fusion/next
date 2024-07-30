import React from 'react';
import moment, { type Moment } from 'moment';
import TimePicker, { type TimePickerProps } from '../index';
import '../style';

const defaultValue = moment('11:12:13', 'HH:mm:ss', true);

describe('TimePicker', () => {
    describe('render', () => {
        it('should render time-picker', () => {
            cy.mount(<TimePicker />);
            cy.get('.next-time-picker').should('exist');
        });

        it('should render with defaultValue', () => {
            cy.mount(<TimePicker defaultValue={defaultValue} />);
            cy.get('.next-time-picker-input input').should('have.value', '11:12:13');
        });

        it('should render with defaultValue as string', () => {
            cy.mount(<TimePicker defaultValue="11:11:11" />);
            cy.get('.next-time-picker-input input').should('have.value', '11:11:11');
        });

        it('should render with format', () => {
            cy.mount(<TimePicker defaultValue="10:1:1" format="H:m:s" />);
            cy.get('.next-time-picker-input input').should('have.value', '10:1:1');
        });

        it('should render with defaultVisible', () => {
            cy.mount(<TimePicker defaultValue={defaultValue} defaultVisible />);
            cy.get('.next-time-picker-menu-hour .next-time-picker-menu-item.next-selected').should(
                'have.attr',
                'title',
                '11'
            );
            cy.get(
                '.next-time-picker-menu-minute .next-time-picker-menu-item.next-selected'
            ).should('have.attr', 'title', '12');
            cy.get(
                '.next-time-picker-menu-second .next-time-picker-menu-item.next-selected'
            ).should('have.attr', 'title', '13');
        });

        it('should render with value controlled', () => {
            cy.mount(<TimePicker value={defaultValue} />).as('Demo');
            const newValue = moment('12:22:22', 'HH:mm:ss', true);
            cy.rerender('Demo', { value: newValue });
            cy.get('.next-time-picker-input input').should('have.value', '12:22:22');
        });

        it('should render with visible controlled', () => {
            cy.mount(<TimePicker visible={false} />).as('Demo');
            cy.get('.next-time-picker-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-time-picker-body').should('exist');
        });

        it('should render with step', () => {
            cy.mount(<TimePicker defaultVisible secondStep={5} />);
            cy.get('.next-time-picker-menu-second .next-time-picker-menu-item').should(
                'have.length',
                12
            );
        });

        it('should render menu items', () => {
            const renderTimeMenuItems: TimePickerProps['renderTimeMenuItems'] = list => {
                return list.map(({ value }) => {
                    return {
                        value,
                        label: value > 9 ? String(value) : `0${value}`,
                    };
                });
            };
            cy.mount(<TimePicker defaultVisible renderTimeMenuItems={renderTimeMenuItems} />);
            cy.get('.next-time-picker-menu-second .next-time-picker-menu-item')
                .eq(0)
                .should('have.text', '00');
            cy.get('.next-time-picker-menu-second .next-time-picker-menu-item')
                .eq(9)
                .should('have.text', '09');
            cy.get('.next-time-picker-menu-second .next-time-picker-menu-item')
                .eq(10)
                .should('have.text', '10');
        });
        it('should support preview mode render', () => {
            cy.mount(<TimePicker defaultValue="12:00:00" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '12:00:00');
            const handleRenderPreview = cy.spy();
            cy.rerender('Demo', {
                renderPreview: (value: Moment) => {
                    handleRenderPreview(value.format('HH:mm:ss'));
                    return 'Hello World';
                },
            });
            cy.wrap(handleRenderPreview).should('be.calledWith', '12:00:00');
            cy.get('.next-form-preview').should('have.text', 'Hello World');
        });
    });

    describe('action', () => {
        it('should reset value', () => {
            const handleChange = cy.spy();
            cy.mount(<TimePicker defaultValue={defaultValue} onChange={handleChange} />);
            cy.get('.next-icon-delete-filling').click();
            cy.wrap(handleChange).should('be.calledWith', null);
        });

        it('should format value(hide hours)', () => {
            cy.mount(<TimePicker format="mm:ss" />);
            cy.get('.next-time-picker-input input').click();
            cy.get('.next-time-picker-menu-hour').should('not.exist');
        });

        it('should format value(hide seconds)', () => {
            cy.mount(<TimePicker format="HH:mm" />);
            cy.get('.next-time-picker-input input').click();
            cy.get('.next-time-picker-menu-second').should('not.exist');
        });

        it('should input value in picker', () => {
            const handleChange = cy.spy();
            cy.mount(
                <TimePicker
                    onChange={val => {
                        handleChange((val as Moment).format('HH:mm:ss'));
                    }}
                />
            );
            cy.get('.next-time-picker-input input').type('20:00:00');
            cy.get('.next-time-picker-input input').blur();
            cy.get('.next-time-picker-input input').should('have.value', '20:00:00');
            cy.wrap(handleChange).should('be.calledWith', '20:00:00');
        });

        it('should input value in panel', () => {
            const inputSelector = '.next-time-picker-input input';
            const panelInputSelector = '.next-time-picker-panel-input input';
            let ret: string | null = null;
            // 封装交互：click -> change -> blur
            function wrapperAsserts(inputVal: string, retVal: string | null) {
                cy.get(panelInputSelector).clear();
                cy.get(panelInputSelector).type(inputVal);
                cy.get(panelInputSelector).blur();
                cy.get(inputSelector).should('have.value', retVal || '');
                cy.get(panelInputSelector).should('have.value', retVal || '');
                cy.then(() => {
                    expect(ret).to.equal(retVal);
                });
            }

            cy.mount(
                <TimePicker
                    onChange={value => {
                        if (value) {
                            ret = (value as Moment).format('HH:mm:ss');
                        } else {
                            ret = null;
                        }
                    }}
                />
            );
            cy.get(inputSelector).click();
            // 无效值输入
            wrapperAsserts('Invalid value', null);
            // 有效值输入
            wrapperAsserts('12:20:24', '12:20:24');
        });

        it('should select time-picker panel', () => {
            const handleChange = cy.spy();
            cy.mount(
                <TimePicker
                    onChange={val => {
                        if (moment.isMoment(val)) {
                            handleChange(val.format('HH:mm:ss'));
                        } else {
                            handleChange(val);
                        }
                    }}
                />
            );
            cy.get('.next-time-picker-input input').click();
            cy.get('.next-time-picker-menu-hour .next-time-picker-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:00:00');
            cy.get('.next-time-picker-menu-minute .next-time-picker-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:02:00');
            cy.get('.next-time-picker-menu-second .next-time-picker-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:02:02');
        });

        it('should keyboard date time input', () => {
            cy.mount(<TimePicker />);
            cy.get('.next-time-picker-input input').as('timeInput');
            // 这里会触发 popup 显示，并且 popup 中的 input 聚焦，导致 timeInput 失焦，timeInput 失焦会将 inputStr 置空
            cy.get('@timeInput').type('{downarrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('.next-time-picker-panel-input input').as('panelInput');
            cy.get('@panelInput').type('{leftarrow}', { force: true });
            cy.get('@panelInput').type('{alt+downarrow}', { force: true });
            cy.get('@panelInput').type('{shift+downarrow}', { force: true });
            cy.get('@panelInput').type('{ctrl+downarrow}', { force: true });
            cy.get('@timeInput').should('have.value', '00:00:00');
            // 因为 inputStr 为空，因此第一次输入下键不会导致数值发生变化，这其实应该算是一个 bug
            // 后续可以做出优化
            cy.get('@panelInput').type('{downarrow}', { force: true });
            cy.get('@panelInput').type('{downarrow}', { force: true });
            cy.get('@panelInput').should('have.value', '00:00:01');
            cy.get('@panelInput').type('{uparrow}');
            cy.get('@panelInput').should('have.value', '00:00:00');
            cy.get('@panelInput').type('{pageDown}');
            cy.get('@panelInput').should('have.value', '00:01:00');
            cy.get('@panelInput').type('{pageUp}');
            cy.get('@panelInput').should('have.value', '00:00:00');
            cy.get('@panelInput').type('{alt+pageDown}');
            cy.get('@panelInput').should('have.value', '01:00:00');
            cy.get('@panelInput').type('{alt+pageUp}');
            cy.get('@panelInput').should('have.value', '00:00:00');
        });
    });
});
