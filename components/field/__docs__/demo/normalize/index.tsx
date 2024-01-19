import React from 'react';
import ReactDOM from 'react-dom';
import { Field, DatePicker, Switch } from '@alifd/next';
import moment from 'moment';

class App extends React.Component {
    field = new Field(this);

    render() {
        const init = this.field.init;

        return (
            <div>
                <Switch
                    {...init('switch', {
                        getValueFormatter: value => (value ? 1 : 0),
                        setValueFormatter: value => value === 1,
                    })}
                />
                <br />
                <DatePicker
                    {...init('time', {
                        getValueFormatter: value => value && value.format('YYYY-MM-DD'),
                        setValueFormatter: value => moment(value, 'YYYY-MM-DD'),
                    })}
                />
                <br />
                <pre style={{ marginTop: 8 }}>
                    {JSON.stringify(this.field.getValues(), null, 2)}
                </pre>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
