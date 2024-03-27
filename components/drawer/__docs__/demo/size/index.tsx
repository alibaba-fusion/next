import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Drawer } from '@alifd/next';

const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [width, setWidth] = useState(200);

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}>
                {' '}
                fixed 700{' '}
            </Button>
            <Drawer
                v2
                width={700}
                title="set width to 700"
                placement="right"
                visible={visible}
                onClose={() => setVisible(false)}
            >
                Start your business here by searching a popular product
            </Drawer>
            <Button type="primary" onClick={() => setVisible2(true)} style={{ marginLeft: 8 }}>
                {' '}
                auto width
            </Button>
            <Drawer
                v2
                width="auto"
                title="auto width"
                placement="right"
                visible={visible2}
                onClose={() => setVisible2(false)}
            >
                <div style={{ width: width }}>
                    Start your business here by searching a popular product
                    <br />
                    <br />
                    <Button type="primary" onClick={() => setWidth(width + 100)}>
                        larger width
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
