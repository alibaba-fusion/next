import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VirtualList from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const generateData = len => {
    const dataSource = [];

    for (let i = 0; i < len; i++) {
        dataSource.push(<li key={`${i}-test`}>{i}</li>);
    }

    return dataSource;
};

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('VirtualList A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(<VirtualList>{generateData(10)}</VirtualList>);
        return wrapper;
    });

    it('should not have any violations for jump index', async () => {
        wrapper = await testReact(<VirtualList jumpIndex={50}>{generateData(10)}</VirtualList>);
        return wrapper;
    });
});
