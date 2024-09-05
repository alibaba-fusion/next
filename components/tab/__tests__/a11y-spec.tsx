import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tab from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

describe('Tab a11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });
    it('should not have any violations for tab with children', async () => {
        wrapper = await testReact(
            <Tab>
                <Tab.Item title="foo" />
            </Tab>
        );
        return wrapper;
    });
    it('should not have any violations for tab with datasource', async () => {
        const panes = [1, 2, 3, 4, 5].map((item, index) => (
            <Tab.Item title={`item ${item}`} key={index} />
        ));
        wrapper = await testReact(<Tab animation={false}>{panes}</Tab>);
        return wrapper;
    });
});
