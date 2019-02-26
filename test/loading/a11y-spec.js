import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../../src/loading/index';
import '../../src/loading/style.js';
import { testReact, unmount } from '../util/a11y/validate';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach*/

Enzyme.configure({ adapter: new Adapter() });

describe('Loading', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <Loading visible tip="loading...">
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
        return wrapper;
    });

    it('should not have any violations when hidden', async () => {
        wrapper = await testReact(
            <Loading tip="loading...">
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
        return wrapper;
    });

    it('should not have any violations when fullscreen', async () => {
        wrapper = await testReact(
            <Loading visible tip="loading..." fullScreen>
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
        return wrapper;
    });

    it('should not have any violations when inline', async () => {
        wrapper = await testReact(
            <Loading visible tip="loading..." inline={false}>
                <div className="demo">test</div>
            </Loading>,
            { incomplete: true }
        );
        return wrapper;
    });
});
