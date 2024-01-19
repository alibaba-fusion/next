import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Icon, Box } from '@alifd/next';

ReactDOM.render(
    <div>
        <Box direction="row" spacing={60}>
            <Progress percent={30} shape="circle" color="#AF5F3C" />
            <Progress percent={50} shape="circle" color="#E91E63" backgroundColor={'#00BCD4'} />
            <Progress
                percent={90}
                shape="circle"
                color="rgba(119,66,141, 0.9)"
                textRender={() => <Icon type="select" size="xl" />}
            />
        </Box>
        <br />
        <br />
        <Box direction="column" spacing={20}>
            <Progress percent={30} shape="line" color="rgb(208,16,76)" />
            <Progress percent={50} shape="line" color="#E91E63" backgroundColor={'#00BCD4'} />
            <Progress
                percent={90}
                shape="line"
                color="blue"
                textRender={() => <Icon type="select" size="medium" />}
            />
        </Box>
    </div>,
    mountNode
);
