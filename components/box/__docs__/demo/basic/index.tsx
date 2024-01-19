import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="list-item">
                    <Box spacing={20}>
                        <div className="border-box height-30" />
                        <div className="border-box height-30" />
                        <div className="border-box height-30" />
                        <div className="border-box height-30" />
                    </Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
