import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calendar from '../index';
import '../style';
import { afterEach as a11yAfterEach, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Calendar A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    // TODO Select support a11y
    it.skip('should not have any violations when default', async () => {
        wrapper = await testReact(<Calendar />);
        return wrapper;
    });
    // TODO Select support a11y
    it.skip('should not have any violations when shape', async () => {
        wrapper = await testReact(
            <div>
                <Calendar shape="fullscreen" />
                <Calendar shape="card" />
                <Calendar shape="panel" />
            </div>
        );
        return wrapper;
    });
});
