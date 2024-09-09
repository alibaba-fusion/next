import React from 'react';
import Balloon from '../index';
import '../style';
import { test, testReact, createContainer } from '../../util/__tests__/a11y/validate';

const portalContainerId = 'a11y-portal-id';
let portalContainer: HTMLDivElement;

describe('Balloon A11y', () => {
    afterEach(() => {
        if (portalContainer) {
            portalContainer.remove();
        }
    });
    it('should not have any violations', async () => {
        portalContainer = createContainer(portalContainerId);
        await testReact(
            <Balloon id="balloon-1" visible popupContainer={portalContainerId}>
                I am balloon content
            </Balloon>
        );
        return test(portalContainer);
    });

    it('should not have any violations when not closable', async () => {
        portalContainer = createContainer(portalContainerId);
        await testReact(
            <Balloon id="balloon-2" visible closable={false} popupContainer={portalContainerId}>
                I am balloon content
            </Balloon>
        );

        return test(portalContainer);
    });

    it('should not have any violations when Tooltip', async () => {
        portalContainer = createContainer(portalContainerId);

        await testReact(
            <Balloon.Tooltip id="tooltip-1" visible popupContainer={portalContainerId}>
                I am balloon content
            </Balloon.Tooltip>
        );
        return test(portalContainer);
    });
});
