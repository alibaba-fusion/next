import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Step, Radio } from '@alifd/next';
import type { StepDirection } from '../../../types';

const Step1Content = () => {
    const [conditions, setconditions] = useState<number[]>([]);
    const createNewSelectItem = () => {
        setconditions(pre => pre.concat(1));
    };
    return (
        <div>
            {conditions &&
                conditions.length > 0 &&
                conditions.map((_item, index) => (
                    <div
                        key={`step-content-${index}`}
                        style={{
                            width: '100%',
                            maxWidth: 200,
                            height: 20,
                            background: '#2196f3',
                            margin: '10px 0',
                        }}
                    />
                ))}
            <Button onClick={createNewSelectItem}>add new div</Button>
        </div>
    );
};

const App = () => {
    const [direction, setDirection] = useState<StepDirection>('ver');
    return (
        <div>
            <Radio.Group
                style={{ padding: 30 }}
                shape="button"
                value={direction}
                onChange={(value: StepDirection) => setDirection(value)}
            >
                <Radio value="hoz">hoz</Radio>
                <Radio value="ver">ver</Radio>
            </Radio.Group>
            <Step current={1} direction={direction} stretch animation style={{ marginTop: 30 }}>
                <Step.Item title={'What would youlike to test?'} content={'test'} />
                <Step.Item title={'What would youlike to test?'} content={<Step1Content />} />
                <Step.Item title={'A bit more on the background'} content={'test'} />
            </Step>
        </div>
    );
};

ReactDOM.render(<App />, mountNode);
