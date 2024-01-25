import React from 'react';
import Box from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Box A11y', () => {
    describe('Box A11y', () => {
        it('should render', async () => {
            await testReact(<Box />);
        });
    });
});
