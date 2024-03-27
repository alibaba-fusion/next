import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;
ReactDOM.render(
    <div>
        <span id="radio-a11y">Programming language :</span>
        <RadioGroup aria-labelledby="radio-a11y">
            <Radio id="python" value="python">
                python
            </Radio>
            <Radio id="java" value="java">
                java
            </Radio>
            <Radio id="c" value="c">
                c
            </Radio>
        </RadioGroup>
    </div>,
    mountNode
);
