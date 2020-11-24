# 结合 Field 使用

- order: 6

配合 Field 使用

:::lang=en-us
# With Field

- order: 6

Use TimePickerNext with Field.

:::

---

````jsx
import { TimePickerNext, Field, Button } from '@alifd/next';
import moment from 'moment';

class Demo extends React.Component {
    field = new Field(this);

    onClick = () => {
        const value = this.field.getValue('time-picker');
        console.log(value.format('HH:mm:ss'));
    }

    render() {
        const { init } = this.field;

        const props = init('time-picker', {
            rules: [
                { required: true, message: 'Time Required' }
            ],
            initValue: moment('00:00:00', 'HH:mm:ss', true)
        });

        return (<div>
            <TimePickerNext {...props} /> <br /><br />
            <Button onClick={this.onClick}>Print Value in Console</Button>
        </div>);
    }
}

ReactDOM.render(<Demo />, mountNode);
````
