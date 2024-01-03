import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Icon } from '@alifd/next';

class App extends React.Component {
    state = {
        v: '',
    };

    onChange = v => {
        this.setState({
            v,
        });
    };

    onClick = () => {
        console.log(this.state.v);
    };

    render() {
        return (
            <div>
                <Input
                    innerBefore={
                        <Icon type="search" style={{ margin: 4 }} onClick={this.onClick} />
                    }
                    placeholder="search"
                    value={this.state.v}
                    aria-label="input with config of innerBefore"
                    onChange={this.onChange}
                />
                <br />
                <br />

                <Input
                    innerAfter={
                        <Icon
                            type="search"
                            size="xs"
                            onClick={this.onClick}
                            style={{ margin: 4 }}
                        />
                    }
                    placeholder="search"
                    value={this.state.v}
                    aria-label="input with config of innerAfter"
                    onChange={this.onChange}
                />
                <br />
                <br />

                <Input
                    label="total"
                    innerAfter="¥"
                    placeholder="search"
                    value={this.state.v}
                    onChange={this.onChange}
                />
                <br />
                <br />

                <Input
                    disabled
                    defaultValue="hi"
                    innerAfter={<Icon type="calendar" style={{ margin: 4 }} />}
                    aria-label="input with config of innerAfter and disabled"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
