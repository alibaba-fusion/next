# 自定义返回值

- order: 2

当组件返回的数据和最终期望提交的格式不一致的时候，可以使用 `getValueFormatter` 和 `setValueFormatter` 两个函数做转换。

比如 switch 组件期望上报 0/1, date-picker 组件期望上报 YYYY-MM-DD 这种字符串格式

:::lang=en-us
# custom event value

- order: 2

eg: you want get 0/1 from switch, or YYYY-MM-DD string from date-picker, you can use `getValueFormatter` 和 `setValueFormatter`

:::
---


````jsx
import { Field, DatePicker, Switch } from '@alifd/next';
import moment from 'moment';

class App extends React.Component {

    field = new Field(this);

    render() {
        const init = this.field.init;

        return (<div>
            <Switch {...init('switch', { 
                getValueFormatter: (value) => value ? 1 : 0,
                setValueFormatter: (value) => value === 1
                })}/>
            <br/>
            <DatePicker {...init('time', { 
                getValueFormatter: (value) => value.format('YYYY-MM-DD'),
                setValueFormatter: (value) => moment(value, 'YYYY-MM-DD')
                })} />
            <br/>
            <pre style={{marginTop: 8}}>{JSON.stringify(this.field.getValues(), null, 2)}</pre>
        </div>);
    }
}


ReactDOM.render(<App/>, mountNode);
````
