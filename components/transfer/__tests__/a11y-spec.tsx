import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Transfer from '../index';
import '../style';
import { testReact, unmount } from '../../util/__tests__/legacy/a11y/validate';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach*/

Enzyme.configure({ adapter: new Adapter() });

const dataSource = [
    { label: '0', value: '0', disabled: true },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];

describe('Transfer A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(<Transfer id="a11y-transfer" dataSource={dataSource} />);
        return wrapper;
    });

    it('should not have any violations when simple mode', async () => {
        wrapper = await testReact(
            <Transfer id="a11y-transfer" mode="simple" dataSource={dataSource} />
        );
        return wrapper;
    });

    it('should not have any violations when defaultValue set', async () => {
        wrapper = await testReact(
            <Transfer id="a11y-transfer" defaultValue={['1']} dataSource={dataSource} />
        );
        return wrapper;
    });

    it('should not have any violations when default checked items', async () => {
        wrapper = await testReact(
            <Transfer
                id="a11y-transfer"
                defaultValue={['1']}
                defaultLeftChecked={['2']}
                defaultRightChecked={['1']}
                dataSource={dataSource}
            />
        );
        return wrapper;
    });

    it('should not have any violations when showing search', async () => {
        wrapper = await testReact(
            <Transfer
                id="a11y-transfer"
                showSearch
                searchPlaceholder="input something..."
                dataSource={dataSource}
                titles={['Searchable 1', 'Searchable 2']}
            />
        );
        return wrapper;
    });
});
