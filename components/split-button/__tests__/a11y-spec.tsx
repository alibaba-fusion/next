import React from 'react';
import { test, testReact, createContainer } from '../../util/__tests__/a11y/validate';
import SplitButton from '../index';
import '../style';

const portalContainerId = 'a11y-portal-id';

// TODO: `button-name` - add label for down arrow button
describe.skip('SplitButton A11y', () => {
    let portalContainer: HTMLDivElement;

    const menu = ['a', 'b'].map(item => <SplitButton.Item key={item}>{item}</SplitButton.Item>);

    afterEach(() => {
        if (portalContainer) {
            portalContainer.remove();
        }
    });

    it('should not have any violations when menu NOT visible', async () => {
        portalContainer = createContainer(portalContainerId);
        const popupProps = { container: portalContainer };

        await testReact(
            <SplitButton label="hello world" popupProps={popupProps}>
                {menu}
            </SplitButton>
        );
        return test(portalContainer);
    });

    it('should not have any violations when menu visible', async () => {
        portalContainer = createContainer(portalContainerId);
        const popupProps = { container: portalContainer };

        await testReact(
            <SplitButton label="hello world" popupProps={popupProps} visible>
                {menu}
            </SplitButton>
        );
        return test(portalContainer);
    });
});
