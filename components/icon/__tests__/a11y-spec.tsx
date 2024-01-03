import * as React from 'react';
import Icon from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Icon', () => {
    it('should not have any violations', async () => {
        await testReact(<Icon type="smile" />);
    });
});
