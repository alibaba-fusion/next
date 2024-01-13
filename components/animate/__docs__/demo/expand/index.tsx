import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from '@alifd/next';

class Demo extends React.Component<any, any> {
    [key: string]: any;
    constructor(props: any) {
        super(props);
        this.state = { expand: true };
        [
            'beforeEnter',
            'onEnter',
            'afterEnter',
            'beforeLeave',
            'onLeave',
            'afterLeave',
            'handleToggle',
        ].forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand,
        });
    }

    beforeEnter(node: HTMLElement) {
        this.height = node.offsetHeight;
        node.style.height = '0px';
    }

    onEnter(node: HTMLElement) {
        node.style.height = `${this.height}px`;
    }

    afterEnter(node: HTMLElement) {
        this.height = null;
        node.style.setProperty('height', null);
    }

    beforeLeave(node: HTMLElement) {
        node.style.height = `${this.height}px`;
    }

    onLeave(node: HTMLElement) {
        node.style.height = '0px';
    }

    afterLeave(node: HTMLElement) {
        node.style.setProperty('height', null);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle expand</button>
                <Animate
                    animation="expand"
                    beforeEnter={this.beforeEnter}
                    onEnter={this.onEnter}
                    afterEnter={this.afterEnter}
                    beforeLeave={this.beforeLeave}
                    onLeave={this.onLeave}
                    afterLeave={this.afterLeave}
                >
                    {this.state.expand ? <div className="notice"></div> : null}
                </Animate>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
