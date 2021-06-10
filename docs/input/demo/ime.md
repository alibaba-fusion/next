# 中文输入法

- order: 12

中文输入完成的时候才会触发 onChange

:::lang=en-us

# ime

- order: 0

trigger onChange after IME finished

:::
---


````jsx
import { Input } from '@alifd/next';

function onChange(v) {
    console.log(v);
}

function Demo(props) {
    const [value, setValue] = React.useState('');
    const handleChange = (value) => {
        console.log(value);
        setValue(value);
    }

    return <div>
        <Input value={value} onChange={handleChange} composition placeholder="尝试输入中文" /> <br/><br/>
        <Input.TextArea value={value} onChange={handleChange} composition placeholder="尝试输入中文" />
    </div>
}

ReactDOM.render(<Demo />, mountNode);
````
