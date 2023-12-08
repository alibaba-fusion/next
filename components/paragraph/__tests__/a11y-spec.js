import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from '../../src/paragraph/index';
import '../../src/paragraph/style';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const content =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Paragraph A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <div>
                <Paragraph>{content}</Paragraph>
                <br />
                <Paragraph size="small">{content}</Paragraph>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when type=`short`', async () => {
        wrapper = await testReact(
            <div>
                <Paragraph type="short">{content}</Paragraph>
                <br />
                <Paragraph size="small" type="short">
                    {content}
                </Paragraph>
            </div>
        );
        return wrapper;
    });
});
