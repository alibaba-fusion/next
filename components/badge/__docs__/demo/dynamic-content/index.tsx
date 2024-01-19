import React from 'react';
import ReactDOM from 'react-dom';
import { Badge, Button, Icon } from '@alifd/next';

const ButtonGroup = Button.Group;

class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 0,
            show: true,
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    increase() {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    decrease() {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    }

    onClick() {
        this.setState({
            show: !this.state.show,
        });
    }

    render() {
        return (
            <div>
                <div className="change-count">
                    <Badge count={this.state.count}>
                        <a href="#" className="head-example">
                            <span className="next-sr-only">unread messages</span>
                        </a>
                    </Badge>
                    <Badge count={this.state.count} showZero>
                        <a href="#" className="head-example">
                            <span className="next-sr-only">unread messages</span>
                        </a>
                    </Badge>
                    <ButtonGroup>
                        <Button aria-label="add" onClick={this.increase}>
                            <Icon type="add" />
                        </Button>
                        <Button aria-label="minus" onClick={this.decrease}>
                            <Icon type="minus" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Badge dot={this.state.show}>
                        <a href="#" className="head-example"></a>
                    </Badge>
                    <Button onClick={this.onClick}>Toggle Display</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
