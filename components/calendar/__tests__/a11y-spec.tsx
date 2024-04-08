import React from 'react';
import Calendar from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Calendar A11y', () => {
    it('should not have any violations when default', async () => {
        await testReact(<Calendar />);
    });
    it('should not have any violations when shape', async () => {
        await testReact(
            <div>
                <Calendar shape="fullscreen" />
                <Calendar shape="card" />
                <Calendar shape="panel" />
            </div>
        );
    });
});
