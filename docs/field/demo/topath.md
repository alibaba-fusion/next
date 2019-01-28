# 结构化解析

- order: 11

把 `init('obj.b')` 的数据转换成 `obj={obj:{b:'value'}}`；

把 `init('arr.0')` 的数据转换成 `obj={arr:['']}`；

:::lang=en-us
# Parse Array or Object

- order: 11

from `init('obj.b')` to `obj={obj:{b:'value'}}`；

from `init('arr.0')` to `obj={arr:['']}`；
:::
---


````jsx
import { Input, Button, Field } from '@alifd/next';



class App extends React.Component {
    field = new Field(this, {
        parseName: true
    });

    onGetValue() {
        console.log(this.field.getValues());
    }

    onSetValue() {
        this.field.setValues({
            obj: {
                b: 'b',
                c: 'c'
            },
            arr: ['first', 'second']
        });
    }

    render() {
        const { init, reset } = this.field;

        return (<div className="demo">
            <h3>Object transfer</h3>
            obj.b: <Input {...init('obj.b', {initValue: 'test1'})} /> &nbsp;
            obj.c: <Input {...init('obj.c', {initValue: 'test2'})} />

            <br/>

            <h3>Array transfer</h3>
            arr.0: <Input {...init('arr.0', {initValue: '0'})} /> &nbsp;
            arr.1: <Input {...init('arr.1', {initValue: '1'})} />
            <br/><br/>

            result:
            <pre>{JSON.stringify(this.field.getValues(), null, 2)}</pre>

            <br/><br/>

            <Button type="primary" onClick={this.onGetValue.bind(this)}>getValues</Button>
            <Button onClick={this.onSetValue.bind(this)}>setValues</Button>
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
