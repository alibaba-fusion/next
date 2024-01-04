import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Radio } from '@alifd/next';

function onChange(key) {
    console.log(key);
}

const Demo = () => {
    const [shape, setShape] = React.useState('pure');

    return (
        <div>
            shape:{' '}
            <Radio.Group shape="button" value={shape} onChange={setShape}>
                <Radio value="pure">pure</Radio>
                <Radio value="wrapped">wrapped</Radio>
                <Radio value="text">text</Radio>
                <Radio value="capsule">capsule</Radio>
            </Radio.Group>
            <br />
            <br />
            <Tab shape={shape} onChange={onChange}>
                <Tab.Item key="home" title="Home">
                    This is home page
                </Tab.Item>
                <Tab.Item key="document" title="Document">
                    This is document page
                </Tab.Item>
                <Tab.Item key="api" title="API">
                    This is api page
                </Tab.Item>
                <Tab.Item key="repo" title="Repo">
                    This is repo link
                </Tab.Item>
            </Tab>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
