import React from 'react';
import Cascader from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

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

describe('Cascader A11y', () => {
    it('should not have any violations when expanded', async () => {
        await testReact(
            <Cascader dataSource={ChinaArea} defaultExpandedValue={['2973', '2974', '2975']} />
        );
    });
});
