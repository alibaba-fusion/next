import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Step, Icon } from '@alifd/next';

ReactDOM.render(
    <div>
        <Step current={1}>
            <Step.Item title="Step 1" />
            <Step.Item
                title={<span style={{ color: 'red' }}>In Progress</span>}
                content={<span style={{ color: 'red' }}>download image failed</span>}
                itemRender={(_index, _status) => {
                    return (
                        <div
                            className="next-step-item-node-circle"
                            style={{ background: 'transparent', borderColor: 'red' }}
                        >
                            <Icon style={{ color: 'red' }} type="close" />
                        </div>
                    );
                }}
            />
            <Step.Item title="Step 3" />
            <Step.Item title="Step 4" />
        </Step>
    </div>,
    mountNode
);
