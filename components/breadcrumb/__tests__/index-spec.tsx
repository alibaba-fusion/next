import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from '../index';
import '../style';
import ConfigProvider from '../../config-provider';

Enzyme.configure({ adapter: new Adapter() });
const { Item } = Breadcrumb;

describe('Item', () => {
    it('should has item class', () => {
        const wrapper = shallow(<Item>Item</Item>);
        assert(wrapper.dive().hasClass('next-breadcrumb-item'));
        wrapper.unmount();
    });

    it('should has an a tag if you pass the link property', () => {
        const wrapper = mount(<Item link="https://www.alibaba.com/">Item</Item>);
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
    let mountNode;

    beforeEach(() => {
        mountNode = document.createElement('div');
        document.body.appendChild(mountNode);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    });

    it("should throw error if you don't pass Item as children", () => {
        try {
            shallow(<Breadcrumb>Breadcrumb</Breadcrumb>);
        } catch (e) {
            assert(e.message === "Breadcrumb's children must be Breadcrumb.Item!");
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
        assert(ellipsisItem.find('span').hasClass('next-breadcrumb-text-ellipsis'));
        wrapper.unmount();
    });

    it('should render ellipsis if maxNode set auto', () => {
        ReactDOM.render(
            <Breadcrumb maxNode="auto" style={{ width: '1px' }}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>,
            mountNode
        );
        const ellipsisItem = mountNode.querySelectorAll('.next-breadcrumb-text')[1];
        assert(ellipsisItem.textContent === '...');
    });

    it('should show hidden items menu when ellipsis clicked if showHiddenItems set true', () => {
        ReactDOM.render(
            <Breadcrumb maxNode={5} showHiddenItems popupProps={{ triggerType: 'click' }}>
                <Item>Home 1</Item>
                <Item>Whatever 2</Item>
                <Item>All Categories 3</Item>
                <Item>Women’s Clothing 4</Item>
                <Item>Blouses & Shirts 5</Item>
                <Item>T-shirts 6</Item>
            </Breadcrumb>,
            mountNode
        );
        const ellipsisItem = mountNode.querySelectorAll(
            '.next-breadcrumb-text-ellipsis-clickable span'
        )[0];
        assert.equal(ellipsisItem.textContent, '...');

        ellipsisItem.click();
        const menuItems = document.body.querySelectorAll('.next-menu-item');
        assert.equal(menuItems.length, 2);

        const menuItem1 = menuItems[0].querySelector('.next-menu-item-text');
        assert.equal(menuItem1.textContent, 'Whatever 2');

        const menuItem2 = menuItems[1].querySelector('.next-menu-item-text');
        assert.equal(menuItem2.textContent, 'All Categories 3');
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
            wrapper.find('.next-breadcrumb-item').at(2).find('.next-breadcrumb-separator')
                .length === 0
        );
        wrapper.unmount();
    });

    it('should not render the item of null', () => {
        let flag = false;
        const wrapper = mount(
            <Breadcrumb>
                {flag && <Item>Default Not Show</Item>}
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );
        assert(
            wrapper.find('.next-breadcrumb-item').at(2).find('.next-breadcrumb-separator')
                .length === 0
        );
        wrapper.unmount();
    });

    it('should be set component to change element tag', () => {
        const wrapper = mount(
            <Breadcrumb>
                <Item>Home</Item>
                <Item>Whatever</Item>
                <Item>All Categories</Item>
            </Breadcrumb>
        );

        assert(wrapper.getDOMNode().tagName.toUpperCase() === 'NAV'); // default nav

        wrapper.setProps({
            component: 'div',
        });
        assert(wrapper.getDOMNode().tagName.toUpperCase() === 'DIV');
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

        assert(wrapper.find('nav').props().dir === 'rtl');
        assert(wrapper.find('.next-breadcrumb-item').at(0).props().dir === 'rtl');
        wrapper.unmount();
    });
    it('should support onClick', () => {
        let isClicked = {};
        const wrapper = mount(
            <Breadcrumb
                maxNode={2}
                showHiddenItems
                popupProps={{ triggerType: 'click', visible: true }}
            >
                <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
                <Breadcrumb.Item
                    link="javascript:void(0);"
                    onClick={v => {
                        isClicked = true;
                    }}
                >
                    Whatever 2
                </Breadcrumb.Item>
                <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
            </Breadcrumb>
        );
        wrapper.find('.next-menu-item').at(0).simulate('click');
        assert(isClicked === true);
    });
});
