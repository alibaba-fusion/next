import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import {{ name }} from '../../src/{{ dashName }}';
import '../../src/{{ dashName }}/style.js';

Enzyme.configure({ adapter: new Adapter() });

describe('{{ name }}', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<{{ name }} />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should render", () => {
        let {{ dashName }} = wrapper.find('.next-{{ dashName }}');
        assert({{ dashName }}.hasClass('next-{{ dashName }}'));
        {{ dashName }} = wrapper.setProps({ children: <a>some link</a> });
        assert(!{{ dashName }}.hasClass('next-{{ dashName }}'));
    });
});
