import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cascader from '../index';
import '../style';
import { unmount, testReact, mountReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const ChinaArea = [
    {
        value: '2973',
        label: '陕西',
        children: [
            {
                value: '2974',
                label: '西安',
                children: [
                    { value: '2975', label: '西安市' },
                    { value: '2976', label: '高陵县' },
                ],
            },
            {
                value: '2980',
                label: '铜川',
                children: [
                    { value: '2981', label: '铜川市' },
                    { value: '2982', label: '宜君县' },
                ],
            },
        ],
    },
    {
        value: '3078',
        label: '四川',
    },
];

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Cascader A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations when expanded', async () => {
        wrapper = await testReact(
            <Cascader dataSource={ChinaArea} defaultExpandedValue={['2973', '2974', '2975']} />
        );
        return wrapper;
    });
});
