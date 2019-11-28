# 多媒体内容

- order: 4

下面是一个使用图像来增强内容的卡片示例。

:::lang=en-us
# Media Content

- order: 4

Here is an example of a card that uses images to enhance content.

:::

---

````jsx
import { Card, Button } from '@alifd/next';

ReactDOM.render(
    <Card
        className="media-card"
        media={<img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />}
        contentHeight="auto"
        title="Title"
        subTitle="Sub Title"
        extra={[
            <Button type="primary" key="action1" text>More</Button>
        ]}
        actions={[
            <Button type="primary" key="action1" text>Action 1</Button>,
            <Button type="primary" key="action2" text>Action 2</Button>
        ]}
    >
        Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.

    </Card>
    , mountNode);
````

````css
.media-card {
    width: 300px;
}

.custom-card p {
    color: #999;
}
````
