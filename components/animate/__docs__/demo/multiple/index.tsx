import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from '@alifd/next';

class TodoList extends React.Component {
    state = { items: ['hello', 'world', 'click', 'me'] };

    handleAdd() {
        this.setState({
            items: [
                ...this.state.items,
                // eslint-disable-next-line no-alert
                window.prompt('Enter some text'),
            ],
        });
    }

    handleRemove(i: number) {
        const newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        return (
            <div className="totolist-container">
                <Animate
                    animationAppear
                    animation="fade"
                    className="todo-list"
                    singleMode={false}
                    beforeAppear={() => console.log('before appear')}
                    onAppear={() => console.log('appear')}
                    afterAppear={() => console.log('after appear')}
                    beforeEnter={() => console.log('before enter')}
                    onEnter={() => console.log('enter')}
                    afterEnter={() => console.log('after enter')}
                    beforeLeave={() => console.log('before leave')}
                    onLeave={() => console.log('leave')}
                    afterLeave={() => console.log('after leave')}
                >
                    {this.state.items.map((item: string, i: number) => (
                        <div key={item}>
                            {item}
                            <button onClick={() => this.handleRemove(i)}>&times;</button>
                        </div>
                    ))}
                </Animate>
                <button onClick={() => this.handleAdd()}>Add Item</button>
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, mountNode);
