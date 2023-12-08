import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Balloon from '../../src/balloon/index';

/* eslint-disable react/no-multi-comp */

Enzyme.configure({ adapter: new Adapter() });
const Inner = Balloon.Inner;

describe('Tooltip', () => {
    it('balloon', () => {
        const wrapper = mount(<Inner>test</Inner>);
        assert(wrapper.find('.next-balloon').length === 1);
    });

    it('tooltip', () => {
        const wrapper = mount(<Inner isTooltip>test</Inner>);
        assert(wrapper.find('.next-balloon-tooltip').length === 1);
    });
});
