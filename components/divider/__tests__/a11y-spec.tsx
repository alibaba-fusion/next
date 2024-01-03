import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Divider from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Divider A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should render', async () => {
        wrapper = await testReact(<Divider />);
        return wrapper;
    });

    it('should render dashed', async () => {
        wrapper = await testReact(<Divider dashed />);
        return wrapper;
    });

    it('should render ver', async () => {
        wrapper = await testReact(<Divider direction="ver" />);
        return wrapper;
    });

    it('should render orientation', async () => {
        wrapper = await testReact(<Divider orientation="left">Left Text</Divider>);
        return wrapper;
    });
});
