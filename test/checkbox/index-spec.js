import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Checkbox from '../../src/checkbox/index';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

describe('Checkbox', () => {
    describe('[render] normal', () => {
        it('should get a normal checkbox', () => {
            const wrapper1 = mount(<Checkbox />);
            const wrapper2 = mount(<Checkbox id="banana">香蕉</Checkbox>);
            assert(wrapper1.find('.next-checkbox').length === 1);
            assert(wrapper2.find('.next-checkbox').length === 1);
            assert(wrapper2.find('input#banana').length === 1);
        });
    });

    describe('[render] checked', () => {
        it('should get a checked checkbox', () => {
            const wrapper1 = mount(<Checkbox defaultChecked />);
            const wrapper2 = mount(<Checkbox checked />);
            assert(wrapper1.find('.checked').length === 1);
            assert(wrapper2.find('.checked').length === 1);
        });
    });

    describe('[render] indeterminate', () => {
        it('should get a indeterminate checkbox', () => {
            const wrapper1 = mount(<Checkbox defaultIndeterminate />);
            const wrapper2 = mount(<Checkbox indeterminate />);

            assert(wrapper1.find('.indeterminate').length === 1);
            assert(wrapper2.find('.indeterminate').length === 1);
        });
    });

    describe('[render] disabled', () => {
        it('should get a disabled checkbox', () => {
            const wrapper = mount(<Checkbox disabled />);
            assert(wrapper.find('.disabled').length === 1);
        });
    });

    describe('[render] label', () => {
        it('should get a checkbox with label', () => {
            const wrapper = mount(<Checkbox label="banana" />);
            assert(wrapper.find('.next-checkbox-label').length === 1);
        });
    });

    describe('[attribute] set custom `className`', () => {
        it('should has className `cumstom-name`', () => {
            const wrapper = mount(<Checkbox className="cumstom-name" />);
            assert(wrapper.props().className === 'cumstom-name');
            assert(
                wrapper.find('.next-checkbox-wrapper.cumstom-name').length === 1
            );
        });
    });

    describe('[events] simulate click', () => {
        const wrapper = mount(<Checkbox />);

        it('should checked after click', () => {
            wrapper
                .find('input')
                .simulate('change', { target: { checked: true } });
            assert(wrapper.find('input').prop('checked'));
        });
        it('should call `onChange`', () => {
            const onChange = sinon.spy();
            const wrapper = mount(<Checkbox onChange={onChange} />);
            wrapper.find('input').simulate('change');
            assert(onChange.calledOnce);
        });
        it('should call `onMouseEnter`', () => {
            const onMouseEnter = sinon.spy();
            const wrapper1 = mount(<Checkbox onMouseEnter={onMouseEnter} />);
            wrapper1.find('.next-checkbox-wrapper').simulate('mouseEnter');
            assert(onMouseEnter.calledOnce);
        });
        it('should call `onMouseLeave`', () => {
            const onMouseLeave = sinon.spy();
            const wrapper1 = mount(<Checkbox onMouseLeave={onMouseLeave} />);
            wrapper1.find('.next-checkbox-wrapper').simulate('mouseLeave');
            assert(onMouseLeave.calledOnce);
        });
    });

    describe('[behavior] controlled', () => {
        it('should support controlled `checked` and `indeterminate`', () => {
            const wrapper = shallow(<Checkbox checked={true} />).dive();
            assert(wrapper.state().checked);
            assert(wrapper.find('.checked').length === 1);

            wrapper.setProps({
                checked: false,
            });
            assert(!wrapper.state().checked);
            assert(wrapper.find('.checked').length === 0);
            wrapper.setProps({
                indeterminate: true,
            });
            assert(wrapper.find('.indeterminate').length === 1);
        });
    });
});
