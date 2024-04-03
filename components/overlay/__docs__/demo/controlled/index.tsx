import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';
import type { PopupProps } from '@alifd/next/lib/overlay/types';
import type { ButtonProps } from '@alifd/next/lib/button';

const { Popup } = Overlay;

interface DemoState {
    visible?: boolean;
    groupVisible?: boolean;
}

class Demo extends React.Component<PopupProps, DemoState> {
    btn1: ButtonProps;
    btn2: ButtonProps;
    overlay1: HTMLSpanElement;
    overlay2: HTMLSpanElement;

    constructor(props: PopupProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

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
                                    this.btn1 = ref as ButtonProps;
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
                                this.overlay1 = ref as HTMLSpanElement;
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
                                    this.btn2 = ref as ButtonProps;
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
                                this.overlay2 = ref as HTMLSpanElement;
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
