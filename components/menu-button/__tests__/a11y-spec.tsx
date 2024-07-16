import * as React from 'react';
import MenuButton from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const wrapperClassName = 'js-a11y-test';
const popupProps = { wrapperClassName };

/* eslint-disable no-undef, react/jsx-filename-extension */
const menu = ['a', 'b'].map(item => <MenuButton.Item key={item}>{item}</MenuButton.Item>);

// TODO: fix `aria-allowed-attr` violation
describe.skip('MenuButton A11y', () => {
    it('should not have any violations', async () => {
        await testReact(
            <MenuButton label="default" visible popupProps={popupProps}>
                {menu}
            </MenuButton>
        );
    });

    it('should not have any violations when text button', async () => {
        await testReact(
            <div>
                <MenuButton text label="Document Edit" visible popupProps={popupProps}>
                    {menu}
                </MenuButton>
                &nbsp;&nbsp;
            </div>
        );
    });
});
