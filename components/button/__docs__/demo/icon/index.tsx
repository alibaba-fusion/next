import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon, Box } from '@alifd/next';

class LoadingIcon extends React.Component {
    state = {
        loading: false,
    };

    setLoading = () => {
        this.setState({ loading: true });
    };

    render() {
        return (
            <Box direction="row" spacing={20}>
                <Button
                    type="secondary"
                    iconSize="xs"
                    loading
                    icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}
                >
                    Custom loading icon
                </Button>
                <Button
                    type="primary"
                    loading={this.state.loading}
                    onClick={this.setLoading}
                    icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}
                >
                    Click to loading and show loading icon
                </Button>
            </Box>
        );
    }
}

ReactDOM.render(
    <div>
        <Box direction="row" spacing={20}>
            <Button>
                <Icon type="atm" /> ATM
            </Button>
            <Button text>
                <Icon type="atm" /> ATM
            </Button>
            <Button warning>
                <Icon type="atm" /> ATM
            </Button>
            <Button iconSize="xxs">
                <Icon type="arrow-left" /> ARROW
            </Button>
        </Box>
        <br />
        <LoadingIcon />
    </div>,
    mountNode
);
