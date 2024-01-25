import * as React from 'react';
import Dropdown from '../index';
import '../style';
import { test, createContainer, testReact } from '../../util/__tests__/a11y/validate';

const portalContainerId = 'a11y-portal-id';
describe('Dropdown A11y', () => {
    it('should not have any violations', async () => {
        const portalContainer: HTMLElement = createContainer(portalContainerId);
        await testReact(
            <Dropdown trigger={<a>Hello dropdown</a>} visible container={portalContainer}>
                <div>dropdown</div>
            </Dropdown>
        );
        return test(portalContainer);
    });
});
