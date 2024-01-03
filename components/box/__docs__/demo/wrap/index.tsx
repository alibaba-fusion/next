import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Switch } from '@alifd/next';

class BoxDemo extends React.Component {
    state = {
        wrap: true,
    };
    onSwitchChange = checked => {
        this.setState({
            wrap: checked,
        });
    };
    render() {
        return (
            <div className="list">
                <Switch
                    style={{ width: 70 }}
                    defaultChecked
                    checkedChildren="wrap"
                    onChange={this.onSwitchChange}
                />
                <div className="list-item">
                    <Box spacing={20} wrap={this.state.wrap} direction="row">
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                    </Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
