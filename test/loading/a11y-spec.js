import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../../src/loading/index';
import '../../src/loading/style.js';
import a11y from '../util/a11y/validate';

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
        a11y.afterEach();
    });

    it('should not have any violations', (done) => {
        wrapper = a11y.testReact(<Loading visible tip="loading...">
            <div className="demo">test</div>
        </Loading>, done, { incomplete: true });
    });

    it('should not have any violations when hidden', (done) => {
        wrapper = a11y.testReact(<Loading tip="loading...">
            <div className="demo">test</div>
        </Loading>, done, { incomplete: true });
    });

    it('should not have any violations when fullscreen', (done) => {
        wrapper = a11y.testReact(<Loading visible tip="loading..." fullScreen>
            <div className="demo">test</div>
        </Loading>, done, { incomplete: true });
    });

    it('should not have any violations when inline', (done) => {
        wrapper = a11y.testReact(<Loading visible tip="loading..." inline={false}>
            <div className="demo">test</div>
        </Loading>, done, { incomplete: true });
    });
});
