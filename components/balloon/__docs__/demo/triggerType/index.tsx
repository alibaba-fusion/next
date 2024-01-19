import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon, Input } from '@alifd/next';

const content = <div>content content content content content</div>;
const MoveTarget = <Button style={{ margin: '5px' }}>hover</Button>;
const ClickTarget = <Button style={{ margin: '5px' }}>click</Button>;
const FocusTarget = <Button style={{ margin: '5px' }}>focus</Button>;

const HoverInputTarget = <Input placeholder="hover" style={{ marginRight: '20px' }} />;
const ClickInputTarget = <Input placeholder="click" style={{ marginRight: '20px' }} />;
const FocusInputTarget = <Input placeholder="focus" />;

const App = () => (
    <div>
        <Balloon v2 trigger={MoveTarget} triggerType="hover" title="Balloon Title">
            {content}
        </Balloon>

        <Balloon v2 trigger={ClickTarget} triggerType="click" title="Balloon Title">
            {content}
        </Balloon>

        <Balloon v2 trigger={FocusTarget} triggerType="focus" title="Balloon Title">
            {content}
        </Balloon>

        <br />
        <br />

        <Balloon v2 trigger={HoverInputTarget} triggerType="hover" title="Balloon Title">
            {content}
        </Balloon>
        <Balloon v2 trigger={ClickInputTarget} triggerType="click" title="Balloon Title">
            {content}
        </Balloon>
        <Balloon v2 trigger={FocusInputTarget} triggerType="focus" title="Balloon Title">
            {content}
        </Balloon>
    </div>
);

ReactDOM.render(<App />, mountNode);
