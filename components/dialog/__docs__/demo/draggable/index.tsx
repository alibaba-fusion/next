import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog, Box } from '@alifd/next';
import Draggable from 'react-draggable';

class App extends React.Component {
    state = {
        visible: false,
        disabled: true,
        bounds: { left: 0, top: 100, bottom: 0, right: 0 },
    };

    draggleRef = React.createRef();

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = this.draggleRef.current.getBoundingClientRect();
        this.setState({
            bounds: {
                left: -targetRect.left + uiData.x,
                right: clientWidth - (targetRect.right - uiData.x),
                top: -targetRect.top + uiData.y,
                bottom: clientHeight - (targetRect.bottom - uiData.y),
            },
        });
    };

    toogleDisabled(disabled) {
        if (disabled === this.state.disabled) {
            return;
        }
        this.setState({ disabled });
    }

    render() {
        const { bounds, disabled, visible } = this.state;
        return (
            <div>
                <Button onClick={this.showModal}>Open Draggable Modal</Button>
                <Dialog
                    title={
                        <div
                            style={{ width: '100%', cursor: 'move' }}
                            onMouseOver={this.toogleDisabled.bind(this, false)}
                            onMouseOut={this.toogleDisabled.bind(this, true)}
                        >
                            Draggable Dialog
                        </div>
                    }
                    visible={visible}
                    onOk={this.handleCancel}
                    onClose={this.handleCancel}
                    v2
                    cache
                    dialogRender={modal => (
                        <Draggable
                            disabled={disabled}
                            bounds={bounds}
                            onStart={(event, uiData) => this.onStart(event, uiData)}
                        >
                            <div ref={this.draggleRef} style={{ margin: '0 auto' }}>
                                {modal}
                            </div>
                        </Draggable>
                    )}
                >
                    <p>use react-draggable to drag Dialog</p>
                    <br />
                    <p>use cache, so can save position when open again</p>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
