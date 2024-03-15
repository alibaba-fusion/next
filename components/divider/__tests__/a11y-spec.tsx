import React from 'react';
import Divider from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Divider A11y', () => {
    it('should render', async () => {
        await testReact(<Divider />);
    });

    it('should render dashed', async () => {
        await testReact(<Divider dashed />);
    });

    it('should render ver', async () => {
        await testReact(<Divider direction="ver" />);
    });

    it('should render orientation', async () => {
        await testReact(<Divider orientation="left">Left Text</Divider>);
    });
});
