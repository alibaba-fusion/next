import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Progress from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Progress A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for Line Progress', async () => {
        wrapper = await testReact(<Progress percent={30} />, {
            incomplete: true,
        });
        return wrapper;
    });

    it('should not have any violations for Circle Progress', async () => {
        wrapper = await testReact(<Progress shape="circle" percent={30} />, {
            incomplete: true,
        });
        return wrapper;
    });
});
