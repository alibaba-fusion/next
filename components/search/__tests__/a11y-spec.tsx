import React from 'react';
import { testReact } from '../../util/__tests__/a11y/validate';
import Search from '../Search';
import '../style';

describe('Search A11y', () => {
    it('should not have any violations for secondary', async () => {
        await testReact(<Search type="secondary" />);
    });

    it('should not have any violations for number value', async () => {
        await testReact(<Search value={123} />);
    });

    it('should not have any violations for undefined value', async () => {
        await testReact(<Search value={undefined} />);
    });

    it('should not have any violations for simple shape', async () => {
        await testReact(<Search shape="simple" />);
    });

    it('should not have any violations for no icon', async () => {
        await testReact(<Search hasIcon={false} />);
    });

    it('should not have any violations for search text', async () => {
        const text = 'search';
        const SearchText = <span>{text}</span>;
        await testReact(<Search searchText={SearchText} />);
    });
});
