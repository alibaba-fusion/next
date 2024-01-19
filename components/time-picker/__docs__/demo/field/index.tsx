import React from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, Field, Button } from '@alifd/next';
import moment from 'moment';

class Demo extends React.Component {
    field = new Field(this);

    onClick = () => {
        const value = this.field.getValue('time-picker');
        console.log(value.format('HH:mm:ss'));
    };

    render() {
        const { init } = this.field;

        const props = init('time-picker', {
            rules: [{ required: true, message: 'Time Required' }],
            initValue: moment('00:00:00', 'HH:mm:ss', true),
        });

        return (
            <div>
                <TimePicker {...props} /> <br />
                <br />
                <Button onClick={this.onClick}>Print Value in Console</Button>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
