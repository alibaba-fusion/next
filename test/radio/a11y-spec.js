import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radio from '../../src/radio/index';
import '../../src/radio/style';
import { unmount, testReact } from '../util/a11y/validate';

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
        wrapper = await testReact(
            <Radio.Group value={'apple'} dataSource={list} />
        );
        return wrapper;
    });
});
