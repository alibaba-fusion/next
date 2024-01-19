import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="list-item">
                    <Box direction="row" align="center" style={{ height: 90 }}>
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                    </Box>
                </div>
                <div className="list-item">
                    <Box direction="row" justify="center">
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                    </Box>
                </div>

                <div className="list-item">
                    <Box direction="row" justify="center" padding={20}>
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                        <Box className="box-180-50" />
                    </Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
