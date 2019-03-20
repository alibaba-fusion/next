import React from 'react';
import assert from 'power-assert';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from '../../src/breadcrumb';
import ConfigProvider from '../../src/config-provider';

Enzyme.configure({ adapter: new Adapter() });
const { Item } = Breadcrumb;

describe('Item', () => {
    it('should has item class', () => {
        const wrapper = shallow(<Item>Item</Item>);
        assert(wrapper.dive().hasClass('next-breadcrumb-item'));
        wrapper.unmount();
    });

    it('should has an a tag if you pass the link property', () => {
        const wrapper = mount(
            <Item link="https://www.alibaba.com/">Item</Item>
        );
        assert(wrapper.find('a').length === 1);
        assert(wrapper.find('a').props().href === 'https://www.alibaba.com/');
        wrapper.unmount();
    });

    it('should has an span tag if you do not pass the link property', () => {
        const wrapper = mount(<Item>Item</Item>);
        assert(wrapper.find('.next-breadcrumb-text').length === 1);
        assert(wrapper.find('a').length === 0);
        wrapper.unmount();
    });

    it('should has an activated class if you pass it', () => {
        const wrapper1 = mount(
            <Item activated link="https://www.alibaba.com/">
                Item
            </Item>
        );
        assert(wrapper1.find('a').hasClass('activated'));
        wrapper1.unmount();
        const wrapper2 = mount(<Item activated>Item</Item>);
        assert(wrapper2.find('span').hasClass('activated'));
        wrapper2.unmount();
    });
});

describe('Breadcrumb', () => {
    it("should throw error if you don't pass Item as children", () => {
        try {
            shallow(<Breadcrumb>Breadcrumb</Breadcrumb>);
        } catch (e) {
            assert(
                e.message === "Breadcrumb's children must be Breadcrumb.Item!"
            );
        }
    });

    it('should render ellipsis if maxNode is less than Items count', () => {
        const wrapper = mount(
            <Breadcrumb maxNode={5}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>
        );
        const ellipsisItem = wrapper.find('.next-breadcrumb-text').at(1);
        assert(ellipsisItem.text() === '...');
        assert(
            ellipsisItem.find('span').hasClass('next-breadcrumb-text-ellipsis')
        );
        wrapper.unmount();
    });

    it('should not render the separator of the last item', () => {
        const wrapper = mount(
            <Breadcrumb>
                <Item>Home</Item>
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        assert(
            wrapper
                .find('.next-breadcrumb-item')
                .at(2)
                .find('.next-breadcrumb-separator').length === 0
        );
        wrapper.unmount();
    });

    it('should support RTL', () => {
        const wrapper = mount(
            <ConfigProvider rtl>
                <Breadcrumb>
                    <Item>Home</Item>
                    <Item>Whatever</Item>
                    <Item>All Categories</Item>
                </Breadcrumb>
            </ConfigProvider>
        );

        assert(wrapper.find('.next-breadcrumb').props().dir === 'rtl');
        assert(
            wrapper
                .find('.next-breadcrumb-item')
                .at(0)
                .props().dir === 'rtl'
        );
        wrapper.unmount();
    });
});
