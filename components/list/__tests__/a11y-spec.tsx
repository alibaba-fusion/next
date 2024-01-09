import React from 'react';
import List from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('List A11y', () => {
    it('should render', async () => {
        await testReact(<List />);
    });
});
