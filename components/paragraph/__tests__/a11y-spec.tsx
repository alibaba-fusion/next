import React from 'react';
import Paragraph from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const content =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('Paragraph A11y', () => {
    it('should not have any violations', async () => {
        await testReact(
            <div>
                <Paragraph>{content}</Paragraph>
                <br />
                <Paragraph size="small">{content}</Paragraph>
            </div>
        );
    });

    it('should not have any violations when type=`short`', async () => {
        await testReact(
            <div>
                <Paragraph type="short">{content}</Paragraph>
                <br />
                <Paragraph size="small" type="short">
                    {content}
                </Paragraph>
            </div>
        );
    });
});
