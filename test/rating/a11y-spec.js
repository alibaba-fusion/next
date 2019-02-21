import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { afterEach as a11yAfterEach, testReact } from '../util/a11y/validate';
import Rating from '../../src/rating';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Rating A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(<div>
            <Rating defaultValue={3.3} id="action-test-1"/>
        </div>);
        return wrapper;
    });
});
