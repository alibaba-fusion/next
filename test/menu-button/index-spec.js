import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import MenuButton from '../../src/menu-button/index';
import '../../src/menu-button/style.js';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef,react/jsx-filename-extension */
describe('MenuButton', () => {
    const menu = ['a', 'b'].map(item => <MenuButton.Item key={item}>{item}</MenuButton.Item>);

    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('render', () => {
        it('should render', () => {
            const wrapper = mount(<MenuButton label="hello world">{menu}</MenuButton>);
            assert(wrapper.find('button.next-menu-btn').length === 1);
        });

        it('should controlled selectedKeys', () => {
            const wrapper = mount(<MenuButton label="hello world" visible selectedKeys={['a']} selectMode="single">{menu}</MenuButton>);
            wrapper.setProps({ selectedKeys: ['b'] });
            assert(wrapper.find('li[title="b"][role="menuitem"]').hasClass('next-selected'));
        });

        it('should controlled popup visible', () => {
            const wrapper = mount(<MenuButton label="hello world">{menu}</MenuButton>);
            assert(wrapper.find('.next-menu').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-menu').length === 1);
        });
    });

    describe('action', () => {
        it('should click trigger to open the popup', () => {
            let visible;
            const wrapper = mount(<MenuButton label="hello world" onVisibleChange={vis => visible = vis}>{menu}</MenuButton>);
            wrapper.find('button.next-menu-btn').simulate('click');
            assert(wrapper.find('.next-menu').length === 1);
            assert(visible);
        });

        it('should select in uncontrolled mode', () => {
            const wrapper = mount(<MenuButton label="hello world" visible selectMode="single">{menu}</MenuButton>);
            wrapper.find('li[title="b"][role="menuitem"]').simulate('click');
            assert(wrapper.find('li[title="b"][role="menuitem"]').hasClass('next-selected'));
        });

        it('should select in controlled mode', () => {
            const wrapper = mount(<MenuButton label="hello world" visible selectedKeys={['a']} selectMode="single">{menu}</MenuButton>);
            wrapper.find('li[title="b"][role="menuitem"]').simulate('click');
            assert(wrapper.find('li[title="a"][role="menuitem"]').hasClass('next-selected'));
        });
    });
});
