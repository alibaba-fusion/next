import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Box from '../../src/box';
import '../../src/box/style.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Box', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Box />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should render", () => {
        let box = wrapper.find('.next-box');
        assert(box.hasClass('next-box'));
        box = wrapper.setProps({ children: <a>some link</a> });
        assert(!box.hasClass('next-box'));
    });
});
