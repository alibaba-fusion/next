import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Tag from '../index';

Enzyme.configure({ adapter: new Adapter() });

const { Selectable: TagCheckable, Group: TagGroup, Closable: TagClosable } = Tag;

const PRESET_COLORS = {
    blue: '#4494F9',
    green: '#46BC15',
    orange: '#FF9300',
    red: '#FF3000',
    turquoise: '#01C1B2',
    yellow: '#FCCC12',
};

/* eslint-disable react/jsx-filename-extension */
/* global describe it */

describe('Tag', () => {
    describe('render', () => {
        it('should render nothing if tag is unvisible', () => {
            const wrapper = shallow(<Tag animation={false} />)
                .dive()
                .dive();
            // note: react setState is asynchronous
            // so must force update or setTimeout in test suit to check render results.
            wrapper
                .setState({
                    visible: false,
                })
                .update();

            assert(wrapper.isEmptyRender() === true);
        });

        it('should render tag body if tag is visible', () => {
            const wrapper = mount(<Tag />);
            assert(wrapper.find('.next-tag-body').length === 1);
        });

        it('should contain tail if tag is closable and type is not normal', () => {
            const wrapper = mount(<Tag closable type="primary" />);
            assert(wrapper.find('.next-tag-close-btn').length === 1);
        });

        it('`afterAppear` should be called when tag appeared', () => {
            const afterAppearCb = sinon.spy();
            const wrapper = shallow(<Tag afterAppear={afterAppearCb} />)
                .dive()
                .dive();
            wrapper.instance().handleAnimationInit();
            assert(afterAppearCb.calledOnce === true);
        });

        it('`afterLeave` should be called when tag leaved', () => {
            const afterLeaveCb = sinon.spy();
            const wrapper = shallow(<Tag afterClose={afterLeaveCb} />)
                .dive()
                .dive();
            wrapper.instance().handleAnimationEnd();
            assert(afterLeaveCb.calledOnce === true);
        });
    });

    describe('behavior', () => {
        it('should emit `onClick` method if tag body clicked', () => {
            const onClickCb = sinon.spy();
            const wrapper = mount(<Tag onClick={onClickCb} />);
            wrapper.find('.next-tag').simulate('click');
            assert(onClickCb.calledOnce === true);
        });

        it('should hidden tag if tag is closable and closeArea is `tag`', () => {
            const onCloseCb = sinon.spy();
            const wrapper = mount(<Tag onClose={onCloseCb} closable closeArea="tag" />);
            wrapper.find('.next-tag').simulate('click');
            assert(onCloseCb.calledOnce === true);
        });

        it('should emit `onClose` method if tail clicked', () => {
            const onCloseCb = sinon.spy();
            const wrapper = mount(<Tag closable type="primary" onClose={onCloseCb} />);
            wrapper.find('.next-tag-close-btn').simulate('click');
            assert(onCloseCb.calledOnce === true);
        });

        it('tag should be destroyed after unmoun', () => {
            const wrapper = shallow(<Tag />)
                .dive()
                .dive();
            const willUnmount = sinon.spy();
            const instance = wrapper.instance();
            // for coverage
            instance.componentWillUnmount();
            instance.componentWillUnmount = willUnmount;
            wrapper.unmount();
            assert(willUnmount.callCount === 1);
        });
    });

    describe('color', () => {
        // 预设颜色值匹配
        Object.entries(PRESET_COLORS).forEach(([name]) => {
            it(`should render preset ${name} color when type is primay`, () => {
                const wrapper = mount(<Tag closable type="primary" color={name} />);

                // 背景一致，且颜色是白色
                assert(wrapper.find('.next-tag').hasClass(`next-tag-${name}`));
                wrapper.unmount();
            });
        });

        Object.entries(PRESET_COLORS).forEach(([name, color]) => {
            it(`should render preset ${name} color when type is normal`, () => {
                const wrapper = mount(<Tag color={name} />);
                // 背景透明 25%， 字体颜色不变
                assert(wrapper.find('.next-tag').hasClass(`next-tag-${name}-inverse`));
                wrapper.unmount();
            });
        });

        it('should render custom color ', () => {
            const wrapper = mount(<Tag color={'#ff0'} />);

            const style = wrapper.find('.next-tag').prop('style');
            const { backgroundColor, color, borderColor } = style;

            assert(backgroundColor === '#ff0' && color === '#fff' && borderColor === '#ff0');

            wrapper.unmount();
        });

        it('should render as primary type when type is normal but custom color is set', () => {
            const wrapper = mount(<Tag color={'#ff0'} type="normal" />);

            const style = wrapper.find('.next-tag').prop('style');
            const { backgroundColor, color, borderColor } = style;

            assert(backgroundColor === '#ff0' && color === '#fff' && borderColor === '#ff0');

            wrapper.unmount();
        });
    });
});

describe('TagCheckable', () => {
    describe('render', () => {
        it('should contain `checked` class if tag is check state', () => {
            const wrapper = mount(<TagCheckable checked />);
            assert(wrapper.find('.next-tag').hasClass('checked'));
        });

        it('should update `checked` state when new props', () => {
            const wrapper = mount(<TagCheckable checked />);

            wrapper.setProps({
                checked: false,
            });
            assert(wrapper.children().first().state('checked') === false);
        });
    });

    describe('behavior', () => {
        it('emit `onChange` if click undisabled tag', () => {
            const onChangeCb = sinon.spy();
            const wrapper = mount(<TagCheckable onChange={onChangeCb} />);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.calledOnce === true);
        });

        it('`onChange` wont emit if click disabled tag', () => {
            const onChangeCb = sinon.spy();
            const wrapper = mount(<TagCheckable disabled onChange={onChangeCb} />);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.calledOnce === false);
        });

        it('`onChange` passes checked state value', () => {
            const onChangeCb = sinon.spy();
            const wrapper = mount(<TagCheckable onChange={onChangeCb} />);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.getCall(0).args[0] === true);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.getCall(1).args[0] === false);
        });
    });
});

describe('TagClosable', () => {
    describe('render', () => {
        it('should contain `checked` class if tag is check state', () => {
            const wrapper = mount(<TagClosable checked />);
            assert(wrapper.find('.next-tag .next-tag-close-btn').length === 1);
        });
    });

    describe('behavior', () => {
        it('emit `onChange` if click undisabled tag', () => {
            const onClose = sinon.spy();
            const wrapper = mount(<TagClosable closeArea="tag" onClose={onClose} />);
            wrapper.find('.next-tag').simulate('click');
            assert(onClose.calledOnce === true);
        });
    });
});

describe('TagGroup', () => {
    describe('render', () => {
        it('should contain child node that pass in', () => {
            const node = <div>Hello World</div>;
            const wrapper = mount(<TagGroup>{node}</TagGroup>);
            assert(wrapper.contains(node) === true);
        });

        it('default prefix props is `next-`', () => {
            const wrapper = shallow(<TagGroup />);
            assert(wrapper.props().prefix === 'next-');
        });
    });
});
