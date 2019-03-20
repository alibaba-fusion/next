import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, expect } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Checkbox from '../../src/checkbox/index';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

const CheckboxGroup = Checkbox.Group;

describe('Checkbox.Group', () => {
    let list;
    beforeEach('mock data', () => {
        list = [
            {
                value: 'apple',
                label: '苹果',
            },
            {
                value: 'pear',
                label: '梨',
            },
            {
                value: 'orange',
                label: '橙子',
            },
        ];
    });
    describe('[render] control', () => {
        it('should contain `pear`', () => {
            const wrapper = shallow(
                <CheckboxGroup value={['pear']} dataSource={list} />
            ).dive();
            assert(wrapper.state().value.indexOf('pear') !== -1);
        });

        it('should have three children with mock data', () => {
            const wrapper = mount(
                <CheckboxGroup value={['pear']} dataSource={list} />
            );
            assert(
                wrapper.find('.next-checkbox-group').children().length === 3
            );
        });

        it('should support null child', () => {
            const wrapper = mount(
                <CheckboxGroup>
                    <Checkbox>1</Checkbox>
                    <Checkbox>2</Checkbox>
                    {null}
                </CheckboxGroup>
            );
            assert(
                wrapper.find('.next-checkbox-group').children().length === 2
            );
        });
    });

    describe('[render] uncontrol', () => {
        it('should have three children with mock data', () => {
            const wrapper = mount(
                <CheckboxGroup defaultValue={['apple']} dataSource={list} />
            );
            assert(
                wrapper.find('.next-checkbox-group').children().length === 3
            );
        });
    });

    describe('[render] nest', () => {
        const wrapper = shallow(
            <CheckboxGroup value={['pear', 'watermelon']}>
                <Checkbox id="apple" value="apple" className="apple">
                    苹果
                </Checkbox>
                <Checkbox id="pear" value="pear">
                    梨子
                </Checkbox>
                <Checkbox id="watermelon" value="watermelon">
                    西瓜
                </Checkbox>
            </CheckboxGroup>
        ).dive();

        it('should contain `pear` and `watermelon`', () => {
            assert(wrapper.state().value.indexOf('pear') !== -1);
            assert(wrapper.state().value.indexOf('watermelon') !== -1);
        });

        it('should have two children with nest <Checkbox />', () => {
            const wrapper = mount(
                <CheckboxGroup value={['watermelon']}>
                    <Checkbox id="apple" value="apple" disabled>
                        苹果
                    </Checkbox>
                    <Checkbox id="pear" value="pear">
                        梨子
                    </Checkbox>
                    <Checkbox id="watermelon" value="watermelon">
                        西瓜
                    </Checkbox>
                </CheckboxGroup>
            );
            const target = wrapper.find('.next-checkbox-group');
            assert(target.children().length === 3);
            assert(target.find('.disabled').length === 1);
        });
    });

    describe('[events] simulate change', () => {
        it('should call `onChange`', () => {
            const onChange = sinon.spy();
            const wrapper = mount(
                <CheckboxGroup
                    onChange={onChange}
                    value={['pear']}
                    dataSource={list}
                />
            );
            wrapper
                .find('input')
                .first()
                .simulate('change');
            assert(onChange.calledOnce);

            const onChange1 = sinon.spy();
            const wrapper1 = mount(
                <CheckboxGroup onChange={onChange1} dataSource={list} />
            );
            wrapper1
                .find('input')
                .first()
                .simulate('change');
            assert(onChange.calledOnce);
        });
    });

    describe('[behavior] controlled', () => {
        it('should support controlled `value`', () => {
            const wrapper = shallow(
                <CheckboxGroup value={['pear']} dataSource={list} />
            ).dive();
            assert(wrapper.state().value[0] === 'pear');

            wrapper.setProps({
                value: ['apple'],
            });
            assert(wrapper.state().value[0] === 'apple');
            wrapper.setProps({
                value: 'orange',
            });
            assert(wrapper.state().value[0] === 'orange');

            wrapper.setProps({
                value: null,
            });
            assert(wrapper.state().value.length === 0);
        });

        it('should support controlled `disabled`', () => {
            const wrapper = mount(
                <CheckboxGroup
                    disabled={false}
                    value={['pear']}
                    dataSource={list}
                />
            );
            assert(!wrapper.props().disabled);
            assert(!wrapper.find('.next-checkbox-group').hasClass('disabled'));

            wrapper.setProps({
                disabled: true,
            });
            assert(wrapper.find('.next-checkbox-group').hasClass('disabled'));
        });
    });
    describe('value === undefined', () => {
        it('should support value === undefined', () => {
            const wrapper = shallow(
                <CheckboxGroup value={['pear']} dataSource={list} />
            );
            const wrapper1 = shallow(
                <CheckboxGroup value={undefined} dataSource={list} />
            );
            wrapper.setProps({
                value: undefined,
            });
            assert.deepEqual(wrapper.dive().state().value, []);
            assert.deepEqual(wrapper1.dive().state().value, []);
        });
    });
    describe('value === 0', () => {
        it('should support value === 0', () => {
            const wrapper = shallow(
                <CheckboxGroup defaultValue={0} dataSource={list} />
            );
            assert.deepEqual(wrapper.dive().state().value, [0]);
            wrapper.setProps({
                value: 1,
            });
            assert.deepEqual(wrapper.dive().state().value, [1]);
        });
    });

    describe("should respect children's indeternimate state", () => {
        it('should support value === 0', () => {
            const wrapper1 = mount(
                <CheckboxGroup>
                    <Checkbox defaultIndeterminate={true}>1</Checkbox>
                </CheckboxGroup>
            );
            const wrapper2 = mount(
                <CheckboxGroup>
                    <Checkbox indeterminate={true}>1</Checkbox>
                </CheckboxGroup>
            );

            assert(wrapper1.find('.indeterminate').length === 1);
            assert(wrapper2.find('.indeterminate').length === 1);
        });
    });
});
