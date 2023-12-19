import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import UIState from '../index';

/* eslint-disable */

Enzyme.configure({ adapter: new Adapter() });

class Test extends UIState {
    componentWillReceiveProps(nextProps) {
        if (nextProps.reset) {
            this.resetUIState();
        }
    }
    render() {
        const input = <input type="radio" className={this.getStateClassName()} />;
        return this.getStateElement(input);
    }
}

describe('mixin-ui-state', () => {
    const wrapper = mount(<Test id="abc" onMouseEnter={() => {}} />);

    it('Focus element should has focused class', () => {
        wrapper.find('input').simulate('focus');
        assert(wrapper.find('.focused').length === 1);
    });

    it('Blur element should not has focused class', () => {
        wrapper.find('input').simulate('blur');
        assert(wrapper.find('.focused').length === 0);
    });

    it('resetUIState should not has focused class', () => {
        wrapper.find('input').simulate('focus');
        wrapper.setProps({ reset: true });
        assert(wrapper.find('.focused').length === 0);
    });
});
