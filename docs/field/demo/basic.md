# 基本

- order: 0

`getValue` `setValue` `reset` 的使用

:::lang=en-us
# basic

- order: 0

usage of `getValue` `setValue` `reset`
:::
---


````jsx
import { Input, Button, Field } from '@alifd/next';



class App extends React.PureComponent {
    field = new Field(this, {forceUpdate: true});

    onGetValue() {
        console.log(this.field.getValue('input'));
    }

    render() {
        const { init, setValue, reset } = this.field;

        return (<div className="demo">
            <Input {...init('input', {initValue: 'test'})} />
            <br/><br/>
            <Button type="primary" onClick={this.onGetValue.bind(this)}>getValue</Button>
            <Button type="primary" onClick={() => setValue('input', 'set me by click')}>setValue</Button>
            <Button onClick={() => reset()}>reset</Button>
        </div>);
    }
}


ReactDOM.render(<App/>, mountNode);

````

````css
.demo .next-btn {
    margin-right: 5px;
}
````
