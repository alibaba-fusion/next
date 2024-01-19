import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="list-item">
                    <Box direction="row" align="center" padding={20} className="box">
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                        <div className="box-180-50" />
                    </Box>
                </div>
                <div className="list-item">
                    <Box direction="row">
                        <Box className="box-180-50 box" />
                        <Box className="box-180-50 box" />
                        <Box margin={[0, 20]} className="box-180-50 box" />
                        <Box className="box-180-50 box" />
                    </Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
