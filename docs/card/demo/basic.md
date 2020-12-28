# 基本

- order: 0

最简单的用法。

:::lang=en-us
# Basic

- order: 0

A simple card with title and sub-title.

:::

---

````jsx
import { Card, Button } from '@alifd/next';

const commonProps = {
    subTitle: 'SubTitle',
    extra: <Button model="text" type="primary">Link</Button>
};

ReactDOM.render(<div>
    <Card free style={{width: 300}}>
        <Card.Header title="Simple Card" {...commonProps}/>
        <Card.Content>
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.
        </Card.Content>
    </Card>
</div>, mountNode);
````

````css
.card-placeholder {
    height: 200px;
}
````
