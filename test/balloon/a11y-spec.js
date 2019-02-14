import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Balloon from '../../src/balloon/index';
import '../../src/balloon/style';
import { afterEach as a11yAfterEach, test, mountReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const wrapperClassName = 'js-a11y-test';
const popupProps = { wrapperClassName };

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Balloon A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            // wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    // TODO: fix `button-name` violation for close button
    it.skip('should not have any violations', async () => {
        wrapper = await mountReact(<Balloon visible popupProps={popupProps}>
                I am balloon content
        </Balloon>);
        return test(`.${wrapperClassName}`);
    });

    it('should not have any violations when not closable', async () => {
        wrapper = await mountReact(<Balloon visible closable={false} popupProps={popupProps}>
                I am balloon content
        </Balloon>);
        return test(`.${wrapperClassName}`);
    });

    it('should not have any violations when Tooltip', async () => {
        wrapper = await mountReact(<Balloon.Tooltip visible popupProps={popupProps}>
                I am balloon content
        </Balloon.Tooltip>);
        return test(`.${wrapperClassName}`);
    });
});
