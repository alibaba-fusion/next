import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from '@alifd/next';

class Demo extends React.Component {
    state = { visible: true };

    handleToggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle visible</button>
                <Animate
                    animation={{
                        enter: 'my-zoom-in',
                        leave: 'my-zoom-out',
                    }}
                >
                    {this.state.visible ? <div className="basic-demo">Next Animate</div> : null}
                </Animate>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
