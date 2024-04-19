import React from 'react';
import Calendar2 from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Calendar A11y', () => {
    it('should not have any violations when default', async () => {
        await testReact(<Calendar2 />);
    });
    it('should not have any violations when shape', async () => {
        await testReact(
            <div>
                <Calendar2 shape="fullscreen" />
                <Calendar2 shape="card" />
                <Calendar2 shape="panel" />
            </div>
        );
    });
});
