import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Button, Step, Radio } from '@alifd/next';

const Step1Content = () => {
    const [conditions, setconditions] = useState([]);
    const createNewSelectItem = () => {
        const newType = {
            type: 'null',
            fieldName: 'null',
        };
        const newConditions = [...conditions, newType];
        setconditions(newConditions);
    };
    return (
        <div>
            {conditions &&
                conditions.length > 0 &&
                conditions.map((item, index) => (
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
const CreateDemo = () => {
    const [conditions, setconditions] = useState([]);
    const [direction, setDirection] = useState('ver');
    const createNewSelectItem = () => {
        const newType = {
            type: 'null',
            fieldName: 'null',
        };
        const newConditions = [...conditions, newType];
        setconditions(newConditions);
    };
    console.log('direction: ', direction);
    return (
        <div>
            <Radio.Group
                style={{ padding: 30 }}
                shape="button"
                value={direction}
                onChange={setDirection}
            >
                <Radio value={'hoz'}>hoz</Radio>
                <Radio value={'ver'}>ver</Radio>
            </Radio.Group>
            <Step current={1} direction={direction} stretch animation style={{ marginTop: 30 }}>
                <Step.Item title={'What would youlike to test?'} content={'test'} />
                <Step.Item title={'What would youlike to test?'} content={<Step1Content />} />
                <Step.Item title={'A bit more on the background'} content={'test'} />
            </Step>
        </div>
    );
};
ReactDOM.render(<CreateDemo />, mountNode);
