import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import TimePicker2 from '../index';
import '../../time-picker/style';
import { KEYCODE, dom } from '../../util';

const { hasClass } = dom;
Enzyme.configure({ adapter: new Adapter() });
const defaultValue = dayjs('11:12:13', 'HH:mm:ss', true);

const TimeRangePicker = TimePicker2.RangePicker;

/* eslint-disable */
describe('TimePicker2', () => {
    describe('render', () => {
        let wrapper;

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
        });

        it('should render time-picker', () => {
            wrapper = mount(<TimePicker2 />);
            assert(wrapper.find('.next-time-picker2').length === 1);
        });

        it('should render with defaultValue', () => {
            wrapper = mount(<TimePicker2 defaultValue={defaultValue} />);
            assert(wrapper.find('.next-time-picker2-input input').instance().value === '11:12:13');
        });

        it('should render with defaultValue as string', () => {
            wrapper = mount(<TimePicker2 defaultValue="11:11:11" />);
            assert(wrapper.find('.next-time-picker2-input input').instance().value === '11:11:11');
        });

        it('should render with format', () => {
            wrapper = mount(<TimePicker2 defaultValue="10:1:1" format="H:m:s" />);
            assert(wrapper.find('.next-time-picker2-input input').instance().value === '10:1:1');
        });

        it('should render with defaultVisible', () => {
            wrapper = mount(<TimePicker2 defaultValue={defaultValue} defaultVisible />);
            assert(
                wrapper
                    .find('.next-time-picker2-menu-hour .next-time-picker2-menu-item.next-selected')
                    .instance().title === '11'
            );
            assert(
                wrapper
                    .find(
                        '.next-time-picker2-menu-minute .next-time-picker2-menu-item.next-selected'
                    )
                    .instance().title === '12'
            );
            assert(
                wrapper
                    .find(
                        '.next-time-picker2-menu-second .next-time-picker2-menu-item.next-selected'
                    )
                    .instance().title === '13'
            );
        });

        it('should render with value controlled', () => {
            wrapper = mount(<TimePicker2 value={defaultValue} />);
            const newValue = dayjs('12:22:22', 'HH:mm:ss', true);
            wrapper.setProps({ value: newValue });
            assert(wrapper.find('.next-time-picker2-input input').instance().value === '12:22:22');
        });

        it('should render with visisble controlled', () => {
            wrapper = mount(<TimePicker2 visible={false} />);
            assert(wrapper.find('.next-time-picker2-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-time-picker2-body').length === 1);
        });

        it('should render with step', () => {
            wrapper = mount(<TimePicker2 defaultVisible secondStep={5} />);
            assert(
                wrapper.find('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                    .length === 12
            );
        });

        it('should render menu items', () => {
            const renderTimeMenuItems = list => {
                return list.map(({ label, value }) => {
                    return {
                        value,
                        label: value > 9 ? String(value) : `0${value}`,
                    };
                });
            };
            wrapper = mount(
                <TimePicker2 defaultVisible renderTimeMenuItems={renderTimeMenuItems} />
            );

            assert(
                wrapper
                    .find('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                    .at(0)
                    .text() === '00'
            );

            assert(
                wrapper
                    .find('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                    .at(9)
                    .text() === '09'
            );

            assert(
                wrapper
                    .find('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                    .at(10)
                    .text() === '10'
            );
        });
        it('should support preview mode render', () => {
            wrapper = mount(<TimePicker2 defaultValue="12:00:00" isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '12:00:00');
            wrapper.setProps({
                renderPreview: value => {
                    assert(value.format('HH:mm:ss') === '12:00:00');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });

        it('should support string value', () => {
            wrapper = mount(<TimePicker2 defaultValue="12:00:00" isPreview />);
            assert.equal(wrapper.find('.next-form-preview').text(), '12:00:00');
        });
        it('should support preview mode render when no value set', () => {
            wrapper = mount(<TimePicker2 isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
        });
        it('should support preview mode & setValue', () => {
            const container = document.createElement('div');
            document.body.appendChild(container);
            wrapper = mount(<TimePicker2 isPreview />, { attachTo: container });
            assert(wrapper.find('.next-form-preview').length > 0);
            assert.equal(wrapper.find('.next-form-preview').text(), '');
            const value = dayjs('12:22:22', 'HH:mm:ss', true);
            wrapper.setProps({ value: value });
            assert(wrapper.find('.next-form-preview').length > 0);
            assert.equal(wrapper.find('.next-form-preview').text(), '12:22:22');
        });
        it('should support preview mode on type is range', () => {
            wrapper = mount(<TimePicker2.RangePicker isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            const startValue = dayjs('12:22:22', 'HH:mm:ss', true);
            const endValue = dayjs('17:22:22', 'HH:mm:ss', true);
            wrapper.setProps({ value: [startValue, endValue] });
            assert.equal(wrapper.find('.next-form-preview').text(), '12:22:22-17:22:22');
            wrapper.setProps({ value: [startValue] });
            assert.equal(wrapper.find('.next-form-preview').text(), '12:22:22-');
            wrapper.setProps({ value: [null, endValue] });
            assert.equal(wrapper.find('.next-form-preview').text(), '-17:22:22');
        });
    });

    describe('action', () => {
        let wrapper;
        let ret;

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
            ret = null;
        });

        it('should reset value', () => {
            ret = 'hello';
            wrapper = mount(
                <TimePicker2
                    defaultValue={defaultValue}
                    onChange={val => {
                        ret = val;
                    }}
                />
            );
            wrapper.find('.next-icon-delete-filling').simulate('click');
            assert(ret === null);
        });

        it('should format value(hide hours)', () => {
            wrapper = mount(<TimePicker2 format="mm:ss" />);
            wrapper.find('.next-time-picker2-input input').simulate('click');
            assert(wrapper.find('.next-time-picker2-menu-hour').length === 0);
        });

        it('should format value(hide seconds)', () => {
            wrapper = mount(<TimePicker2 format="HH:mm" />);
            wrapper.find('.next-time-picker2-input input').simulate('click');
            assert(wrapper.find('.next-time-picker2-menu-second').length === 0);
        });

        it('should input value in picker', () => {
            wrapper = mount(
                <TimePicker2
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
                    }}
                />
            );
            wrapper
                .find('.next-time-picker2-input input')
                .simulate('change', { target: { value: '20:00:00' } });
            wrapper
                .find('.next-time-picker2-input input')
                .simulate('keydown', { keyCode: KEYCODE.ENTER });
            assert(wrapper.find('.next-time-picker2-input input').instance().value === '20:00:00');
            assert(ret === '20:00:00');
        });

        it('should render presets & change value on clicking presets', () => {
            ret = null;
            wrapper = mount(
                <TimePicker2
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
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

            wrapper.find('.next-time-picker2-input input').simulate('click');

            wrapper.find('.next-time-picker2-footer button').simulate('click');

            assert(ret === '13:12:11');
        });

        it('should select time-picker2 panel', () => {
            wrapper = mount(
                <TimePicker2
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
                    }}
                />
            );
            wrapper.find('.next-time-picker2-input input').simulate('click');
            wrapper
                .find('.next-time-picker2-menu-hour .next-time-picker2-menu-item')
                .at(2)
                .simulate('click');
            assert(ret === '02:00:00');
            wrapper
                .find('.next-time-picker2-menu-minute .next-time-picker2-menu-item')
                .at(2)
                .simulate('click');
            assert(ret === '02:02:00');
            wrapper
                .find('.next-time-picker2-menu-second .next-time-picker2-menu-item')
                .at(2)
                .simulate('click');
            assert(ret === '02:02:02');
        });

        it('should keyboard date time input', () => {
            wrapper = mount(<TimePicker2 />);

            const timeInput = wrapper.find('.next-time-picker2-input input');
            const instance = wrapper.instance().getInstance();
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.inputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.LEFT });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, shiftKey: true });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, controlKey: true });
            assert(instance.state.inputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.inputStr === '00:00:01');
            timeInput.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.inputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.inputStr === '00:01:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.inputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN, altKey: true });
            assert(instance.state.inputStr === '01:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP, altKey: true });
            assert(instance.state.inputStr === '00:00:00');
        });
    });

    describe('range', () => {
        let wrapper;
        let ret;

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
            ret = null;
        });

        it('should support default value', () => {
            wrapper = mount(
                <TimeRangePicker defaultValue={[defaultValue, defaultValue.add(1, 'hours')]} />
            );

            assert.deepEqual(getStrValue(wrapper), ['11:12:13', '12:12:13']);
        });

        it('should select value', async () => {
            wrapper = mount(<TimeRangePicker defaultValue={[defaultValue]} />);

            findInput(wrapper, 0).simulate('click');
            assert(findTime(wrapper, 12, 'hour').length === 2);
            findTime(wrapper, 12, 'hour').at(1).simulate('click');
            clickOk(wrapper);

            assert.deepEqual(getStrValue(wrapper), ['11:12:13', '12:00:00']);
        });
        it('should render with value controlled', () => {
            wrapper = mount(
                <TimeRangePicker value={[defaultValue, defaultValue.add(1, 'hours')]} />
            );

            assert.deepEqual(getStrValue(wrapper), ['11:12:13', '12:12:13']);

            findInput(wrapper, 0).simulate('click');
            assert(findTime(wrapper, 12, 'hour').length === 2);
            findTime(wrapper, 13, 'hour').at(1).simulate('click');
            clickOk(wrapper);

            assert.deepEqual(getStrValue(wrapper), ['11:12:13', '12:12:13']);

            const first = dayjs('11:13:00', 'HH:mm:ss', true);
            const second = dayjs('12:22:22', 'HH:mm:ss', true);
            wrapper.setProps({ value: [first, second] });

            assert.deepEqual(getStrValue(wrapper), ['11:13:00', '12:22:22']);
        });
    });
    describe('issues', () => {
        it('should has border when single time input is focusing', done => {
            const container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<TimePicker2 />, container);
            const inputNode = document.querySelector('.next-time-picker2-input');
            inputNode.querySelector('input').click();
            assert(hasClass(inputNode, 'next-time-picker2-input-focus'));
            document.body.click();
            setTimeout(() => {
                assert(!hasClass(inputNode, 'next-time-picker2-input-focus'));
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 1000);
        });

        it('should has border when time-range input is focusing', done => {
            const container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<TimePicker2.RangePicker />, container);
            const inputNode = document.querySelector('.next-time-picker2-input');
            inputNode.querySelectorAll('input')[0].click();
            assert(hasClass(inputNode, 'next-time-picker2-input-focus'));
            inputNode.querySelectorAll('input')[1].click();
            assert(hasClass(inputNode, 'next-time-picker2-input-focus'));
            document.body.click();
            setTimeout(() => {
                assert(!hasClass(inputNode, 'next-time-picker2-input-focus'));
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 1000);
        });

        it('should support custom formatting , close #3651', () => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            const wrapper = mount(<TimePicker2 format="HH" />, { attachTo: div });
            wrapper
                .find('.next-time-picker2-input input')
                .simulate('change', { target: { value: '12' } });
            wrapper.update();
            assert(
                document
                    .querySelector('li[title="12"][role="option"]')
                    .classList.contains('next-selected')
            );
        });
    });
});

function getStrValue(wrapper) {
    const inputEl = wrapper.find('.next-time-picker2-input input');
    return inputEl.length === 1 ? inputEl.instance().value : inputEl.map(el => el.instance().value);
}

function findInput(wrapper, idx) {
    const input = wrapper.find('.next-input > input');
    return idx !== undefined ? input.at(idx) : input;
}

function findTime(wrapper, strVal, mode = 'hour') {
    return wrapper.find(`.next-time-picker2-menu-${mode}>li[title=${strVal}]`);
}

function clickOk(wrapper) {
    wrapper.find('button.next-date-picker2-footer-ok').simulate('click');
}
