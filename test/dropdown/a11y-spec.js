import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../../src/dropdown/index';
import '../../src/dropdown/style';
import {
    unmount,
    test,
    createContainer,
    testReact,
} from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const portalContainerId = 'a11y-portal-id';
let portalContainer;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Dropdown A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }

        if (portalContainer) {
            portalContainer.remove();
        }

        unmount();
    });

    it('should not have any violations', async () => {
        portalContainer = createContainer(portalContainerId);
        wrapper = await testReact(
            <Dropdown
                trigger={<a>Hello dropdown</a>}
                visible
                container={portalContainer}
            >
                <div>dropdown</div>
            </Dropdown>
        );
        return test(portalContainer);
    });
});
