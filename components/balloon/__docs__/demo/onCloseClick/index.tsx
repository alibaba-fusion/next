import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    // triggered every time visible becomes false
    onClose() {
        console.log('onClose doing!');
    }

    onClick() {
        this.setState({ visible: true });
    }

    render() {
        const visibleTrigger = (
            <Button onClick={this.onClick.bind(this)} type="primary">
                click to pupup the card
            </Button>
        );
        const content = <div>content</div>;

        return (
            <div>
                <Balloon
                    v2
                    trigger={visibleTrigger}
                    triggerType="click"
                    visible={this.state.visible}
                    onClose={this.onClose.bind(this)}
                >
                    {content}
                </Balloon>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
