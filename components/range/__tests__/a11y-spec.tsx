import React from 'react';
import Range from '../index';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Range A11y', () => {
    it('should not have any violations for range without tips', async () => {
        await testReact(
            <div>
                <Range defaultValue={10} hasTip={false} tooltipVisible={false} />
            </div>
        );
    });

    /**
     * TODO: 'aria-expanded' is added by 'Overlay' by default which conflicts with `role = slider` with respect to a11y standards.
     * To fix this will require structural change, ignore temporarily.
     */
    it.skip('should not have any violations for range with tips', async () => {
        await testReact(
            <div>
                <Range
                    defaultValue={512}
                    hasTip
                    tooltipVisible
                    min={0}
                    max={1024}
                    step={128}
                    marks={[0, 1024]}
                />
            </div>
        );
    });
});
