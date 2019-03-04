import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../src/icon';
import Button from '../../src/button/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    describe('render', () => {
        it('should render button by type', () => {
            const wrapper = mount(<Button type="primary">重要按钮</Button>);
            assert(wrapper.find('.next-btn').hasClass('next-btn-primary'));
        });

        it('should render button with deprecated shape', () => {
            const wrapper = mount(<Button shape="text">button</Button>);
            assert(wrapper.find('.next-btn').hasClass('next-btn-text'));
        });

        it('should render warning/text button', () => {
            const wrapper2 = mount(<Button warning>确定</Button>);
            const wrapper3 = mount(
                <Button text type="primary">
                    确定
                </Button>
            );

            assert(wrapper2.find('.next-btn').hasClass('next-btn-warning'));
            assert(wrapper3.find('.next-btn').hasClass('next-btn-text'));
        });

        it('should render ghost button', () => {
            const wrapper = mount(<Button ghost>确定</Button>);
            const wrapper2 = mount(<Button ghost="light">确定</Button>);
            const wrapper3 = mount(<Button ghost="dark">确定</Button>);

            assert(wrapper.find('.next-btn-ghost').length === 1);
            assert(wrapper2.find('.next-btn-light').length === 1);
            assert(wrapper3.find('.next-btn-dark').length === 1);
        });

        it('should render button with icon', () => {
            const wrapper = mount(
                <Button type="primary">
                    <Icon type="arrow-left" />
                    按钮
                </Button>
            );
            const wrapper2 = mount(
                <Button type="primary">
                    按钮
                    <Icon type="arrow-right" />
                </Button>
            );

            assert(wrapper.find('.next-icon').hasClass('next-icon-first'));
            assert(wrapper2.find('.next-icon').hasClass('next-icon-last'));
        });

        it('should render button by diffrent htmlType', () => {
            const wrapper = mount(
                <Button component="a" htmlType="submit">
                    按钮
                </Button>
            );
            assert(wrapper.find('a.next-btn').length === 1);
        });

        it('should render disabled <a>', () => {
            const wrapper = mount(
                <Button component="a" href="https://www.taobao.com" disabled>
                    hello
                </Button>
            );
            const node = wrapper.find('a.next-btn').instance();
            assert(node.hasAttribute('disabled'));
            assert(!node.hasAttribute('href'));
        });

        it('should click single button', () => {
            let isClicked = false;
            const wrapper = mount(
                <Button
                    onClick={() => {
                        isClicked = true;
                    }}
                >
                    按钮
                </Button>
            );

            wrapper.find('.next-btn').simulate('click');
            assert(isClicked);
        });

        it('should mouseUp with handler', () => {
            let isUp = false;
            const wrapper = mount(
                <Button
                    onMouseUp={() => {
                        isUp = true;
                    }}
                >
                    hello
                </Button>
            );
            wrapper.find('.next-btn').simulate('mouseUp');
            assert(isUp);
        });
    });
});

describe('ButtonGroup', () => {
    describe('render', () => {
        it('should render button by type', () => {
            const wrapper = mount(
                <Button.Group>
                    <Button type="primary">确定</Button>
                    <Button type="secondary">取消</Button>
                </Button.Group>
            );

            assert(wrapper.find('.next-btn-group').length === 1);
            assert(wrapper.find('.next-btn.next-btn-primary').length === 1);
            assert(wrapper.find('.next-btn.next-btn-secondary').length === 1);
        });

        it('should render button by group size', () => {
            const wrapper = mount(
                <Button.Group size="small">
                    <Button size="large">确定</Button>
                    <Button>取消</Button>
                </Button.Group>
            );

            assert(wrapper.find('.next-large').length === 0);
            assert(wrapper.find('.next-btn.next-small').length === 2);
        });

        it('should render button group with invalid child', () => {
            const wrapper = mount(
                <Button.Group>
                    <Button>OK</Button>
                    {null}
                </Button.Group>
            );
            assert(wrapper.find('.next-btn-group').length === 1);
            assert(wrapper.find('.next-btn').length === 1);
        });

        it('should click button in group', () => {
            let clicked = false;
            const wrapper = mount(
                <Button.Group>
                    <Button
                        type="primary"
                        onClick={() => {
                            clicked = true;
                        }}
                    >
                        确定
                    </Button>
                    <Button type="primary">取消</Button>
                </Button.Group>
            );

            wrapper
                .find('.next-btn')
                .at(0)
                .simulate('click');
            assert(clicked);
        });
    });
});
