import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import co from 'co';
import moment from 'moment';
import DatePicker from '../index';
import { ConfigProvider } from '@alifd/next';
import en from '@alifd/next/lib/locale/en-us';
import Form from '../../form/index';
import Field from '../../field/index';
import { DATE_PICKER_MODE } from '../constant';
import { KEYCODE } from '../../util';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const { RangePicker, MonthPicker, YearPicker, WeekPicker, QuarterPicker } = DatePicker;
const FormItem = Form.Item;

let wrapper;
const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;
const defaultVal = '2020-12-12';
const defaultRangeVal = ['2020-12-12', '2020-12-13'];
const onChange = (...args) => assert(checkOutput(...args));
const delay = time => new Promise(resolve => setTimeout(resolve, time));

const render = element => {
    let inc;
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    ReactDOM.render(element, container, function () {
        inc = this;
    });
    return {
        setProps: props => {
            ReactDOM.unmountComponentAtNode(container);
            const clonedElement = React.cloneElement(element, props);
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        instance: () => {
            return inc;
        },
        find: selector => {
            return container.querySelectorAll(selector);
        },
    };
};

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
            assert(wrapper.find('.next-date-picker2-input-date').hasClass('next-date-picker2-input-disabled'));
            wrapper.unmount();

            // Range
            wrapper = mount(<RangePicker disabled />);
            assert(wrapper.find('.next-date-picker2-input-range').hasClass('next-date-picker2-input-disabled'));
            wrapper.unmount();

            // half disabled
            wrapper = mount(<RangePicker disabled={[true, false]} />);
            assert(!wrapper.find('.next-date-picker2-input-range').hasClass('next-date-picker2-input-disabled'));
            assert(
                wrapper
                    .find('.next-input')
                    .at(0)
                    .hasClass('next-disabled')
            );
            assert(
                !wrapper
                    .find('.next-input')
                    .at(1)
                    .hasClass('next-disabled')
            );
            wrapper.unmount();

            // half disabled with showTime
            wrapper = mount(
                <RangePicker showTime disabled={[false, true]} defaultValue={['2022', '2020']} defaultVisible />
            );
            // keep end time
            assert.deepEqual(getStrValue(), ['', '2020-01-01 00:00:00']);

            // do not check value before click ok
            clickDate('2020-01-01');
            clickTime(5);
            assert.deepEqual(getStrValue(), ['2020-01-01 05:00:00', '2020-01-01 00:00:00']);

            // check value after clicking ok
            wrapper
                .find('.next-date-picker2-footer-ok')
                .hostNodes()
                .simulate('click');
            assert.deepEqual(getStrValue(), ['', '2020-01-01 00:00:00']);
        });

        it('disable ok when input disabledDate', () => {
            wrapper = mount(
                <DatePicker
                    showOk
                    showTime
                    disabledDate={v => v.isBefore(dayjs('2024-06-22 00:00:00'))}
                    defaultVisible
                />
            );

            changeInput('2024-06-19 11:12:13');
            assert.deepEqual(
                wrapper.find('button.next-date-picker2-footer-ok').prop('disabled'),
                true
            );
            wrapper.unmount();

            wrapper = mount(
                <RangePicker
                    showOk
                    showTime
                    disabledDate={v => v.isBefore(dayjs('2024-06-22 00:00:00'))}
                    defaultVisible
                />
            );

            changeInput('2024-06-19 11:12:13', 1);
            assert.deepEqual(
                wrapper.find('button.next-date-picker2-footer-ok').prop('disabled'),
                true
            );
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
                        wrapper
                            .find(`.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=19]`)
                            .hasClass('next-disabled')
                    );
                    assert(
                        !wrapper
                            .find(`.next-time-picker2-menu-${u} .next-time-picker2-menu-item[title=18]`)
                            .hasClass('next-disabled')
                    );
                });

                assert(
                    !wrapper.find('.next-calendar2-cell[title="2020-12-12"]').hasClass('next-calendar2-cell-disabled')
                );

                assert(
                    wrapper.find('.next-calendar2-cell[title="2020-12-13"]').hasClass('next-calendar2-cell-disabled')
                );

                wrapper.unmount();
            });
        });

        it('disabledDate.defaultValue', () => {
            const defaultTime = '00:12:13';

            wrapper = mount(
                <DatePicker
                    showTime
                    defaultVisible
                    defaultPanelValue={defaultVal}
                    timePanelProps={{ defaultValue: defaultTime }}
                />
            );

            const selectedTimes = wrapper.find('.next-selected');
            assert(['0', '12', '13'].every((v, idx) => selectedTimes.at(idx).text() === v));

            clickDate('2020-12-12');
            assert(getStrValue() === `2020-12-12 ${defaultTime}`);

            wrapper.unmount();

            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultPanelValue={defaultVal}
                    timePanelProps={{ defaultValue: defaultTime }}
                />
            );

            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-13');
            clickOk();
            assert.deepEqual(getStrValue(), [`2020-12-12 ${defaultTime}`, `2020-12-13 ${defaultTime}`]);
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

        it('input label', () => {
            [DatePicker, RangePicker].forEach(Picker => {
                wrapper = mount(<Picker label="日期" />);
                assert(wrapper.find('.next-input-label').length === 1);
            });
        });

        it('input separator', () => {
            ['~', <span>~</span>].forEach(separator => {
                wrapper = mount(<RangePicker separator={separator} />);
                assert(wrapper.find('.next-date-picker2-input-separator').text() === '~');
            });
        });

        it('hasClear', () => {
            [[false, false], undefined, false].forEach(disabled => {
                wrapper = mount(<RangePicker disabled={disabled} />);
                assert(wrapper.find('.next-input-clear').length);
            });

            // 禁用状态下 不允许清除
            [(true, [true, false], [false, true])].forEach(disabled => {
                wrapper = mount(<RangePicker disabled={disabled} />);
                assert(wrapper.find('.next-input-clear').length === 0);
            });
        });

        it('panelValue', () => {
            // default now
            [DatePicker, RangePicker].forEach(Picker => {
                wrapper = mount(<Picker defaultVisible />);
                assert(
                    wrapper
                        .find('.next-calendar2-cell-current')
                        .at(0)
                        .getDOMNode()
                        .getAttribute('title') ===
                    dayjs()
                        .startOf('month')
                        .format('YYYY-MM-DD')
                );
                wrapper.unmount();
            });

            // set Default
            [DatePicker, RangePicker].forEach(Picker => {
                wrapper = mount(<Picker defaultVisible defaultPanelValue={defaultVal} />);
                assert(
                    wrapper
                        .find('.next-calendar2-cell-current')
                        .at(0)
                        .getDOMNode()
                        .getAttribute('title') === '2020-12-01'
                );
                wrapper.unmount();
            });

            // set Value
            [[DatePicker, defaultVal], [RangePicker, defaultRangeVal]].forEach(([Picker, val]) => {
                wrapper = mount(<Picker defaultVisible defaultValue={val} />);
                assert(
                    wrapper
                        .find('.next-calendar2-cell-current')
                        .at(0)
                        .getDOMNode()
                        .getAttribute('title') === '2020-12-01'
                );
                wrapper.unmount();
            });

            // if first value is null, set panelValue to the other date
            wrapper = mount(<RangePicker defaultVisible defaultValue={[null, defaultVal]} />);
            assert(
                wrapper
                    .find('.next-calendar2-cell-current')
                    .at(0)
                    .getDOMNode()
                    .getAttribute('title') === '2020-11-01'
            );
        });

        it('format', () => {
            wrapper = mount(
                <DatePicker
                    defaultValue={defaultVal}
                    defaultVisible
                    format={v => `Custom: ${v.format('YYYY/MM/DD')}`}
                    onChange={(v, vStr) => assert(vStr === 'Custom: 2020/12/14')}
                />
            );
            assert(getStrValue() === 'Custom: 2020/12/12');
            clickDate('2020-12-14');
            assert(getStrValue() === 'Custom: 2020/12/14');
            wrapper.unmount();

            // RangePicker
            wrapper = mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    format="x"
                    onChange={(v, strVal) =>
                        assert.deepEqual(strVal, [dayjs('2020-12-12').format('x'), dayjs('2020-12-14').format('x')])
                    }
                />
            );
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            assert.deepEqual(getStrValue(), [dayjs('2020-12-12').format('x'), dayjs('2020-12-14').format('x')]);
            wrapper.unmount();

            // RangePicker outputFormat array
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    format={['YYYY', v => v.valueOf()]}
                    onChange={(v, strVal) =>
                        assert.deepEqual(strVal, [dayjs('2020-12-12').format('YYYY'), dayjs('2020-12-14').format('x')])
                    }
                />
            );
            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-14');
            clickOk();
            wrapper.unmount();
        });

        it('outputFormat', () => {
            wrapper = mount(
                <DatePicker
                    defaultValue={defaultVal}
                    defaultVisible
                    outputFormat="x"
                    onChange={v => assert(v === dayjs(defaultVal).format('x'))}
                />
            );
            clickDate('2020-12-12');

            wrapper.setProps({
                showTime: true,
                outputFormat(v) {
                    return v.valueOf();
                },
                onOk: v => assert(v === dayjs(defaultVal).valueOf()),
                onChange: v => assert(v === dayjs(defaultVal).valueOf()),
            });

            clickDate('2020-12-12');
            clickOk();
            wrapper.unmount();

            // RangePicker
            wrapper = mount(
                <RangePicker
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    outputFormat="x"
                    onChange={v =>
                        assert.deepEqual(v, [dayjs('2020-12-12').format('x'), dayjs('2020-12-14').format('x')])
                    }
                />
            );
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            wrapper.unmount();

            // RangePicker outputFormat array
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultValue={defaultRangeVal}
                    defaultVisible
                    outputFormat={['YYYY', v => v.valueOf()]}
                    onChange={v =>
                        assert.deepEqual(v, [dayjs('2020-12-12').format('YYYY'), dayjs('2020-12-14').format('x')])
                    }
                />
            );
            clickDate('2020-12-12');
            clickOk();
            clickDate('2020-12-14');
            clickOk();
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

            mode = 'decade';
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

        it('RangePicker switch input', done => {
            wrapper = mount(<RangePicker defaultValue={defaultRangeVal} />);
            findInput(0).simulate('click');
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            assert.deepEqual(getStrValue(), ['2020-12-12', '2020-12-14']);

            setTimeout(() => {
                findInput(1).simulate('click');
                clickDate('2021-01-24');
                assert(wrapper.find('.next-overlay-wrapper').length === 1);
                clickDate('2020-12-15');
                assert.deepEqual(getStrValue(), ['2020-12-15', '2021-01-24']);
                done();
            }, 200);
        });

        it('should change input value when switch mode', () => {
            const inputValue = {
                date: ['2023-10-16', '2023-10-22'],
                week: ['2023-42周', '2023-42周'],
            };

            let mode = DATE;
            wrapper = mount(<RangePicker value={inputValue[DATE]} mode={mode} />);
            assert.deepEqual(getStrValue(wrapper), inputValue[mode]);

            mode = WEEK;
            wrapper.setProps({ mode });
            assert.deepEqual(getStrValue(wrapper), inputValue[mode]);
        });

        it('clear input', () => {
            wrapper = mount(<RangePicker visible defaultValue={defaultRangeVal} />);
            findInput(0).simulate('click');
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            wrapper
                .find('.next-input-clear-icon')
                .hostNodes()
                .simulate('click');
            assert.deepEqual(getStrValue(), ['', '']);

            // clear 之后 focus 第一个 input 元素
            clickDate('2020-12-12');
            clickDate('2020-12-14');
            assert.deepEqual(getStrValue(), ['2020-12-12', '2020-12-14']);
        });

        it('value check', () => {
            // empty value
            wrapper = mount(<RangePicker value={['', '']} />);
            assert.deepEqual(getStrValue(), ['', '']);

            [[null, null], ['', ''], [undefined, undefined]].map(value => {
                wrapper.setProps({ value });
                assert.deepEqual(getStrValue(), ['', '']);
            });

            // illegal value
            wrapper.setProps({ value: ['2021', '2020'] });
            assert.deepEqual(getStrValue(), ['2021-01-01', '']);

            // illegal value + disabled
            wrapper.setProps({ value: ['2021', '2020'], disabled: [false, true] });
            assert.deepEqual(getStrValue(), ['', '2020-01-01']);

            wrapper.setProps({ value: ['2020-01-01', '2020-01-02'], disabled: false, visible: true });
            clickDate('2020-01-03');
            assert.deepEqual(getStrValue(), ['2020-01-03', '']);

            // illegal value + showOk
            wrapper.unmount();
            wrapper = mount(<RangePicker value={['2020-01-01', '2020-01-02']} showTime visible />);
            clickDate('2020-01-03');
            assert(wrapper.find('.next-calendar2-cell-range-end-single').length);
            assert(wrapper.find('.next-calendar2-cell-range-begin-single').length);
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
        beforeEach(() => {
            const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

            nodeListArr.forEach(node => {
                node.parentNode.removeChild(node);
            });
        });

        afterEach(() => {
            if (wrapper) {
                wrapper.unmount();
                wrapper = null;
            }
        });
        // fix: https://github.com/alibaba-fusion/next/issues/3877
        it('should not select default endDate', () => {
            const currentDate = dayjs();
            const currentDateStr = currentDate.format('YYYY-MM-DD');
            const disabledDate = function (date, mode) {
                return currentDate.date() !== date.date();
            };
            wrapper = mount(<RangePicker visible showTime disabledDate={disabledDate} />);
            clickDate(currentDateStr);
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            assert.deepEqual(getStrValue(), [`${currentDateStr} 12:12:12`, '']);
            clickOk();
            clickTime('16');
            clickTime('16', 'minute');
            clickTime('35', 'second');
            clickOk();
            assert.deepEqual(getStrValue(), [`${currentDateStr} 12:12:12`, `${currentDateStr} 16:16:35`]);
        });
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

        it('should support triggerType', () => {
            return co(function* () {
                wrapper = render(<DatePicker popupTriggerType={'hover'} />);
                const btn = document.querySelector('.next-date-picker2 > div');

                ReactTestUtils.Simulate.mouseEnter(btn);
                yield delay(300);
                assert(document.querySelector('.next-overlay-wrapper'));

                ReactTestUtils.Simulate.mouseLeave(btn);
                ReactTestUtils.Simulate.mouseEnter(document.querySelector('.next-calendar2-body'));
                yield delay(200);
                assert(document.querySelector('.next-overlay-wrapper'));

                ReactTestUtils.Simulate.mouseLeave(document.querySelector('.next-calendar2-body'));
                yield delay(1000);
                assert(!document.querySelector('.next-overlay-wrapper'));
            });
        });

        it('should reset value', () => {
            const App = () => {
                return (
                    <div className="app">
                        <RangePicker defaultPanelValue={defaultVal} showTime />
                        <button className="btn" />
                    </div>
                );
            };
            wrapper = mount(<App />);
            wrapper
                .find('input')
                .at(0)
                .simulate('click');

            clickDate('2020-12-12');

            wrapper.find('button.btn').simulate('click');
            document.dispatchEvent(new Event('click'));

            assert.deepEqual(getStrValue(), ['', '']);
        });

        // https://github.com/alibaba-fusion/next/issues/3086
        it('fix issue on half disabled & showTime', () => {
            wrapper = mount(
                <RangePicker
                    showTime
                    visible
                    disabled={[true, false]}
                    value={['2021-01-12 10:00:00', '2021-01-12 09:00:00']}
                />
            );
            assert.deepEqual(getStrValue(), ['2021-01-12 10:00:00', '']);

            wrapper.setProps({ disabled: [false, true] });
            assert.deepEqual(getStrValue(), ['', '2021-01-12 09:00:00']);

            wrapper.setProps({ disabled: true });
            assert.deepEqual(getStrValue(), ['2021-01-12 10:00:00', '']);

            wrapper.setProps({ disabled: false });
            assert.deepEqual(getStrValue(), ['2021-01-12 10:00:00', '']);

            wrapper.setProps({ value: ['2021-01-12 10:00:00', '2021-01-12 10:00:00'] });
            assert.deepEqual(getStrValue(), ['2021-01-12 10:00:00', '2021-01-12 10:00:00']);

            findInput(1).simulate('focus');
            changeInput('2021-01-12 09:00:00', 1);
            clickOk();
            assert.deepEqual(getStrValue(), ['', '2021-01-12 09:00:00']);
        });

        // https://github.com/alibaba-fusion/next/issues/3186
        it('fix panelValue', () => {
            wrapper = mount(<RangePicker visible defaultPanelValue={defaultVal} />);
            findInput(0).simulate('focus');
            findInput(1).simulate('focus');
            assert(findDate('2021-01-31').length);
        });

        it('should support value empty when showTime', () => {
            wrapper = mount(
                <div>
                    <RangePicker visible showTime defaultPanelValue={defaultVal} />
                    <button id="test">Blank Area</button>
                </div>
            );
            findDate('2020-12-12').simulate('click');
            clickTime('12');
            clickTime('12', 'minute');
            clickTime('12', 'second');
            clickOk();
            wrapper.find('#test').simulate('click');
            assert.deepEqual(getStrValue(), ['2020-12-12 12:12:12', '']);
        });

        it('should reset to previous value when input a disableValue', () => {
            const currentDate = dayjs(defaultVal);
            // Disable all dates before currentDate: 2020-12-12
            const disabledDate = function (date, mode) {
                switch (mode) {
                    case 'date':
                        return date.valueOf() <= currentDate.valueOf();
                    case 'year':
                        return date.year() < currentDate.year();
                    case 'month':
                        return date.year() * 100 + date.month() < currentDate.year() * 100 + currentDate.month();
                    default:
                        return false;
                }
            };

            wrapper = mount(<DatePicker disabledDate={disabledDate} defaultValue="2020-12-25" />);

            changeInput('2020-11-11');
            findInput().simulate('keydown', { keyCode: KEYCODE.ENTER });
            assert(getStrValue(wrapper) === '2020-12-25');
        });

        it('should support state', () => {
            wrapper = mount(<DatePicker state="loading" />);
            assert(wrapper.find('.next-icon-loading').length === 1);
        });

        it('WeekPicker should format value correctly when date is 01-01', () => {
            wrapper = mount(<WeekPicker defaultValue="2022-01-01" />)
            assert(getStrValue() === '2021-52周');
            wrapper = mount(<WeekPicker defaultValue="2022-01-01" format="YYYY-wo" />)
            assert(getStrValue() === '2021-52周');
        });

        // fix https://github.com/alibaba-fusion/next/issues/4767
        it('should pass inputProps to trigger', () => {
            mount(<DatePicker trigger={(inputProps) => {
                assert(typeof inputProps.onInputTypeChange === 'function');
                return <div>test</div>
            }} />);
        });

        // fix https://github.com/alibaba-fusion/next/issues/4775
        it('RangePicker disabledDate method should return the correct panel mode', () => {
            let panelMode = 'date';
            const disabledDate = function (date, mode) {
                assert(panelMode === mode, `current panelMode is "${panelMode}", but got "${mode}"`);
                return false;
            };

            wrapper = mount(<RangePicker disabled={[true, false]} disabledDate={disabledDate} mode="date" defaultPanelValue={defaultVal} />);
            findInput(1).simulate('click');
            assert(wrapper.find('.next-calendar2-table-date').length);
            findDate('2021-01-31').simulate('mousemove');

            panelMode = 'month';
            wrapper.find('.next-range-picker-left .next-calendar2-header-text-field button').at(1).simulate('click');
            assert(wrapper.find('.next-calendar2-table-month').length);

            panelMode = 'year';
            wrapper.find('.next-range-picker-left .next-calendar2-header-text-field button').simulate('click');
            assert(wrapper.find('.next-calendar2-table-year').length);

            panelMode = 'decade';
            wrapper.find('.next-range-picker-left .next-calendar2-header-text-field button').simulate('click');
            assert(wrapper.find('.next-calendar2-table-decade').length);
        })

        // fix https://github.com/alibaba-fusion/next/issues/4788
        it('The English translation does not comply with international standards', () => {
            wrapper = mount(
                <ConfigProvider locale={en}>
                    <DatePicker defaultValue="2020-02-02" format="MMM D, YYYY" defaultVisible />
                </ConfigProvider>
            );
            assert(getStrValue() === 'Feb 2, 2020');
            assert(wrapper.find(`.next-calendar2-header-text-field`).text() === `Feb2020`);
        })

        // fix https://github.com/alibaba-fusion/next/issues/4790
        it('Unable to enter space to enter time', () => {
            wrapper = mount(
                <DatePicker showTime />
            );
            changeInput('2020-11-11');
            findInput().simulate('keydown', { keyCode: KEYCODE.SPACE });
            assert(getStrValue(wrapper) === '2020-11-11 ');
            wrapper.unmount();
            wrapper = mount(
                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            );
            changeInput('2020-11-11', 0);
            findInput(0).simulate('keydown', { keyCode: KEYCODE.SPACE });
            assert(getStrValue(wrapper).join(',') === '2020-11-11 ,');
        })
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
