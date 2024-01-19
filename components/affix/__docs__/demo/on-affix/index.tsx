import React from 'react';
import ReactDOM from 'react-dom';
import { Affix, Button } from '@alifd/next';

class Demo extends React.Component<unknown, { affixed: boolean }> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            affixed: false,
        };
    }

    onAffix = (affixed: boolean) => {
        this.setState({
            affixed,
        });
    };

    render() {
        const state = this.state;

        return (
            <div>
                <Affix onAffix={this.onAffix} style={{ display: 'inline-flex' }}>
                    <Button type="primary">
                        {state.affixed ? 'Affixed Button' : 'Unaffixed Button'}
                    </Button>
                </Affix>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
