import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Progress from '../../src/progress/index';
import '../../src/progress/style.js';
import a11y from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Progress A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11y.afterEach();
    });

    it('should not have any violations for Line Progress', (done) => {
        wrapper = a11y.testReact(<Progress percent={30} />, done, { incomplete: true });
    });

    it('should not have any violations for Circle Progress', (done) => {
        wrapper = a11y.testReact(<Progress shape="circle" percent={30} />, done, { incomplete: true });
    });
});
