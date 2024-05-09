import React from 'react';
import { testReact } from '../../util/__tests__/a11y/validate';
import Rating from '../index';
import '../style';

describe('Rating A11y', () => {
    it('should not have any violations', async () => {
        await testReact(
            <div>
                <Rating defaultValue={3.3} id="action-test-1" />
            </div>
        );
    });
});
