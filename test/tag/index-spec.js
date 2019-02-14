import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Tag from '../../src/tag';

Enzyme.configure({ adapter: new Adapter() });

const {Selectable: Tag_Checkable, Group: Tag_Group, Closable} = Tag;

describe('Tag', () => {

    describe('render', () => {
        it('should render nothing if tag is unvisible', () => {
            const wrapper = shallow(<Tag animation={false}/>).dive().dive();
            // note: react setState is asynchronous
            // so must force update or setTimeout in test suit to check render results.
            wrapper.setState({
                visible: false
            }).update();

            assert(wrapper.isEmptyRender() === true);
        });

        it('should render tag body if tag is visible', () => {
            const wrapper = mount(<Tag />);
            assert(wrapper.find('.next-tag-body').length === 1);
        });

        it('should contain tail if tag is closable and type is not normal', () => {
            const wrapper = mount(<Tag closable type="primary"/>);
            assert(wrapper.find('.next-tag-close-btn').length === 1)
        });

        it('`afterAppear` should be called when tag appeared', () => {
            const afterAppearCb = sinon.spy();
            const wrapper = shallow(<Tag afterAppear={afterAppearCb} />).dive().dive();
            wrapper.instance().handleAnimationInit();
            assert(afterAppearCb.calledOnce === true);
        });

        it('`afterLeave` should be called when tag leaved', () => {
            const afterLeaveCb = sinon.spy();
            const wrapper = shallow(<Tag afterClose={afterLeaveCb} />).dive().dive();
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
            const wrapper = shallow(<Tag />).dive().dive();
            const willUnmount = sinon.spy();
            const instance = wrapper.instance();
            // for coverage
            instance.componentWillUnmount();
            instance.componentWillUnmount = willUnmount;
            wrapper.unmount();
            assert(willUnmount.callCount === 1);
        })
    });

});


describe('Tag_Checkable', () => {

    describe('render', () => {
        it('should contain `checked` class if tag is check state', () => {
            const wrapper = mount(<Tag_Checkable checked/>);
            assert(wrapper.find('.next-tag').hasClass('checked'));
        });
    });

    describe('behavior', () => {
        it('emit `onChange` if click undisabled tag', () => {
            const onChangeCb = sinon.spy();
            const wrapper = mount(<Tag_Checkable onChange={onChangeCb}/>);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.calledOnce === true);
        });

        it('`onChange` wont emit if click disabled tag', () => {
            const onChangeCb = sinon.spy();
            const wrapper = mount(<Tag_Checkable disabled onChange={onChangeCb}/>);
            wrapper.find('.next-tag').simulate('click');
            assert(onChangeCb.calledOnce === false);
        });
    })
});




describe('Tag_Closable', () => {

    describe('render', () => {
        it('should contain `checked` class if tag is check state', () => {
            const wrapper = mount(<Closable checked/>);
            assert(wrapper.find('.next-tag .next-tag-close-btn').length === 1);
        });
    });

    describe('behavior', () => {
        it('emit `onChange` if click undisabled tag', () => {
            const onClose = sinon.spy();
            const wrapper = mount(<Closable closeArea="tag" onClose={onClose}/>);
            wrapper.find('.next-tag').simulate('click');
            assert(onClose.calledOnce === true);
        });
    })
});

describe('Tag_Group', () => {

    describe('render', () => {
        it('should contain child node that pass in', () => {
            const node = <div>Hello World</div>;
            const wrapper = mount(<Tag_Group>{node}</Tag_Group>);
            assert(wrapper.contains(node) === true);
        });

        it('default prefix props is `next-`', () => {
            const wrapper = shallow(<Tag_Group />);
            assert(wrapper.props().prefix === 'next-');
        })
    });

});
