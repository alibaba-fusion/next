import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Radio from '../index';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

describe('Radio', () => {
    describe('[render] normal', () => {
        it('should get a normal radio', () => {
            const wrapper1 = mount(<Radio />);
            const wrapper2 = mount(<Radio id="banana">香蕉</Radio>);
            assert(wrapper1.find('.next-radio').length === 1);
            assert(wrapper2.find('.next-radio').length === 1);
        });
        it('with checked && defaultChecked', () => {
            const wrapper1 = mount(<Radio defaultChecked={false} />);
            const wrapper2 = mount(<Radio checked={false} />);
            assert(wrapper1.find('.next-radio.checked').length === 0);
            assert(wrapper2.find('.next-radio.checked').length === 0);
        });
        it('disabled', () => {
            const wrapper = mount(<Radio disabled />);
            assert(wrapper.find('.next-radio.disabled').length === 1);
        });
        it('should support className', () => {
            const wrapper = mount(<Radio className="custom-name" />);
            assert(wrapper.find('.next-radio-wrapper.custom-name').length === 1);
        });
        it('should support name', () => {
            const wrapper = mount(<Radio name="customer" />);
            assert(wrapper.find('input[name="customer"]').length === 1);
        });

        it('should isPreview', () => {
            const wrapper = mount(<Radio isPreview defaultChecked label="apple" />);
            assert(wrapper.getDOMNode().innerText === 'apple');
        });

        it('should renderPreview', () => {
            const wrapper = mount(<Radio isPreview renderPreview={() => 'render preivew'} />);
            assert(wrapper.getDOMNode().innerText === 'render preivew');
        });
    });

    describe('[focus] call focus()', () => {
        let wrapper, target;

        beforeEach(() => {
            target = document.createElement('div');
            document.body.appendChild(target);
        });

        afterEach(() => {
            target = null;
            if (wrapper) {
                wrapper.unmount();
            }
        });
        it('should focus', () => {
            wrapper = mount(<Radio>1</Radio>, {
                attachTo: target,
            });
            const group = wrapper.instance().getInstance();
            group.focus();
            const inputElement = wrapper.find('input').getDOMNode();
            assert(document.activeElement === inputElement);
        });
        it('should not focus when disabled', () => {
            wrapper = mount(<Radio disabled={true}>1</Radio>, {
                attachTo: target,
            });
            const group = wrapper.instance().getInstance();
            group.focus();
            const inputElement = wrapper.find('input').getDOMNode();
            assert(document.activeElement !== inputElement);
        });
    });

    describe('behavior', () => {
        it('simulate click', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.display = 'none';
            document.body.appendChild(container);

            before(done => {
                ReactDOM.render(<Radio />, container, function init() {
                    wrapper = this;
                    done();
                });
            });
            it('should checked after click', () => {
                assert(!wrapper.state.checked);
                ReactTestUtils.scryRenderedDOMComponentsWithTag(wrapper, 'input')[0].click();
                assert(!!wrapper.state.checked);
            });
            it('should call `onChange`', () => {
                const onChange = sinon.spy();
                const wrapper1 = mount(<Radio onChange={onChange} />);

                assert(!wrapper.find('input').prop('checked'));
                wrapper1.find('input').simulate('change', { target: { checked: true } });

                assert(onChange.calledOnce);
                assert(wrapper.find('input').prop('checked'));
            });
        });
        it('should support controlled `checked`', () => {
            const wrapper = mount(<Radio checked={true} />);
            assert(wrapper.find('input').props().checked);
            assert(wrapper.find('.checked').length !== 0);

            wrapper.setProps({
                checked: false,
            });
            assert(!wrapper.find('input').props().checked);
            assert(wrapper.find('.checked').length === 0);
        });
    });
});
