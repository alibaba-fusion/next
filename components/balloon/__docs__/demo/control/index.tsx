import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

interface AppProps {}
class App extends React.Component<AppProps, { visible: boolean }> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    hide() {
        this.setState({
            visible: false,
        });
    }

    // onVisibleChange callback will be triggered when visible changes.
    // For example, for click type, it'll be triggered when clicking the button and later the other areas;
    // for hover type, it'll be triggered when mouse enter and mouse leave
    handleVisibleChange(visible: boolean) {
        this.setState({ visible });
    }

    onClose() {
        console.log('onClose doing!');
    }

    afterClose() {
        console.log('afterClose doing!');
    }
    render() {
        const visibleTrigger = (
            <Button type="primary" style={{ margin: '5px' }}>
                click to popup the card
            </Button>
        );
        const clickTrigger = (
            <Button type="primary" style={{ margin: '5px' }}>
                hover to popup the card
            </Button>
        );

        const content = (
            <div>
                <p>click the button</p>
                <Button style={{ right: 0 }} id="confirmBtn" onClick={this.hide.bind(this)}>
                    confirm
                </Button>
                <Button style={{ marginLeft: '4px' }} id="cancelBtn" onClick={this.hide.bind(this)}>
                    cancel
                </Button>
            </div>
        );
        return (
            <div>
                <Balloon
                    v2
                    trigger={visibleTrigger}
                    triggerType="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange.bind(this)}
                >
                    {content}
                </Balloon>
                <Balloon
                    v2
                    trigger={clickTrigger}
                    triggerType="hover"
                    onClose={this.onClose.bind(this)}
                    afterClose={this.afterClose.bind(this)}
                >
                    {content}
                </Balloon>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
