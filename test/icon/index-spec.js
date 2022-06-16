import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../src/icon';
import ConfigProvider from '../../src/config-provider';

import ConfigProvider from '../../src/config-provider';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */

describe('Icon', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Icon />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('should have type class', () => {
        wrapper.setProps({ type: 'comments' });
        assert(wrapper.find('.next-icon').hasClass('next-icon-comments'));
    });

    it('should have size class', () => {
        wrapper.setProps({ size: 'large' });
        assert(wrapper.find('.next-icon').hasClass('next-large'));
    });

    it('should receive className prop', () => {
        wrapper.setProps({ className: 'custom' });
        assert(wrapper.find('.next-icon').hasClass('custom'));
    });

    it('should receive style prop', () => {
        wrapper.setProps({ style: { color: 'red' } });
        assert(wrapper.find('.next-icon').prop('style').color === 'red');
    });

    it('should receive style prop', () => {
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
        });

        let newWrapper = mount(<CustomIcon type="icon-pic"/>);
        assert(newWrapper.find('.next-icon svg'));
        newWrapper.setProps({ size: 'xl' });
        assert(newWrapper.find('.next-icon').hasClass('next-xl'));

        newWrapper.unmount();
        newWrapper = null;
    });

    it('createFromIconfontCN should support prefix', () => {
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
        });

        let newWrapper = mount( <ConfigProvider prefix="abcd-">
            <CustomIcon type="icon-pic" prefix="efg-"/>
        </ConfigProvider>);
        assert(newWrapper.find('.abcd-icon > svg'));
        assert(newWrapper.find('.abcd-icon > efg-icon-remote'));

        newWrapper.unmount();
        newWrapper = null;
    });

    it('createFromIconfontCN should support prefix', () => {
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
        });

        const newWrapper = mount( <ConfigProvider prefix="abcd-">
            <CustomIcon type="icon-pic" prefix="efg-"/>
        </ConfigProvider>);
        assert(newWrapper.find('.abcd-icon > svg'));
        assert(newWrapper.find('.abcd-icon > efg-icon-remote'));
    });
});
