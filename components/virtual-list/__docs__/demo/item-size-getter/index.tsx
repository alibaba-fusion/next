import React, { type ReactElement, createRef } from 'react';
import ReactDOM from 'react-dom';
import { VirtualList } from '@alifd/next';

const dataSource: Array<ReactElement> = [];

function generateLi(index: number) {
    if (index % 3 === 0) {
        return (
            <li
                key={`key-${index}`}
                style={{ lineHeight: '30px', background: '#5f83ff', color: '#fff' }}
            >
                key-{index}
            </li>
        );
    } else {
        return (
            <li key={`key-${index}`} style={{ lineHeight: '20px' }}>
                key-{index}
            </li>
        );
    }
}
function generateData(len: number) {
    for (let i = 0; i < len; i++) {
        dataSource.push(generateLi(i));
    }
}

class App extends React.Component {
    virtualListRef: React.RefObject<InstanceType<typeof VirtualList>> = createRef();

    state = {
        initial: 20,
        dataSource: generateData(1000),
    };

    componentDidMount() {
        setTimeout(() => {
            const instance =
                this.virtualListRef.current && this.virtualListRef.current.getInstance();
            instance && instance.scrollTo(50);
        }, 200);
    }

    getHeight(index: number) {
        return index % 3 === 0 ? 30 : 20;
    }

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
                    <VirtualList
                        ref={this.virtualListRef}
                        jumpIndex={this.state.initial}
                        itemSizeGetter={this.getHeight.bind(this)}
                    >
                        {dataSource}
                    </VirtualList>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
