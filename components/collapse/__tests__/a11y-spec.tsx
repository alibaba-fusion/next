import React from 'react';
import Collapse from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const Panel = Collapse.Panel;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Collapse A11y', () => {
    it('should not have any violations for children rendered component', async () => {
        await testReact(
            <Collapse>
                <Panel title="Pannel Title">Pannel Content</Panel>
                <Panel title="Pannel Title">Pannel Content</Panel>
                <div>others</div>
            </Collapse>
        );
    });

    it('should not have any violations for data rendered component', async () => {
        const list = [
            {
                title: 'Well, hello there',
                content:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                title: 'Well, hello there',
                content:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
        ];
        await testReact(<Collapse dataSource={list} />, {
            incomplete: true,
        });
    });
});
