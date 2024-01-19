import React from 'react';
import Loading from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Loading', () => {
    it('should not have any violations', async () => {
        await testReact(
            <Loading visible tip="loading...">
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
    });

    it('should not have any violations when hidden', async () => {
        await testReact(
            <Loading tip="loading..." visible={false}>
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
    });

    it('should not have any violations when fullscreen', async () => {
        await testReact(
            <Loading visible tip="loading..." fullScreen>
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
    });

    it('should not have any violations when inline', async () => {
        await testReact(
            <Loading visible tip="loading..." inline={false}>
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
    });
});
