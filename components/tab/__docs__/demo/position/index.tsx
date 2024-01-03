import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Radio } from '@alifd/next';

const Demo = () => {
    const [tabPosition, setTabPosition] = React.useState('top');

    return (
        <div>
            Position:{' '}
            <Radio.Group shape="button" value={tabPosition} onChange={setTabPosition}>
                <Radio value="top">top</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
                <Radio value="right">right</Radio>
            </Radio.Group>
            <br />
            <br />
            <Tab tabPosition={tabPosition} shape="wrapped" contentClassName="custom-tab-content">
                <Tab.Item title="Tab 1" key="1">
                    Tab 1 Content
                </Tab.Item>
                <Tab.Item title="Tab 2" key="2">
                    Tab 2 Content
                </Tab.Item>
                <Tab.Item title="Tab 3" key="3">
                    Tab 3 Content
                </Tab.Item>
            </Tab>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
