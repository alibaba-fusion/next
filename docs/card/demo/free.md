# 自定义卡片

- order: 5

与子组件的组合来自定义卡片样式

:::lang=en-us
# Free Mode

- order: 5

Combination with subcomponents to customize card styles

:::

---

````jsx
import { Card, Button } from '@alifd/next';

ReactDOM.render(
    <div>
        <Card
            className="free-card"
            free
        >
            <Card.Media style={{ height: 140 }} image="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
            <Card.BulletHeader title="Title" subTitle="Sub Title" extra={<Button type="primary" text>Link</Button>} />
            <Card.CollaspeContent contentHeight="auto">
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.
            </Card.CollaspeContent>
            <Card.Actions>
                <Button type="primary" key="action1" text>Action 1</Button>
                <Button type="primary" key="action2" text>Action 2</Button>
            </Card.Actions>
        </Card>

         <Card
            className="free-card"
            free
        >
            <Card.Media style={{ height: 140 }} image="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
            <Card.Header title="Title" subTitle="Sub Title" extra={<Button type="primary" text>Link</Button>} />
            <Card.Divider />
            <Card.Content>
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.
            </Card.Content>
            <Card.Actions>
                <Button type="primary" key="action1" text>Action 1</Button>
                <Button type="primary" key="action2" text>Action 2</Button>
            </Card.Actions>
        </Card>
         <Card
            className="free-card custom"
            free
        >
            <Card.Media image="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
            <div className="free-card-main">
                <Card.Header title="Title" subTitle="Sub Title" extra={<Button type="primary" text>Link</Button>} />
                <Card.Divider />
                <Card.Content>
                Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et.
                </Card.Content>
                <Card.Actions>
                    <Button type="primary" key="action1" text>Action 1</Button>
                    <Button type="primary" key="action2" text>Action 2</Button>
                </Card.Actions>
            </div>
        </Card>
    </div>
    , mountNode);
````

````css
.free-card {
    display: inline-block;
    width: 300px;
    vertical-align: top;
}
.free-card + .free-card {
    margin-left: 20px;
}

.free-card.custom {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 200px;
}

.free-card.custom .next-card-media {
    height: 100%;
    width: 200px;
    flex-shrink: 0;
}

.free-card-main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.free-card-main .next-card-content-container {
    flex: 1;
}

.free-card-main .next-card-actions {
    text-align: right;
}
````
