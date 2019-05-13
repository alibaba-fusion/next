import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import moment from 'moment';
import TimePicker from '../../src/time-picker/index';
import '../../src/time-picker/style.js';
import { KEYCODE } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });
const defaultValue = moment('11:12:13', 'HH:mm:ss', true);

/* eslint-disable */
describe('TimePicker', () => {
    describe('render', () => {
        let wrapper;

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
        });

        it('should render time-picker', () => {
            wrapper = mount(<TimePicker />);
            assert(wrapper.find('.next-time-picker').length === 1);
        });

        it('should render with defaultValue', () => {
            wrapper = mount(<TimePicker defaultValue={defaultValue} />);
            assert(
                wrapper.find('.next-time-picker-input input').instance()
                    .value === '11:12:13'
            );
        });

        it('should render with defaultValue as string', () => {
            wrapper = mount(<TimePicker defaultValue="11:11:11" />);
            assert(
                wrapper.find('.next-time-picker-input input').instance()
                    .value === '11:11:11'
            );
        });

        it('should render with format', () => {
            wrapper = mount(
                <TimePicker defaultValue="10:1:1" format="H:m:s" />
            );
            assert(
                wrapper.find('.next-time-picker-input input').instance()
                    .value === '10:1:1'
            );
        });

        it('should render with defaultVisible', () => {
            wrapper = mount(
                <TimePicker defaultValue={defaultValue} defaultVisible />
            );
            assert(
                wrapper
                    .find(
                        '.next-time-picker-menu-hour .next-time-picker-menu-item.next-selected'
                    )
                    .instance().title === '11'
            );
            assert(
                wrapper
                    .find(
                        '.next-time-picker-menu-minute .next-time-picker-menu-item.next-selected'
                    )
                    .instance().title === '12'
            );
            assert(
                wrapper
                    .find(
                        '.next-time-picker-menu-second .next-time-picker-menu-item.next-selected'
                    )
                    .instance().title === '13'
            );
        });

        it('should render with value controlled', () => {
            wrapper = mount(<TimePicker value={defaultValue} />);
            const newValue = moment('12:22:22', 'HH:mm:ss', true);
            wrapper.setProps({ value: newValue });
            assert(
                wrapper.find('.next-time-picker-input input').instance()
                    .value === '12:22:22'
            );
        });

        it('should render with visisble controlled', () => {
            wrapper = mount(<TimePicker visible={false} />);
            assert(wrapper.find('.next-time-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-time-picker-body').length === 1);
        });

        it('should render with step', () => {
            wrapper = mount(<TimePicker defaultVisible secondStep={5} />);
            assert(
                wrapper.find(
                    '.next-time-picker-menu-second .next-time-picker-menu-item'
                ).length === 12
            );
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
                <TimePicker
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
            wrapper = mount(<TimePicker format="mm:ss" />);
            wrapper.find('.next-time-picker-input input').simulate('click');
            assert(wrapper.find('.next-time-picker-menu-hour').length === 0);
        });

        it('should format value(hide seconds)', () => {
            wrapper = mount(<TimePicker format="HH:mm" />);
            wrapper.find('.next-time-picker-input input').simulate('click');
            assert(wrapper.find('.next-time-picker-menu-second').length === 0);
        });

        it('should input value in picker', () => {
            wrapper = mount(
                <TimePicker
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
                    }}
                />
            );
            wrapper
                .find('.next-time-picker-input input')
                .simulate('change', { target: { value: '20:00:00' } });
            wrapper.find('.next-time-picker-input input').simulate('blur');
            assert(
                wrapper.find('.next-time-picker-input input').instance()
                    .value === '20:00:00'
            );
            assert(ret === '20:00:00');
        });

        it('should input value in panel', () => {
            wrapper = mount(
                <TimePicker
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
                    }}
                />
            );
            wrapper.find('.next-time-picker-input input').simulate('click');
            wrapper
                .find('.next-time-picker-panel-input input')
                .simulate('change', { target: { value: '20:00:00' } });
            wrapper
                .find('.next-time-picker-panel-input input')
                .simulate('blur');
            assert(
                wrapper.find('.next-time-picker-panel-input input').instance()
                    .value === '20:00:00'
            );
        });

        it('should select time-picker panel', () => {
            wrapper = mount(
                <TimePicker
                    onChange={val => {
                        ret = val.format('HH:mm:ss');
                    }}
                />
            );
            wrapper.find('.next-time-picker-input input').simulate('click');
            wrapper
                .find('.next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(2)
                .simulate('click');
            assert(ret === '02:00:00');
            wrapper
                .find(
                    '.next-time-picker-menu-minute .next-time-picker-menu-item'
                )
                .at(2)
                .simulate('click');
            assert(ret === '02:02:00');
            wrapper
                .find(
                    '.next-time-picker-menu-second .next-time-picker-menu-item'
                )
                .at(2)
                .simulate('click');
            assert(ret === '02:02:02');
        });
        it('should keyboard date time input', () => {
            wrapper = mount(
                <TimePicker />
            );

            const timeInput = wrapper.find('.next-time-picker-input input');
            const instance = wrapper.instance().getInstance();
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.inputStr === ('00:00:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.LEFT });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, shiftKey: true });
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN, controlKey: true });
            assert(instance.state.inputStr === ('00:00:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.inputStr === ('00:00:01'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.inputStr === ('00:00:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.inputStr === ('00:01:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.inputStr === ('00:00:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN, altKey: true });
            assert(instance.state.inputStr === ('01:00:00'));
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP, altKey: true });
            assert(instance.state.inputStr === ('00:00:00'));
        });
    });
});
