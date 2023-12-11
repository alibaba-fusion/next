import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Icon, Box } from '@alifd/next';

class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false,
        };
    }

    setLoading = () => {
        this.setState({ loading: true });
    };

    render() {
        return (
            <Box direction="row" spacing={20}>
                <Button type="secondary" loading>
                    Loading
                </Button>
                <Button type="primary" loading={this.state.loading} onClick={this.setLoading}>
                    Click to loading
                </Button>
            </Box>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
