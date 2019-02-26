import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Badge from '../../src/badge/index';
import '../../src/badge/style';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Badge A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for count and no children', async () => {
        wrapper = await testReact(<Badge count={5} />);
        return wrapper;
    });

    it('should not have any violations for dot', async () => {
        wrapper = await testReact(<Badge dot />);
        return wrapper;
    });

    it('should not have any violations for content', async () => {
        wrapper = await testReact(
            <Badge content="hot">
                <a href="#" aria-label="example" />
            </Badge>
        );
        return wrapper;
    });
});
