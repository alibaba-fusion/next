import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuButton from '../../src/menu-button/index';
import '../../src/menu-button/style';
import { unmount, test, mountReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const wrapperClassName = 'js-a11y-test';
const popupProps = { wrapperClassName };

/* eslint-disable no-undef, react/jsx-filename-extension */
const menu = ['a', 'b'].map(item => (
    <MenuButton.Item key={item}>{item}</MenuButton.Item>
));

// TODO: fix `aria-allowed-attr` violation
describe.skip('MenuButton A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await mountReact(
            <MenuButton label="default" visible popupProps={popupProps}>
                {menu}
            </MenuButton>
        );
        return test(`.${wrapperClassName}`);
    });

    it('should not have any violations when text button', async () => {
        wrapper = await mountReact(
            <div>
                <MenuButton
                    text
                    label="Document Edit"
                    visible
                    popupProps={popupProps}
                >
                    {menu}
                </MenuButton>
                &nbsp;&nbsp;
            </div>
        );
        return test(`.${wrapperClassName}`);
    });
});
