import React from 'react';
import Drawer from '../index';
import { testReact } from '../../util/__tests__/a11y/validate';
import '../style';

describe('Drawer A11y', () => {
    describe('Basic', () => {
        it('should not have any violations', async () => {
            await testReact(<Drawer visible />);
        });
    });
});
