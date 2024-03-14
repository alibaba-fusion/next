import React from 'react';
import Checkbox from '../index';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Checkbox A11y', () => {
    it('should not have any violations for grouped checkbox with children', async () => {
        await testReact(
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
        await testReact(<Checkbox.Group value={['pear']} dataSource={list} />);
    });
});
