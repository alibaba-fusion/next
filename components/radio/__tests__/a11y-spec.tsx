import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Radio from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
        disabled: true,
    },
];

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Radio A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for different states', async () => {
        wrapper = await testReact(
            <div>
                <Radio defaultChecked label="test1">
                    test 1
                </Radio>
                &nbsp;
                <Radio checked label="test2">
                    test 1
                </Radio>
                &nbsp;
                <Radio disabled label="test3">
                    test 1
                </Radio>
                &nbsp;
                <Radio checked disabled label="test4">
                    test 1
                </Radio>
                &nbsp;
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for Radio Group with children', async () => {
        wrapper = await testReact(
            <Radio.Group value="watermelon">
                <Radio id="apple" value="apple" disabled>
                    苹果
                </Radio>
                <Radio id="pear" value="pear">
                    梨子
                </Radio>
                <Radio id="watermelon" value="watermelon">
                    西瓜
                </Radio>
            </Radio.Group>
        );
        return wrapper;
    });

    it('should not have any violations for Radio Group with datasource', async () => {
        const list = [
            {
                value: 'apple',
                label: '苹果',
                disabled: true,
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
        wrapper = await testReact(<Radio.Group value={'apple'} dataSource={list} />);
        return wrapper;
    });

    it('should add tabIndex for first Radio Item', async () => {
        const wrapper = mount(
            <Radio.Group>
                <Radio id="pear" value="pear" checked>
                    ={true}
                    梨子
                </Radio>
                <Radio id="apple" value="apple" className="apple">
                    苹果
                </Radio>
            </Radio.Group>
        );
        wrapper.update();
        assert(wrapper.find('input#pear').at(0).getDOMNode().tabIndex === 0);
    });

    it('should not add tabIndex for non Radio Item', async () => {
        const wrapper = mount(
            <Radio.Group defaultValue={'pear'}>
                <div id="mywrapper">
                    <Radio id="pear" value="pear">
                        梨子
                    </Radio>
                </div>
                <div id="another" tabIndex="-100">
                    <Radio id="apple" value="apple" className="apple">
                        苹果
                    </Radio>
                </div>
            </Radio.Group>
        );
        assert(wrapper.find('div#mywrapper').at(0).getDOMNode().tabIndex === -1);
    });
});
