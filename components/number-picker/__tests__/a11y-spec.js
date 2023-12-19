import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberPicker from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('NumberPicker A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    // TODO: `button-name` - up and down arrows do not have names or labels.
    //                       The most accessible solution is have the input type=number and then make the buttons aria-hidden.
    //                       Users will be able to use UP and DOWN arrows to modify values.
    it.skip('should not have any violations', async () => {
        wrapper = await testReact(<NumberPicker aria-label="a11y number picker" />);
        return wrapper;
    });

    // TODO: fix above
    it.skip('should not have any violations when inline', async () => {
        wrapper = await testReact(<NumberPicker aria-label="a11y number picker" type="inline" />);
        return wrapper;
    });

    // TODO: fix above
    it.skip('should not have any violations when disabled', async () => {
        wrapper = await testReact(<NumberPicker aria-label="a11y number picker" disabled />);
        return wrapper;
    });

    // TODO: fix above
    it.skip('should not have any violations when values set', async () => {
        wrapper = await testReact(
            <div>
                <NumberPicker aria-label="a11y number picker defaultValue" defaultValue={123} />
                <NumberPicker aria-label="a11y number picker value" value={123} />
            </div>
        );
        return wrapper;
    });

    // TODO: fix above
    it.skip('should not have any violations when autoFocused', async () => {
        wrapper = await testReact(<NumberPicker aria-label="a11y number picker" autoFocus />);
        return wrapper;
    });
});
