import React from 'react';
import NumberPicker from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('NumberPicker A11y', () => {
    it('should not have any violations', async () => {
        await testReact(<NumberPicker />);
    });

    it('should not have any violations when inline', async () => {
        await testReact(<NumberPicker type="inline" />);
    });

    it('should not have any violations when disabled', async () => {
        await testReact(<NumberPicker disabled />);
    });

    it('should not have any violations when values set', async () => {
        await testReact(
            <div>
                <NumberPicker defaultValue={123} />
                <NumberPicker value={123} />
            </div>
        );
    });

    it('should not have any violations when autoFocused', async () => {
        await testReact(<NumberPicker autoFocus />);
    });
});
