import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Icon } from '@alifd/next';

const textRender = percent => {
    if (percent === 100) {
        return <Icon type="select" size="medium" />;
    }
    return `${percent.toFixed(2)}%`;
};

ReactDOM.render(
    <div>
        {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <Progress
                key={index}
                percent={(value / 6) * 100}
                shape="circle"
                color={`hsl(${index * 60 + 60}, 90%, 50%)`}
                textRender={textRender}
            />
        ))}
        {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <Progress
                key={index}
                percent={(value / 6) * 100}
                shape="line"
                color={`hsl(${index * 60 + 60}, 90%, 50%)`}
                textRender={textRender}
            />
        ))}
    </div>,
    mountNode
);
