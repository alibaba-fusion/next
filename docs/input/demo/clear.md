# 清除按钮

- order: 3

通过设置 hasClear 添加清除按钮.

hint为水印按钮，和hasClear占用同一个地方配合使用

:::lang=en-us

# Clear Button

- order: 3

:::
---

````jsx
import { Input } from '@alifd/next';

const onChange = (value) => {
    console.log(value);
};
const onBlur = (e) => {
    console.log(e);
};

ReactDOM.render(
    <div>
        <Input
            hasClear
            defaultValue="clear by click"
            size="small"
            aria-label="input with config of hasClear" onChange={onChange} /><br/><br/>

        <Input
            hasClear
            defaultValue="2019-09-10 10:10:20"
            aria-label="input with config of hasClear"
            onChange={onChange}
            onBlur={onBlur}
            hint="calendar"/><br/><br/>

        <Input
            hasClear
            defaultValue="clear by click"
            size="large"
            aria-label="input with config of hasClear"
            onChange={onChange} /><br/><br/>
    </div>
    , mountNode);
````
