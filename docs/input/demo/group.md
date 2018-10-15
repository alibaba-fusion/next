# 输入框组合

- order: 11

Group 具有两边长度固定中间组件任意伸缩的能力。在Input中可以用addonBefore/addonAfter快速使用

:::lang=en-us

# Input Groups

- order: 11

Group has an ability that total lenght is definite and its inner input is  flexible.
:::
---

````jsx
import { Input, Select, Button } from '@alifd/next';


const select = (<Select aria-label="please select" >
    <option value="https">https</option>
    <option value="http">http</option>
</Select>);
const button = (<Button>search</Button>);

ReactDOM.render(<div>
    <Input.Group addonBefore={select} addonAfter={button}>
        <Input hasClear defaultValue="abc" style={{width: '100%'}} aria-label="please input" />
    </Input.Group>
    <br/><br/>
    <Input addonTextAfter=".com" addonBefore={select} aria-label="please input" />
</div>, mountNode);
````
