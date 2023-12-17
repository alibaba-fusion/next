# 宽高

- order: 5

可以通过 width 设置容器宽度，或者设置 width=auto 自适应内容宽度

:::lang=en-us
# Size

- order: 0

First drawer
:::
---

````jsx
import { useState } from 'react';
import { Button, Drawer } from '@alifd/next';

const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [width, setWidth] = useState(200);

    return (
        <div>
            <Button type="primary" onClick={setVisible}> fixed 700 </Button>
            <Drawer
                v2
                width={700}
                title="set width to 700"
                placement="right"
                visible={visible}
                onClose={() => setVisible(false)}>
                Start your business here by searching a popular product
            </Drawer>
            <Button type="primary" onClick={setVisible2} style={{marginLeft: 8}}> auto width</Button>
            <Drawer
                v2
                width="auto"
                title="auto width"
                placement="right"
                visible={visible2}
                onClose={() => setVisible2(false)}>
                <div style={{width: width}}>
                    Start your business here by searching a popular product
                    <br/><br/>
                    <Button type="primary" onClick={() => setWidth(width + 100)}>larger width</Button>
                </div>
            </Drawer>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
````
