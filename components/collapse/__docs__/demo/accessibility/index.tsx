import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse } from '@alifd/next';

const Panel = Collapse.Panel;

ReactDOM.render(
    <Collapse id="collapse-accessibility">
        <Panel
            id="panel-accessibility"
            title="There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."
        >
            <ul>
                <li>Promotions are marketing campaigns ran by Marketplace</li>
                <li>Participate to sale your products during that promotion and make a profit</li>
            </ul>
        </Panel>
        <Panel title="What are Promotion Products?">
            <ul>
                <li>
                    Promotion Products is a service that helps you to promote products you list on
                    Marketplace during a certain time range
                </li>
                <li>You can choose which products should be available for the promotion</li>
                <li>
                    Not all Products of you will be available, because Promotions will only attract
                    certain Product areas
                </li>
            </ul>
        </Panel>
    </Collapse>,
    mountNode
);
