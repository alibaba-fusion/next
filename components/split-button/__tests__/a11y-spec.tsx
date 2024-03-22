import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    test,
    testReact,
    unmount,
    createContainer,
} from '../../util/__tests__/legacy/a11y/validate';
import SplitButton from '../index';
import '../style';

Enzyme.configure({ adapter: new Adapter() });
const portalContainerId = 'a11y-portal-id';

/* eslint-disable no-undef, react/jsx-filename-extension */
// TODO: `button-name` - add label for down arrow button
describe.skip('SplitButton A11y', () => {
    let wrapper;
    let portalContainer;

    const menu = ['a', 'b'].map(item => <SplitButton.Item key={item}>{item}</SplitButton.Item>);

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

    it('should not have any violations when menu NOT visible', async () => {
        portalContainer = createContainer(portalContainerId);
        const popupProps = { container: portalContainer };

        wrapper = await testReact(
            <SplitButton label="hello world" popupProps={popupProps}>
                {menu}
            </SplitButton>
        );
        return test(portalContainer);
    });

    it('should not have any violations when menu visible', async () => {
        portalContainer = createContainer(portalContainerId);
        const popupProps = { container: portalContainer };

        wrapper = await testReact(
            <SplitButton label="hello world" popupProps={popupProps} visible>
                {menu}
            </SplitButton>
        );
        return test(portalContainer);
    });
});
