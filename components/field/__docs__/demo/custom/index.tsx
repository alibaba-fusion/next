import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Field } from '@alifd/next';

interface CustomProps {
    value?: string[];
    onChange: (value: string[]) => void;
}

class Custom extends React.Component<CustomProps> {
    onAdd = () => {
        const { value = [] } = this.props;
        const newValue = value.concat('new');
        this.props.onChange(newValue);
    };

    render() {
        const { value = [] } = this.props;
        return (
            <div className="custom">
                {value.map((v, i) => {
                    return <Button key={i}>{v}</Button>;
                })}
                <Button type="primary" onClick={this.onAdd.bind(this)}>
                    Add ＋{' '}
                </Button>
            </div>
        );
    }
}

class App extends React.Component {
    field = new Field(this);

    onGetValue() {
        console.log(this.field.getValue('custom'));
    }

    render() {
        const { init, setValue, reset } = this.field;

        return (
            <div className="demo">
                <Custom {...init('custom', { initValue: ['test'] })} />

                <br />
                <br />

                <Button type="primary" onClick={this.onGetValue.bind(this)}>
                    getValue
                </Button>
                <Button type="primary" onClick={() => setValue('custom', ['test', 'setValue'])}>
                    setValue
                </Button>
                <Button onClick={() => reset()}>reset</Button>
            </div>
        );
    }
}
ReactDOM.render(<App />, mountNode);
