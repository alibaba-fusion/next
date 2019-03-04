import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Paragraph from '../../src/paragraph/index';

// import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Paragraph', () => {
    describe('render', () => {
        it('default class check', () => {
            const wrapper = mount(<Paragraph />);
            assert(
                wrapper
                    .find('.next-paragraph-medium.next-paragraph-long')
                    .exists()
            );
        });

        it('props `type` & `size` must work', () => {
            const wrapper = mount(<Paragraph type="short" size="small" />);
            assert(
                wrapper
                    .find('.next-paragraph-small.next-paragraph-short')
                    .exists()
            );
        });

        it('props `rtl` should be ok', () => {
            const wrapper = mount(<Paragraph rtl />);
            assert(wrapper.find('.next-paragraph').props().dir === 'rtl');
        });
    });
});
