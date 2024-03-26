import React from 'react';
import ReactDOM from 'react-dom';
import { Rating, Button } from '@alifd/next';

class Preview extends React.Component {
    state = { isPreview: false };

    render() {
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => this.setState({ isPreview: !this.state.isPreview })}
                >
                    切换预览
                </Button>
                <br />
                <br />
                <Rating
                    defaultValue={3.5}
                    isPreview={this.state.isPreview}
                    renderPreview={value => `Rating: ${value}`}
                />
            </div>
        );
    }
}

ReactDOM.render(<Preview />, mountNode);
