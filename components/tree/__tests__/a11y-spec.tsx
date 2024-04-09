import React from 'react';
import Tree from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const dataSource = [
    {
        label: '服装',
        key: '1',
        children: [
            {
                label: '男装',
                key: '2',
                disabled: true,
                children: [
                    {
                        label: '外套',
                        key: '4',
                    },
                    {
                        label: '夹克',
                        key: '5',
                    },
                ],
            },
            {
                label: '女装',
                key: '3',
                children: [
                    {
                        label: '裙子',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

describe('Tree A11y', () => {
    it('should not have any violations for default Tree', async () => {
        await testReact(<Tree defaultExpandAll dataSource={dataSource} />);
    });

    it('should not have any violations for line Tree', async () => {
        await testReact(<Tree defaultExpandAll showLine dataSource={dataSource} />);
    });

    it('should not have any violations for checkable Tree', async () => {
        await testReact(<Tree defaultExpandAll checkable showLine dataSource={dataSource} />);
    });
});
