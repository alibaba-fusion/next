import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Breadcrumb A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations when empty', async () => {
        wrapper = await testReact(<Breadcrumb />);
        return wrapper;
    });

    it('should not have any violations for breadcrumb items', async () => {
        wrapper = await testReact(
            <Breadcrumb>
                <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    T-shirts&nbsp; <b>78,999</b> Results
                </Breadcrumb.Item>
            </Breadcrumb>
        );
        return wrapper;
    });

    it('should not have any violations for max node limit', async () => {
        wrapper = await testReact(
            <Breadcrumb maxNode={2}>
                <Breadcrumb.Item>1</Breadcrumb.Item>
                <Breadcrumb.Item>2</Breadcrumb.Item>
                <Breadcrumb.Item>3</Breadcrumb.Item>
            </Breadcrumb>
        );
        return wrapper;
    });

    it('should not have any violations for separator', async () => {
        wrapper = await testReact(
            <Breadcrumb separator="/">
                <Breadcrumb.Item>1</Breadcrumb.Item>
                <Breadcrumb.Item>2</Breadcrumb.Item>
                <Breadcrumb.Item>3</Breadcrumb.Item>
            </Breadcrumb>
        );
        return wrapper;
    });
});
