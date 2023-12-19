import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';
import Search from '../Search';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
// TODO: fix `label` - <input> should have some form of label
describe('Search A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for secondary', async () => {
        wrapper = await testReact(<Search type="secondary" />);
        return wrapper;
    });

    it('should not have any violations for number value', async () => {
        wrapper = await testReact(<Search value={123} />);
        return wrapper;
    });

    it('should not have any violations for undefined value', async () => {
        wrapper = await testReact(<Search value={undefined} />);
        return wrapper;
    });

    it('should not have any violations for simple shape', async () => {
        wrapper = await testReact(<Search shape="simple" />);
        return wrapper;
    });

    it('should not have any violations for no icon', async () => {
        wrapper = await testReact(<Search hasIcon={false} />);
        return wrapper;
    });

    it('should not have any violations for search text', async () => {
        const text = 'search';
        const SearchText = <span>{text}</span>;
        wrapper = await testReact(<Search searchText={SearchText} />);
        return wrapper;
    });
});
