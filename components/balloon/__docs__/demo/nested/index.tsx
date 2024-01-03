import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon, DatePicker, Select } from '@alifd/next';
import moment from 'moment';

const showSelect = <Button className="btrigger">Show Select</Button>;
const showDatePicker = <Button className="btrigger">Show DatePicker</Button>;
const innerButton = <Button className="btrigger">Show Inner Balloon</Button>;
const dateValue = moment('2018-01-01', 'YYYY-MM-DD', true);

const App = () => (
    <div>
        <Balloon
            v2
            type="primary"
            autoFocus
            trigger={showSelect}
            closable={false}
            triggerType="click"
        >
            <Select dataSource={['apple', 'banana', 'orange']} followTrigger />
        </Balloon>
        <span style={{ marginRight: 20 }} />
        <Balloon
            v2
            type="primary"
            autoFocus
            trigger={showDatePicker}
            closable={false}
            triggerType="click"
        >
            <DatePicker defaultValue={dateValue} followTrigger />
        </Balloon>
        <span style={{ marginRight: 20 }} />
        <Balloon
            v2
            type="primary"
            autoFocus
            trigger={innerButton}
            closable={false}
            triggerType="click"
        >
            <Balloon
                v2
                trigger={<Button type="primary">please click</Button>}
                followTrigger
                triggerType="click"
            >
                nesting balloon content
            </Balloon>
        </Balloon>
    </div>
);

ReactDOM.render(<App />, mountNode);
