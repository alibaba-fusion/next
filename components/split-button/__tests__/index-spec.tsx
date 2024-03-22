import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import SplitButton from '../index';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef,react/jsx-filename-extension */
describe('SplitButton', () => {
    const menu = ['a', 'b'].map(item => <SplitButton.Item key={item}>{item}</SplitButton.Item>);

    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('render', () => {
        it('should render', () => {
            const wrapper = mount(<SplitButton label="hello world">{menu}</SplitButton>);
            assert(wrapper.find('div.next-split-btn').length === 1);
        });

        it('should controlled selectedkeys', () => {
            const wrapper = mount(
                <SplitButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </SplitButton>
            );
            wrapper.setProps({ selectedKeys: ['b'] });
            assert(wrapper.find('li[title="b"][role="option"]').hasClass('next-selected'));
        });

        it('should controlled popup visible', () => {
            const wrapper = mount(<SplitButton label="hello world">{menu}</SplitButton>);
            assert(wrapper.find('.next-menu').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-menu').length === 1);
        });
    });

    describe('action', () => {
        it('should click trigger to open the popup', () => {
            let visible;
            const wrapper = mount(
                <SplitButton label="hello world" onVisibleChange={vis => (visible = vis)}>
                    {menu}
                </SplitButton>
            );
            wrapper.find('button.next-split-btn-trigger').simulate('click');
            assert(wrapper.find('.next-menu').length === 1);
            assert(visible);
        });

        it('should select in uncontrolled mode', () => {
            const wrapper = mount(
                <SplitButton label="hello world" visible selectMode="single">
                    {menu}
                </SplitButton>
            );
            wrapper.find('li[title="b"][role="option"]').simulate('click');
            assert(wrapper.find('li[title="b"][role="option"]').hasClass('next-selected'));
        });

        it('should select in controlled mode', () => {
            const wrapper = mount(
                <SplitButton label="hello world" visible selectedKeys={['a']} selectMode="single">
                    {menu}
                </SplitButton>
            );
            wrapper.find('li[title="b"][role="option"]').simulate('click');
            assert(wrapper.find('li[title="a"][role="option"]').hasClass('next-selected'));
        });
    });
});
