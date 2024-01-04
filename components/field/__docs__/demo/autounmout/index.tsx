import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Field } from '@alifd/next';

class Demo extends React.Component {
    state = {
        show: true,
        show2: true,
    };
    field = new Field(this);
    field2 = new Field(this, { autoUnmount: false });

    render() {
        return (
            <div>
                {this.state.show ? (
                    <Input {...this.field.init('name', { initValue: 'autoUnmount = true' })} />
                ) : null}
                <Button
                    onClick={() => {
                        console.log('value auto delete', this.field.getValues());
                    }}
                    style={{ marginLeft: 4 }}
                >
                    print
                </Button>
                <Button
                    onClick={() => this.setState({ show: false })}
                    warning
                    style={{ marginLeft: 4 }}
                >
                    delete
                </Button>
                <br />
                <br />
                {this.state.show2 ? (
                    <Input {...this.field2.init('name2', { initValue: 'autoUnmount = false' })} />
                ) : null}
                <Button
                    onClick={() => {
                        console.log('value always exist', this.field2.getValues());
                    }}
                    style={{ marginLeft: 4 }}
                >
                    print
                </Button>
                <Button
                    onClick={() => this.setState({ show2: false })}
                    warning
                    style={{ marginLeft: 4 }}
                >
                    delete
                </Button>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
