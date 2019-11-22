import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ResponsiveGrid from '../../src/responsive-grid';
import '../../src/responsive-grid/style.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ResponsiveGrid', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ResponsiveGrid />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should render", () => {
        let responsive-grid = wrapper.find('.next-responsive-grid');
        assert(responsive-grid.hasClass('next-responsive-grid'));
        responsive-grid = wrapper.setProps({ children: <a>some link</a> });
        assert(!responsive-grid.hasClass('next-responsive-grid'));
    });
});
