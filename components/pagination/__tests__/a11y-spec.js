import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({
    adapter: new Adapter(),
});

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Pagination A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations when various types', async () => {
        wrapper = await testReact(
            <div>
                <Pagination />
                <Pagination type="simple" />
                <Pagination type="mini" />
            </div>
        );
        return wrapper;
    });

    // TODO select support
    it.skip('should not have any violations when various pageSizeSelector', async () => {
        wrapper = await testReact(
            <div>
                <Pagination pageSizeSelector="filter" />
                <Pagination pageSizeSelector="dropdown" />
            </div>
        );
        return wrapper;
    });
});
