import React from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import TimePicker2, { type TimePickerProps } from '../index';
import '../../time-picker/style';

const defaultValue = dayjs('11:12:13', 'HH:mm:ss', true);

const TimeRangePicker = TimePicker2.RangePicker;

function checkInputValues(compareValue?: string[] | string) {
    cy.get('.next-time-picker2-input input').then($inputEl => {
        if ($inputEl.length === 1) {
            const value = $inputEl.val() as string | undefined;
            expect(value).to.equal(compareValue);
        } else {
            const values: (string | number)[] = [];
            $inputEl.each((index, el) => {
                values.push((el as HTMLInputElement).value);
            });
            expect(values).to.deep.equal(compareValue);
        }
    });
}

function findInput(idx: number) {
    if (idx !== undefined) {
        return cy.get('.next-input > input').eq(idx);
    }
    return cy.get('.next-input > input');
}

function findTime(strVal: string | number, mode = 'hour') {
    return cy.get(`.next-time-picker2-menu-${mode}>li[title=${strVal}]`);
}

function clickOk() {
    cy.get('button.next-date-picker2-footer-ok').click();
}

describe('TimePicker2', () => {
    describe('render', () => {
        it('should render time-picker', () => {
            cy.mount(<TimePicker2 />);
            cy.get('.next-time-picker2').should('exist');
        });

        it('should render with defaultValue', () => {
            cy.mount(<TimePicker2 defaultValue={defaultValue} />);
            cy.get('.next-time-picker2-input input').should('have.value', '11:12:13');
        });

        it('should render with defaultValue as string', () => {
            cy.mount(<TimePicker2 defaultValue="11:11:11" />);
            cy.get('.next-time-picker2-input input').should('have.value', '11:11:11');
        });

        it('should render with format', () => {
            cy.mount(<TimePicker2 defaultValue="10:1:1" format="H:m:s" />);
            cy.get('.next-time-picker2-input input').should('have.value', '10:1:1');
        });

        it('should render with defaultVisible', () => {
            cy.mount(<TimePicker2 defaultValue={defaultValue} defaultVisible />);
            cy.get(
                '.next-time-picker2-menu-hour .next-time-picker2-menu-item.next-selected'
            ).should('have.attr', 'title', '11');
            cy.get(
                '.next-time-picker2-menu-minute .next-time-picker2-menu-item.next-selected'
            ).should('have.attr', 'title', '12');
            cy.get(
                '.next-time-picker2-menu-second .next-time-picker2-menu-item.next-selected'
            ).should('have.attr', 'title', '13');
        });

        it('should render with value controlled', () => {
            cy.mount(<TimePicker2 value={defaultValue} />).as('Demo');
            const newValue = dayjs('12:22:22', 'HH:mm:ss', true);
            cy.rerender('Demo', { value: newValue });
            cy.get('.next-time-picker2-input input').should('have.value', '12:22:22');
        });

        it('should render with visisble controlled', () => {
            cy.mount(<TimePicker2 visible={false} />).as('Demo');
            cy.get('.next-time-picker2-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-time-picker2-body').should('exist');
        });

        it('should render with step', () => {
            cy.mount(<TimePicker2 defaultVisible secondStep={5} />);
            cy.get('.next-time-picker2-menu-second .next-time-picker2-menu-item').should(
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
            cy.mount(<TimePicker2 defaultVisible renderTimeMenuItems={renderTimeMenuItems} />);
            cy.get('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                .eq(0)
                .should('have.text', '00');
            cy.get('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                .eq(9)
                .should('have.text', '09');
            cy.get('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                .eq(10)
                .should('have.text', '10');
        });
        it('should support preview mode render', () => {
            cy.mount(<TimePicker2 defaultValue="12:00:00" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '12:00:00');
            const handleRenderPreview = cy.spy();
            cy.rerender('Demo', {
                renderPreview: (value: Dayjs) => {
                    handleRenderPreview(value.format('HH:mm:ss'));
                    return 'Hello World';
                },
            });
            cy.wrap(handleRenderPreview).should('be.calledWith', '12:00:00');
            cy.get('.next-form-preview').should('have.text', 'Hello World');
        });

        it('should support string value', () => {
            cy.mount(<TimePicker2 defaultValue="12:00:00" isPreview />);
            cy.get('.next-form-preview').should('have.text', '12:00:00');
        });
        it('should support preview mode render when no value set', () => {
            cy.mount(<TimePicker2 isPreview />);
            cy.get('.next-form-preview').should('exist');
        });
        it('should support preview mode & setValue', () => {
            cy.mount(<TimePicker2 isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '');
            const value = dayjs('12:22:22', 'HH:mm:ss', true);
            cy.rerender('Demo', { value });
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '12:22:22');
        });
        it('should support preview mode on type is range', () => {
            cy.mount(<TimePicker2.RangePicker isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');

            const startValue = dayjs('12:22:22', 'HH:mm:ss', true);
            const endValue = dayjs('17:22:22', 'HH:mm:ss', true);
            cy.rerender('Demo', { value: [startValue, endValue] });
            cy.get('.next-form-preview').should('have.text', '12:22:22-17:22:22');

            cy.rerender('Demo', { value: [startValue] });
            cy.get('.next-form-preview').should('have.text', '12:22:22-');

            cy.rerender('Demo', { value: [null, endValue] });
            cy.get('.next-form-preview').should('have.text', '-17:22:22');
        });
    });

    describe('action', () => {
        it('should reset value', () => {
            const handleChange = cy.spy();
            cy.mount(<TimePicker2 defaultValue={defaultValue} onChange={handleChange} />);
            cy.get('.next-icon-delete-filling').click();
            cy.wrap(handleChange).should('be.calledWith', null);
        });

        it('should format value(hide hours)', () => {
            cy.mount(<TimePicker2 format="mm:ss" />);
            cy.get('.next-time-picker2-input input').click();
            cy.get('.next-time-picker2-menu-hour').should('not.exist');
        });

        it('should format value(hide seconds)', () => {
            cy.mount(<TimePicker2 format="HH:mm" />);
            cy.get('.next-time-picker2-input input').click();
            cy.get('.next-time-picker2-menu-second').should('not.exist');
        });

        it('should input value in picker', () => {
            const handleChange = cy.spy();
            cy.mount(
                <TimePicker2
                    onChange={val => {
                        handleChange((val as Dayjs).format('HH:mm:ss'));
                    }}
                />
            );
            cy.get('.next-time-picker2-input input').type('20:00:00');
            cy.get('.next-time-picker2-input input').trigger('keydown', { keyCode: 13 });
            cy.get('.next-time-picker2-input input').should('have.value', '20:00:00');
            cy.wrap(handleChange).should('be.calledWith', '20:00:00');
        });

        it('should render presets & change value on clicking presets', () => {
            const handleChange = cy.spy();
            cy.mount(
                <TimePicker2
                    onChange={val => {
                        handleChange((val as Dayjs).format('HH:mm:ss'));
                    }}
                    preset={[
                        {
                            label: 'now',
                            name: 'preset-key',
                            value: () => {
                                return dayjs('13:12:11', 'HH:mm:ss', true);
                            },
                        },
                    ]}
                />
            );
            cy.get('.next-time-picker2-input input').click();

            cy.get('.next-time-picker2-footer button').click();
            cy.wrap(handleChange).should('be.calledWith', '13:12:11');
        });

        it('should select time-picker2 panel', () => {
            const handleChange = cy.spy();
            cy.mount(
                <TimePicker2
                    onChange={val => {
                        if (dayjs.isDayjs(val)) {
                            handleChange(val.format('HH:mm:ss'));
                        } else {
                            handleChange(val);
                        }
                    }}
                />
            );
            cy.get('.next-time-picker2-input input').click();
            cy.get('.next-time-picker2-menu-hour .next-time-picker2-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:00:00');
            cy.get('.next-time-picker2-menu-minute .next-time-picker2-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:02:00');
            cy.get('.next-time-picker2-menu-second .next-time-picker2-menu-item').eq(2).click();
            cy.wrap(handleChange).should('be.calledWith', '02:02:02');
        });

        it('should keyboard date time input', () => {
            cy.mount(<TimePicker2 />);
            const timeInput = '.next-time-picker2-input input';

            cy.get(timeInput).type('{downarrow}');
            cy.get(timeInput).should('have.value', '00:00:00');

            cy.get(timeInput).type('{leftarrow}', { force: true });
            cy.get(timeInput).type('{alt+downarrow}', { force: true });
            cy.get(timeInput).type('{shift+downarrow}', { force: true });

            cy.get(timeInput).should('have.value', '00:00:00');

            cy.get(timeInput).type('{downarrow}');
            cy.get(timeInput).should('have.value', '00:00:01');

            cy.get(timeInput).type('{uparrow}');
            cy.get(timeInput).should('have.value', '00:00:00');

            cy.get(timeInput).type('{pagedown}');
            cy.get(timeInput).should('have.value', '00:01:00');

            cy.get(timeInput).type('{pageup}');
            cy.get(timeInput).should('have.value', '00:00:00');

            cy.get(timeInput).type('{alt+pageDown}');
            cy.get(timeInput).should('have.value', '01:00:00');

            cy.get(timeInput).type('{alt+pageUp}');
            cy.get(timeInput).should('have.value', '00:00:00');
        });

        it('should keyboard date time input', () => {
            cy.mount(<TimePicker2 />);
            const timeInput = '.next-time-picker2-input input';

            cy.get(timeInput).type('{ctrl+downarrow}', { force: true });
            cy.get(timeInput).should('have.value', '00:00:00');
        });
    });

    describe('range', () => {
        it('should support default value', () => {
            cy.mount(
                <TimeRangePicker defaultValue={[defaultValue, defaultValue.add(1, 'hours')]} />
            );

            checkInputValues(['11:12:13', '12:12:13']);
        });

        it('should select value', () => {
            cy.mount(<TimeRangePicker defaultValue={[defaultValue]} />);

            findInput(0).click();
            findTime(12, 'hour').should('have.length', 2);
            findTime(12, 'hour').eq(1).click();
            clickOk();

            checkInputValues(['11:12:13', '12:00:00']);
        });

        it('should render with value controlled', () => {
            cy.mount(<TimeRangePicker value={[defaultValue, defaultValue.add(1, 'hours')]} />).as(
                'Demo'
            );

            checkInputValues(['11:12:13', '12:12:13']);
            findInput(0).click();
            findTime(12, 'hour').should('have.length', 2);
            findTime(13, 'hour').eq(1).click();
            clickOk();

            checkInputValues(['11:12:13', '12:12:13']);

            const first = dayjs('11:13:00', 'HH:mm:ss', true);
            const second = dayjs('12:22:22', 'HH:mm:ss', true);
            cy.rerender('Demo', { value: [first, second] });
            checkInputValues(['11:13:00', '12:22:22']);
        });
    });
    describe('issues', () => {
        it('should has border when single time input is focusing', () => {
            cy.mount(
                <div style={{ width: 200, height: 500 }}>
                    <TimePicker2 />
                </div>
            );
            cy.get('.next-time-picker2-input input').click();
            cy.get('.next-time-picker2-input').should(
                'have.class',
                'next-time-picker2-input-focus'
            );
            cy.get('body').click();

            cy.get('.next-time-picker2-input').should(
                'not.have.class',
                'next-time-picker2-input-focus'
            );
        });

        it('should has border when time-range input is focusing', () => {
            cy.mount(
                <div style={{ width: 200, height: 500 }}>
                    <TimePicker2.RangePicker />
                </div>
            );
            cy.get('.next-time-picker2-input input').eq(0).click();

            cy.get('.next-time-picker2-input').should(
                'have.class',
                'next-time-picker2-input-focus'
            );
            cy.get('.next-time-picker2-input input').eq(1).click();
            cy.get('.next-time-picker2-input').should(
                'have.class',
                'next-time-picker2-input-focus'
            );
            cy.get('body').click();
            cy.get('.next-time-picker2-input').should(
                'not.have.class',
                'next-time-picker2-input-focus'
            );
        });

        it('should support custom formatting , close #3651', () => {
            cy.mount(<TimePicker2 format="HH" />);
            cy.get('.next-time-picker2-input input').type('12');

            cy.get('li[title="12"][role="option"]').should('have.class', 'next-selected');
        });
    });
});
