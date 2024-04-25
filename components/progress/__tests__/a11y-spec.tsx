import React from 'react';
import Progress from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Progress A11y', () => {
    it('should not have any violations for Line Progress', async () => {
        await testReact(<Progress percent={30} />, {
            incomplete: true,
        });
    });

    it('should not have any violations for Circle Progress', async () => {
        await testReact(<Progress shape="circle" percent={30} />, {
            incomplete: true,
        });
    });
});
