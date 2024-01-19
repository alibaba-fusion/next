import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="list-item">
                    <Box spacing={20}>
                        <div className="box height-30" />
                        <div className="box height-30" />
                        <div className="box height-30" />
                        <div className="box height-30" />
                    </Box>
                </div>

                <div className="list-item">
                    <Box spacing={20} direction="row">
                        <div className="box width-30 height-30" />
                        <div className="box width-30 height-30" />
                        <div className="box width-30 height-30" />
                        <div className="box width-30 height-30" />
                    </Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
