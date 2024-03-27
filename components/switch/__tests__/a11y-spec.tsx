import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Switch from '../index';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

describe('Switch A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });
    it('should not have any violations for different states', async () => {
        wrapper = await testReact(
            <div>
                <Switch checked />
                <Switch defaultChecked={false} size="small" />
            </div>
        );
        return wrapper;
    });
});
