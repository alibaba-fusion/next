# 定制弹窗布局

- order: 7

简单

:::lang=en-us
# custom popup render

- order: 0

simple usage
:::
---

````jsx
import { Select, Divider, Icon } from '@alifd/next';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};
const onBlur = function (e) {
    console.log(/onblur/,e);
};

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

ReactDOM.render(<Select id="basic-demo" onChange={onChange} menuProps={{
    header: <div  style={{padding: '0 4px', textAlign:'center'}} >
                <div>custom header</div>
                <Divider style={{marginTop:0, marginBottom: 4}}/>
            </div>,
    footer: <div  style={{padding: '0 4px', textAlign:'center'}}>
                <Divider style={{marginBottom:0, marginTop: 4}}/>
                <div>custom footer</div>
            </div>,
}}
>
    <Option value="jack">Jack</Option>
    <Option value="frank">Frank</Option>
    <Option value="hugo">Hugo</Option>
</Select>, mountNode);
````
