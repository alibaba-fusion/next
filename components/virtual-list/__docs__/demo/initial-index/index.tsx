import React, { type ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { VirtualList } from '@alifd/next';

const dataSource: Array<ReactElement> = [];

function generateLi(index: number) {
    return (
        <li key={`key-${index}`} style={{ lineHeight: '20px' }}>
            key-{index}
        </li>
    );
}
function generateData(len: number) {
    for (let i = 0; i < len; i++) {
        dataSource.push(generateLi(i));
    }
}

class App extends React.Component {
    state = {
        initial: 50,
        dataSource: generateData(1000),
    };
    onClick() {
        this.setState({
            initial: this.state.initial + 20,
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>jump to {this.state.initial + 20}</button>
                <br />
                <br />
                <div className={'virtual-box'}>
                    <VirtualList ref="virtual" jumpIndex={this.state.initial}>
                        {dataSource}
                    </VirtualList>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
