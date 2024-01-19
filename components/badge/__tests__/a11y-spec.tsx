import React from 'react';
import Badge from '../../badge/index';
import '../../badge/style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Badge A11y', () => {
    it('should not have any violations for count and no children', async () => {
        await testReact(<Badge count={5} />);
    });

    it('should not have any violations for dot', async () => {
        await testReact(<Badge dot />);
    });

    it('should not have any violations for content', async () => {
        await testReact(
            <Badge content="hot">
                <a href="#" aria-label="example" />
            </Badge>
        );
    });
});
