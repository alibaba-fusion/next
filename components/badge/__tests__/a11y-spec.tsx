import * as React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Badge from '../../badge/index';
import '../../badge/style';
import { unmount, testReact } from '../../util/__tests__/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Badge A11y', () => {
    let wrapper: Enzyme.ReactWrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null as any;
        }
        unmount();
    });

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
