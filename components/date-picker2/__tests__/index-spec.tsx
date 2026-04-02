import React, { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import moment from 'moment';
import 'dayjs/locale/en';

import DatePicker from '../index';
import Form from '../../form/index';
import Field from '../../field/index';
import ConfigProvider from '../../config-provider';
import en from '../../locale/en-us';
import { DATE_PICKER_MODE } from '../constant';
import { KEYCODE } from '../../util';
import '../style';

const { RangePicker, MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker;
const FormItem = Form.Item;

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;
const defaultVal = '2020-12-12';
const defaultRangeVal = ['2020-12-12', '2020-12-13'];

/* eslint-disable */
describe('Picker', () => {
    describe('props', () => {
        it('basic render', () => {
            cy.mount(<DatePicker />);
            cy.get('.next-date-picker2').should('have.length', 1);
        });

        it('type of value', () => {
            [
                new Date(2020, 11, 12),
                1607753163910,
                dayjs('2020-12-12'),
                moment('2020-12-12'),
            ].forEach(v => {
                // @ts-expect-error defaultValue不支持Date，moment，number
                cy.mount(<DatePicker defaultValue={v} />);
                checkInputValue('2020-12-12');
            });
        });

        it('mode && type', () => {
            // type 只对 DatePicker 生效
            ['date', 'range'].forEach(type => {
                cy.mount(<DatePicker defaultVisible type={type as 'date' | 'range'} />);
                cy.get(`.next-${type}-picker2-panel`).should('have.length', 1);
                const expectedCount = type === 'range' ? 2 : 1;
                cy.get(`.next-calendar2-table-${'date'}`).should('have.length', expectedCount);
            });

            // mode 只对 RangePicker 生效
            ['date', 'week', 'month', 'quarter', 'year'].forEach(mode => {
                cy.mount(
                    <RangePicker
                        defaultVisible
                        mode={mode as 'date' | 'week' | 'month' | 'quarter' | 'year'}
                    />
                );
                cy.get(`.next-${'range'}-picker2-panel`).should('have.length', 1);
                cy.get(`.next-calendar2-table-${mode}`).should('have.length', 2);
            });
        });

        it('disabled', () => {
            // DatePicker
            cy.mount(<DatePicker disabled />);
            cy.get('.next-date-picker2-input-date').should(
                'have.class',
                'next-date-picker2-input-disabled'
            );

            // Range
            cy.mount(<RangePicker disabled />);
            cy.get('.next-date-picker2-input-range').should(
                'have.class',
                'next-date-picker2-input-disabled'
            );

            // half disabled
            cy.mount(<RangePicker disabled={[true, false]} />);
            cy.get('.next-date-picker2-input-range').should(
                'not.have.class',
                'next-date-picker2-input-disabled'
            );
            cy.get('.next-input').eq(0).should('have.class', 'next-disabled');
            cy.get('.next-input').eq(1).should('not.have.class', 'next-disabled');

            // half disabled with showTime
            cy.mount(
                <RangePicker
                    showTime
                    disabled={[false, true]}
                    defaultValue={['2022', '2020']}
                    defaultVisible
                />
            );

            // keep end time
            checkInputValue(['', '2020-01-01 00:00:00']);

            // do not check value before click ok
            clickDate('2020-01-01');
            clickTime(5);
            checkInputValue(['2020-01-01 05:00:00', '2020-01-01 00:00:00']);

            // check value after clicking ok
            cy.get('.next-date-picker2-footer-ok').click();
            checkInputValue(['', '2020-01-01 00:00:00']);
        });

        it('disable ok when input disabledDate', () => {
            cy.mount(
                <DatePicker
                    showOk
                    showTime
                    disabledDate={v => v.isBefore(dayjs('2024-06-22 00:00:00'))}
                    defaultVisible
                />
            );

            changeInput('2024-06-19 11:12:13');
            cy.get('button.next-date-picker2-footer-ok').should('be.disabled');

            cy.mount(
                <RangePicker
                    showOk
                    showTime
                    disabledDate={v => v.isBefore(dayjs('2024-06-22 00:00:00'))}
                    defaultVisible
                />
            );

            changeInput('2024-06-19 11:12:13', 1);
            cy.get('button.next-date-picker2-footer-ok').should('be.disabled');
        });

        it('showTime', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                const defaultValue =
                    Picker === DatePicker
                        ? '2020-12-12 12:12:12'
                        : ['2020-12-12 12:12:12', '2020-12-13 13:13:12'];

                cy.mount(<Picker defaultValue={defaultValue} showTime defaultVisible />);
                checkInputValue(defaultValue);

                showTimePanel().should('exist');
                cy.get('.next-time-picker2-menu').should('have.length', 3);
            });
        });

        it('timePanelProps', () => {
            const defaultValue = '2020-12-12 12:12:12';

            // showTime for old version
            ['showTime', 'timePanelProps'].forEach(key => {
                const props = {
                    [key]: { format: 'HH:mm' },
                };
                cy.mount(
                    <DatePicker defaultValue={defaultValue} showTime defaultVisible {...props} />
                );

                const timeTextSltor =
                    '.next-date-time-picker-wrapper .next-calendar2-header-text-field';
                cy.get('.next-time-picker2-menu').should('have.length', 2);
                cy.get(timeTextSltor)
                    .invoke('prop', 'textContent')
                    .then(text => expect(text).to.equal('12:12'));
            });
        });

        it('preset', () => {
            const now = dayjs();
            const datePreset = {
                此刻: () => now,
            };

            ['preset', 'ranges'].forEach(k => {
                cy.mount(<DatePicker {...{ [k]: datePreset }} defaultVisible />);
                cy.get('.next-date-picker2-footer-preset-only').should('have.length', 1);
                cy.get('.next-date-picker2-footer .next-btn').click();
                cy.get('.next-date-picker2-footer .next-btn').should('have.text', '此刻');
                checkInputValue(now.format('YYYY-MM-DD'));
            });
        });

        it('ignore showTime && timePanelProps', () => {
            const callback = (
                Picker: any,
                mode?: 'date' | 'month' | 'week' | 'quarter' | 'year'
            ) => {
                cy.mount(<Picker mode={mode} showTime timePanelProps={{ format: 'HH:mm' }} />);
                showTimePanel().should('not.exist');
            };

            [MonthPicker, YearPicker, WeekPicker, QuarterPicker].forEach(Picker =>
                callback(Picker)
            );
            [WEEK, MONTH, QUARTER, YEAR].forEach(mode => {
                [DatePicker, RangePicker].forEach(Picker =>
                    callback(Picker, mode as 'month' | 'week' | 'quarter' | 'year')
                );
            });
        });

        it('disabledDate', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                cy.mount(
                    <Picker
                        showTime
                        defaultVisible
                        // @ts-expect-error 不能将string类型赋值给Dayjs
                        defaultPanelValue={defaultVal}
                        disabledDate={v => v.isAfter(dayjs('2020-12-12'))}
                        disabledTime={{
                            disabledHours: (v: number) => v > 18,
                            disabledMinutes: (v: number) => v > 18,
                        }}
                        timePanelProps={{ disabledSeconds: (v: number) => v > 18 }}
                    />
                );

                ['hour', 'second'].forEach(u => {
                    cy.get(
                        `.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=19]`
                    ).should('have.class', 'next-disabled');
                    cy.get(
                        `.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=18]`
                    ).should('not.have.class', 'next-disabled');
                });

                cy.get('.next-calendar2-cell[title="2020-12-12"]').should(
                    'not.have.class',
                    'next-calendar2-cell-disabled'
                );

                cy.get('.next-calendar2-cell[title="2020-12-13"]').should(
                    'have.class',
                    'next-calendar2-cell-disabled'
                );
            });
        });

        it('disabledDate.defaultValue', () => {
            const defaultTime = '00:12:13';

            cy.mount(
                <DatePicker
                    showTime
                    defaultVisible
                    // @ts-expect-error 不能将string类型赋值给Dayjs
                    defaultPanelValue={defaultVal}
                    timePanelProps={{ defaultValue: defaultTime }}
                />
            );

            ['0', '12', '13'].every((v, idx) =>
                cy.get('.next-selected').eq(idx).should('have.text', v)
            );

            clickDate('2020-12-12');
            checkInputValue(`2020-12-12 ${defaultTime}`);

            cy.mount(
                <RangePicker
                    showTime
                    defaultVisible
                    // @ts-expect-error 不能将string类型赋值给Dayjs
                    defaultPanelValue={defaultVal}
                    timePanelProps={{ defaultValue: defaultTime }}
                />
            );

            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-13');
            clickOk();
            checkInputValue([`2020-12-12 ${defaultTime}`, `2020-12-13 ${defaultTime}`]);
        });

        it('placeholder', () => {
            // DatePicker
            cy.mount(<DatePicker placeholder="placeholder" />);
            cy.get('.next-input input').should('have.attr', 'placeholder', 'placeholder');

            // RangePicker
            cy.mount(<RangePicker placeholder="placeholder" />);
            cy.get('.next-input input').then($inputs => {
                const placeholders = $inputs
                    .map((index, input) => input.getAttribute('placeholder'))
                    .get();
                expect(placeholders).to.deep.equal(['placeholder', 'placeholder']);
            });

            cy.mount(<RangePicker placeholder={['begin', 'end']} />);
            cy.get('.next-input input').then($inputs => {
                const placeholders = $inputs
                    .map((index, input) => input.getAttribute('placeholder'))
                    .get();
                expect(placeholders).to.deep.equal(['begin', 'end']);
            });
        });

        it('default format', () => {
            [
                [DatePicker, 'YYYY-MM-DD'],
                [MonthPicker, 'YYYY-MM'],
                [YearPicker, 'YYYY'],
                [WeekPicker, 'YYYY-wo'],
                [QuarterPicker, 'YYYY-[Q]Q'],
            ].forEach(([Picker, fmt]) => {
                cy.mount(<Picker defaultValue={defaultVal} />);
                checkInputValue(dayjs(defaultVal).format(fmt as string));
            });

            [
                [DATE, 'YYYY-MM-DD'],
                [MONTH, 'YYYY-MM'],
                [YEAR, 'YYYY'],
                [WEEK, 'YYYY-wo'],
                [QUARTER, 'YYYY-[Q]Q'],
            ].forEach(([mode, fmt]) => {
                cy.mount(
                    <RangePicker
                        mode={mode as 'date' | 'month' | 'week' | 'quarter' | 'year'}
                        defaultValue={defaultRangeVal}
                    />
                );
                checkInputValue(defaultRangeVal.map(v => dayjs(v).format(fmt)));
            });
        });

        it('preview', () => {
            // DatePicker
            cy.mount(<DatePicker defaultValue={defaultVal} isPreview />);
            cy.get('.next-form-preview').should('have.text', defaultVal);

            // Range
            cy.mount(<RangePicker defaultValue={defaultRangeVal} isPreview />);
            cy.get('.next-form-preview').should('have.text', '2020-12-12-2020-12-13');

            // renderPreview
            const renderPreviewDatePicker = cy.spy();
            cy.mount(
                <DatePicker
                    defaultValue={defaultVal}
                    isPreview
                    renderPreview={(v: Dayjs) => {
                        renderPreviewDatePicker(v.format('YYYY-MM-DD'));
                    }}
                />
            );
            cy.wrap(renderPreviewDatePicker).should('be.calledWith', '2020-12-12');

            const renderPreviewRangePicker = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    isPreview
                    renderPreview={(v: Dayjs[]) => {
                        renderPreviewRangePicker(v.map(i => i.format('YYYY-MM-DD')));
                    }}
                />
            );
            cy.wrap(renderPreviewRangePicker).should('be.calledWith', defaultRangeVal);
        });

        it('input label', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                cy.mount(<Picker label="日期" />);
                cy.get('.next-input-label').should('have.length', 1);
            });
        });

        it('input separator', () => {
            ['~', <span>~</span>].forEach(separator => {
                cy.mount(<RangePicker separator={separator} />);
                cy.get('.next-date-picker2-input-separator').should('have.text', '~');
            });
        });

        it('hasClear', () => {
            [[false, false], undefined, false].forEach(disabled => {
                cy.mount(<RangePicker disabled={disabled} />);
                cy.get('.next-input-clear').should('exist');
            });

            // 禁用状态下 不允许清除
            [true, [true, false], [false, true]].forEach(disabled => {
                cy.mount(<RangePicker disabled={disabled} />);
                cy.get('.next-input-clear').should('not.exist');
            });
        });

        it('panelValue', () => {
            // default now
            [DatePicker, RangePicker].forEach(Picker => {
                cy.mount(<Picker defaultVisible />);
                cy.get('.next-calendar2-cell-current')
                    .first()
                    .invoke('attr', 'title')
                    .should('eq', dayjs().startOf('month').format('YYYY-MM-DD'));
            });

            // set Default
            [DatePicker, RangePicker].forEach(Picker => {
                cy.mount(<Picker defaultVisible defaultPanelValue={dayjs(defaultVal)} />);
                cy.get('.next-calendar2-cell-current')
                    .first()
                    .invoke('attr', 'title')
                    .should('eq', '2020-12-01');
            });

            // set Value
            [
                [DatePicker, defaultVal],
                [RangePicker, defaultRangeVal],
            ].forEach(([Picker, val]) => {
                const PickerComponent = Picker as React.ComponentType<any>;
                cy.mount(<PickerComponent defaultVisible defaultValue={val} />);
                cy.get('.next-calendar2-cell-current')
                    .first()
                    .invoke('attr', 'title')
                    .should('eq', '2020-12-01');
            });

            // if first value is null, set panelValue to the other date
            cy.mount(<RangePicker defaultVisible defaultValue={[null, defaultVal]} />);
            cy.get('.next-calendar2-cell-current')
                .first()
                .invoke('attr', 'title')
                .should('eq', '2020-11-01');
        });

        it('format', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    defaultValue={defaultVal}
                    defaultVisible
                    format={v => `Custom: ${v.format('YYYY/MM/DD')}`}
                    onChange={(v, vStr) => handleChange(vStr)}
                />
            );
            checkInputValue('Custom: 2020/12/12');
            clickDate('2020-12-14');
            checkInputValue('Custom: 2020/12/14');
            cy.wrap(handleChange).should('be.calledWith', 'Custom: 2020/12/14');

            // RangePicker
            const handleChangeRangePicker = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    format="x"
                    onChange={(v, strVal) => handleChangeRangePicker(strVal)}
                />
            );
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            checkInputValue([dayjs('2020-12-12').format('x'), dayjs('2020-12-14').format('x')]);
            cy.wrap(handleChangeRangePicker).should('be.calledWith', [
                dayjs('2020-12-12').format('x'),
                dayjs('2020-12-14').format('x'),
            ]);

            // RangePicker outputFormat array
            const handleChangeRangePickerFormat = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    // @ts-expect-error 不能将类型(v: Dayjs) => number分配给类型(v: Dayjs) => string
                    format={['YYYY', (v: Dayjs) => v.valueOf()]}
                    onChange={(v, strVal) => handleChangeRangePickerFormat(strVal)}
                />
            );
            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-14');
            clickOk();
            checkInputValue([dayjs('2020-12-12').format('YYYY'), dayjs('2020-12-14').format('x')]);
            cy.wrap(handleChangeRangePickerFormat).should('be.calledWith', [
                dayjs('2020-12-12').format('YYYY'),
                Number(dayjs('2020-12-14').format('x')),
            ]);
        });

        it('outputFormat', () => {
            const handleChange = cy.spy();
            const handleOk = cy.spy();
            cy.mount(
                <DatePicker
                    defaultValue={defaultVal}
                    defaultVisible
                    outputFormat="x"
                    onChange={v => handleChange(v)}
                />
            ).as('Demo');
            clickDate('2020-12-13');
            cy.wrap(handleChange).should('be.calledWith', dayjs('2020-12-13').format('x'));

            cy.rerender('Demo', {
                showTime: true,
                outputFormat(v: Dayjs) {
                    return v.valueOf();
                },
                onOk: (v: Dayjs) => handleOk(v),
                onChange: (v: Dayjs) => handleChange(v),
            });
            clickDate('2020-12-12');
            clickOk();
            cy.wrap(handleOk).should('be.calledWith', dayjs(defaultVal).valueOf());
            cy.wrap(handleChange).should('be.calledWith', dayjs(defaultVal).valueOf());

            // RangePicker
            const handleChangeRangePicker = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    outputFormat="x"
                    onChange={v => handleChangeRangePicker(v)}
                />
            );
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            cy.wrap(handleChangeRangePicker).should('be.calledWith', [
                dayjs('2020-12-12').format('x'),
                dayjs('2020-12-14').format('x'),
            ]);

            // RangePicker outputFormat array
            const handleChangeOutputFormat = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    // @ts-expect-error 不能将类型(v: Dayjs) => number分配给类型(v: Dayjs) => string
                    outputFormat={['YYYY', (v: Dayjs) => v.valueOf()]}
                    onChange={v => handleChangeOutputFormat(v)}
                />
            );
            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-14');
            clickOk();
            cy.wrap(handleChangeOutputFormat).should('be.calledWith', [
                dayjs('2020-12-12').format('YYYY'),
                Number(dayjs('2020-12-14').format('x')),
            ]);
        });
    });

    describe('controlled', () => {
        it('value', () => {
            let defaultValue: string | string[] = '2020-12-12';
            let newValue: string | string[] = '2021-11-13';

            [
                [DatePicker, '2020-12-12', '2021-11-13'],
                [MonthPicker, '2020-12', '2021-11'],
                [YearPicker, '2020', '2021'],
                [WeekPicker, '2020-50周', '2021-45周'],
                [RangePicker, ['2020-12-12', '2021-11-13'], ['2030-11-12', '2041-01-13']],
            ].forEach(([Picker, defaultVal, newVal]) => {
                if (Picker === RangePicker) {
                    defaultValue = defaultVal as string[];
                    newValue = newVal as string[];
                }

                const PickerComponent = Picker as React.ComponentType<any>;
                cy.mount(<PickerComponent defaultValue={defaultValue} />).as('Demo');
                checkInputValue(defaultVal as string | string[]);

                cy.rerender('Demo', {
                    value: newValue,
                });
                checkInputValue(newVal as string | string[]);
            });
        });

        it('visible', () => {
            cy.mount(<DatePicker visible={false} />).as('Demo');
            cy.get('.next-date-picker2-wrapper').should('not.exist');

            cy.rerender('Demo', {
                visible: true,
            });
            cy.get('.next-date-picker2-wrapper').should('have.length', 1);
        });
    });

    describe('actions', () => {
        it('dateSelect && TimeSelect', () => {
            const onChangeSpy = cy.spy((...args: [Dayjs, string]) => {
                expect(checkOutput(...args)).to.be.true;
            });
            cy.mount(
                <DatePicker
                    defaultValue={defaultVal}
                    showTime
                    defaultVisible
                    onChange={onChangeSpy}
                />
            );
            clickDate('2020-12-13');
            checkInputValue('2020-12-13 00:00:00');
            clickTime('12');
            checkInputValue('2020-12-13 12:00:00');
            clickTime('12', 'minute');
            checkInputValue('2020-12-13 12:12:00');
            clickTime('12', 'second');
            checkInputValue('2020-12-13 12:12:12');
            clickOk();
            cy.wrap(onChangeSpy).should('have.been.called');
        });

        it('showOk', () => {
            const onChangeSpy = cy.spy((...args: [Dayjs, string]) => {
                expect(checkOutput(...args)).to.be.true;
            });
            const onVisibleChangeSpy = cy.spy();
            cy.mount(
                <div>
                    <div className="blank-content" />
                    <DatePicker
                        defaultValue={defaultVal}
                        showTime
                        defaultVisible
                        onVisibleChange={onVisibleChangeSpy}
                        onChange={onChangeSpy}
                    />
                </div>
            );
            cy.get('.blank-content').click({ force: true });
            cy.wrap(onVisibleChangeSpy).should('have.been.called');
        });

        it('RangePicker & showTime', () => {
            // @ts-expect-error 不能将类型"string"分配给类型"Dayjs"
            cy.mount(<RangePicker defaultPanelValue={defaultVal} defaultVisible showTime />);
            clickDate('2020-12-12');
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            checkInputValue(['2020-12-12 12:12:12', '']);
            clickOk();
            clickDate('2020-12-13');
            clickOk();
            checkInputValue(['2020-12-12 12:12:12', '2020-12-13 12:12:12']);
            changeInput('2020-12-13 12:12:35', 1);
            clickOk();
            checkInputValue(['2020-12-12 12:12:12', '2020-12-13 12:12:35']);
        });

        it('RangePicker cell class names', () => {
            // @ts-expect-error 不能将类型"string"分配给类型"Dayjs"
            cy.mount(<RangePicker defaultPanelValue={defaultVal} defaultVisible />);

            clickDate('2020-12-13');

            hasClassNames(
                findDate('2020-12-13'),
                'next-calendar2-cell-range-begin next-calendar2-cell-range-begin-single'
            ).then(result => {
                expect(result).to.be.true;
            });

            hasClassNames(findDate('2020-12-12'), 'next-calendar2-cell-disabled').then(result => {
                expect(result).to.be.true;
            });

            findDate('2020-12-15').trigger('mouseover');

            cy.wait(1000).then(() => {
                ['2020-12-13', '2020-12-14', '2020-12-15'].every(v =>
                    hasClassNames(findDate(v), 'next-calendar2-cell-hover').then(result => {
                        expect(result).to.be.true;
                    })
                );
                hasClassNames(findDate('2020-12-15'), 'next-calendar2-cell-hover-end').then(
                    result => {
                        expect(result).to.be.true;
                    }
                );
                findDate('2020-12-15').trigger('mouseout');
                cy.wait(200).then(() => {
                    ['2020-12-13', '2020-12-14', '2020-12-15'].every(v =>
                        hasClassNames(findDate(v), 'next-calendar2-cell-hover').then(result => {
                            expect(result).to.be.false;
                        })
                    );
                });
            });
        });

        it('RangePicker panelValue', () => {
            cy.mount(<RangePicker defaultValue={['2020-12-12', '2021-02-13']} defaultVisible />);
            findDate('2020-12-12').should('exist');
            findDate('2021-01-12').should('exist');
            findInput(1).focus();
            findDate('2021-01-12').should('exist');
            findDate('2021-02-12').should('exist');
            findInput(0).focus();
            findDate('2020-12-12').should('exist');
            findDate('2021-01-12').should('exist');
        });

        it('Switch PanelMode', () => {
            let mode = 'date';
            let panelValue: string;

            const handleOnPanelChange = cy.spy();
            cy.mount(
                <DatePicker
                    onPanelChange={(v, m) => {
                        handleOnPanelChange(v.format('YYYY-MM-DD'), m);
                    }}
                    defaultValue={defaultVal}
                    defaultVisible
                />
            );
            panelValue = '2019-12-12';
            cy.get('button.next-calendar2-header-left-btn').eq(0).click();
            panelValue = '2019-11-12';
            cy.get('button.next-calendar2-header-left-btn').eq(1).click();

            panelValue = '2019-12-12';
            cy.get('button.next-calendar2-header-right-btn').eq(0).click();
            panelValue = '2020-12-12';
            cy.get('button.next-calendar2-header-right-btn').eq(1).click();
            cy.wrap(handleOnPanelChange).should('be.calledWith', panelValue, mode);

            mode = 'month';
            cy.get('.next-calendar2-header-text-field button').eq(1).click();
            cy.wrap(handleOnPanelChange).should('be.calledWith', panelValue, mode);

            mode = 'date';
            panelValue = '2020-11-01';
            clickDate('2020-11', 'month');
            cy.wrap(handleOnPanelChange).should('be.calledWith', panelValue, mode);

            mode = 'year';
            cy.get('.next-calendar2-header-text-field button').eq(0).click();
            cy.wrap(handleOnPanelChange).should('be.calledWith', panelValue, mode);

            mode = 'decade';
            cy.get('.next-calendar2-header-text-field button').eq(0).click();
            cy.wrap(handleOnPanelChange).should('be.calledWith', panelValue, mode);

            // RangePicker
            const handleOnPanelChangeRangePicker = cy.spy();
            cy.mount(
                <RangePicker
                    onPanelChange={(v, m) => {
                        handleOnPanelChangeRangePicker(v.format('YYYY-MM-DD'), m);
                    }}
                    defaultValue={defaultRangeVal}
                    defaultVisible
                />
            );
            mode = 'date';
            panelValue = defaultRangeVal[0];
            panelValue = '2019-12-12';
            cy.get('button.next-calendar2-header-left-btn').eq(0).click();
            cy.wrap(handleOnPanelChangeRangePicker).should('be.calledWith', panelValue, mode);

            panelValue = '2019-11-12';
            cy.get('button.next-calendar2-header-left-btn').eq(1).click();
            cy.wrap(handleOnPanelChangeRangePicker).should('be.calledWith', panelValue, mode);

            panelValue = '2019-12-12';
            cy.get('button.next-calendar2-header-right-btn').eq(2).click();

            panelValue = '2020-12-12';
            cy.get('button.next-calendar2-header-right-btn').eq(3).click();
        });

        it('RangePicker switch input', () => {
            cy.mount(<RangePicker defaultValue={defaultRangeVal} />);
            findInput(0).click();
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            checkInputValue(['2020-12-12', '2020-12-14']);

            findInput(1).click();
            clickDate('2021-01-24');
            cy.get('.next-overlay-wrapper').should('have.length', 1);
            clickDate('2020-12-15');
            checkInputValue(['2020-12-15', '2021-01-24']);
        });

        it('should change input value when switch mode', () => {
            const inputValue = {
                date: ['2023-10-16', '2023-10-22'],
                week: ['2023-42周', '2023-42周'],
            };

            type Mode = 'date' | 'month' | 'week' | 'quarter' | 'year';
            let mode: Mode = DATE as 'date';
            cy.mount(<RangePicker value={inputValue[DATE as 'date']} mode={mode} />).as('Demo');
            checkInputValue(inputValue[mode]);

            mode = WEEK as 'week';
            cy.rerender('Demo', { mode });
            checkInputValue(inputValue[mode]);
        });

        it('clear input', () => {
            cy.mount(<RangePicker visible defaultValue={defaultRangeVal} />);
            findInput(0).click();
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            cy.get('.next-input-clear-icon').click();
            checkInputValue(['', '']);

            // clear 之后 focus 第一个 input 元素
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            checkInputValue(['2020-12-12', '2020-12-14']);
        });

        it('value check', () => {
            // empty value
            cy.mount(<RangePicker value={['', '']} />).as('Demo');
            checkInputValue(['', '']);

            [
                [null, null],
                ['', ''],
                [undefined, undefined],
            ].map(value => {
                cy.rerender('Demo', { value });
                checkInputValue(['', '']);
            });

            // illegal value
            cy.rerender('Demo', { value: ['2021', '2020'] });
            checkInputValue(['2021-01-01', '']);

            // illegal value + disabled
            cy.rerender('Demo', { value: ['2021', '2020'], disabled: [false, true] });
            checkInputValue(['', '2020-01-01']);

            cy.rerender('Demo', {
                value: ['2020-01-01', '2020-01-02'],
                disabled: false,
                visible: true,
            });
            clickDate('2020-01-03');
            checkInputValue(['2020-01-03', '']);

            // illegal value + showOk
            cy.mount(<RangePicker value={['2020-01-01', '2020-01-02']} showTime visible />);
            clickDate('2020-01-03');
            cy.get('.next-calendar2-cell-range-end-single').should('exist');
            cy.get('.next-calendar2-cell-range-begin-single').should('exist');
        });
    });

    describe('event', () => {
        it('onChange', () => {
            let changeCount = 0;
            cy.wrap({ changeCount: 0 }).as('changeCountObj');

            cy.mount(
                <DatePicker
                    defaultValue={defaultVal}
                    visible
                    onChange={() => {
                        ++changeCount;
                        cy.get<{ changeCount: number }>('@changeCountObj').then(obj => {
                            obj.changeCount = changeCount;
                        });
                    }}
                />
            );

            clickDate(defaultVal);
            cy.get('@changeCountObj').its('changeCount').should('eq', 0);

            clickDate('2020-12-13');
            cy.get('@changeCountObj').its('changeCount').should('eq', 1);
        });

        it('onChange & onOk on showTime', () => {
            let changeCount = 0;
            let okCount = 0;
            cy.wrap({ changeCount: 0 }).as('changeCountObj');
            cy.wrap({ okCount: 0 }).as('okCountObj');

            cy.mount(
                <DatePicker
                    visible
                    showTime
                    defaultValue={defaultVal}
                    onChange={() => {
                        ++changeCount;
                        cy.get<{ changeCount: number }>('@changeCountObj').then(obj => {
                            obj.changeCount = changeCount;
                        });
                    }}
                    onOk={() => {
                        ++okCount;
                        cy.get<{ okCount: number }>('@okCountObj').then(obj => {
                            obj.okCount = okCount;
                        });
                    }}
                />
            );

            clickDate(defaultVal);
            cy.get('@changeCountObj').its('changeCount').should('eq', 0);

            clickDate('2020-12-13');
            cy.get('@changeCountObj').its('changeCount').should('eq', 0);

            clickOk();
            cy.get('@changeCountObj').its('changeCount').should('eq', 1);
            cy.get('@okCountObj').its('okCount').should('eq', 1);
        });

        it('should trigger onChange when use controlled value', () => {
            let value = defaultVal;
            let triggered = false;
            cy.wrap({ triggered: false }).as('triggeredObj');
            const handleOnChange = cy.spy();

            cy.mount(
                <DatePicker
                    value={value}
                    defaultVisible
                    onChange={(_, dateStr) => {
                        triggered = !triggered;
                        cy.get<{ triggered: boolean }>('@triggeredObj').then(obj => {
                            obj.triggered = triggered;
                        });
                        handleOnChange(dateStr);
                    }}
                />
            );
            clickDate(value);
            cy.get('@triggeredObj').its('triggered').should('eq', false);

            value = '2020-12-13';
            clickDate(value);
            cy.get('@triggeredObj').its('triggered').should('eq', true);
            cy.wrap(handleOnChange).should('be.calledWith', value);
        });
    });

    describe('keydown', () => {
        it('ENTER', () => {
            let visibleChanged = false;
            cy.wrap({ visibleChanged: false }).as('visibleChangedObj');
            const onVisibleChange = () => {
                visibleChanged = !visibleChanged;
                cy.get<{ visibleChanged: boolean }>('@visibleChangedObj').then(obj => {
                    obj.visibleChanged = visibleChanged;
                });
            };

            cy.mount(<DatePicker defaultVisible onVisibleChange={onVisibleChange} />);
            findInput().trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.get('@visibleChangedObj').its('visibleChanged').should('eq', true);
        });
    });

    describe('class props', () => {
        it('displayName', () => {
            [
                [RangePicker, 'RangePicker2'],
                [MonthPicker, 'MonthPicker2'],
                [YearPicker, 'YearPicker2'],
                [WeekPicker, 'WeekPicker2'],
                [DatePicker, 'DatePicker2'],
            ].forEach(([component, displayName]) => {
                expect(
                    (
                        component as React.ForwardRefExoticComponent<any> & {
                            displayName?: string;
                        }
                    ).displayName
                ).to.equal(displayName);
            });
        });
    });

    describe('issues', () => {
        beforeEach(() => {
            const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

            nodeListArr.forEach((node: Element) => {
                node.parentNode?.removeChild(node);
            });
        });

        // fix: https://github.com/alibaba-fusion/next/issues/3877
        it('should not select default endDate', () => {
            const currentDate = dayjs();
            const currentDateStr = currentDate.format('YYYY-MM-DD');
            const disabledDate = function (date: Dayjs, mode: string) {
                return currentDate.date() !== date.date();
            };
            cy.mount(<RangePicker visible showTime disabledDate={disabledDate} />);
            clickDate(currentDateStr);
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            checkInputValue([`${currentDateStr} 12:12:12`, '']);
            clickOk();
            clickTime('16');
            clickTime('16', 'minute');
            clickTime('35', 'second');
            clickOk();
            checkInputValue([`${currentDateStr} 12:12:12`, `${currentDateStr} 16:16:35`]);
        });
        // https://github.com/alibaba-fusion/next/issues/2641
        it('value controlled issue', () => {
            function App() {
                const [value, setVal] = useState(dayjs(defaultVal));
                return (
                    <DatePicker
                        visible
                        defaultPanelValue={dayjs(defaultVal)}
                        value={value}
                        onChange={(val: Dayjs) => setVal(val)}
                    />
                );
            }
            cy.mount(<App />);
            clickDate('2020-12-13');
            checkInputValue('2020-12-13');
        });

        // https://github.com/alibaba-fusion/next/issues/2664
        it('value controlled issue2', () => {
            const App = () => {
                const [value, setValue] = React.useState(['2021-05', '2021-08']);
                return (
                    <div className="app">
                        <button onClick={() => setValue(['2021-02-03', '2021-02-03'])} />
                        <RangePicker value={value} />
                    </div>
                );
            };
            cy.mount(<App />);
            cy.get('button').click();
            checkInputValue(['2021-02-03', '2021-02-03']);
            cy.get('input').eq(0).click();
            checkInputValue(['2021-02-03', '2021-02-03']);
            clickDate('2021-02-04');
            cy.get('input').eq(1).click();
            clickDate('2021-02-05');
            checkInputValue(['2021-02-03', '2021-02-03']);
        });

        it('value controlled issue on Form', () => {
            class App extends React.Component {
                field = new Field(this);

                render() {
                    return (
                        <Form field={this.field}>
                            <FormItem label="RangePicker:">
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    // @ts-expect-error 不能将类型“string”分配给类型“Dayjs”
                                    defaultPanelValue={'2020-12-13'}
                                    visible
                                    showTime
                                    name="rangeDate"
                                />
                            </FormItem>
                        </Form>
                    );
                }
            }
            cy.mount(<App />);
            clickDate('2020-12-13');
            checkInputValue('2020-12-13');
        });

        it('should support triggerType', () => {
            cy.mount(<DatePicker popupTriggerType={'hover'} />);

            cy.get('.next-date-picker2 > div')
                .trigger('mouseover')
                .wait(300)
                .then(() => {
                    cy.get('.next-overlay-wrapper').should('exist');
                });

            cy.get('.next-calendar2-body')
                .trigger('mouseover')
                .wait(200)
                .then(() => {
                    cy.get('.next-overlay-wrapper').should('exist');
                });

            cy.get('.next-date-picker2 > div').trigger('mouseout');

            cy.get('.next-calendar2-body')
                .trigger('mouseout')
                .wait(1000)
                .then(() => {
                    cy.get('.next-overlay-wrapper').should('not.exist');
                });
        });

        it('should reset value', () => {
            const App = () => {
                return (
                    <div className="app">
                        <RangePicker defaultPanelValue={dayjs(defaultVal)} showTime />
                        <button className="btn" />
                    </div>
                );
            };
            cy.mount(<App />);
            cy.get('input').eq(0).click();

            clickDate('2020-12-12');

            cy.get('button.btn').click();
            document.dispatchEvent(new Event('click'));

            checkInputValue(['', '']);
        });

        // https://github.com/alibaba-fusion/next/issues/3086
        it('fix issue on half disabled & showTime', () => {
            cy.mount(
                <RangePicker
                    showTime
                    visible
                    disabled={[true, false]}
                    value={['2021-01-12 10:00:00', '2021-01-12 09:00:00']}
                />
            ).as('Demo');
            checkInputValue(['2021-01-12 10:00:00', '']);

            cy.rerender('Demo', { disabled: [false, true] });
            checkInputValue(['', '2021-01-12 09:00:00']);

            cy.rerender('Demo', { disabled: true });
            checkInputValue(['2021-01-12 10:00:00', '']);

            cy.rerender('Demo', { disabled: false });
            checkInputValue(['2021-01-12 10:00:00', '']);

            cy.rerender('Demo', {
                disabled: false,
                value: ['2021-01-12 10:00:00', '2021-01-12 10:00:00'],
            });
            checkInputValue(['2021-01-12 10:00:00', '2021-01-12 10:00:00']);

            findInput(1).focus();
            changeInput('2021-01-12 09:00:00', 1);
            clickOk();
            checkInputValue(['', '2021-01-12 09:00:00']);
        });

        // https://github.com/alibaba-fusion/next/issues/3186
        it('fix panelValue', () => {
            cy.mount(<RangePicker visible defaultPanelValue={dayjs(defaultVal)} />);
            findInput(0).focus();
            findInput(1).focus();
            findDate('2021-01-31').should('exist');
        });

        it('should support value empty when showTime', () => {
            cy.mount(
                <div>
                    <RangePicker visible showTime defaultPanelValue={dayjs(defaultVal)} />
                    <button id="test">Blank Area</button>
                </div>
            );
            findDate('2020-12-12').click();
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            clickOk();
            cy.get('#test').click();
            checkInputValue(['2020-12-12 12:12:12', '']);
        });

        it('should reset to previous value when input a disableValue', () => {
            const currentDate = dayjs(defaultVal);
            // Disable all dates before currentDate: 2020-12-12
            const disabledDate = function (date: Dayjs, mode: string) {
                switch (mode) {
                    case 'date':
                        return date.valueOf() <= currentDate.valueOf();
                    case 'year':
                        return date.year() < currentDate.year();
                    case 'month':
                        return (
                            date.year() * 100 + date.month() <
                            currentDate.year() * 100 + currentDate.month()
                        );
                    default:
                        return false;
                }
            };

            cy.mount(<DatePicker disabledDate={disabledDate} defaultValue="2020-12-25" />);

            changeInput('2020-11-11');
            findInput().trigger('keydown', { keyCode: KEYCODE.ENTER });
            checkInputValue('2020-12-25');
        });

        it('should support state', () => {
            cy.mount(<DatePicker state="loading" />);
            cy.get('.next-icon-loading').should('have.length', 1);
        });

        it('WeekPicker should format value correctly when date is 01-01', () => {
            cy.mount(<WeekPicker defaultValue="2022-01-01" />);
            checkInputValue('2021-52周');

            cy.mount(<WeekPicker defaultValue="2022-01-01" format="YYYY-wo" />);
            checkInputValue('2021-52周');
        });

        // fix https://github.com/alibaba-fusion/next/issues/4767
        it('should pass inputProps to trigger', () => {
            const handleTrigger = cy.spy();
            cy.mount(
                <DatePicker
                    trigger={(inputProps: { onInputTypeChange: unknown }) => {
                        handleTrigger(typeof inputProps.onInputTypeChange);
                        return <div>test</div>;
                    }}
                />
            );
            cy.wrap(handleTrigger).should('be.calledWith', 'function');
        });

        // fix https://github.com/alibaba-fusion/next/issues/4775
        it('RangePicker disabledDate method should return the correct panel mode', () => {
            let panelMode = 'date';
            const handleDisabledDateSpy = cy.spy();

            cy.mount(
                <RangePicker
                    disabled={[true, false]}
                    disabledDate={(date, mode) => {
                        handleDisabledDateSpy(mode);
                        return false;
                    }}
                    mode="date"
                    // @ts-expect-error 不能将类型“string”分配给类型“Dayjs”
                    defaultPanelValue={defaultVal}
                />
            );
            findInput(1).click();
            cy.get('.next-calendar2-table-date').should('exist');
            findDate('2021-01-31').trigger('mousemove');
            cy.wrap(handleDisabledDateSpy).should('be.calledWith', panelMode);

            panelMode = 'month';
            cy.get('.next-range-picker-left .next-calendar2-header-text-field button')
                .eq(1)
                .click();
            cy.get('.next-calendar2-table-month').should('exist');
            cy.wrap(handleDisabledDateSpy).should('be.calledWith', panelMode);

            panelMode = 'year';
            cy.get('.next-range-picker-left .next-calendar2-header-text-field button').click();

            cy.get('.next-calendar2-table-year').should('exist');
            cy.wrap(handleDisabledDateSpy).should('be.calledWith', panelMode);

            panelMode = 'decade';
            cy.get('.next-range-picker-left .next-calendar2-header-text-field button').click();
            cy.get('.next-calendar2-table-decade').should('exist');
            cy.wrap(handleDisabledDateSpy).should('be.calledWith', panelMode);
        });

        // fix https://github.com/alibaba-fusion/next/issues/4788
        it('The English translation does not comply with international standards', () => {
            cy.mount(
                <ConfigProvider locale={en}>
                    <DatePicker defaultValue="2020-02-02" format="MMM D, YYYY" defaultVisible />
                </ConfigProvider>
            );
            checkInputValue('Feb 2, 2020');
            cy.get(`.next-calendar2-header-text-field`).should('have.text', 'Feb2020');
        });

        // fix https://github.com/alibaba-fusion/next/issues/4790
        it('Unable to enter space to enter time', () => {
            cy.mount(<DatePicker showTime />);
            changeInput('2020-11-11');
            findInput().trigger('keydown', { keyCode: KEYCODE.SPACE });
            checkInputValue('2020-11-11 ');

            cy.mount(<RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />);
            changeInput('2020-11-11', 0);
            findInput(0).trigger('keydown', { keyCode: KEYCODE.SPACE });
            checkInputValue(['2020-11-11 ', '']);
        });

        // fix https://github.com/alibaba-fusion/next/issues/4896
        it('After entering a customized date format and pressing Enter, the value should not change', () => {
            const handleOnChange = cy.spy();
            function App() {
                const [value, setValue] = useState(dayjs());
                return (
                    <DatePicker
                        defaultVisible
                        value={value}
                        format={'DD/MM/YYYY'}
                        outputFormat="YYYY-MM-DD"
                        onChange={v => {
                            setValue(v), handleOnChange(v);
                        }}
                    />
                );
            }
            cy.mount(<App />);
            changeInput('12/02/2020');
            findInput().trigger('keydown', { keyCode: KEYCODE.ENTER });
            checkInputValue('12/02/2020');
            cy.wrap(handleOnChange).should(
                'be.calledWith',
                dayjs('12/02/2020', 'DD/MM/YYYY').format('YYYY-MM-DD')
            );
        });

        // fix https://github.com/alibaba-fusion/next/issues/3006
        it('Support defaultValue & value for quarter', () => {
            let defaultValueList = [
                [
                    { in: '2021-Q2', out: '2021-Q2' },
                    { in: '2021-Q3', out: '2021-Q3' },
                ],
                [
                    { in: '2021-4-1', out: '2021-Q2' },
                    { in: '2021-8-1', out: '2021-Q3' },
                ],
            ];
            defaultValueList.forEach(defaultValue => {
                const inValue = defaultValue.map(item => item.in);
                const outValue = defaultValue.map(item => item.out);
                cy.mount(<RangePicker defaultValue={inValue} mode="quarter" />);
                checkInputValue(outValue);
            });

            let newDefaultValueList = [
                { in: '2021-Q3', out: '2021-Q3' },
                { in: '2021-7-1', out: '2021-Q3' },
            ];
            newDefaultValueList.forEach(defaultValue => {
                const { in: inValue, out: outValue } = defaultValue;
                cy.mount(<QuarterPicker defaultValue={inValue} />);
                checkInputValue(outValue);
            });

            let valueList = [
                [
                    { in: '2021-Q2', out: '2021-Q2' },
                    { in: '2021-Q3', out: '2021-Q3' },
                ],
                [
                    { in: '2021-4-1', out: '2021-Q2' },
                    { in: '2021-8-1', out: '2021-Q3' },
                ],
            ];
            valueList.forEach(value => {
                const inValue = value.map(item => item.in);
                const outValue = value.map(item => item.out);
                cy.mount(<RangePicker value={inValue} mode="quarter" />);
                checkInputValue(outValue);
            });

            let newValueList = [
                { in: '2021-Q3', out: '2021-Q3' },
                { in: '2021-7-1', out: '2021-Q3' },
            ];
            newValueList.forEach(value => {
                const { in: inValue, out: outValue } = value;
                cy.mount(<QuarterPicker value={inValue} />);
                checkInputValue(outValue);
            });
        });
    });
});

function findInput(idx?: number) {
    if (idx !== undefined) {
        return cy.get('.next-input > input').eq(idx);
    }
    return cy.get('.next-input > input');
}

function changeInput(val: string, idx?: number) {
    return findInput(idx).clear().type(val);
}

function findDate(strVal: string, mode = 'date') {
    return cy.get(`.next-calendar2-table-${mode} [title="${strVal}"]`);
}

function clickDate(strVal: string, mode = 'date') {
    findDate(strVal, mode).click();
}

function clickTime(strVal: string | number, mode = 'hour') {
    cy.get(`.next-time-picker2-menu-${mode} [title=${strVal}]`).click();
}

function clickOk() {
    cy.get('button.next-date-picker2-footer-ok').click();
}

function checkOutput(dateObj: Dayjs, dateStr: string) {
    return dayjs.isDayjs(dateObj) && typeof dateStr === 'string';
}

function checkInputValue(compareValue?: string[] | string) {
    cy.get('.next-date-picker2-input input').then($inputEl => {
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

function hasClassNames(
    node: Cypress.Chainable<JQuery<HTMLElement>>,
    classNames: string | string[]
) {
    if (typeof classNames === 'string') {
        classNames = classNames.trim().split(/\s+/);
    }
    return node.then($el => {
        const el = $el[0];
        return (classNames as string[]).every((className: string) =>
            el.classList.contains(className)
        );
    });
}

function showTimePanel() {
    return cy.get('.next-time-picker2-panel');
}
