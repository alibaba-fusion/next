import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from '../../src/checkbox/index';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Checkbox A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for grouped checkbox with children', async () => {
        wrapper = await testReact(
            <Checkbox.Group value={['pear', 'watermelon']}>
                <Checkbox id="apple" value="apple" className="apple">
                    苹果
                </Checkbox>
                <Checkbox id="pear" value="pear">
                    梨子
                </Checkbox>
                <Checkbox id="watermelon" value="watermelon">
                    西瓜
                </Checkbox>
            </Checkbox.Group>
        );
        return wrapper;
    });

    it('should not have any violations for grouped checkbox with datasource', async () => {
        const list = [
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
        wrapper = await testReact(
            <Checkbox.Group value={['pear']} dataSource={list} />
        );
        return wrapper;
    });
});
