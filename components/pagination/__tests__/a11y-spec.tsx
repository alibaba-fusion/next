import React from 'react';
import Pagination from '../pagination';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Pagination A11y', () => {
    it('should not have any violations when various types', async () => {
        await testReact(
            <div>
                <Pagination />
                <Pagination type="simple" />
                <Pagination type="mini" />
            </div>
        );
    });

    it('should not have any violations when various pageSizeSelector', async () => {
        await testReact(
            <div>
                <Pagination pageSizeSelector="filter" />
                <Pagination pageSizeSelector="dropdown" />
            </div>
        );
    });
});
