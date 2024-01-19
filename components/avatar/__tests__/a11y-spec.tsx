import React from 'react';
import Avatar from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Avatar A11y', () => {
    it('should render', async () => {
        await testReact(
            <div>
                <Avatar icon="account" />
            </div>
        );
    });
});
