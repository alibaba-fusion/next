import React from 'react';
import { testReact } from '../../util/__tests__/a11y/validate';
import Switch from '../index';
import '../style';

describe('Switch A11y', () => {
    it('should not have any violations for different states', async () => {
        await testReact(
            <div>
                <Switch checked />
                <Switch defaultChecked={false} size="small" />
            </div>
        );
    });
});
