import React from 'react';
import ReactDOM from 'react-dom';
import { Step, Icon } from '@alifd/next';

const steps = ['one', 'two', 'three', 'four'];

function itemRender(index) {
    return (
        <div className="custom-node1">
            <span>{index + 1}</span>
        </div>
    );
}

function itemRender2(index, status) {
    return (
        <div className="custom-node2">
            {status === 'finish' ? <Icon type="success" /> : <span>{index + 1}</span>}{' '}
        </div>
    );
}

ReactDOM.render(
    <div className="fusion-demo">
        <div className="fusion-demo-item">
            <Step current={2} animation={false} itemRender={itemRender}>
                {steps.map(item => (
                    <Step.Item key={item} title={item} />
                ))}
            </Step>
        </div>

        <div className="fusion-demo-item">
            <Step current={2} animation={false} itemRender={itemRender2}>
                {steps.map(item => (
                    <Step.Item key={item} title={item} />
                ))}
            </Step>
        </div>
    </div>,
    mountNode
);
