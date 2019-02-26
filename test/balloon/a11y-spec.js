import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Balloon from '../../src/balloon/index';
import '../../src/balloon/style';
import {
    unmount,
    test,
    testReact,
    createContainer,
} from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const portalContainerId = 'a11y-portal-id';
let portalContainer;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Balloon A11y', () => {
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

    // TODO: fix `button-name` violation for close button
    it.skip('should not have any violations', async () => {
        portalContainer = createContainer(portalContainerId);
        wrapper = await testReact(
            <Balloon visible popupContainer={portalContainerId}>
                I am balloon content
            </Balloon>
        );
        return test(portalContainer);
    });

    it('should not have any violations when not closable', async () => {
        portalContainer = createContainer(portalContainerId);
        wrapper = await testReact(
            <Balloon
                visible
                closable={false}
                popupContainer={portalContainerId}
            >
                I am balloon content
            </Balloon>
        );

        return test(portalContainer);
    });

    it('should not have any violations when Tooltip', async () => {
        portalContainer = createContainer(portalContainerId);

        wrapper = await testReact(
            <Balloon.Tooltip visible popupContainer={portalContainerId}>
                I am balloon content
            </Balloon.Tooltip>
        );
        return test(portalContainer);
    });
});
