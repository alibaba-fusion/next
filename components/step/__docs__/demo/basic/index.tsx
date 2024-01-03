import React from 'react';
import ReactDOM from 'react-dom';
import { Step } from '@alifd/next';

const steps = [
    ['Step 1', 'Open the refrigerator door'],
    ['Step 2', 'Put the elephant in the refrigerator'],
    ['Step 3', 'Close the refrigerator door'],
].map((item, index) => (
    <Step.Item
        aria-current={index === 1 ? 'step' : null}
        key={index}
        title={item[0]}
        content={item[1]}
    />
));

ReactDOM.render(
    <div>
        <h3>Arrow</h3>
        <Step current={1} shape="arrow">
            {steps}
        </Step>

        <h3>Circle</h3>
        <Step current={1} stretch shape="circle">
            {steps}
        </Step>

        <h3>Circle(Horizontal content)</h3>
        <Step current={1} stretch shape="circle" labelPlacement="hoz">
            {steps}
        </Step>

        <h3>Dot</h3>
        <Step current={1} stretch shape="dot">
            {steps}
        </Step>
        <h3>Stretch</h3>
        <Step current={1} stretch shape="dot" labelPlacement="ver">
            <Step.Item title="步骤1" />
            <Step.Item title="步骤2" />
            <Step.Item title="步骤3" />
        </Step>
    </div>,
    mountNode
);
