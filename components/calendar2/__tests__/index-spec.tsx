import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import Calendar2 from '../index';

Enzyme.configure({
    adapter: new Adapter(),
});
dayjs.locale('zh-cn');
const defaultVal = dayjs('2017-10-01', 'YYYY-MM-DD', true);

/* eslint-disable */
describe('Calendar2', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('render', () => {
        it('should render fullscreen calendar with header', () => {
            wrapper = mount(
                <Calendar2 shape="fullscreen" showTitle defaultValue={defaultVal} mode="month" />
            );

            assert(wrapper.find('.next-calendar2-header-title'));
        });
    });
});
