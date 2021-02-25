import React, { useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import moment from 'moment';
import DatePicker from '../../src/date-picker2/index';
import Form from '../../src/form/index';
import Field from '../../src/field/index';
import { DATE_PICKER_MODE } from '../../src/date-picker2/constant';
import { KEYCODE } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });

const { RangePicker, MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker;
const FormItem = Form.Item;

let wrapper;
const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;
const defaultVal = '2020-12-12';
const defaultRangeVal = ['2020-12-12', '2020-12-13'];
const onChange = (...args) => assert(checkOutput(...args));

/* eslint-disable */
describe('Picker', () => {
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
            [DatePicker, RangePicker].forEach(Picker => {
                const defaultValue =
                    Picker === DatePicker ? '2020-12-12 12:12:12' : ['2020-12-12 12:12:12', '2020-12-13 13:13:12'];

                wrapper = mount(<Picker defaultValue={defaultValue} showTime defaultVisible />);

                assert.deepEqual(getStrValue(wrapper), defaultValue);
                assert(showTimePanel());
                assert(wrapper.find('.next-time-picker2-menu').length === 3);
                wrapper.unmount();
            });
        });

        it('timePanelProps', () => {
            const defaultValue = '2020-12-12 12:12:12';

            // showTime for old version
            ['showTime', 'timePanelProps'].forEach(key => {
                const props = {
                    [key]: { format: 'HH:mm' },
                };
                wrapper = mount(<DatePicker defaultValue={defaultValue} showTime defaultVisible {...props} />);
                const timeTextSltor = '.next-date-time-picker-wrapper .next-calendar2-header-text-field';
                assert(wrapper.find('.next-time-picker2-menu').length === 2);
                assert(wrapper.find(timeTextSltor).instance().textContent === '12:12');
                wrapper.unmount();
            });
        });

        it('preset', () => {
            const now = dayjs();
            const datePreset = {
                此刻: () => now,
            };

            ['preset', 'ranges'].forEach(k => {
                wrapper = mount(<DatePicker {...{ [k]: datePreset }} defaultVisible />);
                assert(wrapper.find('.next-date-picker2-footer-preset-only').length === 1);
                wrapper.find('.next-date-picker2-footer .next-btn').simulate('click');
                assert(wrapper.find('.next-date-picker2-footer .next-btn').text() === '此刻');
                assert(getStrValue() === now.format('YYYY-MM-DD'));
                wrapper.unmount();
            });
        });

        it('ignore showTime && timePanelProps', () => {
            const callback = (Picker, mode) => {
                wrapper = mount(<Picker mode={mode} showTime timePanelProps={{ format: 'HH:mm' }} />);
                assert(!showTimePanel());
                wrapper.unmount();
            };

            [MonthPicker, YearPicker, WeekPicker, QuarterPicker].forEach(Picker => callback(Picker));
            [WEEK, MONTH, QUARTER, YEAR].forEach(mode => {
                [DatePicker, RangePicker].forEach(Picker => callback(Picker, mode));
            });
        });

        it('disabledDate', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                wrapper = mount(
                    <Picker
                        showTime
                        defaultVisible
                        defaultPanelValue={defaultVal}
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

        it('default format', () => {
            [
                [DatePicker, 'YYYY-MM-DD'],
                [MonthPicker, 'YYYY-MM'],
                [YearPicker, 'YYYY'],
                [WeekPicker, 'YYYY-wo'],
                [QuarterPicker, 'YYYY-[Q]Q'],
            ].forEach(([Picker, fmt]) => {
                wrapper = mount(<Picker defaultValue={defaultVal} />);
                assert(getStrValue() === dayjs(defaultVal).format(fmt));
                wrapper.unmount();
            });

            [
                [DATE, 'YYYY-MM-DD'],
                [MONTH, 'YYYY-MM'],
                [YEAR, 'YYYY'],
                [WEEK, 'YYYY-wo'],
                [QUARTER, 'YYYY-[Q]Q'],
            ].forEach(([mode, fmt]) => {
                wrapper = mount(<RangePicker mode={mode} defaultValue={defaultRangeVal} />);
                assert.deepEqual(getStrValue(), defaultRangeVal.map(v => dayjs(v).format(fmt)));
                wrapper.unmount();
            });
        });

        it('preview', () => {
            // DatePicker
            wrapper = mount(<DatePicker defaultValue={defaultVal} isPreview />);
            assert.equal(wrapper.find('.next-form-preview').prop('children'), defaultVal);
            wrapper.unmount();

            // Range
            wrapper = mount(<RangePicker defaultValue={defaultRangeVal} isPreview />);
            assert.equal(wrapper.find('.next-form-preview').prop('children'), '2020-12-12-2020-12-13');
            wrapper.unmount();

            // renderPreview
            wrapper = mount(
                <DatePicker
                    defaultValue={defaultVal}
                    isPreview
                    renderPreview={(v, props) => {
                        assert(v.format('YYYY-MM-DD'), defaultVal);
                        assert(props);
                    }}
                />
            );
            wrapper.unmount();

            wrapper = mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    isPreview
                    renderPreview={(v, props) => {
                        assert.deepEqual(v.map(i => i.format('YYYY-MM-DD')), defaultRangeVal);
                        assert(props);
                    }}
                />
            );
            wrapper.unmount();
        });
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

    describe('actions', () => {
        it('dateSelect && TimeSelect', () => {
            wrapper = mount(<DatePicker defaultValue={defaultVal} showTime defaultVisible onChange={onChange} />);
            clickDate('2020-12-13');
            assert(getStrValue() === '2020-12-13 00:00:00');
            clickTime('12');
            assert(getStrValue() === '2020-12-13 12:00:00');
            clickTime('12', 'minute');
            assert(getStrValue() === '2020-12-13 12:12:00');
            clickTime('12', 'second');
            assert(getStrValue() === '2020-12-13 12:12:12');
        });

        it('showOk', () => {
            wrapper = mount(
                <div>
                    <div className="blank-content" />
                    <DatePicker
                        defaultValue={defaultVal}
                        showTime
                        defaultVisible
                        onVisibleChange={() => console.log(9090)}
                        onChange={onChange}
                    />
                </div>
            );
            wrapper.find('.blank-content').simulate('click');
            wrapper.update();
        });

        it('RangePicker & showTime', () => {
            wrapper = mount(<RangePicker defaultPanelValue={defaultVal} defaultVisible showTime />);
            clickDate('2020-12-12');
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            assert.deepEqual(getStrValue(), ['2020-12-12 12:12:12', '']);
            clickOk();
            clickDate('2020-12-13');
            clickOk();
            assert.deepEqual(getStrValue(), ['2020-12-12 12:12:12', '2020-12-13 12:12:12']);
            changeInput('2020-12-13 12:12:35', 1);
            clickOk();
            assert.deepEqual(getStrValue(), ['2020-12-12 12:12:12', '2020-12-13 12:12:35']);
        });

        it('RangePicker cell class names', done => {
            wrapper = mount(<RangePicker defaultPanelValue={defaultVal} defaultVisible />);

            clickDate('2020-12-13');
            assert(
                hasClassNames(
                    findDate('2020-12-13'),
                    'next-calendar2-cell-range-begin next-calendar2-cell-range-begin-single'
                )
            );
            assert(hasClassNames(findDate('2020-12-12'), 'next-calendar2-cell-disabled'));

            findDate('2020-12-15').simulate('mouseenter');
            setTimeout(() => {
                ['2020-12-13', '2020-12-14', '2020-12-15'].every(v =>
                    assert(hasClassNames(findDate(v), 'next-calendar2-cell-hover'))
                );
                assert(hasClassNames(findDate('2020-12-15'), 'next-calendar2-cell-hover-end'));

                findDate('2020-12-15').simulate('mouseleave');
                setTimeout(() => {
                    ['2020-12-13', '2020-12-14', '2020-12-15'].every(v =>
                        assert(!hasClassNames(findDate(v), 'next-calendar2-cell-hover'))
                    );
                    done();
                });
            });
        });

        it('RangePicker panelValue', () => {
            wrapper = mount(<RangePicker defaultValue={['2020-12-12', '2021-02-13']} defaultVisible />);
            assert(findDate('2020-12-12').length);
            assert(findDate('2021-01-12').length);
            findInput(1).simulate('focus');
            assert(findDate('2021-01-12').length);
            assert(findDate('2021-02-12').length);
            findInput(0).simulate('focus');
            assert(findDate('2020-12-12').length);
            assert(findDate('2021-01-12').length);
        });

        it('Switch PanelMode', () => {
            let mode = 'date';
            let panelValue;

            wrapper = mount(
                <DatePicker
                    onPanelChange={(v, m) => {
                        assert(v.format('YYYY-MM-DD') === panelValue);
                        assert(m === mode);
                    }}
                    defaultValue={defaultVal}
                    defaultVisible
                />
            );
            let leftBtns = wrapper.find('button.next-calendar2-header-left-btn');
            let rightBtns = wrapper.find('button.next-calendar2-header-right-btn');
            panelValue = '2019-12-12';
            leftBtns.at(0).simulate('click');
            panelValue = '2019-11-12';
            leftBtns.at(1).simulate('click');
            panelValue = '2019-12-12';
            rightBtns.at(0).simulate('click');
            panelValue = '2020-12-12';
            rightBtns.at(1).simulate('click');

            mode = 'month';
            wrapper
                .find('.next-calendar2-header-text-field button')
                .at(1)
                .simulate('click');

            mode = 'date';
            panelValue = '2020-11-01';
            clickDate('2020-11', 'month');

            mode = 'year';
            wrapper
                .find('.next-calendar2-header-text-field button')
                .at(0)
                .simulate('click');
            wrapper.unmount();

            // RangePicker
            wrapper = mount(
                <RangePicker
                    onPanelChange={(v, m) => {
                        assert(v.format('YYYY-MM-DD') === panelValue);
                        assert(m === mode);
                    }}
                    defaultValue={defaultRangeVal}
                    defaultVisible
                />
            );
            mode = 'date';
            panelValue = defaultRangeVal[0];
            leftBtns = wrapper.find('button.next-calendar2-header-left-btn');
            rightBtns = wrapper.find('button.next-calendar2-header-right-btn');
            panelValue = '2019-12-12';
            leftBtns.at(0).simulate('click');
            panelValue = '2019-11-12';
            leftBtns.at(1).simulate('click');
            panelValue = '2019-12-12';
            rightBtns.at(2).simulate('click');
            panelValue = '2020-12-12';
            rightBtns.at(3).simulate('click');
        });
    });

    describe('event', () => {
        it('onChange', () => {
            let changeCount = 0;
            wrapper = mount(<DatePicker defaultValue={defaultVal} visible onChange={() => ++changeCount} />);

            clickDate(defaultVal);
            assert(changeCount === 0);
            clickDate('2020-12-13');
            assert(changeCount === 1);
        });

        it('onChange & onOk on showTime', () => {
            let changeCount = 0;
            let okCount = 0;

            wrapper = mount(
                <DatePicker
                    visible
                    showTime
                    defaultValue={defaultVal}
                    onChange={() => ++changeCount}
                    onOk={() => ++okCount}
                />
            );

            clickDate(defaultVal);
            assert(changeCount === 0);
            clickDate('2020-12-13');
            assert(changeCount === 0);
            clickOk();
            assert(changeCount === 1);
            assert(okCount === 1);
        });

        it('should trigger onChange when use controlled value', () => {
            let value = defaultVal;
            let triggered = false;
            const onChange = (_, dateStr) => {
                triggered = !triggered;
                assert(dateStr === value);
            };

            wrapper = mount(<DatePicker value={value} defaultVisible onChange={onChange} />);
            clickDate(value);
            assert(!triggered);

            value = '2020-12-13';
            clickDate(value);
            assert(triggered);
        });
    });

    describe('keydown', () => {
        it('ENTER', () => {
            let visibleChanged = false;
            const onVisibleChange = () => {
                visibleChanged = !visibleChanged;
            };

            wrapper = mount(<DatePicker defaultVisible onVisibleChange={onVisibleChange} />);
            findInput().simulate('keydown', { keyCode: KEYCODE.ENTER });
            assert(visibleChanged);
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

    describe('issues', () => {
        // https://github.com/alibaba-fusion/next/issues/2641
        it('value controlled issue', () => {
            function App() {
                const [value, setVal] = useState();
                return <DatePicker visible defaultPanelValue={defaultVal} value={value} onChange={setVal} />;
            }
            wrapper = mount(<App />);
            clickDate('2020-12-13');
            assert(getStrValue() === '2020-12-13');
        });

        // https://github.com/alibaba-fusion/next/issues/2664
        it('value controlled issue2', () => {
            const App = () => {
                const [value, setValue] = React.useState(['2021-05', '2021-08']);
                return (
                    <div className="app">
                        <button onClick={() => setValue([dayjs('2021-02-03'), dayjs('2021-02-03')])} />
                        <RangePicker value={value} />
                    </div>
                );
            };
            wrapper = mount(<App />);
            wrapper.find('button').simulate('click');
            assert.deepEqual(getStrValue(), ['2021-02-03', '2021-02-03']);
            wrapper
                .find('input')
                .at(0)
                .simulate('click');
            assert.deepEqual(getStrValue(), ['2021-02-03', '2021-02-03']);
            clickDate('2021-02-04');
            wrapper
                .find('input')
                .at(1)
                .simulate('click');
            clickDate('2021-02-05');
            assert.deepEqual(getStrValue(), ['2021-02-03', '2021-02-03']);
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
                                    defaultPanelValue="2020-12-13"
                                    visible
                                    showTime
                                    name="rangeDate"
                                />
                            </FormItem>
                        </Form>
                    );
                }
            }
            wrapper = mount(<App />);
            clickDate('2020-12-13');
            assert(getStrValue() === '2020-12-13');
        });
    });
});

function findInput(idx) {
    const input = wrapper.find('.next-input > input');
    return idx !== undefined ? input.at(idx) : input;
}

function changeInput(val, idx) {
    return findInput(idx).simulate('change', { target: { value: val } });
}

function findDate(strVal, mode = 'date') {
    return wrapper.find(`.next-calendar2-table-${mode} [title="${strVal}"]`);
}

function clickDate(strVal, mode = 'date') {
    findDate(strVal, mode).simulate('click');
}

function clickTime(strVal, mode = 'hour') {
    wrapper.find(`.next-time-picker2-menu-${mode} [title=${strVal}]`).simulate('click');
}

function clickOk() {
    wrapper.find('button.next-date-picker2-footer-ok').simulate('click');
}

function checkOutput(dateObj, dateStr) {
    return dayjs.isDayjs(dateObj) && typeof dateStr === 'string';
}

function getStrValue() {
    const inputEl = wrapper.find('.next-date-picker2-input input');
    return inputEl.length === 1 ? inputEl.instance().value : inputEl.map(el => el.instance().value);
}

function hasClassNames(node, classNames) {
    const el = node.instance();
    classNames = Array.isArray(classNames) ? classNames : classNames.trim().split(/\s+/);
    return classNames.every(className => el.classList.contains(className));
}

function showTimePanel() {
    return !!wrapper.find('.next-time-picker2-panel').length;
}
