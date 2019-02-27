import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tree from '../../src/tree/index';
import '../../src/tree/style.js';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });


const dataSource = [{
    label: '服装',
    key: '1',
    children: [{
        label: '男装',
        key: '2',
        disabled: true,
        children: [{
            label: '外套',
            key: '4'
        }, {
            label: '夹克',
            key: '5'
        }]
    }, {
        label: '女装',
        key: '3',
        children: [{
            label: '裙子',
            key: '6'
        }]
    }]
}];

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Tree A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations for default Tree', async () => {
        wrapper = await testReact(<Tree defaultExpandAll dataSource={dataSource} />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations for line Tree', async () => {
        wrapper = await testReact(<Tree defaultExpandAll showLine dataSource={dataSource} />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations for checkable Tree', async () => {
        wrapper = await testReact(<Tree defaultExpandAll checkable showLine dataSource={dataSource} />, { incomplete: true });
        return wrapper;
    });
});
