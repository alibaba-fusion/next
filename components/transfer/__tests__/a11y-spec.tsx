import React from 'react';
import Transfer from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const dataSource = [
    { label: '0', value: '0', disabled: true },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];

describe('Transfer A11y', () => {
    it('should not have any violations', async () => {
        return await testReact(<Transfer id="a11y-transfer" dataSource={dataSource} />);
    });

    it('should not have any violations when simple mode', async () => {
        return await testReact(
            <Transfer id="a11y-transfer" mode="simple" dataSource={dataSource} />
        );
    });

    it('should not have any violations when defaultValue set', async () => {
        return await testReact(
            <Transfer id="a11y-transfer" defaultValue={['1']} dataSource={dataSource} />
        );
    });

    it('should not have any violations when default checked items', async () => {
        return await testReact(
            <Transfer
                id="a11y-transfer"
                defaultValue={['1']}
                defaultLeftChecked={['2']}
                defaultRightChecked={['1']}
                dataSource={dataSource}
            />
        );
    });

    it('should not have any violations when showing search', async () => {
        return await testReact(
            <Transfer
                id="a11y-transfer"
                showSearch
                searchPlaceholder="input something..."
                dataSource={dataSource}
                titles={['Searchable 1', 'Searchable 2']}
            />
        );
    });
});
