import React from 'react';
import Tab from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Tab a11y', () => {
    it('should not have any violations for tab with children', async () => {
        await testReact(
            <Tab>
                <Tab.Item title="foo" />
            </Tab>
        );
    });

    it('should not have any violations for tab with datasource', async () => {
        const panes = [1, 2, 3, 4, 5].map((item, index) => (
            <Tab.Item title={`item ${item}`} key={index} />
        ));
        await testReact(<Tab animation={false}>{panes}</Tab>);
    });
});
