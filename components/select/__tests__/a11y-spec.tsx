import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../index';
import '../style';
import { unmount, testReact, mountReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Slider A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    // TODO: `aria-required-attr` - `aria-expanded` must be set for `combobox` - set a default value for `visible` - https://www.w3.org/TR/wai-aria-1.1/#combobox
    //       Also suggest we make `id` and `label` required fields OR add documentation mentioning they are required for a11y
    it.skip('should not have any violations when using Select.Option', async () => {
        wrapper = await testReact(
            <Select id="a11yTest" label="a11y test">
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={3}>3</Select.Option>
            </Select>
        );

        return wrapper;
    });

    // TODO: `aria-required-attr`
    it.skip('should not have any violations for dataSource', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper = await testReact(
            <Select id="a11yTest" dataSource={dataSource} label="a11y test" />
        );
        return wrapper;
    });

    // TODO: `aria-allowed-attr` - `aria-valuetext` should not be used for `combobox` - https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext
    //       also fix above issues
    it.skip('should not have any violations when using `defaultValue`', async () => {
        wrapper = await testReact(
            <Select aria-label="a11y select" defaultValue="2">
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={3}>3</Select.Option>
            </Select>
        );
        return wrapper;
    });

    // TODO: `aria-required-attr`
    it.skip('should not have any violations when using `useVirtual`', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper = await testReact(
            <Select aria-label="a11y select" dataSource={dataSource} useVirtual />
        );
        return wrapper;
    });

    // TODO: `aria-required-attr`
    it.skip('should not have any violations when using `Autocomplete`', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper = await testReact(
            <Select.AutoComplete aria-label="a11y select" dataSource={dataSource} />
        );
        return wrapper;
    });

    // TODO: `aria-required-attr`
    it.skip('should not have any violations when disabled', async () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper = await testReact(
            <Select aria-label="a11y select" dataSource={dataSource} disabled />
        );
        return wrapper;
    });
});
