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

        it('should render secondary as type=primary model=outline button', () => {
            const wrapper = mount(<Button type="secondary">确定</Button>);

            assert(wrapper.find('.next-btn-primary').length === 1);
            assert(wrapper.find('.next-btn-outline').length === 1);
        });

        it('should render default type and model properly', () => {
            const wrapper = mount(<Button>确定</Button>);
            const wrapper2 = mount(<Button type="primary">确定</Button>);
            const wrapper3 = mount(<Button model="outline">确定</Button>);

            assert(wrapper.find('.next-btn-normal').length === 1);
            assert(wrapper.find('.next-btn-solid').length === 1);
            assert(wrapper2.find('.next-btn-solid').length === 1);
            assert(wrapper3.find('.next-btn-normal').length === 1);
        });

        it('should render type and model properly', () => {
            const wrapper2 = mount(
            <Button type="normal" model="solid">
                确定
            </Button>
            );
            const wrapper3 = mount(
                <Button type="normal" model="outline">
                    确定
                </Button>
            );
            const wrapper4 = mount(
                <Button type="normal" model="text">
                    确定
                </Button>
            );
            const wrapper5 = mount(
            <Button type="primary" model="solid">
                确定
            </Button>
            );
            const wrapper6 = mount(
                <Button type="primary" model="outline">
                    确定
                </Button>
            );
            const wrapper7 = mount(
                <Button type="primary" model="text">
                    确定
                </Button>
            );
            const wrapper8 = mount(
            <Button type="warning" model="solid">
                确定
            </Button>
            );
            const wrapper9 = mount(
                <Button type="warning" model="outline">
                    确定
                </Button>
            );
            const wrapper10 = mount(
                <Button type="warning" model="text">
                    确定
                </Button>
            );
            const wrapper11 = mount(
            <Button type="inverse" model="solid">
                确定
            </Button>
            );
            const wrapper12 = mount(
                <Button type="inverse" model="outline">
                    确定
                </Button>
            );
            const wrapper13 = mount(
                <Button type="inverse" model="text">
                    确定
                </Button>
            );

            assert(wrapper2.find('.next-btn').hasClass('next-btn-normal') && wrapper2.find('.next-btn').hasClass('next-btn-solid'));
            assert(wrapper3.find('.next-btn').hasClass('next-btn-normal') && wrapper3.find('.next-btn').hasClass('next-btn-outline'));
            assert(wrapper4.find('.next-btn').hasClass('next-btn-normal') && wrapper4.find('.next-btn').hasClass('next-btn-text'));
            assert(wrapper5.find('.next-btn').hasClass('next-btn-primary') && wrapper5.find('.next-btn').hasClass('next-btn-solid'));
            assert(wrapper6.find('.next-btn').hasClass('next-btn-primary') && wrapper6.find('.next-btn').hasClass('next-btn-outline'));
            assert(wrapper7.find('.next-btn').hasClass('next-btn-primary') && wrapper7.find('.next-btn').hasClass('next-btn-text'));
            assert(wrapper8.find('.next-btn').hasClass('next-btn-warning') && wrapper8.find('.next-btn').hasClass('next-btn-solid'));
            assert(wrapper9.find('.next-btn').hasClass('next-btn-warning') && wrapper9.find('.next-btn').hasClass('next-btn-outline'));
            assert(wrapper10.find('.next-btn').hasClass('next-btn-warning') && wrapper10.find('.next-btn').hasClass('next-btn-text'));
            assert(wrapper11.find('.next-btn').hasClass('next-btn-inverse') && wrapper11.find('.next-btn').hasClass('next-btn-solid'));
            assert(wrapper12.find('.next-btn').hasClass('next-btn-inverse') && wrapper12.find('.next-btn').hasClass('next-btn-outline'));
            assert(wrapper13.find('.next-btn').hasClass('next-btn-inverse') && wrapper13.find('.next-btn').hasClass('next-btn-text'));
        });

        it('should render loading button', () => {
            const wrapper = mount(<Button ghost loading>确定</Button>);

            assert(wrapper.find('.next-btn-loading').length === 1);
        });

        it('should render custom loading button', () => {
            const wrapper = mount(<Button ghost loading icons={{ loading: <Icon type="loading" /> }}>确定</Button>);

            assert(wrapper.find('Icon.next-btn-custom-loading-icon').length === 1);
            assert(wrapper.find('.next-btn-loading').length === 0);
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

        it('should render button by different htmlType', () => {
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
                </Button.Group>
            );

            assert(wrapper.find('.next-btn-group').length === 1);
            assert(wrapper.find('.next-btn.next-btn-primary').length === 1);
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
