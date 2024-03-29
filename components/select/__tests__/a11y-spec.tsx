import React from 'react';
import Select from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Slider A11y', () => {
    it('should not have any violations when using Select.Option', async () => {
        await testReact(
            <Select id="a11yTest" label="a11y test">
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={3}>3</Select.Option>
            </Select>
        );
    });

    it('should not have any violations for dataSource', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        await testReact(<Select id="a11yTest" dataSource={dataSource} label="a11y test" />);
    });

    it('should not have any violations when using `defaultValue`', async () => {
        await testReact(
            <Select aria-label="a11y select" defaultValue="2">
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={3}>3</Select.Option>
            </Select>
        );
    });

    it('should not have any violations when using `useVirtual`', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        await testReact(<Select aria-label="a11y select" dataSource={dataSource} useVirtual />);
    });

    it('should not have any violations when using `Autocomplete`', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        await testReact(<Select.AutoComplete aria-label="a11y select" dataSource={dataSource} />);
    });

    it('should not have any violations when disabled', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        await testReact(<Select aria-label="a11y select" dataSource={dataSource} disabled />);
    });
});
