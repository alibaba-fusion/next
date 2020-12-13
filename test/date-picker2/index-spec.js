import React, { useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import moment from 'moment';
import DatePicker from '../../src/date-picker2/index';
// import { DATE_PANEL_MODE } from '../../src/date-picker2/constant';
import { KEYCODE } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;

// const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PANEL_MODE;

function getStrValue(wrapper) {
    const inputEl = wrapper.find('.next-date-picker2-input input');
    return inputEl.length === 1 ? inputEl.instance().value : inputEl.map(el => el.instance().value);
}

function hasClassNames(node, classNames) {
    const el = node.instance();

    classNames = Array.isArray(classNames) ? classNames : classNames.trim().split(/\s+/);

    return classNames.every(className => el.classList.contains(className));
}

/* eslint-disable */
describe('Picker', () => {
    let wrapper;

    afterEach(() => {
        wrapper && wrapper.length && wrapper.unmount();
        wrapper = null;
    });

    describe('props', () => {
        it('basic render', () => {
            wrapper = mount(<DatePicker />);
            assert(wrapper.find('.next-date-picker2').length === 1);
        });

        it('type of value', () => {
            [new Date(2020, 11, 12), 1607753163910, dayjs('2020-12-12'), moment('2020-12-12')].forEach(v => {
                wrapper = mount(<DatePicker defaultValue={v} />);
                assert(getStrValue(wrapper) === '2020-12-12');
                wrapper.unmount();
                wrapper = null;
            });
        });

        it('mode && type', () => {
            ['date', 'range'].forEach(type => {
                ['date', 'week', 'month', 'quarter', 'year'].forEach(mode => {
                    wrapper = mount(<DatePicker defaultVisible type={type} mode={mode} />);

                    assert(wrapper.find(`.next-${type}-picker2-panel`).length === 1);
                    assert((wrapper.find(`.next-calendar2-table-${mode}`).length === type) === 'range' ? 2 : 1);

                    wrapper.unmount();
                    wrapper = null;
                });
            });
        });

        it('disabled', () => {
            // DatePicker
            wrapper = mount(<DatePicker disabled />);
            assert(hasClassNames(wrapper.find('.next-date-picker2-input-date'), 'next-date-picker2-input-disabled'));
            wrapper.unmount();

            // Range
            wrapper = mount(<RangePicker disabled />);
            assert(hasClassNames(wrapper.find('.next-date-picker2-input-range'), 'next-date-picker2-input-disabled'));
            wrapper.unmount();

            wrapper = mount(<RangePicker disabled={[true, false]} />);
            assert(!hasClassNames(wrapper.find('.next-date-picker2-input-range'), 'next-date-picker2-input-disabled'));
            assert(hasClassNames(wrapper.find('.next-input').at(0), 'next-disabled'));
            assert(!hasClassNames(wrapper.find('.next-input').at(1), 'next-disabled'));
        });

        it('showTime', () => {
            [DatePicker.RangePicker].forEach(Picker => {
                const defaultValue =
                    Picker === DatePicker ? '2020-12-12 12:12:12' : ['2020-12-12 12:12:12', '2020-12-13 13:13:12'];

                wrapper = mount(<Picker defaultValue={defaultValue} showTime defaultVisible />);

                assert.deepEqual(getStrValue(wrapper), defaultValue);
                assert(wrapper.find('.next-time-picker2-panel').length === 1);
                assert(wrapper.find('.next-time-picker2-menu').length === 3);
            });
        });

        it('timePanelProps', () => {
            const defaultValue = '2020-12-12 12:12:12';

            wrapper = mount(
                <DatePicker defaultValue={defaultValue} showTime defaultVisible timePanelProps={{ format: 'HH:mm' }} />
            );
            const timeTextSltor = '.next-date-time-picker-wrapper .next-calendar2-header-text-field';
            assert(wrapper.find('.next-time-picker2-menu').length === 2);
            assert(wrapper.find(timeTextSltor).instance().textContent === '12:12');
        });

        it('disabledDate', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                wrapper = mount(
                    <Picker
                        showTime
                        defaultVisible
                        disabledDate={v => v.isAfter(dayjs('2020-12-12'))}
                        disabledTime={{
                            disabledHours: v => v > 18,
                            disabledMinutes: v => v > 18,
                        }}
                        timePanelProps={{ disabledSeconds: v => v > 18 }}
                    />
                );

                ['hour', 'second'].forEach(u => {
                    assert(
                        hasClassNames(
                            wrapper.find(`.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=19]`),
                            'next-disabled'
                        )
                    );
                    assert(
                        !hasClassNames(
                            wrapper.find(`.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=18]`),
                            'next-disabled'
                        )
                    );
                });

                assert(
                    !hasClassNames(
                        wrapper.find('.next-calendar2-cell[title="2020-12-12"]'),
                        'next-calendar2-cell-disabled'
                    )
                );

                assert(
                    hasClassNames(
                        wrapper.find('.next-calendar2-cell[title="2020-12-13"]'),
                        'next-calendar2-cell-disabled'
                    )
                );

                wrapper.unmount();
            });
        });

        it('placeholder', () => {
            // DatePicker
            wrapper = mount(<DatePicker placeholder="placeholder" />);
            assert(
                wrapper
                    .find('.next-input input')
                    .instance()
                    .getAttribute('placeholder') === 'placeholder'
            );
            wrapper.unmount();

            // RangePicker
            wrapper = mount(<RangePicker placeholder="placeholder" />);

            assert.deepEqual(
                wrapper.find('.next-input input').map(node => node.instance().getAttribute('placeholder')),
                ['placeholder', 'placeholder']
            );
            wrapper.unmount();

            wrapper = mount(<RangePicker placeholder={['begin', 'end']} />);
            assert.deepEqual(
                wrapper.find('.next-input input').map(node => node.instance().getAttribute('placeholder')),
                ['begin', 'end']
            );
        });

        it('preview', () => {
            // DatePicker
            wrapper = mount(<DatePicker defaultValue="2020-12-12" isPreview />);
            assert.equal(wrapper.find('.next-form-preview').prop('children'), '2020-12-12');
            wrapper.unmount();

            // Range
            wrapper = mount(<RangePicker defaultValue={['2020-12-12', '2020-12-13']} isPreview />);
            assert.equal(wrapper.find('.next-form-preview').prop('children'), '2020-12-12-2020-12-13');
            wrapper.unmount();

            // renderPreview
            wrapper = mount(
                <DatePicker
                    defaultValue="2020-12-12"
                    isPreview
                    renderPreview={(v, props) => {
                        assert(v.format('YYYY-MM-DD'), '2020-12-12');
                        assert(props);
                    }}
                />
            );
            wrapper.unmount();

            wrapper = mount(
                <RangePicker
                    defaultValue={['2020-12-12', '2020-12-13']}
                    isPreview
                    renderPreview={(v, props) => {
                        assert.deepEqual(v.map(i => i.format('YYYY-MM-DD')), ['2020-12-12', '2020-12-13']);
                        assert(props);
                    }}
                />
            );
            wrapper.unmount();
        });
        // footerRender
        // extraFooterRender
        // onChange
        // onOk
        // hasClear
        // dateCellRender
        // ranges
        // name
        // popupComponent
        // disableChangeMode
        // yearRange
    });

    describe('controlled', () => {
        it('value', () => {
            let defaultValue = '2020-12-12';
            let newValue = '2021-11-13';

            [
                [DatePicker, '2020-12-12', '2021-11-13'],
                [MonthPicker, '2020-12', '2021-11'],
                [YearPicker, '2020', '2021'],
                [WeekPicker, '2020-50周', '2021-45周'],
                [RangePicker, ['2020-12-12', '2021-11-13'], ['2030-11-12', '2041-01-13']],
            ].forEach(([Picker, defaultVal, newVal]) => {
                if (Picker === RangePicker) {
                    defaultValue = defaultVal;
                    newValue = newVal;
                }

                wrapper = mount(<Picker defaultValue={defaultValue} />);
                assert.deepEqual(getStrValue(wrapper), defaultVal);

                wrapper.setProps({ value: newValue });
                assert.deepEqual(getStrValue(wrapper), newVal);

                wrapper.unmount();
            });
        });

        it('visible', () => {
            wrapper = mount(<DatePicker visible={false} />);
            assert(wrapper.find('.next-date-picker2-wrapper').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-date-picker2-wrapper').length === 1);
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
                assert(component.displayName === displayName);
            });
        });
    });
});
