import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

class Demo extends Component {
    state = {
        visible: false,
        groupVisible: false,
    };

    btn1: InstanceType<typeof Button> | null;
    btn2: InstanceType<typeof Button> | null;
    overlay1: HTMLElement | null;
    overlay2: HTMLElement | null;

    onVisibleChange = (visible: boolean) => {
        this.setState({
            visible,
        });
    };

    onGroupVisibleChange = (groupVisible: boolean) => {
        this.setState({
            groupVisible,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <Popup
                        v2
                        trigger={<Button>Open</Button>}
                        triggerType="click"
                        visible={this.state.visible}
                        onVisibleChange={this.onVisibleChange}
                    >
                        <span className="overlay-demo">Hello World From Popup!</span>
                    </Popup>
                </div>
                <br />
                <div>
                    <Popup
                        v2
                        trigger={
                            <Button
                                style={{ marginRight: '50px' }}
                                ref={ref => {
                                    this.btn1 = ref;
                                }}
                            >
                                Paired Popup 1
                            </Button>
                        }
                        triggerType="click"
                        visible={this.state.groupVisible}
                        safeNode={[() => this.btn2, () => this.overlay2]}
                        onVisibleChange={this.onGroupVisibleChange}
                    >
                        <span
                            className="overlay-demo"
                            ref={ref => {
                                this.overlay1 = ref;
                            }}
                        >
                            Hello World From Popup!
                        </span>
                    </Popup>
                    <Popup
                        v2
                        trigger={
                            <Button
                                ref={ref => {
                                    this.btn2 = ref;
                                }}
                            >
                                Paired Popup 2
                            </Button>
                        }
                        triggerType="click"
                        visible={this.state.groupVisible}
                        safeNode={[() => this.btn1, () => this.overlay1]}
                        onVisibleChange={this.onGroupVisibleChange}
                    >
                        <span
                            className="overlay-demo"
                            ref={ref => {
                                this.overlay2 = ref;
                            }}
                        >
                            Hello World From Popup!
                        </span>
                    </Popup>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
