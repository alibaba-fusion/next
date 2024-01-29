import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overlay from '../index';

import {
    test,
    testReact,
    unmount,
    createContainer,
} from '../../util/__tests__/legacy/a11y/validate';
import '../../progress/style';

const { Popup } = Overlay;
Enzyme.configure({ adapter: new Adapter() });

const portalContainerId = 'a11y-portal-id';
let portalContainer;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Overlay A11y', () => {
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

    it('should not have any violations', async function () {
        portalContainer = createContainer(portalContainerId);
        wrapper = await testReact(
            <Overlay visible container={portalContainer}>
                <div>Hello World</div>
            </Overlay>
        );
        return test(portalContainer);
    });

    it('should not have any violations for Popup', async function () {
        portalContainer = createContainer(portalContainerId);
        wrapper = await testReact(
            <Popup
                visible={false}
                container={portalContainer}
                trigger={<button>Open</button>}
                triggerType="click"
                canCloseByTrigger={false}
            >
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        return test(portalContainer);
    });
});
